import React from 'react'
import Modules from './Modules'
import { connect } from 'react-redux'
import { InputGroup, InputGroupAddon, Button, Input, Form } from 'reactstrap'
import { saveUserState } from '../firebase-service'
import './Board.css'

class Board extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    input: '',
    addItems: []
  }
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
    return this.props.modules.map((module, idx) => (<Modules key={idx} {...module} />))
  }

  handleShare = () => {
    // console.log(this.props.name)
    // console.log(this.props.modules)
    const key = saveUserState({
      name: this.props.name,
      modules: this.props.modules
    })
    // console.log('handlshare result',key)
    // console.log(`share this link: ${window.location.href + 'board/' + key}`)
    const shareBtn = document.getElementById('shareBtn')
    shareBtn.innerHTML = window.location.href + 'board/' + key 
    // let shareLink = window.location.href + 'board/' + key 
    // shareLink.select()
    // document.execCommand("copy")

  }

render () {
// WHY DOES THE BELOW NOT WORK WHEN I REMOVE CONSOLE LOG????????
  // const ModuleMap = this.props.modules.map((module, idx) => (
  //   <Modules key={idx} {...module} />
  // ))

  const AddInput = this.state.addItems.map((item, idx) => (
    <Modules key={idx} {...item} />
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
          { this.moduleMap }
        </div>
        <div>
          { AddInput }
        </div>
        <div id='addBtnGroup'>
          <Button className='addBtn' color="warning" onClick={ this.handleAddImage }>Add Image</Button>
          <Button className='addBtn' color="success" onClick={ this.handleAddWrite }>Add Text</Button>
          <Button className='addBtn' color="info" onClick={ this.handleAddLink }>Add Link</Button>
        </div>
        <Button id='shareBtn' color='primary' block onClick={this.handleShare}>Share</Button>
      </Form>
  )
}}

// maps the current state to the component via props
const mapStateToProps = (state) => {
  return state
}

// this gives the component access to dispatch actions via passing as props
const mapDispatchToProps = (dispatch) => {
  return {
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
