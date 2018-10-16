import React, { Component } from "react";
import "./responses.css";
class Responses extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="response-icon bg-color-green" />
            <div className="inline-block">
              <div className="text-big-fat text-muted">
                <span>Errors: </span>
                <span>{this.props.errors}</span>
              </div>
              <div className="text-small-fat text-color-light-grey">
                Average: 0,11%
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="response-icon bg-color-green" />
            <div className="inline-block">
              <div className="text-big-fat text-muted">
                <span>Zeroes: </span>
                <span>{this.props.zeroes}</span>
              </div>
              <div className="text-small-fat text-color-light-grey">
                Average: 0,11%
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="response-icon bg-color-green" />
            <div className="inline-block">
              <div className="text-big-fat text-muted">
                <span>Timeouts: </span>
                <span>{this.props.timeout}</span>
              </div>
              <div className="text-small-fat text-color-light-grey">
                Average: 0,11%
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Responses;
