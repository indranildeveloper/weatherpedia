const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

const PORT = 8000 || process.env.PORT;

// Public Static Path
// console.log(path.join(__dirname, "../public"));
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// View Engine
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// Routing
app.get("/", (req, res) => {
  // res.send("Welcome to the WeatherPedia!");
  res.render("index");
});

app.get("/about", (req, res) => {
  // res.send("Welcome to the WeatherPedia About Page!");
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMsg: "Opps! Page Not Found!"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
