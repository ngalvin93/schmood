import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

class Image extends React.Component {
  state = {
    input: '',
    link: '',
    isValid: true,
    placeholder: 'Enter image url'
  }

  handleInputChange = (e) => {
    console.log('typing in image link....', e.target.value)
    this.setState({ 
      input: e.target.value,
      isValid: true,
      placeholder: ''
     })
  }

  handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('pressed enter key...', e.target.value)
      console.log('rendering:', e.target.value)
      this.setState({ link: this.state.input })
      e.preventDefault()
      // e.target.value = ''
      // takes then renders the image
    }
  }

  handleBtnClick = (e) => {
    console.log('clicked button')
    console.log('rendering', this.state.link)
    this.setState({ link: this.state.input })
    // e.target.value = ''
    // takes this.state.link then renders the image
  }

  handleImgErr = () => {
    console.log('broken link')
    this.setState({
      input: '',
      link: '',
      isValid: false,
      placeholder: 'invalid image link'
    })
  }

  handleFocus = () => {
    console.log('focused')
    this.setState({ placeholder: '' })
  }

  handleBlur = () => {
    console.log('blur')
  }

  render () {

    // conditional
    // if this.state.link then return img
    // else return input

    if (this.state.link) {
      return (
        <img src={this.state.link} onError={this.handleImgErr} width='100%' />
      )
    } else {
      if (this.state.isValid) {
      return (
        <InputGroup>
        <Input bsSize='lg' value={ this.state.input === '' ? this.state.placeholder : this.state.input } onChange={ this.handleInputChange } onKeyDown={ this.handleInputKeyDown } onFocus={ this.handleFocus } onBlur={ this.handleBlur} />
        <InputGroupAddon addonType='append'>
          <Button onClick={ this.handleBtnClick }>Add</Button>
        </InputGroupAddon>
      </InputGroup>
      )} else {
        return (
          <InputGroup>
          <Input invalid bsSize='lg' value={ this.state.input === '' ? this.state.placeholder : this.state.input } onChange={ this.handleInputChange } onKeyDown={ this.handleInputKeyDown } onFocus={ this.handleFocus } onBlur={ this.handleBlur}/>
          <InputGroupAddon addonType='append'>
            <Button onClick={ this.handleBtnClick }>Add</Button>
          </InputGroupAddon>
        </InputGroup>
        )
      }
    }
  }
}

export default Image

// return a new image module
// if (props.imageLink === null) {
//   return (
//     <InputGroup>
//       <Input bsSize='lg' onChange={handleImageUrl} />
//       <InputGroupAddon addonType='append'>
//         <Button>Add</Button>
//       </InputGroupAddon>
//     </InputGroup>
//   )
// } else {
//   // renders an image
//   const imageLinkMap = props.imageLink.map((link, idx) => {
//     return (
//       <img key={idx} src={link} width='100%' />
//     )
//   })
//   return imageLinkMap
// }