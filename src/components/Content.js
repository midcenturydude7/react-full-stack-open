import React from "react";

const Content = (props) => {
    return (
        <>
            <p>{props.part1}:<span>{props.exercises1}</span></p>
            <p>{props.part2}:<span>{props.exercises2}</span></p>  
            <p>{props.part3}:<span>{props.exercises3}</span></p> 
        </>        
    );
}

export default Content;