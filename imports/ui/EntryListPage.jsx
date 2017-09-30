import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import EntryTable from "./EntryTable";
import { createContainer } from 'meteor/react-meteor-data';

import { Entries } from '../api/entries.js'
import { Meteor } from 'meteor/meteor';

class EntryListPage extends Component {
    render(){
        return(
            <div>
                <Link to="/entries/new"><button className="btn black-text"><i className="fa fa-plus fa-fw"/>Create New</button></Link>
                <Link to={"/entries/view/" + Meteor.userId()}><button className="btn black-text pull-right" ><i className="fa fa-share-alt fa-fw"/>Share Link</button></Link>
                <EntryTable entries={this.props.entries}/>
            </div>
        );
    }

}
EntryListPage.propTypes = {
    entries:PropTypes.array.isRequired,

};
export default createContainer(() => {
    const entries = Entries.find({owner:Meteor.userId()}, { sort: { toDate: -1 } }).fetch();
    return {
        entries:entries,
    };
}, EntryListPage);
