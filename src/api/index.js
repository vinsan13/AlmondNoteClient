import axios from 'axios'

const BASE_URL = 'https://almond-note.onrender.com';

export const getNotes = () => axios.get(`${BASE_URL}/note`);
export const createNote = (note) => axios.post(`${BASE_URL}/note`, note);
export const deleteNote = (id) => axios.delete(`${BASE_URL}/note/${id}`);
export const updateNote = (id, updatedNote) => axios.patch(`${BASE_URL}/note/${id}`, updatedNote);