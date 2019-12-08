import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'
import { connect } from 'react-redux'

class Image extends React.Component {
  state = {
    input: '',
    link: '',
    isValid: true,
    placeholder: 'Enter image URL'
  }

  handleInputChange = (e) => {
    this.setState({ 
      input: e.target.value,
      isValid: true,
      placeholder: ''
    })
  }

  handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.setState({ link: this.state.input })
      e.preventDefault()
    }
  }

  handleBtnClick = () => {
    this.setState({ link: this.state.input })
  }

  handleImgErr = () => {
    this.setState({
      input: '',
      link: '',
      isValid: false,
      placeholder: 'Invalid image link'
    })
  }

  handleFocus = () => {
    this.setState({ placeholder: '' })
  }

  handleLoadImg = () => {
    this.props.handleAddImage(this.state.link)
  }

  render () {
    if (this.state.link) {
      // IMG
      return (
        <img src={this.state.link} onError={this.handleImgErr} onLoad={ this.handleLoadImg } width='100%' alt='blah'/>
      )
    } else {
      if (this.state.isValid) {
      // DEFAULT IMG INPUT
      return (
        <InputGroup>
        <Input bsSize='lg' value={ this.state.input === '' ? this.state.placeholder : this.state.input } onChange={ this.handleInputChange } onKeyDown={ this.handleInputKeyDown } onFocus={ this.handleFocus } />
        <InputGroupAddon addonType='append'>
          <Button onClick={ this.handleBtnClick }>Add</Button>
        </InputGroupAddon>
      </InputGroup>
      )} else {
        // INVALID IMG URL INPUT
        return (
          <InputGroup>
          <Input invalid bsSize='lg' value={ this.state.input === '' ? this.state.placeholder : this.state.input } onChange={ this.handleInputChange } onKeyDown={ this.handleInputKeyDown } onFocus={ this.handleFocus } />
          <InputGroupAddon addonType='append'>
            <Button onClick={ this.handleBtnClick }>Add</Button>
          </InputGroupAddon>
        </InputGroup>
        )
      }
    }
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddImage: (validImgLink) => {
      dispatch({ type: 'ADD_IMAGE', link: validImgLink })
    }
  }
}

const ConnectedImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Image)

export default ConnectedImage
