import React, { Component } from "react";
import axios from "axios";
import DashBoard from "./components/dashBoard";
import "./App.css";

class App extends Component {
  state = {
    data: {
      data: [{}],
      errors_last_3days: [],
      errors_last_hour: [],
      errors_yesterday: []
    }
  };

  async componentDidMount() {
    const { data: data } = await axios.get("http://127.0.0.1:8000/idealweight");
    this.setState({ data });
  }

  handleConsoleData = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div className="main-container">
        <DashBoard
          data={this.state.data}
          // errors_last_3days={this.state.errors_last_3days}
          // errors_last_hour={this.state.errors_last_hour}
          // errors_yesterday={this.state.errors_yesterday}
        />
      </div>
    );
  }
}

export default App;
