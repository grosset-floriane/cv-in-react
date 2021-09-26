import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CvContextProvider} from "./context/cvContext"

ReactDOM.render(
  <CvContextProvider>
    <App />
  </CvContextProvider>
  ,
  document.getElementById('root')
);
