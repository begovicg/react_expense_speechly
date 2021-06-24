import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './context/context';
import App from './App';
import './index.css';

// Wrap app inside provider state-management context
ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root')
);