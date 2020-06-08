import React, { Component } from 'react';
import {Link } from "@reach/router";
import route from '../route';

export default class NavBar extends Component {

  render () {
    return (
        <nav>
            <Link to={route.Home}>Home</Link>{" "}
            <Link to={route.Login}>Login</Link>{" "}
            <Link to={route.Register}>Register</Link>
        </nav>
    );
  }
}