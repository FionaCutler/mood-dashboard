import React, { Component } from 'react';
import { Header, Table, Rating } from 'semantic-ui-react'

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
            <Table celled padded>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>From</Table.HeaderCell>
                    <Table.HeaderCell>To</Table.HeaderCell>
                    <Table.HeaderCell>Mood</Table.HeaderCell>
                    <Table.HeaderCell singleLine>Conversion Symptoms</Table.HeaderCell>
                    <Table.HeaderCell singleLine>Unexplained Symptoms?</Table.HeaderCell>
                    <Table.HeaderCell singleLine>Thoughts/actions before</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body>
                {this.renderEntries()}
                </Table.Body>
            </Table>
        );

    }
}