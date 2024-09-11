import React from 'react';

import StyledJokeList from './JokeItem.style';

const JokeItem = ({ joke }) => {
    return (
        <StyledJokeList>
            {joke}
        </StyledJokeList>
    );
};

export default JokeItem;
