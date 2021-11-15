const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

<!--_HomeRoute_-->
app.get("/", function(req, res) {

    var today = new Date();

    var options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day});
});
<!--_HomeRouteEND_-->

app.post("/", function(req, res){
  var item = req.body.newItem;
  console.log(item);
});

app.listen(3000, function() {
    console.log("Server is on running on port 3000");
});




/* var currentDay = today.getDay();
var day ="";

switch (currentDay) {
  case 0:
  day = "Sunday";
  break;
  case 1:
  day = "Monday";
  break;
  case 2:
  day = "Tuesday";
  break;
  case 3:
  day = "Wednesday";
  break;
  case 4:
  day = "Thursday";
  break;
  case 5:
  day = "Friday";
  break;
  case 6:
  day = "Satuday";
  break;
  default:
  console.log("Error: current day is equal to: " + currentDay);
}*/
