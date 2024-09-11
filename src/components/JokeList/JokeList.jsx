import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchJokeRequest } from '../../store/actions';
import JokeItem from '../JokeItem/JokeItem.jsx';
import StyledJokeList from './JokeList.style';

const JokesList = () => {
    const dispatch = useDispatch();
    const jokes = useSelector((state) => state.jokeSlice.jokes);

    const handleFetchJoke = () => {
        dispatch(fetchJokeRequest());
    };

    return (
        <StyledJokeList>
            <button
                className='joke-list__button'
                onClick={handleFetchJoke}
            >
                MORE!!!
            </button>
            {jokes.map((joke, index) => (
                <JokeItem
                    key={index}
                    joke={joke}
                />
            ))}
        </StyledJokeList>
    );
};

export default JokesList;
