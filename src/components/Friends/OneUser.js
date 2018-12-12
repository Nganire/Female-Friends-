import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import './Friends.css';
import avatar from '../../img/default-placeholder-profile-icon.jpg'

export default class OneUser extends Component {
      
    render() {
        return (
            <div key={this.props.data._id}>
                <p><img src={avatar} className="avatar_img"/>
                {this.props.data.firstName} {this.props.data.lastName}</p>
            </div>
        );
    }
}
