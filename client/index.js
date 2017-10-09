import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../imports/ui/App.jsx'
Meteor.startup(function () {
    ReactDOM.render( <App />, document.getElementById('app'));
});