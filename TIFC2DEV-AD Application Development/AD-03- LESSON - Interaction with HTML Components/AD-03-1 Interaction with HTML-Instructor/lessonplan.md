# Lesson plan Answer

## HTML Answer

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <h1>Demonstration</h1>

    <h2>Alert Box</h2>
    <p>Give us a Sign!</p>

    <h2>Console.log</h2>
    <button onclick="">Click here</button>

    <h2>onClick</h2>
    <p onclick="alertFunction()">Click here for an alert box</p>

    <h2>The Span element</h2>
    <p>apples are <span id="red" onclick="red()">red</span></p>
    <p>Potatoes are <span id="brown" onclick="brown()">brown</span></p>
    <p>BlueBerry are ... <span id="blue" onclick="blue()">blue?</span></p>

    <script src="script.js"></script>

    <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
    <script
      src="https://replit.com/public/js/replit-badge-v2.js"
      theme="dark"
      position="bottom-right"
    ></script>
  </body>
</html>

```

## JavaScript Answer

```
// Alert function
alert("Give us a Sign!");

// console.log function
console.log("We hear you!");

// OnClick Demo
function alertFunction() {
  alert("Alert!");
}

// Span Demo
document.getElementById("red").style.color = "red";

// Combining all of the demos
function brown() {
  document.getElementById("brown").style.color = "brown";
  alert("Potatoes are BROWN");
}

function blue() {
  document.getElementById("blue").style.color = "blue";
  console.log("Someone named Randy said its purple");
}

```
