import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


/* Styled-components helps you to write normal css format in your variable and don't need to add inline css.
    It is independant of React.
    Also you can use psudo style in css for critical properties like hover with & using infornt.
    Insated of button tag we can use StyledButton tag
    Behind the scene this is just a js with a string quoted in backtick(``) which is then render in js and creates css-style
    The condition for hover is also we can use inside the StyledButton using
    ternary operator using a props that we use earlier
    for connection between App and Person js.
    When you inspect the element in the browser you can see it creates css-style automatically.
*/

const StyledButton = styled.button`
  background-color : ${props => props.alt ? 'red' : 'green'};
  color : white;
  font : inherit;
  boarder : 1px solid blue;
  padding : 8px;
  cursor : pointer;

  &:hover {
    background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
    color : black;
  }
`;

class App extends Component {
  //This is a statefull/smart/container component because we are using state here.
  //Added a unique key to the list to remove the warning from the console.
  //The key is an important factor when we update list. If we do not use key the react compare old list to the new list and update (render)
  //the whole lists which is inefficient way to do if we have a large list.
  //The efficient way to solved this is to use unique key to the array which react can compare with the list and render only that element
  //which needs to upate and not the whole list.
  //Here we are adding a dummy id to show how it works but in real app it could be coming from database or when calling an API from server.
  state = {
    persons: [
      { id: '1', name: 'Abhishek', age: 32 },
      { id: '2', name: 'Suhas', age: 30 },
      { id: '3', name: 'Rahul', age: 29}
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

  //In nameChangedHandler, we now are checking the id of which user start to type something in the input bod and
  //based on the cell/row/box user type, the change will occur on the respective cell/row/box. Which was not editable before
  //for 1st and 3rd cell/row/box.
  nameChangedHandler = (event, id) => {
    //Find the id from a persons array to match with the id of the index.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //With spread operator(recommended)
    const person = {
      ...this.state.persons[personIndex]
    };
    //Without spread operator. js function.
    //const person = Object.assign({}, this.state.persons[personIndex]);

    //Assign a value typed by a user to the person object
    person.name = event.target.value

    //Add the updated person value to the persons array.
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //Now set it to the state of persons array.

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  //Create a passing reference for Person file.
  //() => this.methodName(param) --- This is a inefficient way if an app is big
  //this.methodName.bind(this, param) -- Try using this whenever possible.
  render() {
    //Install third party lib radium for stylling into the app.
    //Radium is a popular third party package for react which allow us to use inline style with sudo selectors(see :hover in styleConst) and media queries.
    //Open terminal -> Go to the project root directory.
    //Type command: npm install --save radium
    //This command will save radium into your project structure.

    //Inline style
    const styleConst = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      boarder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((personObj, index) => {
            return <Person
              click = {() => this.deletePersonHandler(index)}
              name = {personObj.name}
              age = {personObj.age}
              key = {personObj.id}
              changed = {(event) => this.nameChangedHandler(event, personObj.id)}/>
          })}
        </div>
      );

      // styleConst.backgroundColor = 'red';
      // styleConst[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    //Create a array of style to apply on p className using js
    const styleClassesArray = [];

    if (this.state.persons.length <= 2) {
      styleClassesArray.push('red'); // styleClassesArray['red']
    }

    if (this.state.persons.length <= 1) {
      styleClassesArray.push('bold'); // styleClassesArray['red', 'bold']
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <StyledButton alt = {this.state.showPerson} onClick = {this.togglePersonHandler}>
            Toggle Persons
          </StyledButton>
        </ p>
        <p className={styleClassesArray.join(' ')}>
          This is my first React App.
        </p>
        {persons}
      </div>
    );
  }
}

//Wrap higher order component with App. (i.e. Injecting Radium component into App component to use Radium features into the App)
export default App;
