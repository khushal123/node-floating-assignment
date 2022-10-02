const dotenv = require("dotenv");
dotenv.config();

const { unlink } = require("fs");
const { join } = require("path");

const CronJob = require("node-cron");
const calculate = require("./calculate");

//remove csv file, handling the error in case it already exists.
unlink(join(__dirname, "out.csv"), (error) => {
  if (error) console.error(error);
});

const task = CronJob.schedule(
  "*/5 * * * * *",
  () => {
    calculate();
  },
  {
    scheduled: false,
  }
);

task.start();
