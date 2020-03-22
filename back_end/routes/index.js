var express = require("express");
var router = express.Router();
var myPythonScriptPath = "../Tracker/vanilla_tracker.py";
const fs = require("fs");
module.exports = router;

const path = require("path");
const { spawn } = require("child_process");

/**
 * Run python script, pass in `-u` to not buffer console output
 * @return {ChildProcess}
 */
function runScript() {
  return spawn("python", [
    "-u",
    path.join(__dirname, myPythonScriptPath),
    "--foo",
    "some value for foo"
  ]);
}

const subprocess = runScript();

// print output of script
subprocess.stdout.on("data", data => {
  console.log(`data:${data}`);
});
subprocess.stderr.on("data", data => {
  console.log(`error:${data}`);
});
subprocess.on("close", () => {
  console.log("Closed");
});
