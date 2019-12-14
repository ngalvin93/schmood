import React from 'react'
import * as Firebase from 'firebase/app'
import 'firebase/database'
import config from './config'
import Header from './components/Header'
import Board from './components/Board'
import HowToUse from './components/HowToUse'
import SharedBoard from './components/SharedBoard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { incrementUser, findShareKey } from './firebase-service'
import './App.css'
class App extends React.Component {
  constructor () {
    super()
    Firebase.initializeApp(config)
  }

  componentDidMount () {
    console.log('did mount')
    incrementUser()
    findShareKey('-Lw4NOkwVE6iXOMO3VRk')
  }

  render () {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Board} />
          <Route path='/how-to-use' component={HowToUse} />
          <Route path='/board/:id' component={SharedBoard} />
        </Switch>
      </Router>
    )
  }
}

export default App
