import Header from "../components/Header";
import PhoneHeader from "../components/PhoneHeader";
import Footer from "../components/Footer";
import Countries from "../components/Countries";
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/colombo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, setSearching, setTotall } from "../redux/actions";
import Filter from "../components/Filter";

const searchCountrry = async (country) => {
  try {
    let url = `http://localhost:3001/countries?name=%22${country}%22`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

function Home() {
  const dispatch = useDispatch();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const countries = useSelector((state) => state.countries);
  const searching = useSelector((state) => state.searching);
  const limit = useSelector((state) => state.limit);
  const page = useSelector((state) => state.page);

  // with this limit we change the limit of countries shown per page
  var pageInfo = limit * page;

  useEffect(() => {
    dispatch(getAllCountries(limit, limit * page));
  }, [page]);

  useEffect(() => {
    dispatch(getAllCountries(limit, limit * page));
    dispatch(setSearching(true));
    dispatch(setTotall(10));
  }, []);

  const onSearch = async (country) => {
    //setLoading(true)
    console.log("this is the data " + country);
    if (!country) {
      setNotFound(false);
      setData(null);
      return;
    }
    setLoading(true);
    const result = await searchCountrry(country);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setNotFound(false);
      setData(result);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <PhoneHeader />
      <SearchBar onSearch={onSearch} />

      {notFound ? (
        <Div className="not-found-text">
          <H1>Sorry, Country not found! </H1>
          <Img src={logo} alt="loading..." />
        </Div>
      ) : (
        <>
          <Filter
            limit={limit}
            pageInfo={pageInfo}
            page={page}
            searching={searching}
          />
          <Countries
            data={data}
            countries={countries}
            loading={loading}
            page={page}
          />
        </>
      )}
      <Footer />
    </div>
  );
}

const H1 = styled.h1`
  @media (max-width: 322px) {
    font-size: 10px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    font-size: 50px;
  }
  margin-bottom: 20px;
`;

const Div = styled.div`
  text-align: center;
  font-size: 1.25rem;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    display: flex;
  }
`;

const Img = styled.img`
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export default Home;
