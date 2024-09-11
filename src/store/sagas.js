import { takeEvery, put, call, select } from 'redux-saga/effects';

import {
    FETCH_JOKE_REQUEST,
    getJokesStore,
    fetchJokeSuccess,
    fetchJokeFailed,
} from './actions';
import { jokeUrl } from '../utils/consts';

function* fetchJoke() {
    try {
        const response = yield call(fetch, jokeUrl);
        const data = yield response.json();
        yield put(fetchJokeSuccess(data.value));
        const jokes = yield select(getJokesStore);
        localStorage.setItem('jokes', JSON.stringify(jokes));
    } catch (error) {
      yield put(fetchJokeFailed(error));
    }
}

export function* fetchJokeWatcherSaga() {
    yield takeEvery(FETCH_JOKE_REQUEST, fetchJoke);
}
