import React from 'react'
import Image from './Image'
// import Write from './Write'
// import Link from './Link'
import { connect } from 'react-redux'
import './Board.css'

class Board extends React.Component {
  addImage = (e) => {
    e.preventDefault()
    console.log('Image', e)
  }

  addWrite = (e) => {
    e.preventDefault()
    console.log('Write', e)
  }

  addLink = (e) => {
    e.preventDefault()
    console.log('Link', e)
  }

  render () {
    return (
      <div id='mood-box'>
        <form id='mood-form'>
          <input id='mood-name' type='text' placeholder='Mood name'/>
          <div id='add-item'>
            <button id="addImage" className='add-btn' onClick={ this.addImage }>Image</button>
            <button id="addWrite" className='add-btn' onClick={ this.addWrite }>Write</button>
            <button id="addLink" className='add-btn' onClick={ this.addLink }>Link</button>
          </div>
          <button id='share-btn'>Share</button>
        </form>
      </div>
    )
  }
}

// const ConnectedBoard = connect(

// )

export default Board
