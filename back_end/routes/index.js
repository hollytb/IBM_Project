let { PythonShell } = require("python-shell");
const express = require("express");
const router = express.Router();
module.exports = router;
PythonShell.run("vanilla_tracker.py", function(err) {
  if (err) throw err;
  console.log("finished");
});
