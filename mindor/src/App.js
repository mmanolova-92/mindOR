import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import Navbar from "./components/Navbar/Navbar";

function App() {

    return (
      <div className="App">
          <Navbar />
      </div>
  );
}

export default App;
