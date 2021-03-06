import logo from './logo.png';
import hand_touch from './hand_touch.png';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Feedback from './feedback';
import { Component } from 'react';
import Contact from './Contact'
import Thanks from './Thanks'
import Admin from './Admin';

class App extends Component {

  constructor() {
    super();
    this.state = {
      rating:'',
      mob_no: '',
      users: [],
    }
  }


  users = () => {
    fetch("https://pacific-lake-09998.herokuapp.com/data")
        .then(res => res.json())
        .then(data => {
            this.setState({users: data})
        }).catch(err => console.log('hello'))
}

  onRatingChange = (event) =>{
    this.setState({rating: event})
  }

  onNumberChange = (event) => {
    this.setState({mob_no: event.target.value})
    // console.log(this.state.mob_no)
  }

  sendIt = () => {
    // console.log("User >> ", this.state.mob_no);
    // console.log("Rating >> ", this.state.rating);
    fetch("https://pacific-lake-09998.herokuapp.com/contact",{
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            mob_no: this.state.mob_no,
            rating: this.state.rating
        })
    })
}

  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/admin' element={<Admin users={this.users} data={this.state.users}/>}/>
        <Route path='/' element={
          <Link to='/feedback' style={{ textDecoration: 'none' }}>
      <header className="App-header">
        <img src={logo} className="App-logo1" alt="logo" />
        <h2>We value your feedback</h2>
        <img src={hand_touch} className="App-logo2" alt="logo" />
        <p className='normal'>Touch the screen to provide feedback</p>
        <p className='nor'>Disclaimer: All information provided by you would be kept confidential and will be used for enhancing Customer Experience</p>
      </header> </Link>
    }/>
      <Route path='/feedback' element={<Feedback onEventChange ={this.onRatingChange}/>}/>
      <Route path='/contact' element={<Contact sendIt={this.sendIt} onNumberChange = {this.onNumberChange} mob_no={this.state.mob_no}/>}/>
      <Route path='/thanks' element={<Thanks/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
 }
}

export default App;
