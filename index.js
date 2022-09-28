const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
var https = require('https')

let app = express();
app.use(cors());

const locationRoute = require("./routes");
app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));

const port = 3015;
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});

// const express = require("express");
// const fs = require('fs');
// const path = require("path");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// let app = express();
// app.use(cors());

// const locationRoute = require('./routes')
// app.set("views", path.join(__dirname, "views"));
// // app.use("/public/", express.static("./public"));
// app.use(express.static("public"));
// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());

// app.get("/form", (req, res) => {
//   res.render("form");
// });

// app.get("/images",(req,res)=>{
//   res.render("image")
// })

// app.post("/form_data", (req, res) => {
//   const { year, day, hour, lat, long, magnitude } = {...req.body};
//   const location_json = {
//     year: year,
//     day: day,
//     h:hour,
//     m:0,
//     s:35,
//     lat:lat,
//     lon:long,
//     magnitude:magnitude,
//     comments:""
//   };
//   fs.writeFile("location.json", JSON.stringify(location_json), function (err) {
//     if (err) throw err;
//     console.log("Replaced!");
//   });
//   res.render("form", {
//     // first: fname,
//     // last: lname,
//     // email: email,
//     // birth: birthday,
//   });
// });

// app.use("/",locationRoute)
// const port = 3015;
// app.listen(port, () => {
//   console.log(`App is running at port ${port}`);
// });
