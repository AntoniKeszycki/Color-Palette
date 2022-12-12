import React from "react";
import "./MiniPalette.css";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      className="miniColor"
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));
  return (
    <div className="root">
      <div className="colors">{miniColorBoxes}</div>

      <h5 className="title">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </h5>
    </div>
  );
}

export default MiniPalette;
