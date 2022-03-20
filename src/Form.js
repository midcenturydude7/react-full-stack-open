import React from "react";

const Form = ({ newName, addNewName, handleNameChange }) => {

    return (
        <>
        <h2>Phonebook</h2>
            <form onSubmit={addNewName}>
                <div>
                <p>name: <input value={newName} onChange={handleNameChange} /></p>
                </div>
                <div>
                <button type="submit">
                    Add
                </button>
                </div>
            </form>     
        </>
    );
}

export default Form;