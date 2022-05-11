import React from 'react';
import ReactDOM from 'react-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import App from './components/App';

import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
    <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>
    </Provider>, 
    document.getElementById('root')
);

