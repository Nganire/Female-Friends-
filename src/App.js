import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import './App.css';

import Login from './components/Login/';
import Registration from './components/Registration/';
import Main from './components/Main/';
import Challenges from './components/Challenges/';
import OneChallenge from './components/OneChallenge/';
import Friends from './components/Friends/';
import OneFriend from './components/OneFriend/';

Axios.defaults.withCredentials = true;

class App extends Component {
  render() {
    return (
        <BrowserRouter>
  			<Switch>
  				<Route exact path="/login" component={Login} />
  				<Route exact path="/registration" component={Registration} />
                <Route exact path="/" component={Main} />
                <Route exact path="/challenges" component={Challenges} />
                <Route exact path="/challenge/:id" component={OneChallenge} />
                <Route exact path="/friends" component={Friends} />
                <Route exact path="/friend/:id" component={OneFriend} />
      		</Switch>
  		</BrowserRouter>
    );
  }
}

export default App;
