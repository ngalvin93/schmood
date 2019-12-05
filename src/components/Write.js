import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

class Write extends React.Component {
  render () {
    if (this.props.props.writeString === null) {
      return (
        <FormGroup>
          <Label for='exampleText'>Write some text</Label>
          <Input type='textarea' name='text' id='exampleText' />
        </FormGroup>
      )
    } else {
      return (
        <div>
          <h1>{this.props.props.writeString}</h1>
        </div>
      )
    }
  }
}

export default Write
