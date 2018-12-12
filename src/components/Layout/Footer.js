import React from 'react';
import female_logo from '../../img/DarkAqua.jpg';
import facebook from '../../img/iconfinder_facebook.png';
import linkedin from '../../img/iconfinder_linkedin.png';
import twitter from '../../img/iconfinder_twitter.png';
import './css/Footer.css';
import {Button,Label,Input,FormGroup } from 'reactstrap';
import 'font-awesome/css/font-awesome.min.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 widget text-4 widget_text" id="footer">
                        <h4>Contact</h4><hr/>
                        <div className="textwidget">
                            <p><a href="mailto:team@femaleventures.nl" target="_blank" rel="noopener">team@femaleventures.nl</a></p>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                    <div className="col-md-3 widget text-4 widget_text" id="footer">
                        <h4>Follow us</h4><hr/>
                        <div className="textwidget">
                            <p><a href="https://www.linkedin.com/organization/14974484/" target="_blank" rel="noopener"><span className="fa fa-linkedin-square">&nbsp;</span>Link us on Linkedin</a><br/>
                            <a href="https://www.facebook.com/femaleventures/" target="_blank" rel="noopener"><span className="fa fa-facebook-square">&nbsp;</span>Like us on Facebook</a><br/>
                            <a href="https://twitter.com/FemVentures" target="_blank" rel="noopener"><span className="fa fa-twitter">&nbsp;</span>Follow us on Twitter</a></p>
                        </div>
                    </div>
                    <div className="col-md-3 widget text-4 widget_text" id="footer">
                        <h4>Subscribe to Our Newsletter</h4><hr/>
                        <div className="textwidget">
                        <form>
                            <FormGroup>
                                <Label for="exampleEmail">Email*</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="" />
                            </FormGroup>
                            <Button>Subscribe!</Button>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-3 widget nav_menu-2 widget_nav_menu"id="footer">
                        <h4>Information</h4><hr/>
                        <div className="menu-footer-menu-container">
                            <ul className="list">
                                <li><a href="https://femaleventures.nl/terms-and-conditions/">Terms and Conditions</a></li><hr/>
                                <li><a href="https://femaleventures.nl/privacy-main/">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
