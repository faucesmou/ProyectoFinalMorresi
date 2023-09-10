import React from 'react';
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar
    className="w-100"
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
    >
      <Container>
        <Navbar.Brand>Equinox</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Novedades</Nav.Link>
            <Nav.Link href="#pricing">Oportunidades</Nav.Link>
            <NavDropdown title="Información" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Lo que hay que saber</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categorías</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Ropa para niños</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="numeroHarcodeado">Oportunidades</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className= 'perfiles' href="#deets">Perfiles</Nav.Link>
          </Nav>
    <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
