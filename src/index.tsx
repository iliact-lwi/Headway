import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './scss/main.scss';

import App from './App';
import store from './store/store';

const WithProvider = (
    <Provider store={ store }>
        <App />
    </Provider>
);

const millionaire = document.getElementById('millionaire');
ReactDOM.render(WithProvider, millionaire);