import React, { Component } from 'react';

import EntryView from './EntryView.jsx';
export default class EntryTable extends Component {
    getEntries() {
        return this.props.entries;
    }

    renderEntries() {
        return this.getEntries().map((entry) => (
            <EntryView key={"entry" + entry._id} entry={entry} />
        ));
    }

    render(){
        return(
            <table className="table">
                <thead>
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Mood</th>
                    <th>Conversion Symptoms</th>
                    <th>Unexplained Symptoms?</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.renderEntries()}
                </tbody>
            </table>
        );

    }
}