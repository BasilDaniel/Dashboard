import React, { Component } from "react";
class Icon extends Component {
  state = {};
  render() {
    let percentage = Math.ceil(this.props.previous / this.props.current);
    if (percentage > 0)
      return (
        <div className="info-block-icon">
          <div className="info-block-icon-circule bg-color-blue">
            <div className="info-block-icon-marker-background">
              <div className="info-block-icon-marker bg-color-green" />
            </div>
            <div className="info-block-icon-icon">
              <i className="material-icons material-icons-adjust">
                {this.props.icon}
              </i>
            </div>
          </div>
        </div>
      );
    else
      return (
        <div className="info-block-icon">
          <div className="info-block-icon-circule bg-color-blue">
            <div className="info-block-icon-marker-background">
              <div className="info-block-icon-marker bg-color-red" />
            </div>
            <div className="info-block-icon-icon">
              <i className="material-icons material-icons-adjust">
                {this.props.icon}
              </i>
            </div>
          </div>
        </div>
      );
  }
}

export default Icon;
