import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { SET_COUNTRIES,SET_COUNTRIENAME } from "./actionsNames";




const initialState = {
  countries: undefined,
  countryName:undefined
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRIES: {
      return { ...state, countries: action.payload };
    }
    case SET_COUNTRIENAME: {
        return { ...state, countryName: action.payload };
      }
    default: {
      return state;
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunk));


export default store
