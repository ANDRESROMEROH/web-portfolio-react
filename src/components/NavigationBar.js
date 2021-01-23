import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            opacity: 1
        }
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                let maxScroll = document.body.scrollHeight - window.innerHeight;
                if (currentScrollPos > 0 && currentScrollPos <= (maxScroll + 100)) {
                    this.setState({ opacity: 0 });
                } else {
                    this.setState({ opacity: 1 });
                }
            }
        }
    }

    render() {
        return (
            <Navbar id='navbar' className='navbar-dark gradient' expand='lg' collapseOnSelect fixed='top'
                style={{ opacity: `${this.state.opacity}`, display: this.state.hidden ? 'none' : '', transition: 'opacity 0.5s' }}>
                <Container>
                    <Navbar.Brand className='logo brand' href='/'>
                        <span role='img' aria-label='computer'>
                            @ Andresromero.dev
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='nav navbar-nav ml-auto'>
                            <Nav.Link href='/'>About Me</Nav.Link>
                            <Nav.Link href='/projects'>Projects</Nav.Link>
                            <Nav.Link href='/contact'>E-mail</Nav.Link>
                            <Nav.Link
                                target='_blank'
                                href='https://www.linkedin.com/in/andresromeroh/'>
                                LinkedIn
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
