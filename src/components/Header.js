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

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>SCHMOOD</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/'>Create Schmood</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>How to use</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/ngalvin93/schmood'>Github Repo</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
