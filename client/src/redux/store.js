import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SET_COUNTRIES,SET_COUNTRIENAME,SEARCH_COUNTRIES, CREATE_ACTIVITY } from "./actionsNames";




const initialState = {
  countries: undefined,
  countryName:undefined,
  countrySearch:undefined,
  activity: undefined,
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
      case CREATE_ACTIVITY: {
        return { ...state, activity: action.payload };
      }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunk));


export default store
