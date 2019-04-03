import React, { Component } from "react";

import "./App.css";

class App extends Component {
  
  constructor() {
    super()

    this.state= {
      array: ["string1", "string2", "string3", "string4"]
    }
  }
  


  //for each item in array, return a string 

  
  render() {
    
    let strings= this.state.array.map((element, index)=>{
      return <h2 key={index}>{element}</h2>
    })
    
  
    return (
      <div className="App" >
             
      {strings}

      </div>
    );
  }
}

export default App;
