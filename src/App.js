import React from 'react'
import Header from './components/Header'
import Board from './components/Board'
import HowToUse from './components/HowToUse'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App () {
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

export default App
