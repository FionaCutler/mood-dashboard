import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import { Meteor } from 'meteor/meteor';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class AccountDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            form:"login"
        };
    }

    toggleDialog() {
        this.setState({isOpen: !this.state.isOpen});
    }

    setForm(form){
        this.setState({form:form});

    }

    renderForm(){
        if(this.state.form === "login") {
            return <LoginForm setForm={this.setForm.bind(this)}/>
        } else {
            return <RegisterForm setForm={this.setForm.bind(this)}/>
        }
    }

    render(){
        let buttonText;
        if(Meteor.user()){
            buttonText = Meteor.user().emails[0].address;
        } else{
            buttonText = "Login"
        }
        return(
            <Modal size="tiny" trigger={<Button>{buttonText}</Button>} >
                <Modal.Header>Login or Register</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                    {this.renderForm()}
                    </Modal.Description>
                </Modal.Content>
            </Modal>
                );
    }
}