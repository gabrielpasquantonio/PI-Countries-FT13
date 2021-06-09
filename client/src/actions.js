import axios from "axios";
import { SET_COUNTRIES, SET_COUNTRIENAME } from "./actionsNames";

export function getAllCountries() {
  return (dispatch) => {
    axios.get("http://localhost:3001/countries").then(response => {console.log(response.data)
      dispatch({ type: SET_COUNTRIES, payload: response.data })
    })
  };
  
}
export function getCountry(id) {
  
  return (dispatch) => {
    axios.get(`http://localhost:3001/countries/${id}`).then(response => {console.log(response.data)
      dispatch({ type: SET_COUNTRIENAME, payload: response.data })
    }).catch(error => {
      if(error.response?.status !== 404) alert("Something is wrong 😅")
      dispatch({ type: SET_COUNTRIENAME, payload: null })
    })
  }
}

export function clearUser() {
  return {
    type: SET_COUNTRIENAME, payload: undefined
  }
}