import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./navBar";
import LastHour from "./lastHour";
import Today from "./today";
import Yesterday from "./yesterday";
import Last3Days from "./last3Days";
import Responses from "./responses";
import Errors from "./errors";
import InfoBlock from "./infoBlock";
import "./dashBoard.css";

class DashBoard extends Component {
  state = {
    titles: {
      day: "yesterday"
    }
  };
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route
              path="/lastHour"
              render={props => <LastHour data={this.props.data} {...props} />}
            />
            <Route
              path="/today"
              render={props => <Today data={this.props.data} {...props} />}
            />
            <Route
              path="/yesterday"
              render={props => <Yesterday data={this.props.data} {...props} />}
            />
            <Route
              path="/last3Days"
              render={props => <Last3Days data={this.props.data} {...props} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default DashBoard;
