import Header from "../components/Header";
import React, { useState, useContext, useEffect } from "react";
import Countries from "../components/Countries";
import FavoriteContext from "../context/favoritesContext";
import styled from "styled-components";
import { searchCountry } from "../utils";
import PhoneHeader from "../components/PhoneHeader";
import Footer from "../components/Footer";

function Favorite() {
  const { favoriteCountry, updateFavoriteCountry } =
    useContext(FavoriteContext);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);
  const fetchCountries = async () => {
    try {
      setLoading(true);

      const promises = favoriteCountry.map(async (country) => {
        return await searchCountry(country);
      });

      var results = await Promise.all(promises);

      setCountry(results);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchCountries();
  }, [favoriteCountry]);

  return (
    <div>
      <Header />
      <PhoneHeader />{" "}
      {favoriteCountry >= 0 ? (
        <Div>
          <H1>You don't have any ❤️ Country...</H1>
        </Div>
      ) : (
        <>
          <Countries countries={country} favorite={true} />
        </>
      )}
      <Footer />
    </div>
  );
}

const Div = styled.div`
  top: 785px;
  color: white;
  margin-top: 100px;
  padding: 20px;
  display: flex;
`;

const H1 = styled.h1`
  padding: 20px;
`;
export default Favorite;
