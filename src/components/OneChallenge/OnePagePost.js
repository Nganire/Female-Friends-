import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Row, Col, CardHeader, CardTitle, CardText, Button, CardFooter } from 'reactstrap';
import '../Challenges/css/onepost.css';

export default class OnePostPage extends React.Component {
    render() {
        let {title, body, createdAt, _id} = this.props.post;
        let {firstName, lastName} = this.props.author;
        return (
        <div className="post" key={_id}>
            <Card body id="oneCard">
                <CardTitle id="CardTitle" tag="h1">{title}</CardTitle>
                <div className="postfooterBy">
                    <p>by <Link to={`/friend/${this.props.author._id}`}>{firstName} {lastName}</Link> at {this.props.date}</p>
                </div>
                <CardText>{body}</CardText>
            </Card>
        </div>
        );
    };
}
