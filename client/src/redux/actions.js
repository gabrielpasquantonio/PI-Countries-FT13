import axios from "axios";
import {
  SET_COUNTRIES,
  SET_COUNTRIENAME,
  SEARCH_COUNTRIES,
  CREATE_ACTIVITY
} from "./actionsNames";


export function getAllCountries(limit = 10, offset = 0) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries?limit=${limit}&offset=${offset}`)
      .then((response) => {
        
        dispatch({ type: SET_COUNTRIES, payload: response.data });
      });
  };
}
export function getCountry(id) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: SET_COUNTRIENAME, payload: response.data });
      })
      .catch((error) => {
        if (error.response?.status !== 404) alert("Something is wrong 😅");
        dispatch({ type: SET_COUNTRIENAME, payload: null });
      });
  };
}

export function searchCountry(countries) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries?name=%22${countries}%22`)
      .then((response) => {
        dispatch({ type: SEARCH_COUNTRIES, payload: response.data });
        console.log("essa eh a resposta de actions" +response.data)
      })
      .catch((error) => {
        if (error.response?.status !== 404) alert("Something is wrong 😅");
        dispatch({ type: SEARCH_COUNTRIES, payload: null });
      });
  };
}

export function createActivity(form) {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/activity`, form)
      .then((response) => {
        console.log(response.data);
        dispatch({ type: CREATE_ACTIVITY, payload: response.data });
      })
      .catch((error) => {
        if (error.response?.status !== 404) alert("Something is wrong 😅");
        dispatch({ type: CREATE_ACTIVITY, payload: null });
      });
  };
}

export function clearUser() {
  return {
    type: SET_COUNTRIENAME,
    payload: undefined,
  };
}
