var express = require("express");
var router = express.Router();
//const data = require("./back_end/Tracker/Output.json");

router.get("/search", function(req, res) {
  res.send("API IS WORKING....");
  //res.json(data);
});

module.exports = router;
