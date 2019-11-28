import React from 'react'
import './Header.css'

class Header extends React.Component {
    render () {
        return (
            <nav>
                <p>SCHMOOD</p>
                <ul>
                    <li>
                        <a href='http://www.google.com'>Home</a>
                    </li>
                    <li>
                        <a>Github</a>
                    </li>
                    <li>
                        <a>How to use</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header