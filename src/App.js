import React from 'react'
import * as Firebase from 'firebase/app'
import 'firebase/database'
import config from './config'
import Header from './components/Header'
import Board from './components/Board'
import HowToUse from './components/HowToUse'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { incrementUser, getCurrentId, saveUserState, findShareKey } from './firebase-service'
import './App.css'
class App extends React.Component {
  constructor () {
    super()
    Firebase.initializeApp(config)
  }

  componentDidMount () {
    console.log('did mount')
    incrementUser()
    findShareKey('-Lw1jmq60JU9bML5ckwY')
  }

  render () {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Board} />
          <Route path='/how-to-use' component={HowToUse} />
        </Switch>
      </Router>
    )
  }
}

export default App
