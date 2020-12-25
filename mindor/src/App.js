import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

function App() {

    return (
      <>
      <BrowserRouter>

        <MDBNav className="justify-content-center">
          <MDBNavItem>
            <MDBNavLink active to="#!">Active</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">Link</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#!">Link</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
          </MDBNavItem>
        </MDBNav>

      </BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code>!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Don't Learn React
          </a>
        </header>
      </div>
      </>
  );
}

export default App;
