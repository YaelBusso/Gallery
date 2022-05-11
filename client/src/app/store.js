// import {compose, applyMiddleware} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import { reducers } from '../reducers';
// import thunk from 'redux-thunk';
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
    reducer: {
      counter: counterReducer,
    },  
  })
//const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));


// export default configureStore({
//     reducer: {
//       counter: counterReducer,
//     },  
//   })