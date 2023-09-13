import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Imagem from './componets/imagem/Imagem';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
   <Imagem/>
  </React.StrictMode>
);


reportWebVitals();

