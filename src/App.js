import React from 'react'
import * as Firebase from 'firebase/app'
import 'firebase/database'
import config from './config'
import Header from './components/Header'
import Board from './components/Board'
import HowToUse from './components/HowToUse'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { incrementUser, getCurrentId, saveUserState } from './firebase-service'
import './App.css'
// import { get } from 'http'
class App extends React.Component {
  constructor () {
    super()
    Firebase.initializeApp(config)
    this.state = {
      image: 'asdasdasd',
      link: 'www.asdasdasd.com'
    }
  }

  componentDidMount () {
    console.log('did mount')
    incrementUser()
    getCurrentId()
    saveUserState(this.state)
  }

  componentDidUpdate () {
    console.log('did update')
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
