import React from 'react';
import Axios from 'axios';
import avatar from '../../img/default-placeholder-profile-icon.jpg';
import { CardColumns, CardImg, CardTitle, } from 'reactstrap';
import './css/style.css';

export default class Profile extends React.Component {
    render() {
        let {firstName, lastName, _id, city} = this.props.user
        return (
            <div>
                <div id="OneUser">
                    <CardImg id="oneimage" width="80%"  src={avatar} alt="avatar"></CardImg>
                    <div class="leftOne">
                        <CardTitle id="OneUsername">{firstName} {lastName}</CardTitle>
                        <CardTitle id="OneUsercity">{city}</CardTitle>
                        <button id="loginBut">Add Friend</button><button id="loginBut">Message</button>
                    </div>
                </div>
            </div>
        );
    }
}
