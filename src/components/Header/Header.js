import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" >
          <Container>
            <Navbar.Brand > 
                <Link className='brand-name' to={'/'}>Web<span style={{color:'tomato'}}>Art</span></Link>
            </Navbar.Brand>
            <Navbar.Toggle style={{background:'white'}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto nav-link">
                <Link to={'/'}>Home</Link>
                <Link to={'/statistics'}>Statistics</Link>
                <Link to={'/blogs'}>Blogs</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
export default Header;