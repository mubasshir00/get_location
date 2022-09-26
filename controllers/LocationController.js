const fs = require("fs");

const updateLocation = (req, res) => {
  try {
    console.log(req.body);
    const { year, day, hour, lat, long, magnitude } =  req.body ;
    const location_json = {
      year: year,
      day: day,
      h: hour,
      m: 0,
      s: 35,
      lat: lat,
      lon: long,
      magnitude: magnitude,
      comments: "",
    };
    fs.writeFile(
      "location.json",
      JSON.stringify(location_json),
      function (err) {
        if (err) throw err;
        console.log("Replaced!");
      }
    );
    return res.status(200).json({
      status: true,
      status_message: "data updated",
    });
  } catch (e) {
    console.log(e);
  }
};

const getLocation = async (req,res) => {
  try {
    let obj ;
    //  await fs.readFile("location.json", function (err, data) {
    //   if (err) throw err;
    //   obj = JSON.parse(data);
    //   console.log(obj);
    // });
    let temp = await fs.readFileSync("location.json",function(err,data){
        console.log();
    });
    obj = JSON.parse(temp)
    console.log(obj);

    return res.status(200).json({
      status: true,
      status_message: obj,
    });
  } catch(e){
    console.log(e);
  }
};

module.exports = {
  updateLocation: updateLocation,
  getLocation: getLocation,
};
