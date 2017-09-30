import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import EntryViewTable from "./EntryViewTable.jsx";
import { createContainer } from 'meteor/react-meteor-data';

import { Entries } from '../api/entries.js'
import { Meteor } from 'meteor/meteor';

class EntryViewPage extends Component {
    render(){
        return(
            <div>
                <EntryViewTable entries={this.props.entries}/>
            </div>
        );
    }

}
EntryViewPage.propTypes = {
    entries:PropTypes.array.isRequired,

};
export default createContainer((props) => {
    const entries = Entries.find({owner:props.match.params.userid}, { sort: { toDate: -1 } }).fetch();
    return {
        entries:entries,
    };
}, EntryViewPage);
