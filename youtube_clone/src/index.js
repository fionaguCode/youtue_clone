import React from 'react';
// import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

// const root = ReactDOM.creatRoot(document.getElementById('root'));
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
