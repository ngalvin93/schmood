import React from 'react'
import Modules from './Modules'
import { connect } from 'react-redux'
import { InputGroup, InputGroupAddon, Button, ButtonGroup, Input, Form } from 'reactstrap'
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

  handleShareBtn = () => {
    this.props.handleUpdateName(this.state.input)
    this.setState({ input: '', isNamed: true })
  }

  handleAddModule = (e) => {
    const moduleType = parseInt(e.target.name, 10)
    this.setState({ addItems: [...this.state.addItems, { type: moduleType }]})
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

  const AddInput = this.state.addItems.map((item, idx) => (<Modules key={idx} {...item} />))

    if (!this.state.isNamed) {
      return (
        <div id='input-container'>
          <Form id='nameBoard'>
            <InputGroup>
              <Input placeholder='Enter mood name' value={ this.state.input } onChange={ this.handleInputChangeEvent } onKeyDown={ this.handleInputKeyDown } onClick={ this.handleInputClick } onBlur={ this.handleInputBlur } />
              <InputGroupAddon addonType='append'>
                <Button id='createBtn' onClick={ this.handleShareBtn }>Create</Button>
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
          <ButtonGroup id='addBtnGroup'>
            <Button className='addBtn' name='1' color="secondary" onClick={ this.handleAddModule }>Add Image</Button>
            <Button className='addBtn' name='2' color="secondary" onClick={ this.handleAddModule }>Add Text</Button>
            <Button className='addBtn' name='3' color="secondary" onClick={ this.handleAddModule }>Add Link</Button>
          </ButtonGroup>
            <Button id='shareBtn' color='primary' block onClick={this.handleShare}>Share Schmood</Button>
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
