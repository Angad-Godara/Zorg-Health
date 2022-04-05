import React from 'react'
import {Link} from 'react-router-dom'
import './Thanks.css'

function Thanks() {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>
    <div className='thanks'><h3>Thanks</h3></div>
    </Link>
  )
}

export default Thanks