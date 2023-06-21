import { useEffect, useState } from 'react'
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'
import './NotePage.css'

export default function NotePage() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('/api/notes')
      .then(response => response.json())
      .then(data => setNotes(data))
      .then(error => console.error(error))
  }, [])
  
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