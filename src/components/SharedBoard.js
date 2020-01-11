import React from 'react'
import { withRouter } from 'react-router-dom'
import { findShareKey } from '../firebase-service'
import { Spinner } from 'reactstrap'
import RenderModules from './RenderModules'
import './Board.css'

class SharedBoard extends React.Component {
  
  state = {
      data: {},
      isLoading: true,
      error: null
    }

  componentWillMount () {
    const shareKey = this.props.match.params.id
    findShareKey(shareKey)
      .then((result) => {
        // If there is no data, the snapshot will return false when you call exists() and null when you call val() on it.
        // This should check if the result is true or false (null)
        if (result.child(shareKey).val()) {
          return result.child(shareKey).val()
        } else {
          throw new Error('Share link is not valid')
        }
      })
      .then((result) => {
        // set state
        this.setState({ data: result, isLoading: false })
      })
      .catch((error) => {
        this.setState({ error, isLoading: false })
      })
  }

  render () {
    // should have a loading state and then a "real data" state
    const { data, isLoading, error } = this.state

    if (isLoading) {
      return (
        <div>
          <Spinner type='grow' color='primary' />
        </div>
      )
    }

    if (data && !error) {
      const MappedModules = this.state.data.modules.map((item, idx) => {
        return <RenderModules key={idx} {...item} />
      })
      return (
        <div id='moodBox'>
          <h3>{this.state.data.name}</h3>
          {MappedModules}
        </div>
      )
    }

    if (error) {
      return (
        <div className='container'>
          <p id='errorText'>Whoops, that link did not work :(</p>
        </div>
      )
    }
  }
}

export default withRouter(SharedBoard)
