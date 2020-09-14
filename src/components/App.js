import React, { Component } from 'react';
import { SignIn } from './';
import { Switch, Route } from 'react-router-dom';

function Home() {
  return <div> Home</div>;
}

function Some() {
  return <div> Some</div>;
}
class App extends Component {
  state = {
    counter: 1
  };
  render() {
    return (
      <div className="App">
        <switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/some" component={Some} />
        </switch>
      </div>
    );
  }
}

export default App;
