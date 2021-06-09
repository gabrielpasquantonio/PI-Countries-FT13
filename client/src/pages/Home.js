import Header from "../components/Header";
import Countries from '../components/Countries'
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import logo from '../assets/colombo.png'
import axios from "axios"
import { SET_COUNTRIES, SET_COUNTRIENAME,SEARCH_COUNTRIES} from "../actionsNames";


export function searchCountry(countries) {
  return (dispatch) => {
     axios.get(`http://localhost:3001/countries?name=%22${countries}%22`).then(response => {console.log(response.data)
       dispatch({ type: SEARCH_COUNTRIES, payload: response.data })
     }).catch(error => {
       if(error.response?.status !== 404) alert("Something is wrong 😅")
       dispatch({ type: SEARCH_COUNTRIES, payload: null })
     })
   }
 }
 

function Home() {
  const [total, setTotal] = useState(0);
  const [notFound,setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  const [countrie, setCountries] = useState([]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return ;
    }
 
    setNotFound(false);
    setSearching(true);
    const result = await searchCountry(pokemon);
    if (!result) {
      setNotFound(true);
    
      return;
    } else {
      setCountries([result]);
      //setPage(0);
      //setTotal(1);
    }

    setSearching(false);
  };
  

  return (
    <div>
      <Header />
      <SearchBar onSearch={onSearch} />
      {notFound ? (
            <Div className="not-found-text">
              <h1>Sorry, Country not found! </h1>
              <Img src={logo} alt="loading..." />
            </Div>
          ) : (
      <Countries/>
      )}
    </div>
  );
}


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
;
  }
`;

const Img = styled.img`
@media (max-width: 768px) {
    width: 80%;
  }
 
`;
export default Home;
