import React from 'react'
import Header from './components/Header'
import Board from './components/Board'
import HowToUse from './components/HowToUse'
import SharedBoard from './components/SharedBoard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as Firebase from 'firebase/app'
import 'firebase/database'
import firebaseConfig from './config'
class App extends React.Component {

  componentDidMount () {
    Firebase.initializeApp(firebaseConfig)
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
