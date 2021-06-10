import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SET_COUNTRIES,SET_COUNTRIENAME,SEARCH_COUNTRIES } from "./actionsNames";




const initialState = {
  countries: undefined,
  countryName:undefined,
  countrySearch:undefined,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRIES: {
      return { ...state, countries: action.payload };
    }
    case SET_COUNTRIENAME: {
        return { ...state, countryName: action.payload };
      }
      case SEARCH_COUNTRIES: {
        const validate = Array.isArray(action.payload);
        return { ...state, countries:validate ? action.payload : state.countries };
      }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunk));


export default store
