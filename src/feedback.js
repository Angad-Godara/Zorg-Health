import React from 'react'
import './feedback.css'
import {Link} from 'react-router-dom'
function feedback({onEventChange}) {

  return (
    <div className='feedback'>
      <Link to='/contact'>
      <button type='submit' className='buttn' onClick={ () => onEventChange(1)}>
        <img className='img1' src='https://www.surveystance.com/wp-content/uploads/2020/08/1.png' alt='very bad'></img>
        <h2><strong>1</strong></h2>
        </button>
        </Link>

        <Link to='/contact'>
        <button className='buttn' onClick={() => onEventChange(2)}>
        <img className='img1' src='https://www.surveystance.com/wp-content/uploads/2020/08/2.png' alt='very bad'></img>
        <h2><strong>2</strong></h2>
        </button>
        </Link>
        <Link to='/contact'>
        <button className='buttn' onClick={() => onEventChange(3)}>
        <img className='img1' src='https://www.surveystance.com/wp-content/uploads/2020/08/3.png' alt='very bad'></img>
        <h2><strong>3</strong></h2>
        </button>
        </Link>
        <Link to='/contact'>
        <button className='buttn' onClick={() => onEventChange(4)}>
        <img className='img1' src='https://www.surveystance.com/wp-content/uploads/2020/08/4.png' alt='very bad'></img>
        <h2><strong>4</strong></h2>
        </button>
        </Link>
    </div>
  )
}

export default feedback