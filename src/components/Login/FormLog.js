import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText, Col, FormFeedback, Card, CardHeader, Row } from 'reactstrap';
import './css/background.css';

class FormLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: ''
            },
            errors: {}
        };
    }

    changeHandler = e => {
        var formData = this.state.formData;
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
    };

    formHandler = e => {
        e.preventDefault();
        this.setState({ errors: {} });
        Axios.post('http://localhost:8000/api/user/login', this.state.formData)
            .then(res => {
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ ...err.response.data }, () => console.log(this.state.errors));
            });
    };

    render() {
        let { errors } = this.state;
        return (
            <div className="formContainer">
                <div className="background">
                    <div className="loginCard">
                        <Col sm="12" md={{ size: 5, offset: 6 }}>
                            <Card id="logcard" body>
                                <CardHeader tag="h1">Log In</CardHeader>
                                <Form onSubmit={this.formHandler}>
                                    {errors.auth && <Label>{errors.auth.msg}</Label>}
                                    <div>
                                        <FormGroup raw>
                                            {errors.email && <Label>{errors.email.msg}. </Label>}
                                            <Label  sm={4} size="lg" >Email:</Label>
                                            <Col sm={10}>
                                                <Input type="email" id="exampleEmail" placeholder="Enter e-mail address" name="email" onChange={this.changeHandler} bsSize="lg"/>
                                            </Col>
                                        </FormGroup>
                                    </div>
                                    <div>
                                        <FormGroup raw>
                                            {errors.password && <Label>{errors.password.msg}. </Label>}
                                            <Label  sm={4} size="lg" >Password:</Label>
                                            <Col sm={10}>
                                                <Input onChange={this.changeHandler} name="password" type="password" placeholder="Password" bsSize="lg" />
                                            </Col>
                                        </FormGroup>
                                    </div>
                                    <Col sm={{ size: 'auto', offset: 4 }}>
                                        <button id="loginBut" type="submit" ><strong>Log In</strong></button>
                                    </Col>
                                </Form>
                            </Card>
                        </Col>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(FormLog);
