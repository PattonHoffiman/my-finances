import React from 'react';
import ReactDOM from 'react-dom';
import { create } from './services/mirage';

import { App } from './App';

create();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
