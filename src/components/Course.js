import React from "react";

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content course={course} />
        </>
    )
}

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Content = ({ course }) => {
    const nameLine1 = course.parts[0].name
    const exerciseLine1 = course.parts[0].exercises

    const nameLine2 = course.parts[1].name
    const exerciseLine2 = course.parts[1].exercises
    
    const nameLine3 = course.parts[2].name
    const exerciseLine3 = course.parts[2].exercises

    const totalExercises = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

    return (
        <>
            <p>{nameLine1}: {exerciseLine1}</p>
            <p>{nameLine2}: {exerciseLine2}</p>
            <p>{nameLine3}: {exerciseLine3}</p>
            <p>Total of {totalExercises} exercises</p>
        </>
    )
}

export default Course;