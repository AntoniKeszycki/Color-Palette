import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import "./PaletteList.css";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div className="paletteList-root">
        <div className="paletteList-container">
          <nav className="paletteList-nav">
            <h1> React Colors</h1>
          </nav>
          <div className="paletteList-palettes">
            {palettes.map((palette) => (
              <MiniPalette {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PaletteList;

/* <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link> */
