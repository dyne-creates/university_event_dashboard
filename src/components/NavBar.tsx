import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './navbar.css'

export default function NavBar() {

    return (

        <Navbar expand="lg" className="modern-navbar" sticky="top">

            <Container>
                <Navbar.Brand as={NavLink} to="/" className="brand-logo">
                    🎓 Event Dashboard
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" className="nav-link-modern">
                            View Events
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/register" className="nav-link-modern">
                            Register Event
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}