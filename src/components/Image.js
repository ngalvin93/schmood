import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

const AddImages = (props) => {

  const handleImageUrl = (e) => {
    console.log('~~~~~~~~~~~~~~', e.target.value)
    // this.setState()
  }

    // return a new image module
    if (props.imageLink === null) {
      return (
        <InputGroup>
          <Input bsSize="lg" onChange={handleImageUrl}/>
          <InputGroupAddon addonType="append">
            <Button>Add</Button>
          </InputGroupAddon>
        </InputGroup>
      )
    } else {
      // renders an image
      const imageLinkMap = props.imageLink.map((link, idx) => {
        return (
          <img key={idx} src={link} width='100%' />
        )
      })
      return imageLinkMap
    }
  }


//

export default AddImages
