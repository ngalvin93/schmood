import React, { Component } from 'react'

class Image extends Component {
  render () {
    if (this.props.props.imageLink === null) {
      // return a new image module
      return (<p>NEW IMAGE MODULE</p>)
    } else {
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
