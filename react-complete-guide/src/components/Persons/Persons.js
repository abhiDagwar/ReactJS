import React from "react";
import Person from "./Person/Person"

const persons = (props) => props.persons.map((personObj, index) => {
        return <Person
          click = {() => props.clicked(index)}
          name = {personObj.name}
          age = {personObj.age}
          key = {personObj.id}
          changed = {(event) => props.changed(event, personObj.id)}/>
      });

      export default persons;