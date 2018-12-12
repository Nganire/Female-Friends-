import React, { Component } from 'react';
import OnePost from './OnePost';
import './css/posts.css';

export default class Contacts extends Component {
    render() {
        return (
            <div className="posts">
                {this.props.posts.map(post => (
						<OnePost data={post} />
				))}
            </div>
        );
    }
}
