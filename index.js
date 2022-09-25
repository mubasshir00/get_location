const express = require("express");
const fs = require('fs');
const path = require("path");
const bodyParser = require("body-parser");
let app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("form");
});
app.post("/", (req, res) => {
  const { year, day, hour, lat, long, magnitude } = {...req.body};
  const location_json = {
    year: year,
    day: day,
    h:hour,
    m:0,
    s:35,
    lat:lat,
    lon:long,
    magnitude:magnitude,
    comments:""
  };
  fs.writeFile("location.json", JSON.stringify(location_json), function (err) {
    if (err) throw err;
    console.log("Replaced!");
  });
  res.render("form", {
    // first: fname,
    // last: lname,
    // email: email,
    // birth: birthday,
  });
});
const port = 3015;
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});

