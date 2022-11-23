import React, { Component } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Slider, { range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import { FormControl, InputLabel } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Thermostat } from "@mui/icons-material";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
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
        <div className="select-container">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="format">Format</InputLabel>
            <Select
              labelId=""
              id=""
              value={format}
              label="Format"
              onChange={this.handleFormatChange}
            >
              <MenuItem value="hex">HEX - #ffffff </MenuItem>
              <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
              <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed To: {format.toUpperCase()}
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        ></Snackbar>
      </header>
    );
  }
}

export default Navbar;
