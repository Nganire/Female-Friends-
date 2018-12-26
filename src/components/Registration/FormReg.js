import React, { Component } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, Card, CardHeader, UncontrolledTooltip} from 'reactstrap';
import '../Login/css/background.css';


class FormReg extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {
                firstName: '',
                lastName: '',
				email: '',
				password: '',
				password_conf: ''
			},
			errors: {}
		};
	}

	changeHandler = e => {
		let formData = this.state.formData;
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
	};

	formHandler = e => {
		e.preventDefault();
		this.setState({ errors: {} });
		Axios.post('http://localhost:8000/api/user/registration', this.state.formData)
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
					<div className="RegCard">
						<Col sm="11" md={{ size: 8, offset: 4 }}>
							<Card body id="formcard">
								<CardHeader tag="h4">JOIN OUR COMMUNITY AND BECOME A FEMALE FRIEND</CardHeader>
								<Form onSubmit={this.formHandler}>
								<FormGroup id="row1" row>
									{errors.auth && <FormFeedback>{errors.auth.msg}</FormFeedback>}
									<Col>
										{errors.firstName && <Label>{errors.firstName.msg+'.  '}</Label>}
									  	<Label for="first name">First Name: </Label>
									  	<Input onChange={this.changeHandler} name="firstName" type="text" />
								   	</Col>
									<Col>
										{errors.lastName && <Label>{errors.lastName.msg+'.  '}</Label>}
										<Label for="last name">Last Name: </Label>
										<Input onChange={this.changeHandler} name="lastName" type="text" />
								  	</Col>
						   		</FormGroup>
						   		<FormGroup id="row2" row>
									<Col>
									  	{errors.email && <Label>{errors.email.msg+'. '}</Label>}
									  	<Label for="email">e-mail: </Label>
										<Input type="email" name="email" onChange={this.changeHandler} />
								  	</Col>
									<Col>
										{errors.password && <Label>{errors.password.msg+'.  '}</Label>}
									  	<Label for="password">Password: </Label>
										<Input onChange={this.changeHandler} name="password" type="password" />
								  	</Col>
						   		</FormGroup>
						   		<FormGroup id="row3" row>
									<Col>
								  		{errors.password_conf && <Label>Passwords do not match. </Label>}
								  		<Label for="confirm password">Confirm Password: </Label>
										<Input onChange={this.changeHandler} name="password_conf" type="password" />
								  	</Col>
									<Col id="terms">
										<Label for="term" tag="strong">Term and Condition<span id="UncontrolledTooltipExample"> *</span></Label>
										<UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
											By registering for Female Ventures you agree with our terms and conditions
										</UncontrolledTooltip>
										<Label check>
											<Input type="checkbox" />{' '}
											Agree with our <a href="#">Terms and Conditions</a>
										</Label>
									</Col>
						   		</FormGroup>
						 		<Col sm={{ size: 'auto', offset: 4 }}>
								   	<button id="loginBut" type="submit">
									  	Register & Pay
								   	</button>
								</Col>
							</Form>
						</Card>
				   	</Col>
				</div>
			</div>
		</div>
		);
	}
};



export default withRouter(FormReg);
