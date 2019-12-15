import React from 'react'
import { withRouter } from 'react-router-dom'
import { findShareKey } from '../firebase-service'
import RenderModules from './RenderModules'

class SharedBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      isLoading: true
    }
  }

  componentWillMount () {
    // pop off the request
    const shareKey = this.props.match.params.id
    findShareKey(shareKey)
      .then((result) => {
        const resultObj = result.child(shareKey).val()
        this.setState({ data: resultObj, isLoading: false })
        console.log('modules array data:', this.state.data.modules)
        console.log('name string data:', this.state.data.name)
      })
      .catch(error => console.error(error))
  }

  render () {
    // should have a loading state and then a "real data" state
    if (this.state.isLoading) {
      return (
        <h1>LOADING</h1>
      )
    } else {
    const MappedModules = this.state.data.modules.map(item => {
        return <RenderModules {...item} />
    })
      return (
        <div id='mood-box'>
          <h3>{ this.state.data.name }</h3>
          { MappedModules }
        </div>
      )
    }
  }
}

export default withRouter(SharedBoard)
