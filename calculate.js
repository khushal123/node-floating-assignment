const { createWriteStream } = require("fs");
const BigNumber = require("bignumber.js");
const { join } = require("path");

function applyMath() {
  //standard parseFloat will try to precise if floating point is more than 16
  const fnumber = new BigNumber(process.env.peccalaValue);
  return fnumber.multipliedBy(2).plus(1.5).dividedBy(7.5).toFixed(18);
}

function saveToEnv(modifiedPeccaValue) {
  //updating the process.env
  process.env.peccalaValue = modifiedPeccaValue;
}

function saveToCSV(modifiedPeccaValue) {
  //appending a csv file with new peccaValue and the datetime string
  const cws = createWriteStream(join(__dirname, "out.csv"), { flags: "a" });
  cws.write(`${modifiedPeccaValue},${new Date().toISOString()}\n\r`);
  cws.close();
}

function main() {
  //adding try catch on main because it should fail if any steps is failing
  try {
    console.log("running");
    const modifiedPeccaValue = applyMath();
    saveToEnv(modifiedPeccaValue);
    saveToCSV(modifiedPeccaValue);
  } catch (error) {
    console.error(error);
  }
}

module.exports = main;
