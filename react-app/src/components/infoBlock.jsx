import React, { Component } from "react";
import "./infoBlock.css";
import Badge from "./badge";
import Icon from "./icon";
class InfoBlock extends Component {
  render() {
    return (
      <div className="container info-block-container">
        <div className="row">
          <div className="col-1">
            <Icon
              icon={this.props.icon}
              current={this.props.leftBlockValue1}
              previous={this.props.leftBlockValue2}
            />
          </div>
          <div className="col-4 info-block-column-padding-left">
            <div className="text-big-fat text-muted">
              <span>{this.props.name}</span>
              <Badge
                current={this.props.leftBlockValue1}
                previous={this.props.leftBlockValue2}
              />
            </div>
            <div>
              <span className="text-big-thin text-color-dark-grey">
                {this.props.leftBlockValue1}
              </span>
              <span className="text-small-fat text-color-dark-grey span-padding-left">
                {this.props.leftBlockTitle1}
              </span>
            </div>
            <div>
              <span className="text-big-thin text-color-light-grey">
                {this.props.leftBlockValue2}
              </span>
              <span className="text-small-fat text-color-light-grey span-padding-left">
                {this.props.leftBlockTitle2}
              </span>
            </div>
          </div>
          <div className="col-7">
            <div className="text-big-fat text-muted">
              <span>{this.props.rightBlockTitle1}</span>
              <span className="span-padding-left">
                {this.props.rightBlockValue1}
              </span>
            </div>
            <div className="text-big-fat text-muted">
              <span>{this.props.rightBlockTitle2}</span>
              <span className="span-padding-left">
                {this.props.rightBlockValue2}
              </span>
            </div>
            <div>
              <span className="text-small-fat text-color-light-grey">
                {this.props.rightBlockValue3}
              </span>
            </div>
            <div>
              <span className="text-small-fat text-color-dark-grey">
                Help:{" "}
              </span>
              <span className="text-small-fat text-color-blue">
                {this.props.rightBlockValue4}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoBlock;
