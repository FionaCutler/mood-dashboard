import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { Button, Form, Input } from 'semantic-ui-react';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    setRegisterForm(){
        this.props.setForm("register");
    }

    handleSubmit(event){
        event.preventDefault();
        Meteor.loginWithPassword(this.refs.emailInput.value,
                                 this.refs.passwordInput.value,
            (error) => {
                if(error) {
                    console.log("Login Unsuccessful");
                    console.log(error);
                } else{
                    console.log("Login Successful");

                }
            })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Field>
                    <label>Email</label>
                    <Input type="email" ref="emailInput" />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <Input type="password" ref="emailInput" />
                </Form.Field>
                <p>Don't have an account? <a href="#" onClick={this.setRegisterForm.bind(this)}>Register</a></p>
                <Button primary type="submit" >Submit</Button>
        </Form>);
    }

}