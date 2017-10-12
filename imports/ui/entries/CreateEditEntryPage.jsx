import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Meteor} from 'meteor/meteor';
import {Entries} from '../../api/entries.js'
import WheelVis from './WheelVis.jsx'
import { Button, Form, Input, Checkbox, TextArea, Grid, Segment, Transition, Divider} from 'semantic-ui-react';
import Slider from 'react-rangeslider';
import Datetime from 'react-datetime';


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
            fromDate = moment().subtract(4,'hours');
            toDate = moment();
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
            fromDate: this.state.fromDate.toDate(),
            toDate: this.state.toDate.toDate(),
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

    handleFromDateChange(date){
        this.setState({fromDate:date});
    }


    handleToDateChange(date){
        this.setState({toDate:date});
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
        const panels = [
            {
                title:"Unexplained Symptoms?",
                content:{
                    as: Form.TextArea,
                    key:'content',
                    label:'Thoughts/Actions Before',
                    width:8
                }
            },
        ];
        return (
            <Grid columns="two">
                <Grid.Row stretched={true}>
                    <Grid.Column>
                        <div className="create-entry-form">
                    <Form className="new-entry" onSubmit={this.handleSubmit.bind(this)} >

                        <Form.Field width={8}>
                            <label>From </label>
                            <Datetime value={this.state.fromDate}
                                      viewMode="time"
                                      onChange={this.handleFromDateChange.bind(this)}
                            />
                        </Form.Field>
                        <Form.Field width={8}>
                            <label>To</label>
                            <Datetime value={this.state.toDate}
                                      viewMode="time"
                                      onChange={this.handleToDateChange.bind(this)}
                            />
                        </Form.Field>
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
                            <label>Unexplained Symptoms?</label>
                            <Checkbox toggle
                                      value={this.state.toggleActive}
                                      onChange={this.handleToggle.bind(this)}
                                    />
                        </Form.Field>
                        <Divider hidden />
                        <Transition visible={this.state.toggleActive} duration={500}>
                            <Form.Field>
                                <label>Thoughts/Actions Before</label>
                                <TextArea />
                            </Form.Field>
                        </Transition>
                    <Form.Field>
                        <Button primary>Submit</Button>
                    </Form.Field>
                    </Form>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                    <WheelVis handler={this.setMood.bind(this)}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>);
    }
}

export default withRouter(CreateEditEntryPage);