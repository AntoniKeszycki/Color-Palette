import React from "react";
import "./MiniPalette.css";
import { useNavigate } from "react-router-dom";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, id } = props;
  const navigate = useNavigate();

  const miniColorBoxes = colors.map((color) => (
    <div
      className="miniColor"
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));
  return (
    <div className="root" onClick={() => navigate(`/palette/${id}`)}>
      <div className="colors">{miniColorBoxes}</div>
      <h5 className="title">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </h5>
    </div>
  );
}

export default MiniPalette;
