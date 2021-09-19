import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';

const TopNavBar = () => {
    return (
        <Navbar expand="lg" bg="light" variant="light">
            <Navbar.Brand>iStudy Abroad</Navbar.Brand>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Course Search</Nav.Link>
                    <Nav.Link href="#features">Wish List</Nav.Link>
                    <Nav.Link href="#pricing">Student Support</Nav.Link>
                    <Nav.Link href="#pricing">Immigration</Nav.Link>
                    <NavDropdown title="User" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopNavBar;
