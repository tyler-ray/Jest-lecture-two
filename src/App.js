import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import fns from './utls/functions'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      person:{},
      ship:{}
    }
    }
  getStarship = () =>{
    fns.getStarship().then(res=>{this.setState({ship:res})})
  }
  getPerson = ()=>{
    fns.getPerson().then(res=>{this.setState({person:res})})
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.getPerson}>CLICK ME</button>
          {JSON.stringify(this.state)}  
      </div>
    );
  }
}

export default App;
