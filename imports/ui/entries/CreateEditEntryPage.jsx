import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Meteor} from 'meteor/meteor';
import {Entries} from '../../api/entries.js'
import WheelVis from './WheelVis.jsx'
import { Button, Form, Input, Checkbox, TextArea, Grid, Transition } from 'semantic-ui-react';
import Slider from 'react-rangeslider'


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
    handleToggle(){
        this.setState({toggleActive:!this.state.toggleActive});
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

    handleSymptomsChange(value){
        this.setState({symptoms: value});
    }

    handleMoodChange(event) {
        this.setState({mood: event.target.value});
    }

    handleThoughtsChange(event) {
        this.setState({thoughts: event.target.value});
    }

    render() {
        return (
            <Grid columns="two">
                <Grid.Column>

                    <Form className="new-entry" >
                        <Form.Field width={8}>
                            <label>Mood</label>
                            <Input
                                type="text"
                                value={this.state.mood}
                                onChange={this.handleMoodChange.bind(this)}
                            />
                        </Form.Field>
                        <Form.Field width={8}>
                            <label>Conversion Symptoms</label>
                            <Slider
                                min={0}
                                max={5}
                                handleLabel=" "
                                value={this.state.symptoms}
                                orientation="horizontal"
                                onChange={this.handleSymptomsChange.bind(this)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Unexplained Symptoms</label>
                            <Checkbox toggle
                                      checked={this.state.toggleActive}
                                      onChange={this.handleToggle.bind(this)}
                            />
                        </Form.Field>
                        <Transition mountOnShow={false} visible={this.state.toggleActive}>
                            <Form.Field >
                            <label>Thoughts/Actions Before</label>
                            <TextArea
                                rows={4}
                                value={this.state.thoughts}
                                onChange={this.handleThoughtsChange.bind(this)}
                            />
                            </Form.Field>
                        </Transition>
                        <Form.Field>
                            <Button primary onClick={this.handleSubmit.bind(this)}>Submit</Button>
                        </Form.Field>
                    </Form>

                </Grid.Column>
                <Grid.Column>
                    <WheelVis handler={this.setMood.bind(this)}/>
                </Grid.Column>
            </Grid>);
    }
}

export default withRouter(CreateEditEntryPage);