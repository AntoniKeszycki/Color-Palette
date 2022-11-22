import React, { Component } from "react";
import Palette from "./Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColor[4])} />
      </div>
    );
  }
}

export default App;
