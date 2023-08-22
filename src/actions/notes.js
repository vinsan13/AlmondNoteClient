import { CREATE, FETCH_ALL, DELETE, UPDATE } from "../constants/actionTypes";
import * as api from '../api/index.js';

export const getNotes = () => async (dispatch) => {
  try {
    const { data } = await api.getNotes();
    dispatch({type:FETCH_ALL, payload: data});

  } catch (error) {
    console.log(error);
  }
};

export const createNote = (note) => async (dispatch) => {
  try {
    const { data } = await api.createNote(note);

    dispatch({type:CREATE, payload:data});

  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    
    await api.deleteNote(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateNote = (id, updatedNote) => async (dispatch) => {
  try {
    
    const {data}  = await api.updateNote(id, updatedNote);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};