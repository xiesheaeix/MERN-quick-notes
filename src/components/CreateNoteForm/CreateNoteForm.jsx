import { useState } from 'react';

export default function CreateNoteForm({handleAddNote}) {
  const [newNote, setNewNote] = useState({
    text: ""
  });
 
  function handleChange (evt) {
    const newNoteData = {...newNote, [evt.target.name]: evt.target.value };
    setNewNote(newNoteData);
  }

  return (
    <>
      <h1>New Note</h1>
      <form onSubmit={evt => handleAddNote(evt, newNote)}>
        <input
            name="text"
            type="text"
            value={newNote.text}
            onChange={handleChange}
            placeholder="Write a New Note!"
            required 
        />
        <button type="submit">Add Note</button>
      </form>
    </>
  );
}