import Header from "../components/Header";
import Countries from "../components/Countries";
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/colombo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../redux/actions";
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
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [searching, setSearching] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  var limit = 30; // with this limit we change the limit of countries shown per page
  var pageInfo = limit * page;

  useEffect(() => {
    dispatch(getAllCountries((limit = 30), limit * page));
    setTotal(Math.ceil(250 / limit));
  }, [page]);

  

  const onSearch = async (country) => {
    //setLoading(true)
    console.log(data);
    if (!country) {
      setNotFound(false);
      setData(null);
      return;
    }
    setLoading(true);

    const result = await searchCountrry(country);
    console.log(result);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setData(result);
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={onSearch} />

      {notFound ? (
        <Div className="not-found-text">
          <H1>Sorry, Country not found! </H1>
          <Img src={logo} alt="loading..." />
        </Div>
      ) : (
        <>
          <Filter limit={limit} pageInfo={pageInfo} page={page} />
          <Countries
            data={data}
            countries={countries}
            loading={loading}
            page={page}
            setPage={setPage}
            total={total}
           
          />
        </>
      )}
    </div>
  );
}


const H1 = styled.h1`
 @media (max-width: 322px) {
    font-size:10px;
  }
 @media (max-width: 768px) {
    font-size:30px;
  }
  @media (max-width: 1200px) and (min-width: 769px) {
    font-size:50px;
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
