import { useEffect, useState } from 'react'
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'
import './NotePage.css'

export default function NotePage({ user }) {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchUserNotes = async () => {
      try {
        const response = await fetch(`/api/notes/?userId=${user._id}`);
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserNotes();
  }, [user]);
  
  return (
    <div>
      <h1>NotePage</h1>
      <NewNoteForm setNotes={setNotes} />
      <div className='note-list'>
        {notes.map(note => (
          <div key={note._id} className='note-item'>
            <p>{note.text}</p>
            <p>Created at: {new Date(note.createdAt).toLocaleDateString('en-US')}</p>
          </div>
        ))}
      </div>
    </div>
  )
}