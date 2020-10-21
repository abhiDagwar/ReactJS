import React from 'react';
import styled from 'styled-components';
import cssClasses from './Person.css'

//This is a stateless/dumb/presentational component because we are not using state here.
const person = (props) => {
  /*
    This is just a sample code to see how error can handle in js.
    In this example ypu can see the error is thrown but its not handle properly.
    In production if the error is thrown then we can have to handle it too so that error page will not seen on browsers
    but instead your error message which you want to show.
    In this example a random number will generate and if the value is greater than 0.7 then error will thrown.
    Please toggle the 'Toggle Person' button couple of times to see the error.
  */
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error('Something went wrong');
  }

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
