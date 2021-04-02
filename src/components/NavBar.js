import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router';
import '../style.css'
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
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
    const [collapseID, setCollapseID] = useState('test')
    const {loggedInState, setLoggedInState} = useContext(AuthContext)
    const history = useHistory();
    const pathname = history.location.pathname;
    useEffect(() => {
     if(!loggedInState){
         console.log(history)
         console.log('ssh')
        history.push('/advanced')
     }
    }, [pathname])

 const  toggleCollapse = colId  =>{
     console.log('run')
     if(colId !== collapseID){
         console.log(true)
        setCollapseID(colId)
     } else {
         setCollapseID('')
         console.log(false)

     }
    
 }

 const closeCollapse = collID  => {
    
    window.scrollTo(0, 0);
    setCollapseID('');
  };
 const logoutHandler = () => {
    const authToken = JSON.parse(localStorage.getItem('login'))?.token
    axios.post('https://api-nodejs-todolist.herokuapp.com/user/logout', {}, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    }).then(res => {
        console.log(res.data)
    setLoggedInState(false)
    localStorage.removeItem('login')
    history.push('/advanced')

    }).catch(err => {
        console.log(err)
    })
  }

  const overlay = (
    <div
      id='sidenav-overlay'
      style={{ backgroundColor: 'transparent' }}
      onClick={() => toggleCollapse('mainNavbarCollapse')}
    />
  );


    return (
        <>
            <MDBNavbar  dark expand='md' fixed='top' scrolling className="head mb-4">
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
            <MDBNavLink
                    to='/navigation' className="red-text">ToDo</MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={() => toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                {!loggedInState ? 
                <>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={() => closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>signUp</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/advanced'
                    onClick={() => closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Login</strong>
                  </MDBNavLink>
                </MDBNavItem>
                </> 
                :
                <>
                <MDBNavItem>
                  <MDBBtn 
                    color="danger"
                    onClick={logoutHandler}
                  >
                    <strong>Logout</strong>
                  </MDBBtn>
                </MDBNavItem>
                </>
                
                }
                
            
         
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
        </>
    )
}

export default NavBar
