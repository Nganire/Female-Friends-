import React from 'react';
import NavBarLog from './NavBarLog';
import Footer from '../Layout/Footer';
import FormLog from './FormLog';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <NavBarLog />
                <FormLog />
                <Footer />
            </div>
        );
    }
}
