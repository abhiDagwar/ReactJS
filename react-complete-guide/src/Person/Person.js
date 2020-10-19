import React from 'react';
import Radium from 'radium';
import './Person.css'

//This is a stateless/dumb/presentational component because we are not using state here.
const person = (props) => {
  //A radium psudo selector media query is used to fixed the component box width to 450px.
  //500px is the min-width. When we go below 450px the boxes will limit itself to 60% of the view as mentioned in Person.css.
  const styleConst = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  //Passing method reference between component.
  return (
    <div className="Person" style={styleConst}>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</ p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </ div>
  )
};

export default Radium(person);
