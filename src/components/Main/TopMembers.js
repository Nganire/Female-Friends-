import React, { Component } from 'react';
import Axios from 'axios';
import OneUser from '../Friends/OneUser';
import {Link} from 'react-router-dom';
import { Card, CardBlock, CardTitle } from 'reactstrap';

class TopMembers extends Component {
  constructor(props) {
        super(props);
        this.state = {
            top: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:8000/api/user/top').then(res => this.setState( {top: res.data} ));
    };

    render() {
        return (
            <div>
                <Card>
                    <CardTitle>Top Members</CardTitle>
                        {this.state.top.map(user => (
                            <Link to={`/friend/${user._id}`}>
    					        <OneUser data={user}/>
                            </Link>
    			        ))}
                </Card>
            </div>
        );
    }
}

export default TopMembers;
