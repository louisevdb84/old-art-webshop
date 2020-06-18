import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button  
} from 'react-bootstrap';
import ScrollIntoView from "react-scroll-into-view";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <ScrollIntoView selector="#homepage">
          <Navbar.Brand>The Art Page</Navbar.Brand>
        </ScrollIntoView>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ScrollIntoView selector="#homepage">
              <Nav.Link>Home</Nav.Link>
            </ScrollIntoView>        
            <ScrollIntoView selector="#about">
              <Nav.Link>About</Nav.Link>
            </ScrollIntoView>        
             <ScrollIntoView selector="#project">
              <Nav.Link>Projects</Nav.Link>
            </ScrollIntoView>                    
              <ScrollIntoView selector="#contact">
              <Nav.Link>Contact</Nav.Link>
            </ScrollIntoView>   
          </Nav>          
          <Nav.Link style={{color: "rgba(255,255,255,.5)"}} href="/webshop">Webshop</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;