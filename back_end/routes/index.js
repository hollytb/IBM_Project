var myPythonScriptPath = "vanilla_tracker.py";
var PythonShell = require("python-shell");
var pyshell = new PythonShell(myPythonScriptPath);
pyshell.on("message", function(message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});
pyshell.end(function(err) {
  if (err) {
    throw err;
  }

  console.log("finished");
});
