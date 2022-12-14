import React, { Component } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColor from "./seedColor";
import { generatePalette } from "./colorHelpers";

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
        <Route path="/palette/:paletteId/:colorId" element={<h1>Hello</h1>} />
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
