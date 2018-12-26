import React from 'react';
import Users from './Users';
import NavBar from '../Layout/NavBar';
import Footer from '../Layout/Footer';
import Axios from 'axios';

export default class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }

    componentWillMount() {
        Axios.get('http://localhost:8000/api/user/auth')
            .then(res => {
                this.setState({ isLogged: true });
            })
            .catch(err => {
                this.props.history.push('/Login');
        });
    };

    render() {
        return (
            <div>
                <NavBar />
                <Users />
                <Footer />
            </div>
        );
    }
}
