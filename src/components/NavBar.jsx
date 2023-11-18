import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { ThemeProvider, ThemeContext, themes  } from '../ThemeContext'

function CollapsibleExample() {

  const { theme, cambioTema } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <Navbar
      className="w-100"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>Houdini</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink as={Link} to="/category/electrodomesticos">
              <Nav.Link  href="#pricing">Electrodomésticos</Nav.Link>
            </NavLink>
            <NavLink  as={Link} to="/category/hogar">
              <Nav.Link href="#pricing">Hogar</Nav.Link>
            </NavLink>
            <NavDropdown title="Información" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={cambioTema} >
                Modo Oscuro
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Productos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categorías</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Promociones
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink  as={Link} to="/category/tecnologia">
              <Nav.Link href="#pricing">Tecnología</Nav.Link>
            </NavLink>
          </Nav>
          <Nav>
            <Nav.Link  as={Link} to="/cart" className="perfiles" href="#deets">
              Carrito
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
