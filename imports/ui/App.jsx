import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import composeWithTracker from '../utilities/compose.js';
import createBrowserHistory from 'history/createBrowserHistory';
import { Meteor } from 'meteor/meteor';

import Index from './Index.jsx'

import Navbar from './Navbar.jsx';
import EntryListPage from "./EntryListPage.jsx";
import CreateEntryPage from "./CreateEntryPage.jsx"

import Authenticated from './pages/Authenticated.js';


const browserHistory = createBrowserHistory();
const App = (appProps) => {
    return(
    <Router>
    <div>
        <Navbar {...appProps}/>
        <div className="container">
        <Switch history={browserHistory}>
            <Route exact name="index" path="/" component={Index}  />
            <Authenticated exact path="/entries" component={EntryListPage} {...appProps}/>
            <Authenticated exact path="/entries/new" component={CreateEntryPage} {...appProps}/>
        </Switch>
        </div>
    </div>
    </Router>
    );
};


App.propTypes = {
    loggingIn: PropTypes.bool,
    authenticated: PropTypes.bool,
};

const composer = (props, onData) => {
    const loggingIn = Meteor.loggingIn();
    onData(null, {
        loggingIn:loggingIn,
        authenticated: !loggingIn && !!Meteor.userId(),
    });
};


export default composeWithTracker(composer)(App);