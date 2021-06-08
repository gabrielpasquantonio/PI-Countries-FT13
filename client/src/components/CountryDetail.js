
import { useDispatch, useSelector } from "react-redux";
import { getCountry,clearUser} from "../actions";
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'



function CountryDetail() {
  const dispatch = useDispatch();
  const countryDetail = useSelector(state => state.countryName)
const {id} = useParams()

console.log(countryDetail)
useEffect(() => {
    dispatch(getCountry(id))
    return () => {
      dispatch(clearUser())
    }
  }, [dispatch, id])
  console.log(getCountry(id))
  if (countryDetail === null) {
    return (
      <Div>Country not found</Div>
    )
  } else if (countryDetail === undefined) {
    return (<Div>Loading...</Div>)
  } else {
    return (<Div>
      <h1>Name:</h1>
{countryDetail.map(country => (
 <h1>{country.name}</h1>
              ))}

      
    </Div>)
  }
}


const Div = styled.div`
margin-top: 100px;
color: white;
display: flex;
justify-content: space-between;

`;
export default CountryDetail;

