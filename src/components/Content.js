import React from "react";

const Content = () => {

    return (
        <div>
            <Part {...Part.parts} />
        </div>        
    );
}

const Part = () => {
    const parts = {
        part1: {
            name: "Fundamentals of React",
            exercises: 10 
        },
        part2: {
            name: "Using props to pass data",
            exercises: 7
        },
        part3: {
            name: "State of a component",
            exercises: 14
        }
    }
    return (
        <>
            <p>{parts.part1.name + ": " + parts.part1.exercises}</p>
            <p>{parts.part2.name + ": " + parts.part2.exercises}</p>
            <p>{parts.part3.name + ": " + parts.part3.exercises}</p>
        </>
    );
}

export default Content;