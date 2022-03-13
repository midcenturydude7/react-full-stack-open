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
    const nameResult = course.parts.map((part) => part.name)
    const exercisesResult = course.parts.map((part) => part.exercises)
    const totals = exercisesResult[0] + exercisesResult[1] + exercisesResult[2]

    return (
        <>
            <p>{nameResult[0]}: {exercisesResult[0]} exercises</p>
            <p>{nameResult[1]}: {exercisesResult[1]} exercises</p>
            <p>{nameResult[2]}: {exercisesResult[2]} exercises</p>
            <p>Total of {totals} exercises</p>
        </>
    )
}

export default Course;