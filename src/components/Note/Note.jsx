import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNotes, deleteNote, updateNote } from '../../actions/notes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faTrash } from '@fortawesome/free-solid-svg-icons'
import { CircularProgress } from '@mui/material'
import Popup from '../Popup/Popup';
import Pagination from '../Pagination/Pagination';
import './Note.css'




const Discover = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch])

  const notes = useSelector((state) => state.notes);
  const sortedNotes = [...notes].sort((a, b) => (b.pinned - a.pinned));

  const [noteData, setNoteData] = useState({ title: '', tagline: '', body: '', pinned: false });
  const [isItNew, setIsItNew] = useState(true)
  const [isPopupOpen, setIsPopupOpen] = useState(false);



  const [currentPage, setCurrentPage] = useState(0);
  const notesPerPage = 6;

  const chunkNotes = (notes) => {
    const chunkedNotes = [];
    for (let i = 0; i < notes.length; i += notesPerPage) {
      chunkedNotes.push(notes.slice(i, i + notesPerPage));
    }
    return chunkedNotes;
  };
  const chunkedNotes = chunkNotes(sortedNotes);




  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const pinOrUnpin = (note) => {
    dispatch(updateNote(note._id, { ...note, pinned: !note.pinned }));
  }

  const readOrUpdate = (note) => {
    setNoteData(note)
    setIsItNew(false)
    setIsPopupOpen(true);
  }

  const openPopup = () => {
    setIsItNew(true);
    setNoteData({ title: '', tagline: '', body: '', pinned: false });
    setIsPopupOpen(true);
  };



  return (
    <div className='discover'>

      <div className='discover_header'>
        <h1 className='discover_title'>Your Jottings</h1>
      </div>


      {!chunkedNotes.length ? <div className='loader_box'><CircularProgress className='loader' /></div> : (
        <div className='discover_feed' >

          {chunkedNotes[currentPage].map((note, id) => (

            <div className='discover_feed_card' key={id} >
              <h3 className='card_title' onClick={() => readOrUpdate(note)}> {note.title} </h3>
              <hr />
              <FontAwesomeIcon className='pin' onClick={() => pinOrUnpin(note)} icon={faThumbtack} style={{ color: note.pinned ? '#0E2954' : '#C1ECE4' }} />
              <h5 className="card_tagline" onClick={() => readOrUpdate(note)}>{note.tagline}</h5>
              <p className="card_body" onClick={() => readOrUpdate(note)}>{note.body.length > 75 ? note.body.slice(0, 75) + '...' : note.body}</p>
              <FontAwesomeIcon className='delicon' onClick={() => dispatch(deleteNote(note._id))} icon={faTrash} />
            </div>

          ))}

        </div>
      )}



      <div className='create'>
        <Pagination
          totalPages={chunkedNotes.length}
          currentPage={currentPage}
          onPageChange={goToPage}
        />
        <button className="createBtn" onClick={openPopup}>
          Create
        </button>
      </div>

      {isPopupOpen && (<Popup isItNew={isItNew} setIsPopupOpen={setIsPopupOpen} noteData={noteData} setNoteData={setNoteData} />)}
    </div>
  )
}

export default Discover