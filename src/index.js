import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import './index.css';

ReactDOM.render(<App />, 
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
);
