import React from 'react';
import PageTitle from '../Layout/PageTitle';
import Footer from '../Layout/Footer';
import NewPost from './NewPost';
import TopMembers from './TopMembers';
import NavBar from '../Layout/NavBar';
import Posts from '../Challenges/Posts';
import User from './User';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import './css/Main.css';
import { Button } from 'reactstrap';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            posts: [],
            user: {}
        }
    };

    componentWillMount() {
        Axios.get('http://localhost:8000/api/user/auth')
            .then(res => {
                this.setState({ user: res.data });
            })
            .catch(err => {
                this.props.history.push('/Login');
        });
    };

    componentDidMount() {
        Axios.get('http://localhost:8000/api/post/getlastposts').then(res => this.setState( {posts: res.data} ));
    };

    render() {
        return (
            <div>
                <div>
                    <NavBar />
                    <center>
                        <div className="mainleft">
                            <div className="newpostMain"><NewPost /></div>
                            <div className="postsMain"><Posts posts={this.state.posts}/></div>
                        </div>
                        <div className="mainRight">
                            <div className="userMain">
                                <User class="userMainImg" user={this.state.user}/>
                                <Button  type= "submit">profile</Button>
                                <Button  type= "submit">Friends</Button>
                                <Button  type= "submit">messages</Button>
                            </div>
                            <div className="groupMain"><TopMembers /></div>
                        </div>
                    </center>
                    <Footer />
                </div>
            </div>
        );
    }
}


export default withRouter(Main);
