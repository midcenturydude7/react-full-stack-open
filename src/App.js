import React from 'react';

const App = () => {
  const [persons, setPersons] = React.useState([
    {
      name: "Arto Hellas"
    }
  ])
  const [newName, setNewName] = React.useState("");

  const addNewName = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App;
