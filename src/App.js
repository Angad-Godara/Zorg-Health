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

class App extends Component {

  constructor() {
    super();
    this.state = {
      rating:'',
      mob_no: '',
    }
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
        <Route path='/' element={
          <Link to='/feedback' style={{ textDecoration: 'none' }}>
      <header className="App-header">
        <img src={logo} className="App-logo1" alt="logo" />
        <h2>Kindly Provide Feedback</h2>
        <img src={hand_touch} className="App-logo2" alt="logo" />
        <p className='normal'>Touch the screen to provide feedback</p>
        <p className='nor'>Disclaimer: All the information provided by you would be use this for Customer Experience</p>
      </header> </Link>}/>
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
