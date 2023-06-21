import { useState } from 'react'
import { createNewNote } from '../../utilities/notes-api'
import './NewNoteForm.css'

export default function NewNoteForm() {

    const [noteText, setNoteText] = useState('')

    const handleAddNote = () => {
        createNewNote({ text: noteText }) 
            .then(newNote => {
                setNoteText('');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleNoteTextChange = evt => {
        setNoteText(evt.target.value)
    }

    return (
        <div>
            <h3>NewNoteForm</h3>
            <textarea 
                name="new-note" 
                id="new-note" 
                cols="60" 
                rows="8"
                value={noteText}
                onChange={handleNoteTextChange}
            ></textarea>
            <button onClick={handleAddNote}>Add Note</button>
        </div>
    )
}