import React from 'react'

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/log2.webp'
import { useDispatch } from 'react-redux';
import { search } from '../redux/resturantSlice';

function Header() {
  const dispath= useDispatch()
  return (
    
        <Navbar varient='yellow'>
      <Container>
        <Navbar.Brand href="#home"  className='d-flex'>
            <img  src={logo}  alt="" width="50" height="50" className='d-inline-block align-top rounded'  />{' '}
            <h5 className='mt-3 ms-4'><span className='text-warning'>Food </span>Circle</h5>

        </Navbar.Brand>
        
          <input onChange={(e)=>dispath(search(e.target.value))} type="text" className='form-control w-25'  placeholder='search by neighbourhood'/>
          

       
        
            
      </Container>
    </Navbar> 
    
  )
}

export default Header