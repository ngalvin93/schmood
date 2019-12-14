import React from 'react'
import { withRouter } from 'react-router-dom'
import { findShareKey } from '../firebase-service'
//import Modules from './Modules'

class SharedBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            isLoading: true
        }
    }

    componentWillMount () {
        // pop off the request
        let shareKey = this.props.match.params.id
        findShareKey(shareKey)
            .then((result) => {
                const resultObj = result.child(shareKey).val()
                console.log('WHATTTTTT', resultObj)
                this.setState({ data: resultObj })
                console.log('state data', this.state.data)
            })
    }

    render() {
        // should have a loading state and then a "real data" state
        return (
            <div>
                <h1>wowza</h1>
            </div>
        )
    }
}

export default withRouter(SharedBoard)
