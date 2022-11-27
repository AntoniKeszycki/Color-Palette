import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColor from "./seedColor";
import { generatePalette } from "./colorHelpers";
import { SpeedSharp } from "@mui/icons-material";
import { selectClasses } from "@mui/material";

const findPalette = (id) => seedColor.find((palette) => palette.id == id);
const PaletteWrapper = () => {
  const { id } = useParams();
  const palette = generatePalette(findPalette(id));
  return <Palette palette={palette} />;
};
const PaletteListWrapper = () => {
  return <PaletteList palettes={seedColor} />;
};
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<PaletteListWrapper />} />
        <Route path="/palette/:id" element={<PaletteWrapper />} />
      </Routes>
      /*  
      <div className="App">
        <Palette palette={generatePalette(seedColor[4])} />
      </div> 
      */
    );
  }
}

export default App;
