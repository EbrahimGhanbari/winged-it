import React from 'react';

import { Button, Navbar, Nav } from 'react-bootstrap';

import "./NavbarTop.scss";

const NavbarTop = ({ user }) => {

  return (
    <Navbar className="row" fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand id="logo" href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link id="home" href="/home">Home</Nav.Link>
          <Nav.Link id="search" href="/search">Search Recipe</Nav.Link>
          <Nav.Link href="#">Seasonal Foods</Nav.Link>
          <Nav.Link href="/map">Farmers's Market</Nav.Link>

          { !user.loggedIn && <Nav.Link id="sign-in" href="/signin">Sign in</Nav.Link> }
        </Nav>

        { !user.loggedIn && !(
          <Button className="button sign-in" variant="secondary" size="lg" block>
            <a href="/signup">Sign up</a>
          </Button>
        )}

        { user.loggedIn && (
          <Button className="button sign-in display-none" variant="secondary" size="lg" block>
            <a href="/logout">Logout</a>
          </Button>
        )}
      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavbarTop;
