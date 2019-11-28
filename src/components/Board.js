import React from 'react'
import Image from './Image'
import Write from './Write'
import Link from './Link'
import './Board.css'

class Board extends React.Component {
    render () {
        return (
            <div id="mood-form">
                <form>
                    <input id='mood-name' type='text' placeholder='Mood name'></input>
                    <button>Image</button>
                    <Image />
                    <button>Write</button>
                    <Write />
                    <button>Link</button>
                    <Link />
                    <button>Share</button>
                </form>
            </div>
        )
    }
}

export default Board