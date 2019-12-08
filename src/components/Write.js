import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

class Write extends React.Component {
  render () {
    if (this.props.writeString === null) {
      return (
        <FormGroup>
          <Label for='exampleText'>Write some text</Label>
          <Input type='textarea' name='text' id='exampleText' />
        </FormGroup>
      )
    } else {
      return (
        <FormGroup>
          <Label for='exampleText'>Write some text</Label>
          <Input type='textarea' name='text' id='exampleText' />
        </FormGroup>
      )
    }
  }
}

export default Write
