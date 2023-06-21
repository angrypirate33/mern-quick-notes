const Note = require('../../models/note') 

function index(req, res, next) {
    Note.find({ user: req.user._id })
        .then(notes => {
           res.json(notes) 
        })
        .catch(next)
}

async function createNote(req, res, next) {
    try {
        const { text } = req.body
        const userId = req.user._id

        const newNote = new Note({
            text,
            user: userId,
        })
        
        const savedNote = await newNote.save()
  
        res.json(savedNote)
    } 
    catch (error) {
      next(error)
    }
}

function editNote(req, res, next) {

}

function updateNote(req, res, next) {

}

function deleteNote(req, res, next) {

}

module.exports = {
    index,
    createNote,
    editNote,
    updateNote,
    deleteNote
}