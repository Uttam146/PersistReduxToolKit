import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  const noOfCart = useSelector(state => state.cart);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Redux ToolKit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav>
        <Nav.Link to="/product" as={Link}>Product</Nav.Link>
        </Nav>
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <Nav.Link to="/cart" as={Link}>My Cart {noOfCart.length}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;