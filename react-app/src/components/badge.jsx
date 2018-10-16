import React, { Component } from "react";
class Badge extends Component {
  render() {
    let percentage = Math.ceil(this.props.previous / this.props.current);
    if (percentage > 0)
      return (
        <div className="info-block-badge bg-color-green">
          <span className="info-block-badge-text">{percentage + "%"}</span>
        </div>
      );
    else if (isNaN(percentage)) return <div />;
    else
      return (
        <div className="info-block-badge bg-color-red">
          <span className="info-block-badge-text">{percentage + "%"}</span>
        </div>
      );
  }
}

export default Badge;
