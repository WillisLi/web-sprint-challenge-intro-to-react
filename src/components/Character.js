import React from 'react';
import styled from 'styled-components';

const CharWrapper = styled.div`
    border: 2px solid gray;
    width: 20vw;
    height: 10vh;
    margin: 12px;
    background-color: #D7CCC8;
    opacity: .7;

    &:hover {
        transition: 0.15s ease-in;
        opacity: 1;
    }
`;

const Name = styled.p`
    font-size: 1.6rem;
    color: #607D8B;
    font-family: Arial;
    font-weight: bold;
`;

const Character = props => {
    const { character } = props;

    return (
        <CharWrapper>
            <Name>
                {character.name}
            </Name>
        </CharWrapper>
    )
}

export default Character;