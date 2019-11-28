import React from 'react'
// import Image from './Image'
// import Write from './Write'
// import Link from './Link'
import './Board.css'

class Board extends React.Component {
  render () {
    return (
      <div id='mood-box'>
        <form id='mood-form'>
          <input id='mood-name' type='text' placeholder='Mood name' />
          <div id='add-item'>
            <button className='add-btn'>Image</button>
            <button className='add-btn'>Write</button>
            <button className='add-btn'>Link</button>
          </div>
          <button id='share-btn'>Share</button>
        </form>
      </div>
    )
  }
}

export default Board
