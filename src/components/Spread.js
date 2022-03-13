import React from "react";

const Spread = ({ course }) => {
    const nameResult = course.parts.map(part => part.name)
    const exercisesResult = course.parts.map(part => part.exercises)
    
    return (
        <>
            <p>{nameResult[0]}: {exercisesResult[0]}</p>
        </>
    )

}

export default Spread;