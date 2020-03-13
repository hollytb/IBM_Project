const path = require("path");
const { spawn } = require("child_process");
const pythonProcess = spawn("python", ["Tracker/vanilla_tracker.py", arg1]);
