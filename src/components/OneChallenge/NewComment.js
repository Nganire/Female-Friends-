import React from 'react';
import Axios from 'axios';
import { Button, Card, CardTitle, CardText, FormFeedback, Input, FormGroup, Label } from 'reactstrap';
import '../Main/css/newpost.css';

export default class NewComment extends React.Component {
    render() {
        let { errors } = this.props;
        return (
            <div>
                <Card body id="newCard">
                    <CardText>
                        <form>
                            <FormGroup>
                                {errors.comment && <Label>{errors.comment.msg}</Label>}
                                <Input type="textarea" rows="3" name="comment" placeholder="Write your comment here" value={this.props.comment.comment} />
                            </FormGroup>
                            <Button id="newPostBtn" type= "submit" value="post">Post a comment</Button>
                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}
