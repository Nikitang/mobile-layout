import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const elem = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(elem);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
