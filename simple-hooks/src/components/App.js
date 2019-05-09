import React from "react";
import ResourcesList from "./RsourcesList";

class App extends React.Component {
  state = { type: "posts" };

  render() {
    return (
      <div className="ui container">
        <h2>{this.state.type}</h2>
        <button
          className="ui button primary"
          onClick={() => this.setState({ type: "posts" })}
        >
          posts
        </button>
        <button
          className="ui button red"
          onClick={() => this.setState({ type: "todos" })}
        >
          todos
        </button>
        <ResourcesList type={this.state.type} />
      </div>
    );
  }
}

export default App;
