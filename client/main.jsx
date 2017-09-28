import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/client/accounts-config.js';
import 'bootstrap-toggle'

import  App from '../imports/ui/App.jsx';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});