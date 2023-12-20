import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResturant } from '../redux/resturantSlice'


function Home() {

  const allResturant= useSelector((state)=>state.resturantSlice.allResturant
  )
  console.log(allResturant);

  const dispatch= useDispatch()
useEffect(()=>{
    dispatch(fetchResturant())
},[])

  return (
    <Row>
   {
    allResturant?.length>0?
   allResturant?.map((Resturant)=>(<Col className='px-5 py-3' sm={6} md={4} >

   <Restcard item={Resturant}/>

 </Col>))
 :
 <p className='text-danger fw-bolder'>No Resturant Available</p>
     
      }
     
    </Row>
  )
}

export default Home