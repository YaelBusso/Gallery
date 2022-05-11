import React from 'react';
import ReactDOM from 'react-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { configureStore, applyMiddleware, compose } from 'redux';
import store from './app/store'
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { reducers } from './reducers';

import './styles/index.css';
import App from './components/App';

// const root = ReactDOM.createRoot(document.getElementById('root'))

ReactDOM.render(
    <Provider store={store}>
    <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>
    </Provider>, 
    document.getElementById('root')
);

