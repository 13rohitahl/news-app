import React, { Component } from "react";
import "./style.css";

export class Loader extends Component {
  render() {
    return (
      <div className="loader-main">
        <div className="loader-circle-39">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default Loader;
