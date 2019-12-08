import React from 'react'
import Modules from './Modules'
import { connect } from 'react-redux'
import { InputGroup, InputGroupAddon, Button, Input, Form } from 'reactstrap'
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

  handleBtn = () => {
    this.props.handleUpdateName(this.state.input)
    this.setState({input: ''})
  }

render () {

  const ModuleMap = this.props.modules.map((module, idx) => (
    <Modules key={idx} {...module} />
  ))

  return (
      <Form id='mood-box'>
        <h3>{ this.props.name }</h3>
        <InputGroup>
          <Input placeholder ='Enter mood name' value={ this.state.input } onChange={ this.handleInputChangeEvent } onKeyDown={ this.handleInputKeyDown } />
          <InputGroupAddon addonType='append'>
            <Button onClick={ this.handleBtn }>Create</Button>
          </InputGroupAddon>
        </InputGroup>
        <div>
          { ModuleMap }
        </div>
        <div id='addBtnGroup'>
          <Button className='addBtn' color="warning" onClick={ this.props.handleAddImage }>Add Image</Button>
          <Button className='addBtn' color="success" onClick={ this.props.handleAddWrite }>Add Text</Button>
          <Button className='addBtn' color="info" onClick={ this.props.handleAddLink }>Add Link</Button>
        </div>
        <Button id='shareBtn' color='primary' block>Share</Button>
      </Form>
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
