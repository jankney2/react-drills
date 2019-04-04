import React, { Component } from "react";
import Photo from './components/Img';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Photo url="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg" alt="dog photo" />
        

      </div>
    );
  }
}

export default App;
