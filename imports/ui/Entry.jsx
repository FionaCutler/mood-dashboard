import React, { Component, PropTypes } from 'react';

export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailsVisible:false,
        }
    }
    toggleVisibility(){
        this.setState({detailsVisible:!this.state.detailsVisible});
    }
    render() {
        const fromDateString = moment(this.props.entry.fromDate).format('MMMM Do YYYY, h:mm a');
        const toDateString = moment(this.props.entry.toDate).format('MMMM Do YYYY, h:mm a');
        return (

            <tr>
                <td>{ fromDateString }</td>
                <td>{ toDateString }</td>
                <td>{this.props.entry.mood}</td>
                <td>{this.props.entry.symptoms}</td>
                <td>{this.props.entry.unexplained ? "Yes" : "No"}</td>
                <td>{this.props.entry.unexplained ? <button type="button" className="btn" data-toggle="collapse" onClick={this.toggleVisibility.bind(this)}>Details</button> : <span></span>} </td>
                <td id={"details-"+this.props.entry._id} className={this.state.detailsVisible ? "" : "visibility-hidden"} ><textarea className="form-control" value={this.props.entry.thoughts ?this.props.entry.thoughts : "" } readOnly={true}/></td>
            </tr>);
    }
}