import logo from './logo.png';
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
    fetch("http://localhost:3000/contact",{
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
          <Link to='/feedback'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
