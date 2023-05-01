// What we need to get started and to run the code!

const filesystem = require("./node_modules/graceful-fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./library/shapes");
const fs = require("fs");

class Svg {
  constructor() {
    this.txtElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" xmlns= "http://www.w3.org/2000/svg" height= "100% width="100"/>`;
  }

  setTextElement = (text, color) => {
    this.txtElement = `<text x="150" y="125" font-size = "65"/>`;
  };

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

//Make an Array of questions for the user :)

const questions = [
  {
    type: "input",
    name: "text",
    message: "TEXT: Enter up to (3) Characters please! :",
  },

  {
    type: "input",
    name: "text-color",
    message: "TEXT_COLOR: Please Enter a Color Keyword :",
  },

  {
    type: "input",
    name: "shape",
    message: "SHAPE_COLOR: Please enter a color for the text color :",
  },

  {
    type: "input",
    name: "pixel-image",
    message: "Please choose which pixel image would you like to utilize? :",
    choices: ["Circle", "Square", "Triangle"],
  },
];
// // The logic of the users inputs..
// let shapeChoices;
// if (answer.shape === "Triangle") {
//   shapeChoices = new Triangle();
//   svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answer.shapeBackgroundColor}"/>`;
// } else if (answer.shape === "Square") {
//   shapeChoices = new Square();
//   svgString += `<rect x="73" y="40" width="160" height="160" fill="${answer.shapeBackgroundColor}"/>`;
// } else {
//   shapeChoices = new Circle();
//   svgString += `<circle cx="150" cy="115" r="80" fill="${answer.shapeBackgroundColor}"/>`;
// }

// TODO: Create a function to generate the logo
function writeToFile(fileName, answer) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), answer);
}

// TODO: Create a function to initialize the code
function run() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating sgv logo.....");
    writeToFile("./examples", generateMarkdown({ ...responses }));
  });
}
// Function call to initialize app
run();
