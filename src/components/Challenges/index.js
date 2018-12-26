import React from 'react';
import Footer from '../Layout/Footer';
import NewPost from '../Main/NewPost';
import NavBar from '../Layout/NavBar';
import Posts from './Posts';
import Axios from 'axios';
import './css/style.css';

export default class Challenges extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
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

    componentDidMount() {
        Axios.get('http://localhost:8000/api/post/getallposts').then(res => this.setState( {posts: res.data} ));
    };

    render() {
        return (
            <div>
                <NavBar />
                <div class="chalpage">
                    <NewPost />
                </div>
                <Posts posts={this.state.posts}/>
                <Footer />
            </div>
        );
    }
}
