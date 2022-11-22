import React, { Component } from "react";
import Palette from "./Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    console.log(generatePalette(seedColor[4]));
    return (
      <div className="App">
        <Palette {...seedColor[4]} />
      </div>
    );
  }
}

export default App;
