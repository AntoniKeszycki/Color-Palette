import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Palette from "./Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<h1>Palette List</h1>} />
        <Route
          path="/palette/:id"
          element={<Palette palette={generatePalette(seedColor[4])} />}
        />
      </Routes>
      /*     <div className="App">
        <Palette palette={generatePalette(seedColor[4])} />
      </div> */
    );
  }
}

export default App;
