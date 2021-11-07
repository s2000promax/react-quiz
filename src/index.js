import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducers'

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

//const store = createStore(rootReducer, applyMiddleware(loggerMiddleWare, thunk))
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(/*loggerMiddleWare,*/ thunk)))

// const app_redux = (
//   <Provider store={store}>
//     <App_redux />
//   </Provider>
// )







const app = (
  <Provider store = { store } >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider >
)

ReactDOM.render(app, document.getElementById('root'))
//ReactDOM.render(app_redux, document.getElementById('root'))
registerServiceWorker()
