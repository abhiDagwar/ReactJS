import React, { Component } from 'react';

import logo from './logo.svg';
import cssClasses from './App.css';
import Person from './Person/Person';

/*
  The another approach to use css without third party component is to use css-module concept.
  To use the css-module in the project, we need to tweak the project configuration file i.e. build configuration.
  The advantage of css-module is that we can use our css to a specific file and not in the all project.
  If we add now something in the App.css it will apply to the project level. But using css-module we can use it in a specific file.
  First we will see how we can leverage the css-module into our project for "react-scripts": "1.1.5".
  For version 2 or higher it requires some additional changes.
  We will discuss the changes requires in the version 2 or higher also. But first let's change it for version "1.*.*".
  For css-module, open the terminal and go to the project directory root.
  Note: When running eject command if you get error then please commit your changes to the git first if you are using git.
  Type command: npm run eject. This command basically eject from the under the hood configuration of your package.json config file,
  doing so now you get the access of 'config' folder where you can see the webpack config file and so on, which will not be accessible to you before.
  You can see that package.json file is also change and you can have access to the more packages.
  The 'webpack.config.dev.js' and 'webpack.config.prod.js' are the files which are used under the hood by package.json tooling.
  This are the packages used for creating create-react-app and running the local server.
  Now go to the webpack dev file and find 'test: /\.css$/' where you can find 'options: {importLoaders: 1,}.
  Add new options below "importLoaders", "modules: true," and "localItendName: '[name]__[local]__[hash:base64:5]'"
  Now do the same with webpack prod file.
  After that run command "npm start" in the terminal.
*/

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
    let persons = null;
    let btnClassArray = '';

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
      btnClassArray = cssClasses.Red;
    }

    //Create a array of style to apply on p className using js
    const styleClassesArray = [];

    if (this.state.persons.length <= 2) {
      styleClassesArray.push(cssClasses.red); // styleClassesArray['red']
    }

    if (this.state.persons.length <= 1) {
      styleClassesArray.push(cssClasses.bold); // styleClassesArray['red', 'bold']
    }

    return (
    <div className={cssClasses.App}>
        <header className={cssClasses.header}>
          <img src={logo} className={cssClasses.logo} alt="logo" />
          <h1 className={cssClasses.title}>Welcome to React</h1>
        </header>
        <p>
          <button className = {btnClassArray} onClick = {this.togglePersonHandler}>
            Toggle Persons
          </button>
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
