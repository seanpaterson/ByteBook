import React, { Component } from 'react';
import Window from './Window/Window';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AccountInfo: {
        UserName: "PaladinPaterson"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Window AccountInfo={this.state.AccountInfo}/>
      </div>
    );
  }
}

export default App;