import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1> React Colors</h1>
        <MiniPalette />
        {palettes.map((palette) => (
          <div>
            <MiniPalette {...palette} />
          </div>
        ))}
      </div>
    );
  }
}

export default PaletteList;

/* <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link> */
