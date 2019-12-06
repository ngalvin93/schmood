import React from 'react'
import Modules from './Modules'
import { connect } from 'react-redux'
import { InputGroup, InputGroupAddon, Button, Input, ButtonGroup } from 'reactstrap'
import './Board.css'

let value = ''

function Board (props) {

  const ModuleMap = props.modules.map((module, idx) => (
    <Modules key={idx} {...module} />
  ))

  const handleKeyPress = (target) => {
    if (target.key === 'Enter') {
      props.handleUpdateName(target)
    }
  }

  return (
    <div id='mood-box'>
      <form id='mood-form'>
        <h1>{props.name}</h1>
        <InputGroup>
          <Input id='moodName' bsSize='lg' onChange={(e) => value = e.target.value} onKeyDown={ handleKeyPress } />
          <InputGroupAddon addonType='append'>
            <Button onClick={props.handleUpdateName}>Create</Button>
          </InputGroupAddon>
        </InputGroup>
        <div>
          {ModuleMap}
        </div>
        <ButtonGroup>
          <Button onClick={props.handleAddImage}>Image</Button>
          <Button onClick={props.handleAddWrite}>Write</Button>
          <Button onClick={props.handleAddLink}>Link</Button>
        </ButtonGroup>
        <Button color="primary" size="lg">Share</Button>
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
      dispatch({ type: 'ADD_IMAGE' })
    },
    handleAddWrite: (e) => {
      e.preventDefault()
      dispatch({ type: 'ADD_WRITE' })
    },
    handleAddLink: (e) => {
      e.preventDefault()
      dispatch({ type: 'ADD_LINK' })
    },
    handleUpdateName: (e) => {
      e.preventDefault()
      dispatch({ type: 'UPDATE_NAME', name: value })
      document.getElementById('moodName').value = ''
    }
  }
}

// on state change, the board will refresh
const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default ConnectedBoard
