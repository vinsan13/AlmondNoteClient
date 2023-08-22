import React from 'react';
import ReactDom from 'react-dom/client'
import {Provider} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './reducers';
import App from './App'

const store = configureStore({reducer:rootReducer});



ReactDom.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);