import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

class Contact extends Component{
    render(){
    return (
        <div className='contact'>
            <form>
                <h5 className='contactnum'>Contact Number</h5>
                <div className='seperate'>
                <input 
                className='input'
                 type={'number'}
                    name="mob_no"
                    id="mob_no"
                    onChange={this.props.onNumberChange}
                    placeholder='10 digits mobile number'
                ></input>
                <Link to={this.props.mob_no.length === 10 && '/thanks'} className='link' style={{ textDecoration: 'none' }}>
                <button type=''
                    onClick={this.props.sendIt}
                  className='submit' >Submit</button>
                </Link>
                </div>
            </form>
        </div>
    )
    }
}

export default Contact