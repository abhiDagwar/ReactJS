import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

//React hook function based example
const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Abhishek', age: 32 },
      { name: 'Suhas', age: 30 },
      { name: 'Rahul', age: 29}
    ]
    //otherState: 'Some other value'
  });

  const [otherState, setOtherState] = useState('Some other value');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked');
    //DON'T DO THIS: this.state.persons[0].name = 'Abhishek Dagwar'
    setPersonState({
      persons: [
        { name: 'Abhishek Dagwar', age: 33 },
        { name: 'Suhas Dagwar', age: 30 },
        { name: 'Rahul Dagwar', age: 29}
      ]
      //Manually update the value because setPersonState doesn't update otherState in hook if we don't update the otherState elsewhere
      //otherState: personState.otherState
    })
  };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <button onClick = {switchNameHandler}>Switch Name</ button>
        </ p>
        <p className="App-intro">
          This is my first React App.
        </p>
        <Person name = {personState.persons[0].name} age = {personState.persons[0].age} />
        <Person name = {personState.persons[1].name} age = {personState.persons[1].age} > My Hobbey: Cricket</ Person>
        <Person name = {personState.persons[2].name} age = {personState.persons[2].age} />
      </div>
    );
}

export default App;
