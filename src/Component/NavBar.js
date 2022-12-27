import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Filter from './Filter';

const NavBar = ({handleFilter}) => {
  return (
    <Container id='nav-bar'>
      <Navbar id="box"   >
        <Container>
          <Navbar.Brand href="#">React<span id='flix' >flix</span></Navbar.Brand>
        </Container>
        <Filter handleFilter={handleFilter} />
      </Navbar>
    </Container>
  )
}

export default NavBar