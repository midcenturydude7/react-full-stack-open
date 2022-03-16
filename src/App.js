import React from 'react';

const App = () => {
  const [persons, setPersons] = React.useState([
    {
      id: 1,
      name: "Arto Hellas"
    },
    {
      id: 2,
      name: "Fred Flinstone"
    }
  ])

  return (
    <div>
      <h1>Current names on the list:</h1>
      <CurrentList persons={persons} />
      <h1> Add a name:</h1>
      <NewList persons={persons} />
    </div>
  )
}

const CurrentList = ({ persons }) => {
  const nameId = persons.map((person) => person.id)
  const nameOnList = persons.map((person) => person.name)
  
  return (
    <>
      <p>{nameId[0]}. {nameOnList[0]}</p>
      <p>{nameId[1]}. {nameOnList[1]}</p>
    </>
  )
}

const NewList = ({ persons }) => {
  return (
    <form>
      <input field="text" placeholder="Enter a name"/>
      <button>Add</button>
    </form>
  )
}

export default App;
