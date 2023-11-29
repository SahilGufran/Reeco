import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    
    <Navbar  expand="xxl" className="bg-success p-2 text-white">
      <Container fluid>
        <Navbar.Brand href="#home" className="bg-success p-2 text-white"><b><i>Reeco</i></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href="#store"className="bg-success p-2 text-white">Store</Nav.Link>
            <Nav.Link href="#orders"className="bg-success p-2 text-white">Orders</Nav.Link>
            <Nav.Link href="#analytics"className="bg-success p-2 text-white">Analytics</Nav.Link>
            
          </Nav>
          <Nav.Link href="#orders" className="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="16" fill="currentColor" class="bi bi-cart" >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
          
           </Nav.Link>
          <Form className="d-flex">
         
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-white"className="bg-success p-2 text-white">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Header
