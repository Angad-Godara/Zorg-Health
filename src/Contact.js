import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

class Contact extends Component{
    render(){
    return (
        <div className='contact'>
            <form>
                <h5>Contact Number</h5>
                <input type={'number'}
                    name="mob_no"
                    id="mob_no"
                    onChange={this.props.onNumberChange}
                ></input>
                <Link to={this.props.mob_no.length === 10 && '/thanks'}>
                <button type=''
                    onClick={this.props.sendIt}
                  className='submit'>Submit</button>
                </Link>
            </form>
        </div>
    )
    }
}

export default Contact