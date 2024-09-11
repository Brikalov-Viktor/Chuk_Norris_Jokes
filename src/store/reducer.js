import {
  FETCH_JOKE_SUCCESS,
  SET_JOKES,
  FETCH_JOKE_FAILED,
} from './actions';

const initialState = {
  jokes: JSON.parse(localStorage.getItem('jokes')) || [],
  error: null,
};

const jokesReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_JOKE_SUCCESS:
          return {
              ...state,
              jokes: [...state.jokes, action.payload],
          };
      case FETCH_JOKE_FAILED:
          return {
              ...state,
              error: action.payload,
          };
      case SET_JOKES:
          return {
              ...state,
              jokes: action.payload,
          };
      default:
          return state;
  }
};

export default jokesReducer;