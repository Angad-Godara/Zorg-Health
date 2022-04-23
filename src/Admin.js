import React from 'react'
import './Admin.css'
import Card from './Card'

function Admin({users, data}) {
  return (
    <div>
        <button onClick={users}>Admin</button>
        <div>
        {data.map((item,i) => {
            return <Card id={item.id} rating={item.rating} mob_no={item.mob_no} key={i}/>
        })}
        </div>
    </div>
  )
}

export default Admin