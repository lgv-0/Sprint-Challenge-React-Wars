import React from 'react';
import styled from "styled-components";

function Card(info)
{
    console.log(info.data);
    return (
        <CardStyle>
            <h2>{info.data.name}</h2>
            <h4>Mass-{info.data.mass}kg</h4>
            <h4>Height-{info.data.height}cm</h4>
            <h4>Color-{info.data.skin_color}</h4>
        </CardStyle>
    );
}

let CardStyle = styled.div`
    width: 300px;
    height: 240px;

    border: 3px solid gray;
    border-radius: 8px;
    background-color: #e4e4e4bc;

    h2
    {
      color: red;
    }
`;

export default Card;