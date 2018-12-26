import React from 'react';
import Axios from 'axios';
import { Button, Card, CardTitle, CardText, FormFeedback, Input, FormGroup, Label } from 'reactstrap';
import './css/newpost.css';

export default class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                title: '',
                body: ''
            },
            errors : {}
        };
    }

    handleChange = e => {
        let formData = this.state.formData;
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
    }

    handleSubmit = e => {
        e.preventDefault();
		this.setState({ errors: {} });
		Axios.post('http://localhost:8000/api/post/addpost', this.state.formData)
			.then(res => {
                this.setState({ formData: { title: '', body: ''}});
			})
			.catch(err => {
				this.setState({ ...err.response.data }, () => console.log(this.state.errors));
			});
    }

    render() {
        let { errors } = this.state;
        return (
            <div>
                <Card body id="newCard">
                    <CardTitle className="CardTitle" id="shareChallenge" tag="h4">Share Your Challenge</CardTitle>
                    <CardText>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                {errors.title && <Label>{errors.title.msg}</Label>}
                                <Input type="text" title={this.state.title} name="title" placeholder="Title" onChange={this.handleChange} value={this.state.formData.title} placeholder="Title" className="input"/>
                            </FormGroup>
                            <FormGroup>
                                {errors.body && <Label>{errors.body.msg}</Label>}
                                <Input type="textarea" rows="6" value={this.state.body} name="body" placeholder="Describe your challenge here" onChange={this.handleChange} value={this.state.formData.body} />
                            </FormGroup>
                            <Button id="newPostBtn" type= "submit" value="post">Post</Button>
                        </form>
                    </CardText>
                </Card>
            </div>
        );
    }
}
