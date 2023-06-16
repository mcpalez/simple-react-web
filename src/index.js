import React from 'react';

import {createRoot} from 'react-dom/client';

import App from './App';
import '../node_modules/bootstrap/scss/bootstrap.scss';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <App />
);