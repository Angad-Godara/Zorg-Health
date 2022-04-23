import React from 'react'
import './Admin.css'
import Card from './Card'

function Admin({users, data}) {
  return (
    <div className='admin'>
        <button className='button__admin' onClick={users}>Admin</button>
        <div>
          <div className='header'>
            <h4>S No.</h4>
            <h4>Mob No.</h4>
            <h4>Rating</h4>
          </div>
        {data.map((item,i) => {
            return <Card id={item.id} rating={item.rating} mob_no={item.mob_no} key={i}/>
        })}
        </div>
    </div>
  )
}

export default Admin