import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Navbar from "./Navbar";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { levels: 500, format: "hex" };
    this.changeLevels = this.changeLevels.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevels(newLevel) {
    this.setState({ levels: newLevel });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors } = this.props.palette;
    const { levels, format } = this.state;
    const colorBoxes = colors[levels].map((color) => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          levels={levels}
          changeLevels={this.changeLevels}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
