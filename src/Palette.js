import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

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
        <Navbar levels={levels} changeLevels={this.changeLevels} />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
