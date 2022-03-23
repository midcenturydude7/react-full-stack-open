import React from "react";

const Form = ({ persons, newName, addNewName, handleNameChange }) => {
   
    const handleCheckName = () => {
        const grabName = persons.map((person) => person.name)
        if (grabName.includes(`${newName}`)) {
            return alert("Try again")
        }
    }

    return (
        <>
        <h2>Phonebook</h2>
            <form onSubmit={addNewName}>
                <div>
                <p>name: <input value={newName} onChange={handleNameChange} /></p>
                </div>
                <div>
                <button onClick={handleCheckName} type="submit">
                    Add
                </button>
                </div>
            </form>     
        </>
    );
}

export default Form;