import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <div className="page-header" >
                <h1>Satwik Mandapati <small>Front-End Web Developer</small></h1>
                <Link to="/" className="col">Home</Link>
                <Link to="/Projects" className="col">Projects</Link>
                <Link to="/Contact" className="col">Contact</Link>
                <hr />
            </div>
        );
    }
}

export default Header;
