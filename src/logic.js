const console = {
  log: require("debug")("battery-life-extender:logic:log"),
  warn: require("debug")("battery-life-extender:logic:warn"),
  debug: require("debug")("battery-life-extender:logic:debug"),
  error: require("debug")("battery-life-extender:logic:error"),
};
const { readBatteryState } = require("./battery");

const { disconnect, connect } = require("./notification");
const { getBatteryAction } = require("./rules");

async function verify() {
  try {
    const date = new Date().toISOString();
    const { level, charging } = await readBatteryState();

    console.log({ date, level, charging });

    const action = getBatteryAction(level, charging);

    if (action === "connect") {
      connect();
    } else if (action === "disconnect") {
      disconnect();
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = { verify };
