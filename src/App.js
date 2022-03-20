import React from 'react';
import PhoneBook from './components/PhoneBook';
import Form from './Form';

const App = () => {
  // initalizes state with the name stored as Arto
  const [persons, setPersons] = React.useState([
    {
      name: "Arto Hellas",
    }
  ])
  // State that will store user submitted data and sets the initial state is an empty string
  const [newName, setNewName] = React.useState("");

  const addNewName = (event) => {
      event.preventDefault();
      const nameObject = {
          name: newName
      }    
      setPersons(persons.concat(nameObject));
      setNewName("");
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }
  // State checks for duplicate names in the phonebook
  // const [includeName, setIncludeName] = React.useState(true)
  
  // const grabName = persons.map((person) => person.name)
  // console.log(grabName)
  
  // let namesList = grabName
        
  // let uniqueNames = namesList.filter((person, index) => {
  //   return namesList.indexOf(person) === index;
  //   });
  //   console.log(uniqueNames)
  
  // const nameCheck = grabName.includes((person) => person.name === `${newName}`) ? removeDuplicate(grabName) && alert("Try another name!") : addNameToList

  return (
    <div>
      <h2>Phonebook</h2>
      <Form addNewName={addNewName} handleNameChange={handleNameChange} />
      <PhoneBook persons={persons}/>
    </div>
  )
}

export default App;
