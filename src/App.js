import React from 'react';

const App = () => {
  // initalizes state with the name stored as Arto
  const [persons, setPersons] = React.useState([
    {
      name: "Arto Hellas",
    }
  ])
  // State that will store user submitted data and the initial state is an empty string
  const [newName, setNewName] = React.useState("");

  // Adding new names to the form tag  
  const addNewName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName
  }
  
  setPersons(persons.concat(nameObject));
  setNewName("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
 
  // const nameExists = persons.map((person) => person.name === newName) ? alert("That name already exists in the phonebook! Try again") : (persons.map((person, i) =>
  //     <li key={i}>{person.name}</li>))

  const addNameToList = 
    <ol>
      {persons.map((person, i) => 
        <li key={i}>{person.name}</li>
      )}
    </ol>

  const grabName = persons.map((person) => person.name)
  console.log(grabName)
    
  const nameCheck = !grabName.includes(`${newName}`) ? addNameToList : alert("That name already exists in the phonebook! Try again")

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          <p>name: <input value={newName} onChange={handleNameChange} /></p>
        </div>
        <div>
          <button 
            type="submit"
          >
              Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{nameCheck}</div>
    </div>
  )
}

export default App;
