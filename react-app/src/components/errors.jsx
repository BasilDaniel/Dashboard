import React, { Component } from "react";
import "./errors.css";
class Errors extends Component {
  render() {
    let er500 = 0,
      er500Percentage = "",
      er501 = 0,
      er501Percentage = "",
      er502 = 0,
      er502Percentage = "",
      other = 0,
      otherPercentage = "",
      total = 0;
    if (this.props.errors && this.props.errors[0]) {
      this.props.errors.forEach(item => {
        if (item.code == 500) er500 += item.count;
        if (item.code == 501) er501 += item.count;
        if (item.code == 502) er502 += item.count;
        if (item.code != 500 && item.code != 501 && item.code != 502)
          other += item.count;
      });
      total = er500 + er501 + er502 + other;
      er500Percentage = (er500 / total) * 100 + "%";
      er501Percentage = (er501 / total) * 100 + "%";
      er502Percentage = (er502 / total) * 100 + "%";
      otherPercentage = (other / total) * 100 + "%";
    }

    return (
      <div className="container">
        <div className="row">
          <div className="errors-diagram-container">
            <ul className="errors-diagram">
              <li
                className="errors-diagram-li"
                style={{ width: er500Percentage }}
              >
                <div className="errors-diagram-item errors-diagram-item-500 bg-color-yellow" />
              </li>
              <li
                className="errors-diagram-li"
                style={{ width: er501Percentage }}
              >
                <div className="errors-diagram-item errors-diagram-item-501 bg-color-purple" />
              </li>
              <li
                className="errors-diagram-li"
                style={{ width: er502Percentage }}
              >
                <div className="errors-diagram-item errors-diagram-item-502 bg-color-blue" />
              </li>
              <li
                className="errors-diagram-li"
                style={{ width: otherPercentage }}
              >
                <div className="errors-diagram-item errors-diagram-item-other bg-color-grey" />
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="errors-icon bg-color-yellow" />
            <span className="text-small-fat text-muted">Error 500: </span>
            <span className="text-small-fat text-muted">{er500}</span>
          </div>
          <div className="col-3">
            <div className="errors-icon bg-color-purple" />
            <span className="text-small-fat text-muted">Error 501: </span>
            <span className="text-small-fat text-muted">{er501}</span>
          </div>
          <div className="col-3">
            <div className="errors-icon bg-color-blue" />
            <span className="text-small-fat text-muted">Error 502: </span>
            <span className="text-small-fat text-muted">{er502}</span>
          </div>
          <div className="col-3">
            <div className="errors-icon bg-color-grey" />
            <span className="text-small-fat text-muted">Other: </span>
            <span className="text-small-fat text-muted">{other}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Errors;
