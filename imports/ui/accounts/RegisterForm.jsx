import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor';
export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    }

    setLoginForm(){
        this.props.setForm("login");
    }

    handleSubmit(event){

        event.preventDefault();
        Accounts.createUser({
            email: this.refs.emailInput.value,
            password: this.refs.passwordInput.value
        }, function(err) {
            if (err)
                console.log(err);
            else
                console.log('success!');
        });

    }
    render(){
        return(<form onSubmit={this.handleSubmit.bind(this)}>
            <div className="pt-dialog-body">
                        <label htmlFor="email-input" className="pt-label">
                            Email Address
                        </label>
                        <div className="pt-form-content">
                            <input ref="emailInput" type="text" id="email-input" className="pt-input pt-fill"/>
                        </div>

                        <label htmlFor="password-input" className="pt-label">
                            Password
                        </label>
                        <div className="pt-form-content">
                            <input ref="passwordInput" type="password" id="password-input" className="pt-input pt-fill"/>
                        </div>
            </div>
            <div className="pt-dialog-footer">
                        <p>Already have an account? <a href="#" onClick={this.setLoginForm.bind(this)} >Login</a></p>

                        <div className="pt-dialog-footer-actions">
                            <button type="submit" className="pt-button pt-intent-primary">Submit</button>
                        </div>
            </div>
        </form>);
    }
}
