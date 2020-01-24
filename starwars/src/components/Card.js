import React from 'react';
import styled from "styled-components";

function Card(info)
{
    console.log(info.data);
    return (
        <CardStyle>
            <h2>{info.data.name}</h2>
            <h4>{info.data.birth_year}</h4>
            <h4>{info.data.gender}</h4>
            <h4>{info.data.hair_color}</h4>
        </CardStyle>
    );
}

let CardStyle = styled.div`
    width: 300px;
    height: 300px;

    border: 3px solid gray;
    border-radius: 8px;
    background-color: #e4e4e4bc;
`;

export default Card;