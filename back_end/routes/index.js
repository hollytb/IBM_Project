/*const path = require("path");
const { spawn } = require("child_process");
const pythonProcess = spawn("python", ["Tracker/vanilla_tracker.py", arg1]);*/

var express = require("express");
var app = express();
var spawn = require("child_process").spawn;
var process = spawn("python", ["./Tracker/vanilla_tracker.py"]);
