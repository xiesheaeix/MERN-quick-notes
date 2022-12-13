import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as userService from '../../utilities/users-service';
import * as notesAPI from '../../utilities/notes-api';
import AuthPage from '../AuthPage/AuthPage';
import CreateNoteForm from '../../components/CreateNoteForm/CreateNoteForm';
import Notes from '../../components/Notes/Notes';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState({});

  useEffect(function () {
    async function getAll() {
      const allNotes = await notesAPI.getAll();
      setNotes(allNotes);
    };
    getAll();
  }, [])
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  async function handleAddNote(evt, newNote) {
    evt.preventDefault();
    const note = await notesAPI.addNote(newNote);
    setNotes([...notes, note]);
  }

  return (
    <main className="App">
      { user ?
          <>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
            <CreateNoteForm handleAddNote={handleAddNote} />
            <Notes notes={notes}  setNotes={setNotes}/>
          </>
          :
          <AuthPage setUser={setUser} /> 
      }
    </main>
  );
}
