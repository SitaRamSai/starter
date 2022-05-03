import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
  color: white;
  background: #e0ebeb;
  height: 80px;
  align-items: center;
  
`;

export const UL = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`

export const NavLink = styled(Link)`
    color: #000;
    text-decoration: none;
`;

