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

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //DON'T DO THIS: this.state.persons[0].name = 'Abhishek Dagwar'
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: 'Suhas Dagwar', age: 30 },
        { name: 'Rahul Dagwar', age: 29}
      ]
    })
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
          <Person
            name = {this.state.persons[0].name}
            age = {this.state.persons[0].age} />
          <Person
            name = {this.state.persons[1].name}
            age = {this.state.persons[1].age}
            click = {this.switchNameHandler.bind(this, 'Abhi Dagwar')}
            change={this.nameChangedHandler}> My Hobbey: Cricket</ Person>
          <Person
            name = {this.state.persons[2].name}
            age = {this.state.persons[2].age} />
        </ div>
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
