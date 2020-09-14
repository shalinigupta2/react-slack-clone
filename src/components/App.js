import React, { Component } from "react";
import { SignIn } from "./";

class App extends Component {
  state = {
    counter: 1
  };
  render() {
    return (
      <div className="App">
        Hello World
        <SignIn />
      </div>
    );
  }
}

export default App;
