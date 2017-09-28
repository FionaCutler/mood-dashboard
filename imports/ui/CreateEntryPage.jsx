import React, { Component } from 'react';
import Datetime from 'react-datetime';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import Toggle from 'react-bootstrap-toggle';
import { withRouter } from 'react-router';

import { Entries } from '../api/entries.js'
import WheelVis from './WheelVis.jsx'

class CreateEntryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleActive: false,
            fromDate:moment().subtract(4,'hour'),
            toDate:moment(),
            mood:"",
            symptoms: 0,
            thoughts:""
        };
    }

    setMood(name){
        this.setState({mood:name});
    }

    onToggle() {
        this.setState({ toggleActive: !this.state.toggleActive });
    }

    handleSubmit(event){
        event.preventDefault();
        let entry = {
            createdAt: new Date(),
            fromDate:this.state.fromDate.toDate(),
            toDate:this.state.toDate.toDate(),
            mood:this.state.mood,
            symptoms:this.state.symptoms,
            unexplained:this.state.toggleActive,
            thoughts:this.state.toggleActive ? this.state.thoughts : null,
            owner: Meteor.userId(),

        };
        Entries.insert(entry);
        this.props.history.push('/entries');

    }

    handleFromChange(fromDate){
        if(typeof fromDate === "object") {
            this.setState({fromDate: fromDate});
        }
    }
    handleToChange(toDate){
        if(typeof toDate === "object") {
            this.setState({toDate: toDate});
        }
    }

    fromDateValid(current){
        return current.isBefore(this.state.toDate);
    }

    toDateValid(current){
        return current.isAfter(this.state.fromDate);
    }

    handleMoodChange(event){
        this.setState({mood: event.target.value});
    }

    handleSymptomChange(event){
        this.setState({symptoms: event.target.value});
    }

    handleThoughtsChange(event){
        this.setState({thoughts: event.target.value});
    }

    render(){
        return(
            <div className="row">
                <div className="col-lg-6">
                    <form className="new-entry" onSubmit={this.handleSubmit.bind(this)}>

                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label>From</label>
                            </div>
                            <div className="col-sm-8">
                                <Datetime
                                    value={this.state.fromDate}
                                    onChange={this.handleFromChange.bind(this)}
                                    viewMode="time"
                                    isValidDate={ this.fromDateValid.bind(this) }

                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label>To</label>
                            </div>
                            <div className="col-sm-8">
                                <Datetime
                                    value={this.state.toDate}
                                    onChange={this.handleToChange.bind(this)}
                                    viewMode="time"
                                    isValidDate={ this.toDateValid.bind(this) }
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label>Mood</label>
                            </div>
                            <div className="col-sm-8">
                                <input type="text" className="form-control"
                                       value={this.state.mood}
                                       onChange={this.handleMoodChange.bind(this)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label>Conversion Symptoms</label>
                            </div>
                            <div className="col-sm-8">
                                <ReactBootstrapSlider
                                    value={this.state.symptoms}
                                    step={1}
                                    max={5}
                                    min={0}
                                    change={this.handleSymptomChange.bind(this)}
                                />

                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4">
                                <label>Unexplained Symptoms</label>
                            </div>
                            <div className="col-sm-8">
                                <Toggle
                                    onClick={this.onToggle.bind(this)}
                                    on={<h5>ON</h5>}
                                    off={<h5>OFF</h5>}
                                    size="xs"
                                    active={this.state.toggleActive}
                                />
                            </div>
                        </div>
                        <div className={"form-group row " + (this.state.toggleActive ? "":"hidden")}>
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
                    </form>
                </div>
                <div className="col-lg-6">
                    <WheelVis handler={this.setMood.bind(this)}/>
                </div>
            </div>);
    }
}

export default withRouter(CreateEntryPage);