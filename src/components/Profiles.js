import React from "react";
import Character from './Character.js';
import styled from 'styled-components';

const CharList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Profiles = props => {
    const { profiles } = props;

    return (
        <CharList>
            {profiles.map(profile => {
                return <Character character = {profile}/>
            })}
        </CharList>
    )
}

export default Profiles;