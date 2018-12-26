import React from 'react';
import Axios from 'axios';
import NavBar from '../Layout/NavBar';
import Posts from '../Challenges/Posts';
import Footer from '../Layout/Footer';
import Profile from './Profile';

export default class OneFriend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            user: {}
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
        Axios.get(`http://localhost:8000/api/post/getallbyid/${this.props.match.params.id}`).then(res => this.setState( {posts: res.data} ));
        Axios.get(`http://localhost:8000/api/user//friend/${this.props.match.params.id}`).then(res => this.setState( {user: res.data} ));
    };

    render() {
        return (
            <div>
                <NavBar />
                <Profile user={this.state.user}/>
                <Posts posts={this.state.posts} />
                <Footer />
            </div>
        );
    }
}
