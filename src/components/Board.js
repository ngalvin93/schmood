import React from 'react'
import './Board.css'

class Board extends React.Component {
    render () {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" placeholder="Interior samples"></input>
                    <label>Name</label>
                    <input type="text" placeholder="Interior samples"></input>
                    <label>Links</label>
                    <input type="text" placeholder="Interior samples"></input>
                    <label>Email</label>
                    <input type="text" placeholder="Interior samples"></input>
                    <button>Copy link</button>
                </form>
            </div>
        )
    }
}

export default Board