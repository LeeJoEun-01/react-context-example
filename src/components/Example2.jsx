import React from "react";
import PersonContext from "../contexts/PersonContext";
// 데이터 Get하기 (2) - class

// 데이터 Get하기 -1)
export default class Example2 extends React.Component {
  // static contextType = PersonContext;    

  render () {
    const persons = this.context; 
    return (
      <ul>
      {persons.map((person) => (
            <li>{person.name}</li>
          ))}
      </ul>
    );
  }
}

// static 정의 대신 이렇게도 사용 가능 
Example2.contextType = PersonContext;