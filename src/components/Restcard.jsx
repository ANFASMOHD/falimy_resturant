import React from 'react'


import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Restcard({item}) {
  return (
    <Link to={`/restview/${item.id}`} style={{textDecoration:'none'}}>
        <Card  style={{ width: '100%' }}>
        <Card.Img height={'350px'} variant="top" src={item.photograph} />
        <Card.Body>
          <Card.Title className='text-center text-warning'>{item.name}</Card.Title>
          <hr/>
        
          
    <Card.Text>
        {item.address}
    </Card.Text>
    <hr/>
    <div className='d-flex justify-content-between'>
      <a style={{textDecoration:'none'}} href="">{item.neighborhood}</a>
      <a style={{textDecoration:'none'}} href="">{item.cuisine_type}</a>
    </div>
            
           
        
          
         
         
        </Card.Body>
      </Card>
    </Link>
  )
}

export default Restcard