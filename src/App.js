import React, { Component } from "react";
import { Router } from "@reach/router";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import route from "../src/route";
import {MainProvider} from "./context/MainContext";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <MainProvider>
        <Layout>
          <NavBar />
          <Router basepath={route.Home}>
            <Home path={route.Home} />
            <Login path={route.Login} />
            <Register path={route.Register} />
          </Router>
        </Layout>
      </MainProvider>
    );
  }
}
