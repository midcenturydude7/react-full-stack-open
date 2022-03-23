import React from 'react';

const App = () => {
  const [persons, setPersons] = React.useState(new Set());
  const [newName, setNewName] = React.useState("");

  const addNewName = (event) => {
    event.preventDefault();
    if (newName.trim()) {
      setPersons(prevState => new Set(prevState).add(newName.trim()))
    }; 
  };    

  // console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <input 
          onChange={event => setNewName(event.target.value)}
          value={newName}
        />{" "}
        <button type="submit">Add</button>
        <h2>Numbers</h2>
        <ul>{[...persons].map(event => <li key={event}>{event}</li>)}</ul>
      </form>
    </div>
  );
};

export default App;
