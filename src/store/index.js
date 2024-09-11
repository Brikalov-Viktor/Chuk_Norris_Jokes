import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import { fetchJokeWatcherSaga } from './sagas'
import jokeReducer from './reducer';

const rootReducer = combineReducers({
    jokeSlice: jokeReducer,
});
const sagaMiddleware = createSagaMiddleware();

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddleware),
    });
};
const store = setupStore();
sagaMiddleware.run(fetchJokeWatcherSaga);

export default store;