// Write your Character component here
import React from 'react'
import styled from "styled-components";

function Character({ character }) {


    return (
        
        
        <DivStyle> 
            <PStyle>{character.name}<YearStyle> Birth Year: {character.birth_year} </YearStyle></PStyle>
           
        </DivStyle>
    )
}

export default Character

const DivStyle = styled.div`
background-color: black;
border: solid 2px green;
height: 5em;
align-items: center;
justify-content: space-between;
margin: 5px;
border-radius: 10px;
padding: 5px;


`

const PStyle = styled.div`
font-size: 1.6em;
justify-content: space-between;
margin: 15px;
padding: 3px;

&:hover {
color: black;
border: 4px solid #0d0046;
background-color: #FFF;
box-shadow:0px 0px 0px 4px #EEE inset;
}`

const YearStyle = styled.span`
background-color: white;
border-radius: 10px;
padding: 4px;
margin: 5px;
color: #FFF;
    border: 4px solid #0d0046;
    box-shadow:0px 0px 0px 1px #0d0046 inset;
    background-color: #0d0046;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: black;
        border: 4px solid #0d0046;
background-color: #BBB;
box-shadow:0px 0px 0px 4px #EEE inset;
    }
`


