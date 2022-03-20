import React from "react";

const PhoneBook = ({ persons }) => {
    const addNameToList = 
        <ol>{persons.map((person, i) =>
            <li key={i}>{person.name}</li>
            )}    
        </ol>
    
    return (
        <>
            <h2>Numbers</h2>
            <div>{addNameToList}</div>
        </>
    )
}

export default PhoneBook;
