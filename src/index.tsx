import React from 'react';
import ReactDOM from 'react-dom';

import './slyles/reset.scss';
import './slyles/variables.scss';
import './slyles/mixins.scss';
import './slyles/fonts.scss';

import './slyles/index.scss';

import { App } from './page/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
