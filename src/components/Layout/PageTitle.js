import React from 'react';
import profile from '../../img/profile.png';
import { NavLink } from 'react-router-dom';

export default class PageTitle extends React.Component {
    render() {
        const { auth } = this.props
        var PageTitle = `Hello, { auth.firstName }`;
        return (
            <div>

            <NavLink to="/friend"><img src={profile} alt="profile picture" width="70" />
            </NavLink><h3>{PageTitle}</h3>

            </div>
        );
    }
}
