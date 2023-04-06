import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    text: ""
  }
  handleInputChange = (event) => {
    const text = event.target.value;
    this.setState({
      text
    })
  }
  render() {
    const { text } = this.state;

    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.handleInputChange} placeholder="Empieza a escribir algo" />
        <p className="repeater">{text}</p>
      </div>
    );
  }
}

export default App;
