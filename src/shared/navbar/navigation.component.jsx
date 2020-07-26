import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ScrollIntoView from "react-scroll-into-view";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import './navigation.style.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

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
          <Nav.Link className="customLink" href="/webshop">Webshop</Nav.Link>
          {
            this.props.currentUser ?
              <div className="customLink" onClick={() => auth.signOut()}>Sign out</div>
              :
              <Nav.Link className="customLink" href="/signin">Sign in</Nav.Link>
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Navigation);