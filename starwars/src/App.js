import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/Card";
import styled from "styled-components";

const App = () =>
{
  let [peopleArray, sPeopleArray] = useState([]);
  useEffect(()=>
    {
      axios.get("https://swapi.co/api/people/1").then((response)=>
      {
        let tmp = [];
        tmp.push(response.data);
        axios.get("https://swapi.co/api/people/2").then((response)=>
        {
          tmp.push(response.data);
          axios.get("https://swapi.co/api/people/3").then((response)=>
          {
            tmp.push(response.data);
            sPeopleArray(tmp);
          });
        });
      });
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CenterContainer>
        {peopleArray.map((i) => {return <Card data={i} key={i.name} />})}
      </CenterContainer>
    </div>
  );
}

let CenterContainer = styled.div`
  width: 100%;
  height: 306px;
  display: flex;
  justify-content: space-evenly;
`;

export default App;
