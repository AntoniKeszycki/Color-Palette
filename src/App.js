import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Palette from "./Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./colorHelpers";
import { palette } from "@mui/system";

const findPalette = (id) => seedColor.find((palette) => palette.id == id);
const PaletteWrapper = () => {
  const { id } = useParams();
  const palette = generatePalette(findPalette(id));
  return <Palette palette={palette} />;
};
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<h1>Palette List</h1>} />
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
