import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
    userInput: '',
  }

  handleChange(value){
    this.setState({userInput: value})
    
  }

  render() {
    let listToDisplay = this.state.list.filter(( el, i ) => {
      return el.includes(this.state.userInput) 
  }).map(( el, i ) => {
    return <h2 key={i}> {el} </h2>
  })

  

    return (
      <div className="App">
        <input type="text" onChange={ (e) => this.handleChange(e.target.value) }/>
        {listToDisplay}
      </div>
    );
  }
}

export default App;

