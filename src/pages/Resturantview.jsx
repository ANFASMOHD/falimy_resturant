import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Collapes from './Collapes';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Resturantview() {
  const [show, setShow] = useState(false);
  const {id}=useParams()
  console.log(id);

  const allResturant= useSelector((state)=>state.resturantSlice.allResturant)
  console.log(allResturant);

  const selectedresturant =allResturant.find(item=>item.id == id)
  console.log(selectedresturant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <Row className='mt-5 mb-5'>
    <Col md={1}></Col>
    <Col md={3}>
        <img width={'100%'}    src={selectedresturant.photograph}  alt="" />
    </Col>
    <Col md={7} className='px-5'>
        <hr/>
        <h4 className='text-center'> <span className='text-warning'>RESTURANT</span> DETAILS</h4>
        <hr/>
        <ListGroup>
      <ListGroup.Item><h4 className='text-center p-4'>{selectedresturant.name} </h4></ListGroup.Item>
      <ListGroup.Item><p>Neigbourhood :{selectedresturant.neighborhood}</p></ListGroup.Item>
      <ListGroup.Item><p>Cuisine_type :{selectedresturant.cuisine_type}</p></ListGroup.Item>
      <ListGroup.Item><p>Address :{selectedresturant.address}</p></ListGroup.Item>
      <ListGroup.Item className='text-center p-3 mb-2'>
       
           <button onClick={handleShow} className='btn btn-warning me-4'>opening Hours
          </button>
          <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className='text-warning'>Opening Hours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ListGroup>
        <ListGroup.Item>Monday :</ListGroup.Item>
        <ListGroup.Item>Tuesday :</ListGroup.Item>
        <ListGroup.Item>Wednesday :</ListGroup.Item>
        <ListGroup.Item>Thursday :</ListGroup.Item>
        <ListGroup.Item>Friday :</ListGroup.Item>
        <ListGroup.Item>Saturday :</ListGroup.Item>
      </ListGroup>
          </Modal.Body>
         
        </Modal>
        <Collapes/>
        
      </ListGroup.Item>
    </ListGroup>
    <hr/>
    </Col>
    <Col md={1}></Col>
  
  </Row>
  )
}

export default Resturantview