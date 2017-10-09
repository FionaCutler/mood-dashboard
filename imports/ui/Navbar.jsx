import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AccountDialog from "./accounts/AccountDialog.jsx";
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router';

class Navbar extends Component {
    constructor(props){
        super(props);

        console.log(props.location.pathname);
        let item;
        if (props.location.pathname === "/alerts"){
            item = "alerts";
        } else if (props.location.pathname === "/entries"){
            item = "entries";
        } else{
            item = "home";
        }

        this.state = {activeItem:item};
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render(){
        return(
            <div>
                <Menu pointing>
                    <Menu.Item name="home"
                               as={Link}
                               to='/'
                               active={this.state.activeItem === 'home'}
                               onClick={this.handleItemClick}>Home</Menu.Item>
                    <Menu.Item name="entries"
                               as={Link}
                               to='/entries'
                               active={this.state.activeItem === 'entries'}
                               onClick={this.handleItemClick} >Entries</Menu.Item>
                    <Menu.Item name="alerts" as={Link} to='/alerts'
                               active={this.state.activeItem === 'alerts'}
                               onClick={this.handleItemClick}>Alerts</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item ><AccountDialog/></Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default withRouter(Navbar);