import React, { Component } from "react";

import "./App.css";

//first run throguh- 20 min. 


class App extends Component {
  
  constructor() {
    super()
    
    this.state = {
      input: '',
    }
  
  }
  changeInput = (val) => {
    this.setState({
      input: val,
  })
}


  render() {
    return (
      <div className="App">
        
      <input type="text" onChange= {(e)=> {
        this.changeInput(e.target.value)
      }}></input>
      <p>{`${this.state.input}`}</p>
      </div>
    );
  }
}

export default App;
