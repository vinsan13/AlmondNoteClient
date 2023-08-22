import React from 'react'



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed/Feed'

const App = () => {
    
    
    

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Feed />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App