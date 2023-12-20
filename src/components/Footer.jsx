import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Row>
        <Col className='py-5 text-center'>
           <Link to={'https://www.instagram.com/?next=%2F'} > <p  >All Right are Reserved @ Food Circle </p></Link>

        </Col>
    </Row>
  )
}

export default Footer