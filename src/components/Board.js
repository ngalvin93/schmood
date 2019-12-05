import React from 'react'
import Modules from './Modules'
import { connect } from 'react-redux'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'
import './Board.css'

function Board (props) {
  const ModuleMap = props.modules.map((module, idx) => (
    <Modules key={idx} {...module} />
  ))
  return (
    <div id='mood-box'>
      <form id='mood-form'>
        <h1>{props.name}</h1>
        <InputGroup>
          <Input id='moodName' bsSize="lg" />
          <InputGroupAddon addonType="append">
            <Button onClick={props.handleUpdateName}>Create</Button>
          </InputGroupAddon>
        </InputGroup>
        <div>
          {ModuleMap}
        </div>
        <div id='add-item'>
          <button id='addImage' className='add-btn' onClick={props.handleAddImage}>Image</button>
          <button id='addWrite' className='add-btn' onClick={props.handleAddWrite}>Write</button>
          <button id='addLink' className='add-btn' onClick={props.handleAddLink}>Link</button>
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
    handleAddImage: (e) => {
      e.preventDefault()
      return dispatch({ type: 'ADD_IMAGE' })
    },
    handleAddWrite: (e) => {
      e.preventDefault()
      return dispatch({ type: 'ADD_WRITE' })
    },
    handleAddLink: (e) => {
      e.preventDefault()
      return dispatch({ type: 'ADD_LINK' })
    },
    handleUpdateName: (e) => {
      e.preventDefault()
      console.log('redcuucer')
      const moodName = document.getElementById('moodName')
      return dispatch({ type: 'UPDATE_NAME', name: moodName.value })
    }
  }
}

// on state change, the board will refresh
const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default ConnectedBoard
