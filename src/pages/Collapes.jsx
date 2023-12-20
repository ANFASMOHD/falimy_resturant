import React from 'react'
import { useState } from 'react';

import Collapse from 'react-bootstrap/Collapse';

function Collapes() {
    const [open, setOpen] = useState(false);
    
  return (
    
    <>
    <button onClick={()=>setOpen(!open)} className='btn btn-warning'>Click Here To See Review</button>
<Collapse in={open}>
        <div className='my-2 flex-column'>
        <hr/>
    
    <div>
    
        <h5>name and date</h5>
        <p>Rating</p>
        <p>Description</p>
    
    </div>
    
        </div>
</Collapse>
    </>
  )
}

export default Collapes