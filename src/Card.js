import React from 'react'
import './Card.css'

function Card({rating, id, mob_no}) {
  return (
    <div className='Card'>
            <p>{id}</p>
            <p>{mob_no}</p>
            <p>{rating}</p>
    </div>
  )
}

export default Card