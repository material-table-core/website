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

const { env, argv } = process;
const { log } = console;

env.GIT_USER = argv[2] ? argv[2] : null;
if (!process.env.GIT_USER) {
  throw new Error('Empty git user. Use like: yarn deploy oze4');
}

const { exec } = require("child_process");

// GIT_USER env var should be set here already
exec(`docusaurus deploy`, (error, stdout, stderr) => {
    if (error) {
        log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        log(`stderr: ${stderr}`);
        return;
    }
    log(`stdout: ${stdout}`);
});

