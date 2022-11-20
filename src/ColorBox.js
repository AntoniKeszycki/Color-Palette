import { toHaveDescription } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import "./ColorBox.css";

class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background }} className="ColorBox">
        <div className="copy-container">
          <div className="box-container">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default ColorBox;
