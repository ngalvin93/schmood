import React from 'react'
import Modules from './Modules'
import { connect } from 'react-redux'
import { InputGroup, InputGroupAddon, Button, Input, Form } from 'reactstrap'
import { saveUserState } from '../firebase-service'
import './Board.css'

class Board extends React.Component {
  
  state = {
    input: '',
    addItems: [],
    isNamed: false
  }

  handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.props.handleUpdateName(this.state.input)
      this.setState({ input: '', isNamed: true })
    }
  }

  handleInputChangeEvent = (e) => {
    this.setState({ input: e.target.value })
  }

  handleInputClick = (e) => {
    if (!this.state.input) {
      e.target.placeholder = ''
    }
  }

  handleInputBlur = (e) => {
    if (!this.state.input) {
      e.target.placeholder = 'Enter mood name'
    }
  }

  handleBtn = () => {
    this.props.handleUpdateName(this.state.input)
    this.setState({ input: '', isNamed: true })
  }

  handleAddImage = () => {
    this.setState({ addItems: [...this.state.addItems, { type: 1 }]})
  }

  handleAddWrite = () => {
    this.setState({ addItems: [...this.state.addItems, { type: 2 }]})
  }

  handleAddLink = () => {
    this.setState({ addItems: [...this.state.addItems, { type: 3 }]})
  }

  moduleMap = () => {
    return this.props.modules.map((module, idx) => <Modules key={idx} {...module} />)
  }

  handleShare = () => {
    const key = saveUserState({
      name: this.props.name,
      modules: this.props.modules
    })
    const shareBtn = document.getElementById('shareBtn')
    var dummy = document.createElement("textarea")
    document.body.appendChild(dummy)
    dummy.value = window.location.href + 'board/' + key
    dummy.select()
    document.execCommand("copy")
    document.body.removeChild(dummy)
    shareBtn.innerHTML = 'Copied link to clipboard!' 
  }

render () {

  const AddInput = this.state.addItems.map((item, idx) => (
    <Modules key={idx} {...item} />
  ))

    if (!this.state.isNamed) {
      return (
        <div id='input-container'>
          <Form id='nameBoard'>
            <InputGroup>
              <Input placeholder='Enter mood name' value={ this.state.input } onChange={ this.handleInputChangeEvent } onKeyDown={ this.handleInputKeyDown } onClick={ this.handleInputClick } onBlur={ this.handleInputBlur } />
              <InputGroupAddon addonType='append'>
                <Button onClick={ this.handleBtn }>Create</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
        </div>
      )
    } else {
      return (
        <Form id='moodBox'>
        <h3>{ this.props.name }</h3>
        <div>
          { this.moduleMap }
        </div>
        <div>
          { AddInput }
        </div>
        <div id='addBtnGroup'>
          <Button className='addBtn' color="warning" onClick={ this.handleAddImage }>Image</Button>
          <Button className='addBtn' color="success" onClick={ this.handleAddWrite }>Text</Button>
          <Button className='addBtn' color="info" onClick={ this.handleAddLink }>Link</Button>
        </div>
        <Button id='shareBtn' color='primary' block onClick={this.handleShare}>Share</Button>
      </Form>
      )
    }
}}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateName: (newName) => dispatch({ type: 'UPDATE_NAME', name: newName })
  }
}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default ConnectedBoard
