import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Accounts} from 'meteor/accounts-base'
import {Meteor} from 'meteor/meteor';
import {Button, Form, Input} from 'semantic-ui-react';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    setLoginForm() {
        this.props.setForm("login");
    }

    handleSubmit(event) {

        event.preventDefault();
        Accounts.createUser({
            email: this.refs.emailInput.value,
            password: this.refs.passwordInput.value
        }, function (err) {
            if (err)
                console.log(err);
            else
                console.log('success!');
        });

    }

    render() {
        return (<Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Field>
                <label>Email</label>
                <Input ref="emailInput" type="text" id="email-input"/>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <Input ref="passwordInput" type="password" id="password-input"/>
            </Form.Field>
            <p>Already have an account? <a href="#" onClick={this.setLoginForm.bind(this)}>Login</a></p>
            <Button type="submit" primary>Submit</Button>
        </Form>);
    }
}
