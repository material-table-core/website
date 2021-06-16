/**
 *
 * In order to deploy you will need to run the following yarn
 * command, as to set the GIT_USER env var to your github username.
 *
 * If your username were `user1234` you would run:
 *
 *   `yarn deploy user1234`
 *
 *
 */

const { spawn } = require("child_process");
const { log } = console;

// The first two args are supplied by default so we need 3 args, so `argv[2]`
if (process.argv.length <= 2) {
  log("\nEMPTY GIT USER!!! Use command like: \n\t`yarn deploy username1234`\n");
  process.exit(1);
}

process.env.GIT_USER = process.argv[2];

const child = spawn("docusaurus", ["deploy"]);

child.stdout.setEncoding("utf8");
child.stdout.on("data", (data) => {
  log(data)
});

child.stderr.setEncoding("utf8");
child.stderr.on("data", (data) => {
  log(data)
});

child.on("error", (error) => {
  log("Error", { error });
});

child.on("close", (exitCode) => {
  log("Exit code:", exitCode);
});
