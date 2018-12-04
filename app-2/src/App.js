import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
  }

  render() {
  let listToDisplay = this.state.list.map((el, i) => (
    <div>
      <h2>
        {el}
      </h2>
    </div>
  ))
    return (
      <div className="App">
        {listToDisplay}
      </div>
    );
  }
}


export default App;
