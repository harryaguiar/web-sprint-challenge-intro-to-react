import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character';
import styled from "styled-components";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  const [characters, setCharacter] = useState([]);
  

useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then((res) => {
        console.log("Res: ", res);
        setCharacter(res.data.results);
      })
      .catch((err) => {
        console.log("Error occurred: ", err);
      });
  }, []);


  return (
    <div className="App">
      <h1 className="Header">  StarWars Characters </h1>
        <PAppStyle>
        <div>{characters.map((character) => {
        return <Character character={character} key={character.name} />;
      })}</div>
      </PAppStyle>
   
    </div>
  );
}

export default App;

const PAppStyle = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
font-family: ;
color: white;
`