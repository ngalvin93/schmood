import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducer'
import App from './App'
import * as Firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from './config'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'dotenv/config'

const store = createStore(rootReducer)
// dotenv.config()

// Firebase.initializeApp(firebaseConfig)
// console.log('helloooo',process.env.FIREBASE_DATABASEURL)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
