import React from 'react';
import styled from 'styled-components';
import cssClasses from './Person.css'

//This is a stateless/dumb/presentational component because we are not using state here.
const person = (props) => {
  //Passing method reference between component.
  return (
    <div className={cssClasses.Person}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</ p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;
