import React from 'react'
import { FormGroup, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'

class Write extends React.Component {
  state = {
    input: '',
    text: ''
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.setState({text: this.state.input})
      this.props.handleAddText(this.state.input)
    }
  }

  handleBtnClick = () => {
    this.setState({text: this.state.input})
    this.props.handleAddText(this.state.input)
  }

  render () {
    if (this.state.text) {
      return (
        <h2>{ this.state.text }</h2>
      )
    } else {
      return (
        <FormGroup>
        <Input type='textarea' placeholder='Write some text' name='text' onChange={ this.handleInputChange } onKeyDown={ this.handleInputKeyDown } />
        <Button onClick={ this.handleBtnClick } >Save</Button>
      </FormGroup>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddText: (newText) => {
      dispatch({ type: 'ADD_TEXT', text: newText })
    }
  }
}

const ConnectedText = connect(
  mapStateToProps,
  mapDispatchToProps
)(Write)

export default ConnectedText
