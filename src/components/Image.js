import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'
import { connect } from 'react-redux'
import './Image.css'

class Image extends React.Component {
  state = {
    input: '',
    link: '',
    isValid: true,
    placeholder: 'Enter image URL'
  }

  handleInputChange = (e) => {
    console.log('handleinputchange')
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

  handleFocus = (e) => {
    // problem with below is that when input is on focus, it updates this.state.placeholder, when that is not needed
    // this.setState({ placeholder: '' })
    console.log('handlefocus')
    if (!this.state.input) {
      e.target.value = ''
    }
  }

  handleLoadImg = () => {
    console.log('handleloadimg')
    this.props.handleAddImage(this.state.link)
  }

  render () {
    // IF THERE IS AN IMG LINK IN THE LOCAL STATE...
    if (this.state.link) {
      // IMG
      return (
        <img className='image' src={this.state.link} onError={this.handleImgErr} onLoad={ this.handleLoadImg } width='100%' alt='blah'/>
      )
    } else {
      if (this.state.isValid) {
      // DEFAULT IMG INPUT
      console.log('default img input')
      return (
        <InputGroup className='imageInputGrp'>
          <Input value={ this.state.input === '' ? this.state.placeholder : this.state.input } onChange={ this.handleInputChange } onKeyDown={ this.handleInputKeyDown } onFocus={ this.handleFocus } />
          <InputGroupAddon addonType='append'>
            <Button onClick={ this.handleBtnClick }>Add</Button>
          </InputGroupAddon>
        </InputGroup>
      )} else {
        // INVALID IMG URL INPUT
        console.log('invalid img input')
        return (
          <InputGroup className='imageInputGrp'>
            <Input invalid value={ this.state.input === '' ? this.state.placeholder : this.state.input } onChange={ this.handleInputChange } onKeyDown={ this.handleInputKeyDown } onFocus={ this.handleFocus } />
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
