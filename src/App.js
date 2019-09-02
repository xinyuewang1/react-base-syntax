import React, { Component } from "react";
import "./App.css";
import { userInput as UserInput, userOutput as UserOutput } from "./User/User";

class App extends Component {
  state = {
    person: [{ name: "Fine" }, { name: "OK" }]
  };

  nameChangeHandler = event => {
    this.setState({
      person: [{ name: event.target.value }, { name: "OK" }]
    });
  };

  render() {
    const style = {
      padding: "8px",
      color: "#eee",
      border: "1px"
    };

    return (
      <div className="App">
        <h1 style={style}>Hey, what's your name?</h1>
        <UserInput changed={this.nameChangeHandler} />
        <UserOutput name={this.state.person[0].name} />
        {/* <UserInput changed={this.nameChangeHandler} /> */}
        <UserOutput name={this.state.person[1].name} />
      </div>
    );
  }
}

export default App;
