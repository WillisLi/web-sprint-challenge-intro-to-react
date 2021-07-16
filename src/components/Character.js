import React from 'react';
import styled from 'styled-components';

const CharWrapper = styled.div`
    border: 2px solid gray;
    width: 70vw;
    margin: 10px;
`;

const Name = styled.p`
    font-size: 1.6rem;
`;

const Character = props => {
    const { character } = props;

    return (
        <CharWrapper>
            <Name>
                {character.name}
            </Name>

            <p className="birth">
                {character.birth_year}
            </p>

            <p className ="height">
                {character.height}
            </p>
        </CharWrapper>
    )
}

export default Character;