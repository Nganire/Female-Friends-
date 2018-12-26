import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import { Card, Row, Col, CardHeader, CardTitle, CardText, Button, CardFooter } from 'reactstrap';
import './css/onepost.css';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    };

    componentDidMount() {
        Axios.get(`http://localhost:8000/api/comment/countcomments/${this.props.data._id}`).then(res => this.setState( {count: res.data} ));
    };

    render() {
        let {title, body, createdAt, _id} = this.props.data;
        let {firstName, lastName} = this.props.data.user;
        createdAt = createdAt.slice(0, 10);
        body = body.slice(0, 220);
        return (
        <div className="post" key={this.props.data._id}>
            <Card body id="oneCard">
                <CardTitle id="CardTitle" tag="h4">{title}</CardTitle>
                <CardText>{body}<Link to={`/challenge/${_id}`}>...Read more</Link></CardText>
                <footer className="CardFooter">
                    <div className="postfooterBy">
                        by: <Link to={`/friend/${this.props.data.user._id}`}>{firstName} {lastName}</Link>..at {createdAt}
                    </div>
                    <div className="postfooterComment">
                        <Link to={`/challenge/${_id}`}>{this.state.count} Comments</Link>
                    </div>
                </footer >
            </Card>
        </div>
        );
    };
}
