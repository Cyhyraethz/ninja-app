import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app-content">
        <h1>Hey, ninjas</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
