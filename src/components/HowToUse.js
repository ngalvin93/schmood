import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'
import './HowToUse.css'

export default class HowToUse extends Component {
  render () {
    return (
      <div className='onboard'>
        <Container className='onboard-container' fluid='true'>
          <Row className='onboard-container-row d-flex'>
            <h3 className='onboard-container-text'>Give your mood board a name.</h3>
          </Row>
        </Container>
        <Container className='onboard-container' fluid='true'>
          <Row className='onboard-container-row d-flex'>
            <h3 className='onboard-container-text'>Visualize your ideas by placing images, text and links to your board.</h3>
          </Row>
        </Container>
        <Container className='onboard-container' fluid='true'>
          <Row className='onboard-container-row d-flex'>
            <h3 className='onboard-container-text'>Get the link and share your schmood.</h3>
          </Row>
        </Container>
        <Container className='onboard-container' fluid='true'>
          <Row className='onboard-container-row d-flex'>
            <h3 className='onboard-container-text'>Inspire your friends, colleagues and family.</h3>
          </Row>
        </Container>
      </div>
    )
  }
}
