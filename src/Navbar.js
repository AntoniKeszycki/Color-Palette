import React, { Component, PureComponent } from "react";
import Slider, { range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { levels, changeLevels } = this.props;
    return (
      <header className="navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level:{levels}</span>
          <div className="slider">
            <Slider
              defaultValue={levels}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevels}
              trackStyle={[{ backgroundColor: "transparent" }]}
              handleStyle={[
                {
                  backgroundColor: "green",
                  outline: "none",
                  border: "2px solid green",
                  boxShadow: "none",
                  width: "13px",
                  height: "13px",
                  marginLeft: "-7px",
                  marginTop: "-3px",
                },
              ]}
              railStyle={{ height: "8px" }}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Navbar;
