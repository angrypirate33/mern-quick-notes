const express = require('express')
const router = express.Router()
const notesCtrl = require('../../controllers/api/notes')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', notesCtrl.index)
router.post('/', ensureLoggedIn, notesCtrl.createNote)
router.get('/:id/edit', notesCtrl.editNote)
router.put('/:id', notesCtrl.updateNote)
router.delete('/:id', notesCtrl.deleteNote)

module.exports = router