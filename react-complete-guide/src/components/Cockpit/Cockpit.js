import React from "react";
import logo from './logo.svg';
import cssClasses from "./Cockpit.css"

const cockpit = (props) => {

    //Create a array of style to apply on p className using js
    const styleClassesArray = [];
    let btnClassArray = '';

    if(props.showPerson) {
        btnClassArray = cssClasses.Red;
    }

    if (props.persons.length <= 2) {
      styleClassesArray.push(cssClasses.button); // styleClassesArray['red']
    }

    if (props.persons.length <= 1) {
      styleClassesArray.push(cssClasses.bold); // styleClassesArray['red', 'bold']
    }

    return (
        <div className={cssClasses.Cockpit}>
            <header className={cssClasses.header}>
                <img src={logo} className={cssClasses.logo} alt="logo" />
                <h1 className={cssClasses.title}>Welcome to React</h1>
            </header>
            <p>
                <button 
                    className={btnClassArray} 
                    onClick={props.clicked}>
                        Toggle Persons
                </button>
            </ p>
            <p className={styleClassesArray.join(' ')}>
                This is my first React App.
            </p>
        </div>
      );
};

export default cockpit;