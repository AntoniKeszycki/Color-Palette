import React, { Component, PureComponent } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider, { range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { FormControl, InputLabel } from "@mui/material";
import { maxHeight } from "@mui/system";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }
  render() {
    const { levels, changeLevels } = this.props;
    const { format } = this.state;
    return (
      <header className="navbar">
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level:{levels}</span>
          <div className="slider">
            <Slider
              defaultValue={levels}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevels}
              trackStyle={[{ backgroundColor: "transparent" }]}
              handleStyle={[
                {
                  backgroundColor: "green",
                  outline: "none",
                  border: "2px solid green",
                  boxShadow: "none",
                  width: "13px",
                  height: "13px",
                  marginLeft: "-7px",
                  marginTop: "-3px",
                },
              ]}
              railStyle={{ height: "8px" }}
            />
          </div>
        </div>
        <div className="selectContainer">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="format">Format</InputLabel>
            <Select
              labelId=""
              id=""
              value={format}
              label="Format"
              onChange={this.handleChange}
            >
              <MenuItem value="hex">HEX - #ffffff </MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </header>
    );
  }
}

export default Navbar;
