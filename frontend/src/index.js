import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import styles files
import "./styles/global.css";
import "./styles/nodes.css";
import "./styles/toolbar.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

