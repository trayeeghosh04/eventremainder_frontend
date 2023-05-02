import React from 'react'
// import Container from 'react-bootstrap/Container';
import '../css/Navbar.css'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function Navlnks() {
    const Navigate = new useNavigate()
    const logout=()=>{
        localStorage.removeItem('token')
        Navigate('/login')
    }
  return (
    <div>
       <Navbar bg="dark" expand="lg" variant="light">
  
        <Navbar.Brand className='fontColor'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="md-auto">
          <Button variant="success" onClick={logout}>Logout</Button>{' '}
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
    </div>
  )
}

export default Navlnks
