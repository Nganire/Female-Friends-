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
                <Navbar id="Navbar" dark Navbar expand="md">
                    <NavbarBrand href="/"><img id="logo" src="https://femaleventures.nl/wp-content/uploads/2018/06/Logo_White-e1530265633749.png" alt="Female Ventures"></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar >
                            <NavItem>
                                <NavLink href="https://femaleventures.nl/mission/">WHAT WE DO</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://femaleventures.nl/events/">EVENT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://femaleventures.nl/newsitems/">NEWS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://femaleventures.nl/partners/">PARTNERS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://femaleventures.nl/contact/">CONTACT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://femaleventures.nl/danations/">DONATE</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button  href="/registration">JOIN US</Button >
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">LOG IN</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    };
}
