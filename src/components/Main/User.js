import React from 'react';
import Axios from 'axios';
import avatar from '../../img/default-placeholder-profile-icon.jpg';
import './css/User.css';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            errors : {}
        };
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.user.firstName}</h1>
                <img class="imgMain" src={avatar}/>
            </div>
        );
    }
}
