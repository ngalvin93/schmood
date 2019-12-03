import React from 'react'

class Image extends React.Component {
  render () {
    if (this.props.props.imageLink === null) {
      // return a new image module
      return (<p>NEW IMAGE MODULE</p>)
    } else {
    const imageLinkMap = this.props.props.imageLink.map((link, idx) => {
      return (
        <img key={idx} src={link} width='100%'></img>
      )
    })
    return imageLinkMap
    }
  }
}

export default Image
