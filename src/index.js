import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebaseObject, { FirebaseContext } from './config/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={firebaseObject}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

