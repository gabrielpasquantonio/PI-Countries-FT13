import { filterData, order,search,total } from "../utils";
import axios from "axios";
import {
  SET_COUNTRIES,
  SET_COUNTRIENAME,
  SEARCH_COUNTRIES,
  CREATE_ACTIVITY,
  FILTER_COUNTRY,
  ORDER_COUNTRY,
  SET_SEARCHING,
  SET_TOTAL,
  SET_LIMIT,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  SET_PAGE
} from "./actionsNames";


export function getAllCountries(limit = 30, offset = 0) {
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
        dispatch({ type: CREATE_ACTIVITY, payload: response.data });
      })
      .catch((error) => {
        if (error.response?.status !== 404) alert("Something is wrong 😅");
        dispatch({ type: CREATE_ACTIVITY, payload: null });
      });
  };
}


export function filteredData(data, option) {
  return async function (dispatch) {
    filterData(data, option).then((data) =>
      dispatch({ type: FILTER_COUNTRY, payload: data })
    );
  };
}



export function orderedData(data, option) {
  return async function (dispatch) {
    order(data, option).then((data) =>
      dispatch({ type: ORDER_COUNTRY, payload: data })
    );
    // falta el reducers, componentes, filtrado y pagina detalle, formulario controlado, el temperamento tmabien
  };
}




export function setSearching(data) {
  return async function (dispatch) {
    search(data).then((data) =>
      dispatch({ type: SET_SEARCHING, payload: data })
    );
    // falta el reducers, componentes, filtrado y pagina detalle, formulario controlado, el temperamento tmabien
  };
}

export function setTotall(data) {
  return async function (dispatch) {
    total(data).then((data) =>
      dispatch({ type: SET_TOTAL, payload: data })
    );
    // falta el reducers, componentes, filtrado y pagina detalle, formulario controlado, el temperamento tmabien
  };
}

export function clearUser() {
  return {
    type: SET_COUNTRIENAME,
    payload: undefined,
  };
}

export function setLimit(limit) {
  return {
    type: SET_LIMIT,
    payload: limit,
  };
}

export function previousPage(page) {
  return  {
   
    
     type: PREVIOUS_PAGE, payload: Math.max(page - 1,0) 
    
    // falta el reducers, componentes, filtrado y pagina detalle, formulario controlado, el temperamento tmabien
  };
}

export function nextPage(page,total) {
  return  {
   
    
     type: NEXT_PAGE, payload: Math.min(page + 1,total-1) 
    
    // falta el reducers, componentes, filtrado y pagina detalle, formulario controlado, el temperamento tmabien
  };
}

export function setPage() {
  return  {
   
    
     type: SET_PAGE, payload: 0
    
    // falta el reducers, componentes, filtrado y pagina detalle, formulario controlado, el temperamento tmabien
  };
}