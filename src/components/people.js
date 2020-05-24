import React from 'react';
import Person from './person';
import './css/people.scss';

function People(props) {
  const arr = []
  props.names.forEach(function(name){
    arr.push(<Person name={name} key={name}></Person>)
  })

  return (
    <div className="People">
      <h2 className="PeopleTitle TextGradient">We're all about the people</h2>
      <div className="GridContainer PeopleGrid">
        {arr}
      </div>
    </div>
  )
} 

export default People;