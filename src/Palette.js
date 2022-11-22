import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider, { range } from "rc-slider";
import "rc-slider/assets/index.css";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

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
        <Slider
          defaultValue={levels}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevels}
        />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
