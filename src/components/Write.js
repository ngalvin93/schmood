import React from 'react'
import { FormGroup, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'

class Write extends React.Component {
  state = {
    input: '',
    text: ''
  }

  handleInputChange = (e) => {
    console.log('input change...')
    console.log(e.target.value)
    this.setState({ input: e.target.value })
  }

  handleBtnClick = () => {
    const newText = this.state.input
    this.setState({text: newText})
    this.props.handleAddText(newText)
  }

  render () {
    if (this.state.text) {
      return (
        <h2>{ this.state.text }</h2>
      )
    } else {
      return (
        <FormGroup>
        <Input type='textarea' placeholder='Write some text' name='text' onChange={ this.handleInputChange } />
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
