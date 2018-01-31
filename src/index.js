import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import {createLogger} from 'redux-logger';

// import logger from 'redux-logger'
// const store = createStore(
//     reducer,
//     applyMiddleware(logger)
// )

render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
)
