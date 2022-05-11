import React from 'react';
import ReactDOM from 'react-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import imagesReducer from "./features/images";
// import thunk from 'redux-thunk';
// import { reducers } from './reducers';
//import { configureStore, applyMiddleware, compose } from 'redux';

import './styles/index.css';
import App from './components/App';

// const root = ReactDOM.createRoot(document.getElementById('root'))

const store = configureStore({
  reducer: {
    images: imagesReducer
  },
});

ReactDOM.render(
    <Provider store={store}>
    <SimpleReactLightbox>
    <App />
    </SimpleReactLightbox>
    </Provider>, 
    document.getElementById('root')
);

