import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Mood Dashboard</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/entries">My Entries</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                            <AccountsUIWrapper/>
                    </ul>
                </div>
            </nav>
        );
    }
}