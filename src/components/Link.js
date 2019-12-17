import React from 'react'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
//import Microlink from '@microlink/react'
import { ReactTinyLink } from 'react-tiny-link'

class Link extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      link: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.setState({link: this.state.input})
      this.props.handleAddLink(this.state.input)
      e.preventDefault()
    }
  }

  handleBtnClick = () => {
    this.setState({link: this.state.input})
    this.props.handleAddLink(this.state.input)
  }

  render () {
    if (this.state.link) {
      return (
      // <Microlink url={this.state.link} size='large' media='image'/>
      <ReactTinyLink
        cardSize="small"
        showGraphic="true"
        maxLine="2"
        minLine="1"
        url={this.state.link}
      />
      )
    } else {
      return (
        <InputGroup>
          <Input onChange={ this.handleInputChange } onKeyDown={ this.handleInputKeyDown } />
          <InputGroupAddon addonType='append'>
            <Button onClick={ this.handleBtnClick }>Add</Button>
          </InputGroupAddon>
        </InputGroup>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddLink: (newLink) => {
      dispatch({ type: 'ADD_LINK', link: newLink })
    }
  }
}

const ConnectedLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default ConnectedLink
