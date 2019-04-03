import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state= {
      list: ["bacon", "butter", "milk", "eggs",],
      string: ''
    }
  }
  //update state on change of input 
  //check the array to see if the new string state equals any items in the array- (filter)
  update = (val) => {
    this.setState({
      string: val, 
    })
  } 

  render() {
    let list= 
    
      this.state.list.filter((element)=> {
         return element.includes(this.state.string)
     })
      .map((element, index)=> {
     
     return <h2 key={index}>{element}</h2>
    })
    

    return (


      <div className="App">

      <input type="text" placeholder="search here" onChange={(e)=> {
        this.update(e.target.value)
      }}></input>

      {list}

      </div>
    );
  }
}

export default App;
