import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.createElement("button",{ //soft react js shu
  //   onClick:()=>alert('Siz robot emasligingizni tasdiqlang')},
  //   "Click me And not robot"),
  //   document.getElementById('root')
      <React.StrictMode>
        <App />
      </React.StrictMode>
);


