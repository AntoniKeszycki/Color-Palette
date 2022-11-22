import chroma from "chroma-js";

/*
  {
    paletteName: "Material UI Colors",
    id: "material-ui-colors",
    emoji: "🎨",
    colors: [
      { name: "red", color: "#F44336" },
      { name: "pink", color: "#E91E63" },
      { name: "purple", color: "#9C27B0" },
      { name: "deeppurple", color: "#673AB7" },
      { name: "indigo", color: "#3F51B5" },
      { name: "blue", color: "#2196F3" },
      { name: "lightblue", color: "#03A9F4" },
      { name: "cyan", color: "#00BCD4" },
      { name: "teal", color: "#009688" },
      { name: "green", color: "#4CAF50" },
      { name: "lightgreen", color: "#8BC34A" },
      { name: "lime", color: "#CDDC39" },
      { name: "yellow", color: "#FFEB3B" },
      { name: "amber", color: "#FFC107" },
      { name: "orange", color: "#FF9800" },
      { name: "deeporange", color: "#FF5722" },
      { name: "brown", color: "#795548" },
      { name: "grey", color: "#9E9E9E" },
      { name: "bluegrey", color: "#607D8B" },
    ],
  },
colors {
50: [
    {name: {color.name} 50", id: "beekeeper", hex: "#fbedb3", rgb: "rgb(251,237,179)""}
    {...}
    {...}
    ]
100: [{...}{...}{...}]
200: [{...}{...}{...}]
300: [{...}{...}{...}]
400: [{...}{...}{...}]
}
*/

//different levels of color shade
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  //define newPalette that will be return
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}, //the only one that we need to change
  };
  //looping throu levels to set each one to an empty array
  for (let level of levels) {
    //console.log(levels);
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    //get the 10 shades of color - reversed brightest -> darkest
    let scale = getScale(color.color, 10).reverse();
    //for each color we add 10 shades in to the colors
    for (let i in scale) {
      //console.log(typeof newPalette.colors[levels[i]], scale, levels[i]);
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`, //add name and levels
        id: color.name.toLowerCase().replace(/ /g, "-"), //replace spaces with -
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}
//generate range of colors in array [ dark color -> input color -> white color ]
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}
//generate 10 different colors based on input color
function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export { generatePalette };
