import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider, { range } from "rc-slider";
import "rc-slider/assets/index.css";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { levels: 500 };
    this.changeLevels = this.changeLevels.bind(this);
  }
  changeLevels(newLevel) {
    this.setState({ levels: newLevel });
  }
  render() {
    const { colors } = this.props.palette;
    const { levels } = this.state;
    const colorBoxes = colors[levels].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={levels}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevels}
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
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
