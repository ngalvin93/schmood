import React from 'react'
import './Header.css'

class Header extends React.Component {
    render () {
        return (
            <div>
                <p>SCHMOOD</p>
                <nav>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Github</a></li>
                        <li><a href='#'>How to use</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header