import React from 'react';
import styled from 'styled-components';
import RightNav from '../RightNav';
import Burger from '../Burger';

const Nav = styled.nav`

width:100%;
height:55px;
padding: 0 20px;
display:flex;
justify-content: space-between;


`;


const NavBar = ({
}) => {

   return <Nav>
  <Burger />
   </Nav>
}

export default NavBar