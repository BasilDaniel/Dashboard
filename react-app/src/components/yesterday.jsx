import React, { Component } from "react";
import Responses from "./responses";
import Errors from "./errors";
import InfoBlock from "./infoBlock";

class Yesterday extends Component {
  state = {
    day: "Yesterday",
    lastDay: "Last friday"
  };
  render() {
    return (
      <div>
        <Responses
          errors={
            isNaN(this.props.data.data[0].errors_yesterday)
              ? "-"
              : Math.round(this.props.data.data[0].errors_yesterday * 100) /
                  100 +
                "%"
          }
          zeroes={
            isNaN(this.props.data.data[0].zeroes_yesterday)
              ? "-"
              : Math.round(this.props.data.data[0].zeroes_yesterday * 100) /
                  100 +
                "%"
          }
          timeout={
            isNaN(this.props.data.data[0].timeout_yesterday)
              ? "-"
              : Math.round(this.props.data.data[0].timeout_yesterday * 100) /
                  100 +
                "%"
          }
        />
        <Errors errors={this.props.data.errors_yesterday} />
        <InfoBlock
          icon="search"
          name="Searches"
          leftBlockTitle1={this.state.day}
          leftBlockValue1={
            isNaN(this.props.data.data[0].searches_current_yesterday)
              ? "-"
              : this.props.data.data[0].searches_current_yesterday
          }
          leftBlockTitle2={this.state.lastDay}
          leftBlockValue2={
            isNaN(this.props.data.data[0].searches_previous_yesterday)
              ? "-"
              : this.props.data.data[0].searches_previous_yesterday
          }
          rightBlockTitle1="Mobile trafic:"
          rightBlockValue1={
            isNaN(this.props.data.data[0].mobile_pessimizer)
              ? "-"
              : Math.floor(this.props.data.data[0].mobile_pessimizer) + "%"
          }
          rightBlockTitle2="Web trafic"
          rightBlockValue2={
            isNaN(this.props.data.data[0].web_pessimizer)
              ? "-"
              : Math.floor(this.props.data.data[0].web_pessimizer) + "%"
          }
          rightBlockValue3="You get 100% trafic on mobile and desktop devices."
          rightBlockValue4="Searches, Perssimisation"
        />
        <InfoBlock
          icon="touch_app"
          name="Clicks"
          leftBlockTitle1={this.state.day}
          leftBlockValue1={this.props.data.data[0].clicks_current_yesterday}
          leftBlockTitle2={this.state.lastDay}
          leftBlockValue2={this.props.data.data[0].clicks_previous_yesterday}
          rightBlockTitle1="CTR:"
          rightBlockValue1={
            isNaN(this.props.data.data[0].ctr_yesterday)
              ? "-"
              : Math.floor(this.props.data.data[0].ctr_yesterday) + "%"
          }
          rightBlockValue3="Conversion from searches to clicks on all devices."
          rightBlockValue4="CTR, Clicks"
        />
        <InfoBlock
          icon="shopping_cart"
          name="Bookings"
          leftBlockTitle1={this.state.day}
          leftBlockValue1={this.props.data.data[0].bookings_current_yesterday}
          leftBlockTitle2={this.state.lastDay}
          leftBlockValue2={this.props.data.data[0].bookings_previous_yesterday}
          rightBlockTitle1="STR:"
          rightBlockValue1={
            isNaN(this.props.data.data[0].str_yesterday)
              ? "-"
              : Math.floor(this.props.data.data[0].str_yesterday) + "%"
          }
          rightBlockTitle2="Avg. Check:"
          rightBlockValue2={
            isNaN(this.props.data.data[0].avg_price_yesterday)
              ? "-"
              : Math.floor(this.props.data.data[0].avg_price_yesterday)
          }
          rightBlockValue3="Conversion from clicks to bookings on all devices."
          rightBlockValue4="STR, Bookings, Avg. Check"
        />
      </div>
    );
  }
}

export default Yesterday;
