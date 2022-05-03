import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import { LayoutContainer } from '../styled/LayoutContainer'
import { Nav, UL, NavLink } from '../styled/Nav'

const Layout = () => {
  return (
    <LayoutContainer>
      <Nav>
        <NavLink to='/'><h1>Home</h1></NavLink>
        <UL>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/blog'>Blog</NavLink>
          </li>
        </UL>
      </Nav>
      <Outlet />
    </LayoutContainer>
  )
}

export default Layout