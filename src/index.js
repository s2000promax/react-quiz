import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import App_redux from './App_redux'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import Thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer'

//============MiddleWare=====Start
// function loggerMiddleWare(store) {
//   return function (next) {
//     return function (action) {
//       const result = next(action)
//       console.log('MiddleWare', store.getState())
//       return result
//     }
//   }
// }

//with ES6

const loggerMiddleWare = store => next => action => {
  const result = next(action)
       console.log('MiddleWare ', store.getState())
      return result
}
//===========MidleWare======End

//const store = createStore(rootReducer, applyMiddleware(loggerMiddleWare, Thunk))
// const middleware = {loggerMiddleWare, Thunk}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleWare, Thunk)))

const app_redux = (
  <Provider store={store}>
    <App_redux />
  </Provider>
)







const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

//ReactDOM.render(app, document.getElementById('root'))
ReactDOM.render(app_redux, document.getElementById('root'))
registerServiceWorker()
