import React from 'react'
// import Image from './Image'
// import Write from './Write'
// import Link from './Link'
import Modules from './Modules'
import { connect } from 'react-redux'
import './Board.css'

function Board (props) {
  console.log('Board props:', props)
  const ModuleMap = props.modules.map((module, idx) => (
    <Modules key={idx} {...module} />
  ))
  return (
    <div id='mood-box'>
      <form id='mood-form'>
        <input id='mood-name' type='text' placeholder='Mood name'/>
        <div id='add-item'>
          <button id="addImage" className='add-btn' onClick={ props.addImage }>Image</button>
          <button id="addWrite" className='add-btn' onClick={ props.addWrite }>Write</button>
          <button id="addLink" className='add-btn' onClick={ props.addLink }>Link</button>
        </div>
        <div>
          { ModuleMap }
        </div>
        <button id='share-btn'>Share</button>
      </form>
    </div>
  )
}

// Connnected store

const mapStateToProps = (state) => {
  console.log('mapping state to props in board component', state)
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (e) => {
      e.preventDefault()
      console.log('in the connected store....adding image')
      return dispatch({ type: 'ADD_IMAGE'})
    },
    addWrite: (e) => {
      e.preventDefault()
      console.log('in the connected store....adding write')
      return dispatch({ type: 'ADD_WRITE'})
    },
    addLink: (e) => {
      e.preventDefault()
      console.log('in the connected store....adding link')
      return dispatch({ type: 'ADD_LINK'})
  }
}}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default ConnectedBoard
