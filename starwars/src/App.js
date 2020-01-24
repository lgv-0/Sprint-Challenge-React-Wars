import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Card from "./components/Card";

const App = () =>
{
  let [peopleArray, sPeopleArray] = useState([]);
  useEffect(()=>
    {
      axios.get("https://swapi.co/api/people/1").then((response)=>
      {
        let tmp = [];
        tmp.push(response.data);
        sPeopleArray(tmp);
      });
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {peopleArray.map((i) => {return <Card data={i} key={i.name} />})}
    </div>
  );
}

export default App;
