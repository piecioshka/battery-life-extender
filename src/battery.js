const { execFile } = require("node:child_process");
const { promisify } = require("node:util");

const execFileAsync = promisify(execFile);

/**
 * Parses the output of `pmset -g batt`, e.g.:
 *
 *   Now drawing from 'AC Power'
 *    -InternalBattery-0 (id=1234)	87%; charging; 1:23 remaining present: true
 *
 * "charging" means the power adapter is connected, even when macOS holds the
 * charge (optimized charging reports "AC attached; not charging").
 *
 * @param {string} output
 * @returns {{ level: number, charging: boolean }} Level between 0 and 1.
 */
function parsePmsetOutput(output) {
  const percentage = output.match(/(\d+)%;/);

  if (!percentage) {
    throw new Error("No battery found in the pmset output");
  }

  return {
    level: Number(percentage[1]) / 100,
    charging: output.includes("'AC Power'"),
  };
}

/**
 * @returns {Promise<{ level: number, charging: boolean }>}
 */
async function readBatteryState() {
  const { stdout } = await execFileAsync("pmset", ["-g", "batt"]);
  return parsePmsetOutput(stdout);
}

module.exports = { parsePmsetOutput, readBatteryState };
