import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SquareItems from './components/SquareItems';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <SquareItems/> */}
  </React.StrictMode>
);

