import styled from 'styled-components';

const StyledJokeList = styled.ul`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    list-style-type: none;

    .joke-list__button {
        box-sizing: content-box;
        padding: 12px 16px 26px;
        font-family: Roboto; 
        font-size: 14px;
        line-height: 1.25rem; 
        width: 240px;
        margin: 16px;
        border-radius: 8px;
        border: none;
        background-color: #aaf2e9;
        height: fit-content;
        text-align: start;
        cursor: pointer;
    }
`;

export default StyledJokeList;
