import sendRequest from './send-request'

const BASE_URL = '/api/notes'

export function getUserNotes(userId) {
    return sendRequest(`${BASE_URL}?userId=${userId}`, 'GET')
}

export function createNewNote(noteData) {
    return sendRequest(BASE_URL, 'POST', noteData)
}

export function updateNoteById(noteId, updatedNoteData) {
    const url = `${BASE_URL}/${noteId}`
    return sendRequest(url, 'PUT', updatedNoteData)
}

export function deleteNoteById(noteId) {
    const url = `${BASE_URL}/${noteId}`
    return sendRequest(url, 'DELETE')
}

