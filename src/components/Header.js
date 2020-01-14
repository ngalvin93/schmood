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
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  if (props.name.props.name) {
    return (
      <Navbar className='navbar' light expand='md'>
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
    )
  } else {
    return (
      <Navbar className='navbar fixed-top' dark expand='md'>
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
    )
  }
}

export default Header
