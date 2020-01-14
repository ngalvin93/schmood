import React from 'react'
import Header from './components/Header'
import Board from './components/Board'
import HowToUse from './components/HowToUse'
import SharedBoard from './components/SharedBoard'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class App extends React.Component {
  render () {
    return (
      <Router>
        <Header name={ this } />
        <Switch>
          <Route path='/' exact component={Board} />
          <Route path='/how-to-use' component={HowToUse} />
          <Route path='/board/:id' component={SharedBoard} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => state

const ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp
