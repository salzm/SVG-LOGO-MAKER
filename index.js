// What we need to get started and to run the code!

const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./library/shapes");
const fs = require("fs");

//Make an Array of questions for the user :)

const questions = [
  {
    type: "input",
    name: "text",
    message: "TEXT: Enter up to (3) Characters please! :",
  },

  {
    type: "input",
    name: "textColor",
    message: "TEXT_COLOR: Please Enter a Color :",
  },

  {
    type: "input",
    name: "shape",
    message: "SHAPE_COLOR: Please enter a color for the shape color :",
  },

  {
    type: "list",
    name: "pixelImage",
    message: "Please choose which pixel image would you like to utilize? :",
    choices: ["Circle", "Square", "Triangle"],
  },
];

// TODO: Create a function to initialize the code
function run() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating sgv logo.....");

    const svgLogo = generateLogo(responses);

    // creates a new svg file from the user input
    fs.writeFile("logo.svg", svgLogo, (err) =>
      err ? console.log(err) : console.log("Created SVG file.")
    );
  });
}
// Function call to initialize app
run();

//Template Literals for shapes using shapes.js

function generateLogo(data) {
  if (data.pixelImage === "Circle") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"> 
    <circle ex="150" cy="150" r="150" fill="${data.shape}">
    <text x="100" y="200" font-size = "50" fill ="${data.textColor}"> ${data.text} </text>
    </svg>`;
  }
  if (data.pixelImage === "Triangle") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"> 
    <polygon points = "150, 18 244, 182 56, 182" fill="${data.shape}"/>
      <text x="100" y="200" font-size = "50" fill ="${data.textColor}"> ${data.text} </text>
      </svg>`;
  }
  if (data.pixelImage === "Square") {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"> 
    <rect x="50" height ="200" width="100" fill="${data.shape}"/>
      <text x="100" y="200" font-size = "50" fill ="${data.textColor}"> ${data.text} </text>
      </svg>`;
  }
}
