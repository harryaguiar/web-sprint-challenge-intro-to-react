// Write your Character component here
import React from 'react'
import styled from "styled-components";

function Character({ character }) {


    return (
        
        
        <DivStyle>
            <PStyle>{character.name} <YearStyle>{character.birth_year}</YearStyle></PStyle>

        </DivStyle>
    )
}

export default Character

const DivStyle = styled.div`
background-color: black;
border: solid 1px green;
height: 4em;
align-items: center;
justify-content: space-between;
margin: 5px;

`

const PStyle = styled.div`
font-size: 2em;
justify-content: space-between;
margin: 3px;
`

const YearStyle = styled.span`
background-color: white;
color: black;
border-radius: 10px;
padding: 2px;
margin: 3px;

`
