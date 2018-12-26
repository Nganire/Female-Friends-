import React, { Component } from 'react';
import Axios from 'axios';
import OneUser from './OneUser';
import { CardColumns, CardImg, CardTitle, Card } from 'reactstrap';
import {Link} from 'react-router-dom';
import avatar from '../../img/default-placeholder-profile-icon.jpg'
import '../Login/css/background.css';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/api/user/getall').then(res => this.setState( {users: res.data} ));
    };

    render() {
        return (
            <div class="allUsers">
                    {this.state.users.map(user => (
                        <div id="alluserCard">
                            <Card id="friendCard">
                                <CardImg top width="80%"  src={avatar} alt="avatar"></CardImg>
                                <Link to={`/friend/${user._id}`}>
						              <CardTitle id="nameAllUsers">{user.firstName} {user.lastName}</CardTitle>
                                </Link>
                                <button id="loginBut">Add Friend</button><button id="loginBut">Message</button>
                            </Card>
                        </div>
				    ))}
            </div>
            )
        }
    }
