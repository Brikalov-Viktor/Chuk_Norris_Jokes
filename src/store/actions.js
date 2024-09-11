export const FETCH_JOKE_REQUEST = 'FETCH_JOKE_REQUEST';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILED = 'FETCH_JOKE_FAILED';

export const SET_JOKES = 'SET_JOKES';

export const getJokesStore = (state) => state.jokeSlice.jokes;

export const setJokes = (jokes) => ({
  type: SET_JOKES,
  payload: jokes,
});

export const fetchJokeRequest = () => ({
  type: FETCH_JOKE_REQUEST,
});

export const fetchJokeSuccess = (joke) => ({
  type: FETCH_JOKE_SUCCESS,
  payload: joke,
});

export const fetchJokeFailed = (error) => ({
  type: FETCH_JOKE_FAILED,
  payload: error,
});
