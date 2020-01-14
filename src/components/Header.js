import React, { useState } from 'react'
import './Header.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

function Header (props) {
  console.log(props.name.props.name)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  let navClass = ''
  let navColor = ''
  if (props.name.props.name) {
    navClass = 'navbar fixed-top'
    navColor = 'dark'
  } else {
    navClass = 'navbar'
    navColor = 'light'
  }

  return (
    <div>
      <Navbar className={ navClass } light expand='md'>
        <NavbarBrand href='/'>SCHMOOD</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink href='/how-to-use'>How to use</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/ngalvin93/schmood'>Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
