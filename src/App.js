import React from 'react';
import Note from './components/Notes';

const App = (props) => {
  // Initialized the piece of state stored in the notes array (in index.js) with the array of notes passed in the props parameter
  const [notes, setNotes] = React.useState(props.notes)

  // Stores the user-submitted input and the initial state is set as of the input element's value attribute
  const [newNote, setNewNote] = React.useState("A new note...")

  // Keeps track of which notes should be displayed based on the 'important' property
  const [showAll, setShowAll] = React.useState(true)

  // For adding new notes to the form tag
  const addNote = (event) => {
    event.preventDefault()
    // console.log("Button clicked", event.target)
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote("")
  }

  // Event handler to the form element that is called when the form is submitted
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // Function to handle which notes to show
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? "Important" : "All"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => 
          <Note key={note.id} note={note} />
          )}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote} 
          onChange={handleNoteChange} 
        />
        <button type="Submit">Save</button>
      </form>
    </div>
  )

}

export default App;
