import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
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

const initialState = {
  countries: undefined,
  countriesData: [],
  countryName: undefined,
  countrySearch: undefined,
  activity: undefined,
  region: ["Asia", "Americas", "Europe", "Africa", "Oceania", "Polar", ""],
  searching:false,
  total:1,
  limit:10,
  page:0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRIES: {
      return { ...state, countries: action.payload, countriesData: action.payload, };
    }
    case SET_COUNTRIENAME: {
      return { ...state, countryName: action.payload };
    }
    case SEARCH_COUNTRIES: {
      const validate = Array.isArray(action.payload);
      return {
        ...state,
        countries: validate ? action.payload : state.countries,
      };
    }
    case CREATE_ACTIVITY: {
      return { ...state, activity: action.payload };
    }
    case FILTER_COUNTRY:
      return { ...state, countries: [...action.payload], searching:action.payload };
      case ORDER_COUNTRY:
        return { ...state, countries: action.payload};
        case SET_SEARCHING:
          return { ...state, searching:action.payload };
          case SET_TOTAL:
          return { ...state, total:action.payload };
          case SET_LIMIT:
          return { ...state, limit:action.payload };
          case PREVIOUS_PAGE:
            return { ...state, page:action.payload };
            case NEXT_PAGE:
              return { ...state, page:action.payload };
              case SET_PAGE:
              return { ...state, page:action.payload };
  
  
      default: {

      return state;
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
