import React from 'react';
import Axios from 'axios';
import NavBar from '../Layout/NavBar';
import OnePagePost from './OnePagePost';
import Footer from '../Layout/Footer';
import './css/style.css';
import Comments from './Comments';
import NewComment from './NewComment'

export default class OneChallenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            date: '',
            author: {},
            comments: [],
            formData: {
                comment: ''
            },
            errors : {}
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
    
    handleChange = e => {
        let formData = this.state.formData;
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('djbcjsbk');
		this.setState({ errors: {} });
		Axios.post(`http://localhost:8000/api/comment/addcomment/${this.props.match.params.id}`, this.state.formData)
			.then(res => {
                console.log(res);
                this.setState({ formData: { comment: ''}});
			})
			.catch(err => {
				this.setState({ ...err.response.data }, () => console.log(this.state.errors));
			});
    }

    componentDidMount() {
        Axios.get(`http://localhost:8000/api/post/readmore/${this.props.match.params.id}`).then(res => this.setState( {post: res.data, author: res.data.user, date: res.data.createdAt.slice(0, 10)} ));
        Axios.get(`http://localhost:8000/api/comment/postcomment/${this.props.match.params.id}`).then(res => this.setState( {comments: res.data} ));
    };

    render() {
        return (
            <div>
                <NavBar />
                <div className="onePost">
                    <OnePagePost post={this.state.post} author={this.state.author} date={this.state.date}/>
                </div>
                <h3 className="commentsHead">Comments</h3>
                <div className="newCom">
                    <NewComment errors={this.state.errors} comment={this.state.formData.comment} onChange={this.handleChange} onClick={this.handleSubmit}/>
                </div>
                <Comments comments={this.state.comments}/>
                <Footer />
            </div>
        );
    }
}
