import React from 'react'
import Modules from './Modules'
import { connect } from 'react-redux'
import { InputGroup, InputGroupAddon, Button, Input, ButtonGroup } from 'reactstrap'
import './Board.css'

class Board extends React.Component {
  state = {
    input: ''
  }

  handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.props.handleUpdateName(this.state.input)
      this.setState({input: ''})
    }
  }

  handleInputChangeEvent = (e) => {
    this.setState({input: e.target.value})
  }

  handleButton = () => {
    this.props.handleUpdateName(this.state.input)
    this.setState({input: ''})
  }

render () {

  const ModuleMap = this.props.modules.map((module, idx) => (
    <Modules key={idx} {...module} />
  ))

  return (
    <div id='mood-box'>
      <form id='mood-form'>
        <h1>{ this.props.name }</h1>
        <InputGroup>
          <Input bsSize='lg' value={ this.state.input } onChange={ this.handleInputChangeEvent } onKeyDown={ this.handleInputKeyDown } />
          <InputGroupAddon addonType='append'>
            <Button onClick={ this.handleButton }>Create</Button>
          </InputGroupAddon>
        </InputGroup>
        <div>
          {ModuleMap}
        </div>
        <ButtonGroup>
          <Button onClick={this.props.handleAddImage}>Image</Button>
          <Button onClick={this.props.handleAddWrite}>Write</Button>
          <Button onClick={this.props.handleAddLink}>Link</Button>
        </ButtonGroup>
        <Button color='primary' size='lg'>Share</Button>
      </form>
    </div>
  )
}
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
    handleUpdateName: (newName) => {
      dispatch({ type: 'UPDATE_NAME', name: newName })
    }
  }
}

// on state change, the board will refresh
const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default ConnectedBoard
