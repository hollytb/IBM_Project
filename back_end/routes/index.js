const spawn = require("child_process").spawn;
const process = spawn("python", ["./vanilla_tracker.py"]);
process.stdout.on("data", data => {
  console.log(data.toString());
});
