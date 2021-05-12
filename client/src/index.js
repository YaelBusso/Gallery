import React from 'react';
import ReactDOM from 'react-dom';
import SimpleReactLightbox from 'simple-react-lightbox';

import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);

