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
      axios.get("https://swapi.co/api/species/2").then((response)=>
      {
        let tmp = [];
        let cnt = response.data.people.length;
        for (let i = 0; i < cnt; i++)
          axios.get(response.data.people[i]).then((response)=>
          {
            tmp.push(response.data);
            if (tmp.length == cnt)
              sPeopleArray(tmp);
          })
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
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default App;
