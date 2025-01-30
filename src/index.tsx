import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import YandexTranslate from './translate/tr';

const elem = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(elem);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <YandexTranslate />
            <App />
        </BrowserRouter>
    </Provider>
);
