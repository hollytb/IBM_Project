var myPythonScriptPath =
  "/Users/liam/Desktop/TCD/SWENG/github/ibm_project/back_end/Tracker/vanilla_tracker.py";
let { PythonShell } = require("python-shell");
//var pyshell = new PythonShell(myPythonScriptPath, options);
PythonShell.run(myPythonScriptPath, null, function(err) {
  if (err) throw err;
  console.log("finished");
});
