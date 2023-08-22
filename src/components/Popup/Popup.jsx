import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { createNote, updateNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';
import './Popup.css'


const Popup = ({isItNew, setIsPopupOpen, noteData, setNoteData}) => {

    const dispatch = useDispatch();
    
    
    

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isItNew) dispatch(createNote(noteData));
        else dispatch(updateNote(noteData._id,noteData));
        closePopup();
    }

    return (
        <div className="popup">
            <div className="popup-content">
                <div className='popup-header'>
                <h2>{isItNew? 'NEW' : 'UPDATE'} NOTE</h2>
                <FontAwesomeIcon onClick={closePopup} className='closeIcon' icon={faXmark} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div id='title'>
                        <input required className='field' value={noteData.title} onChange={(e) => setNoteData({ ...noteData, title: e.target.value })} type="text" name="title" placeholder='Title' />
                    </div>
                    <div id='tagline'>
                        <input required className='field' value={noteData.tagline} onChange={(e) => setNoteData({ ...noteData, tagline: e.target.value })} type="text" name="tagline" placeholder='Tagline' />
                    </div>

                    <div id='body'>
                        <textarea required rows="8" cols="50" className='field' value={noteData.body} onChange={(e) => setNoteData({ ...noteData, body: e.target.value })} type="text" name="body" placeholder='Body'>
                        </textarea>
                    </div>

                    <div>
                        <button className='saveBtn' type='submit'>{isItNew? 'Add' : 'Save'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Popup