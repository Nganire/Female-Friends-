import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import './css/NavBar.css';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    };

    handleButton = e => {
        Axios.get('http://localhost:8000/api/user/logout')
        .then(res => {this.props.history.push('/login')})
    }

    toggle = () => { this.setState({ isOpen: !this.state.isOpen }) };

    render() {
        return (
            <div >
                <Navbar id="Navbar" dark expand="md">
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
                                <NavLink href="https://femaleventures.nl/donations/">DONATE</NavLink>
                            </NavItem>
                            <NavItem>
                                <Button  href="/challenges">CHALLENGES</Button >
                            </NavItem>
                            <NavItem>
                                <Button href="/friends">FEMALE FRIENDS</Button>
                            </NavItem>
                            <NavItem>
                                <Button type="submit" onClick={this.handleButton} >LOG OUT</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    };
}

export default withRouter(NavBar);
