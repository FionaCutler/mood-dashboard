import React, { PropTypes } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import composeWithTracker from '../utilities/compose.js';
import createBrowserHistory from 'history/createBrowserHistory';
import { Meteor } from 'meteor/meteor';

import Index from './Index.jsx'

import Navbar from './Navbar.jsx';
import EntryListPage from "./entries/EntryListPage.jsx";
import EntryViewPage from "./entries/EntryViewPage.jsx";
import CreateEditEntryPage from "./entries/CreateEditEntryPage.jsx"
import AlertPage from './alerts/AlertPage.jsx'
import Authenticated from './accounts/Authenticated.js';
import { Segment } from 'semantic-ui-react'

const browserHistory = createBrowserHistory();
const App = (appProps) => {
    return(
        <div>
        <Router>
            <div>
            <Navbar {...appProps} />
            <Switch history={browserHistory}>
                <Route exact name="index" path="/" component={Index}  />
                <Route exact name="index" path="/entries/view/:userid" component={EntryViewPage}  />
                <Authenticated exact path="/entries" component={EntryListPage} {...appProps}/>
                <Authenticated exact path="/entries/new" component={CreateEditEntryPage} {...appProps}/>
                <Authenticated path="/entries/edit/:id" component={CreateEditEntryPage} {...appProps}/>
                <Authenticated path="/alerts" component={AlertPage} {...appProps}/>
            </Switch>
        </div>
    </Router>
        </div>
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