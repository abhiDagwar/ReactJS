import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Abhishek', age: 32 },
      { name: 'Suhas', age: 30 },
      { name: 'Rahul', age: 29}
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked');
    //DON'T DO THIS: this.state.persons[0].name = 'Abhishek Dagwar'
    this.setState({
      persons: [
        { name: 'Abhishek Dagwar', age: 33 },
        { name: 'Suhas Dagwar', age: 30 },
        { name: 'Rahul Dagwar', age: 29}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <button onClick = {this.switchNameHandler}>Switch Name</ button>
        </ p>
        <p className="App-intro">
          This is my first React App.
        </p>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} > My Hobbey: Cricket</ Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
