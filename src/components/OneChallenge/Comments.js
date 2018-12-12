import React, { Component } from 'react';
import OnePost from '../Challenges/OnePost';
import '../Challenges/css/posts.css';
import { Card, Row, Col, CardHeader, CardTitle, CardText, Button, CardFooter } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Comments extends Component {
    render() {
        this.props.comments.map(comment => {
            comment.createdAt = comment.createdAt.slice(0, 10)
        });
        
        return (
            <div className="posts">
                {this.props.comments.map(comment => (
                    <div className="post" key={comment._id}>
                        <Card body id="oneCard">
                            <CardText>{comment.comment}</CardText>
                                <div className="postfooterBy">
                                    by: <Link to={`/friend/${comment.user._id}`}>{comment.user.firstName} {comment.user.lastName}</Link>..at {comment.createdAt}
                                </div>
                        </Card>
                    </div>
				))}
            </div>
        );
    }
}
