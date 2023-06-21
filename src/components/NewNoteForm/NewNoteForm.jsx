
import './NewNoteForm.css'

export default function NewNoteForm() {
    return (
        <div>
            <h3>NewNoteForm</h3>
            <textarea name="new-note" id="new-note" cols="60" rows="8"></textarea>
            <button>Add Note</button>
        </div>
    )
}