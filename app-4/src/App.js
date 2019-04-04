import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state= {
      username: '', 
      password:"", 
    }
  }
  
clickHandler= () => {
  alert(`${this.state.username} logged in with ${this.state.password}`)
}

  
  render() {
    return (
      <div className="App">
        
      <input type= "email" placeholder= "username" onChange= {(e) => {
        this.setState({
          username: e.target.value
        })
      }}/>
      <input type= "password" placeholder= "password" onChange= {(e) => {
        this.setState({
         password: e.target.value
        })
      }}/>
      <button onClick={()=>{this.clickHandler()}}>Login!</button>


      </div>
    );
  }
}

export default App;
