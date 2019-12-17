import React, { Component } from 'react'
import { Button } from 'reactstrap'
import './HowToUse.css'

export default class HowToUse extends Component {
  render () {
    return (
      <div id='textBox'>
        <h1>Issa scmooooood.</h1>
        <h3>Give your mood board a name.</h3>
        <h3>Visualize your ideas by placing images, text and links to your board. </h3>
        <h3>Get the link and share your schmood.</h3>
        <a href='/'><Button color='primary'>Get started</Button></a>
      </div>
    )
  }
}
