import React from 'react';
import Course from './components/Course';


const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of component",
        exercises: 14,
        id: 3
      }
    ]
  }


  return (
    <>
      <Course course={course} />
      {/* <p>{course.parts.map(course => <span key={course.id}>{course.name}</span>)}</p> */}
    </>
  )
}


export default App;
