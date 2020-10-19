import React from 'react';
import styled from 'styled-components';
//import './Person.css'

//This is a stateless/dumb/presentational component because we are not using state here.
//Styled-Component is another third party component. It is a populer and widely used component in react.
//For more information about how to use and implementation, please visit: https://styled-components.com/
//To install styled-components in the project follow the below steps:
//Open a terminal, go to the project root directory
//Type command: npm install --save styled-components
const person = (props) => {
  const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
      width: '450px'
    }

  `;

  //Passing method reference between component.
  return (
    //Using custom StyleDiv instead of div for styled-components
    //<div className="Person" style={styleConst}>
    //</ div>
    <StyleDiv>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</ p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </StyleDiv>
  )
};

export default person;
