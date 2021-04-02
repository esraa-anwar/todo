import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
  MDBBtn 
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/logo.svg';
import Routes from './Routes';
import "./style.css"
import NavBar from './components/NavBar';
class App extends Component {
 

  
  render() {
    

    return (
      <Router>
        <div className='flyout'>
          <NavBar />
          <main style={{ marginTop: '8rem' }}>
            <Routes />
          </main>
          <MDBFooter className="head">
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a >  </a>
            </p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
