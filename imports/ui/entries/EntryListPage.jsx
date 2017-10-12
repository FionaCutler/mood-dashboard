import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import EntryTable from "./EntryTable";

import {Segment } from 'semantic-ui-react';
import { createContainer } from 'meteor/react-meteor-data';

import { Entries } from '../../api/entries.js'


class EntryListPage extends Component {
    render(){
        return(
            <Segment>
                <Link to="/entries/new" role="button" className="ui button"><icon className="fa fa-plus fa-fw"/>Create New Entry</Link>
                <EntryTable entries={this.props.entries}/>
            </Segment>
        );
    }

}
EntryListPage.propTypes = {
    entries:PropTypes.array.isRequired,
};

export default createContainer(() => {
    Meteor.subscribe('entries');
    return {
        entries:Entries.find({},{ sort: { toDate: -1 }}).fetch()
    }
}, EntryListPage);
