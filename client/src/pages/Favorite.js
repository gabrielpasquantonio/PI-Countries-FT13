import Header from '../components/Header'
import React,{useState,useContext,useEffect} from 'react'
import styled from "styled-components";
import Countries from '../components/Countries';
import Pagination from "../components/Pagination";
import FavoriteContext from "../context/favoritesContext";
import { useDispatch, useSelector } from "react-redux";
import {searchCountry} from "../utils"

function Favorite() {
    const {favoriteCountry,updateFavoriteCountry}=useContext(FavoriteContext);
    const [loading, setLoading] = useState(true);
    const [country,setCountry] = useState([])
    const fetchCountries = async () => {
        
        try {
          setLoading(true);
          
          
          const promises = favoriteCountry.map(async (country) => {
            return await searchCountry(country);
          });
         
          
          var results = await Promise.all(promises);
         

         
          //console.log(pokemons)
          setCountry(results);
          setLoading(false);
          
          //setNotFound(false);
        } catch (err) {}
      };
    
    useEffect(() => {
        fetchCountries()
      }, [favoriteCountry]);


    return (
        <div>
        <Header/> 
       <Countries countries={country}
       favorite={true}
       />
        </div>
    )
}

export default Favorite
