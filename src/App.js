import React from 'react'
import Header from './components/Header'
import Board from './components/Board'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <Router>
      <Header />
      <Board />
    </Router>
  )
}

export default App
