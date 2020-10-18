import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //This is a statefull/smart/container component because we are using state here.
  state = {
    persons: [
      { name: 'Abhishek', age: 32 },
      { name: 'Suhas', age: 30 },
      { name: 'Rahul', age: 29}
    ],
    showPerson: false
  }

  deletePersonHandler = (personIndex) => {
    //Adding this.state.persons to const persons is adding a pointer to the reference object persons which directly manupulate the actual
    //array. And which can led to unpredictable errors.

    //const persons = this.state.persons;

    //A good practice to avoid this kind of errors is to copy the object instead of putting a reference.
    //The one way to do is simply add slice() with the object
    //const persons = this.state.persons.slice();

    //Another approach to copy object is to use a es6 feature of 'js  that is use spread operator i.e. a three dots (...)
    const persons = [...this.state.persons];
    
    //This will remove person from persons array by 1 element
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Abhishek Dagwar', age: 33 },
        { name: event.target.value, age: 30 },
        { name: 'Rahul Dagwar', age: 29}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  //Create a passing reference for Person file.
  //() => this.methodName(param) --- This is a inefficient way if an app is big
  //this.methodName.bind(this, param) -- Try using this whenever possible.
  render() {

    const styleConst = {
      backgroundColor: 'white',
      font: 'inherit',
      boarder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((personObj, index) => {
            return <Person
              click = {() => this.deletePersonHandler(index)}
              name = {personObj.name}
              age = {personObj.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <button
            style = {styleConst}
            onClick = {this.togglePersonHandler}>Toggle Persons</ button>
        </ p>
        <p className="App-intro">
          This is my first React App.
        </p>
        {persons}
      </div>
    );
  }
}

export default App;
