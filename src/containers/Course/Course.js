import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Course extends Component {
  render() {
    let heading;
    if (this.props.location.search) {
      heading = this.props.location.search.split("=")[1].split("%20").join(" ");
    }

    return heading ? (
      <div>
        <h1>{heading}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    ) : (
      <h1>Error: 404</h1>
    );
  }
}

export default withRouter(Course);
