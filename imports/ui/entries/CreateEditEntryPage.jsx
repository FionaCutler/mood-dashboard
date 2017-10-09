import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Meteor} from 'meteor/meteor';
import {Entries} from '../../api/entries.js'
import WheelVis from './WheelVis.jsx'
import { Button, Form, Input, Label} from 'semantic-ui-react';

class CreateEditEntryPage extends Component {
    constructor(props) {
        super(props);
        let fromDate;
        let toDate;
        let toggleActive;
        let mood;
        let symptoms;
        let thoughts;
        let isEdit;
        let _id;
        if (props
            && props.match
            && props.match.params
            && props.match.params.id) {
            let entry = Entries.findOne({_id: props.match.params.id});
            fromDate = moment(entry.fromDate);
            toDate = moment(entry.toDate);
            toggleActive = entry.unexplained;
            mood = entry.mood;
            symptoms = entry.symptoms;
            thoughts = entry.thoughts;
            isEdit = true;
            _id = entry._id;
        } else {
            fromDate = new Date();
            fromDate.setHours(fromDate.getHours() - 4);
            toDate = new Date();
            toggleActive = false;
            mood = "";
            symptoms = 0;
            thoughts = "";
            isEdit = false;
            _id = null;
        }
        this.state = {
            _id: _id,
            fromDate: fromDate,
            toDate: toDate,
            toggleActive: toggleActive,
            mood: mood,
            symptoms: symptoms,
            thoughts: thoughts,
            isEdit: isEdit,
        };
    }

    setMood(name) {
        this.setState({mood: name});
    }

    onToggle() {
        this.setState({toggleActive: !this.state.toggleActive});
    }

    handleSubmit(event) {
        event.preventDefault();
        let entry = {
            fromDate: this.state.fromDate,
            toDate: this.state.toDate,
            mood: this.state.mood,
            symptoms: this.state.symptoms,
            unexplained: this.state.toggleActive,
            thoughts: this.state.toggleActive ? this.state.thoughts : null,
        };
        if (this.state.isEdit) {
            Meteor.call("entries.update", this.state._id, entry)
        } else {
            Meteor.call('entries.insert', entry);
        }
        this.props.history.push('/entries');

    }


    handleMoodChange(event) {
        this.setState({mood: event.target.value});
    }

    handleThoughtsChange(event) {
        this.setState({thoughts: event.target.value});
    }

    render() {
        return (
            <div>
                <Form className="new-entry" onSubmit={this.handleSubmit.bind(this)}>
                    <Form.Field width={4}>
                            <label>Mood</label>
                            <Input
                                type="text"
                                value={this.state.mood}
                                onChange={this.handleMoodChange.bind(this)}

                            />
                    </Form.Field>
                    <div className="form-group row">
                        <div className="col-sm-4">
                            <label>Conversion Symptoms</label>
                        </div>
                        <div className="col-sm-8">


                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-4">
                            <label>Unexplained Symptoms</label>
                        </div>
                        <div className="col-sm-8">

                        </div>
                    </div>
                    <div className={"form-group row " + (this.state.toggleActive ? "" : "hidden")}>
                        <div className="col-sm-4">
                            <label>Thoughts/Actions Before</label>
                        </div>
                        <div className="col-sm-8">
                                <textarea
                                    rows="4"
                                    className="form-control"
                                    value={this.state.thoughts}
                                    onChange={this.handleThoughtsChange.bind(this)}
                                />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary pull-right">Submit</button>
                        </div>
                    </div>
                </Form>
                <div>
                    <WheelVis handler={this.setMood.bind(this)}/>
                </div>
            </div>);
    }
}

export default withRouter(CreateEditEntryPage);