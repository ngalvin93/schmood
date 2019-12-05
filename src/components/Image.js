import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

class Image extends Component {
  render () {
    // return a new image module
    if (this.props.props.imageLink === null) {
      return (
        <InputGroup>
          <Input bsSize="lg"/>
          <InputGroupAddon addonType="append">
            <Button>Add</Button>
          </InputGroupAddon>
        </InputGroup>
      )
    } else {
      // renders an image
      const imageLinkMap = this.props.props.imageLink.map((link, idx) => {
        return (
          <img key={idx} src={link} width='100%' />
        )
      })
      return imageLinkMap
    }
  }
}

export default Image
