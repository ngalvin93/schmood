import React from 'react'

class Write extends React.Component {
  render () {
    if (this.props.props.writeString === null) {
      return (
        <div>
          <input type='text' placeholder='Enter some text' />
        </div>
      )
    } else {
      return (
        <div>
          <h1>{ this.props.props.writeString }</h1>
        </div>
      )
    }
  }
}

export default Write
