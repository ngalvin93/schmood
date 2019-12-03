import React from 'react'
import Modules from './Modules'
import { connect } from 'react-redux'
import './Board.css'

function Board (props) {
  const ModuleMap = props.modules.map((module, idx) => (
    <Modules key={idx} {...module} />
  ))
  return (
    <div id='mood-box'>
      <form id='mood-form'>
        <div>
          <label>Scmood name</label>
          <br/>
          <input id='mood-name' type='text'/>
        </div>
        <div>
          { ModuleMap }
        </div>
        <div id='add-item'>
          <button id="addImage" className='add-btn' onClick={ props.addImage }>Image</button>
          <button id="addWrite" className='add-btn' onClick={ props.addWrite }>Write</button>
          <button id="addLink" className='add-btn' onClick={ props.addLink }>Link</button>
        </div>
        <button id='share-btn'>Share</button>
      </form>
    </div>
  )
}

// maps the current state to the component via props
const mapStateToProps = (state) => {
  return state
}

// this gives the component access to dispatch actions via passing as props
const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (e) => {
      e.preventDefault()
      return dispatch({ type: 'ADD_IMAGE'})
    },
    addWrite: (e) => {
      e.preventDefault()
      return dispatch({ type: 'ADD_WRITE'})
    },
    addLink: (e) => {
      e.preventDefault()
      return dispatch({ type: 'ADD_LINK'})
  }
}}

// on state change, the board will refresh
const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default ConnectedBoard
