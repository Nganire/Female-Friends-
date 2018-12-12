import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import '../Layout/css/NavBar.css';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    };

    toggle() { this.setState({ isOpen: !this.state.isOpen }) };

    render() {
        return (
            <div >
                <Navbar  id="Navbar" dark Navbar expand="md">
                    <NavbarBrand href="/"><img id="logo" src="https://femaleventures.nl/wp-content/uploads/2018/06/Logo_White-e1530265633749.png" alt="Female Ventures"></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar >
                            <NavItem>
                                <NavLink href="#">WHAT WE DO</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">EVENT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">NEWS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">PARTNERS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">CONTACT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">DONATE</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink  href="/registration">JOIN US</NavLink >
                            </NavItem>
                            <NavItem>
                                <Button href="/login">LOG IN</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    };
}
