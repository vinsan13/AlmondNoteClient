import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Note from '../Note/Note'
import Reminder from '../Reminder/Reminder'



import './Feed.css'

const Feed = () => {
   const [currentTab, setCurrentTab] = useState("Note");

    return (
        <div>
            <div className='container'>
                <Navbar setCurrentTab={setCurrentTab}/>
                {currentTab==="Note"? <Note/> : <Reminder />}
            </div>
            
        </div>
    )
}

export default Feed