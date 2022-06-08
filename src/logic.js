const console = {
  log: require("debug")("battery-life-extender:logic:log"),
  warn: require("debug")("battery-life-extender:logic:warn"),
  debug: require("debug")("battery-life-extender:logic:debug"),
  error: require("debug")("battery-life-extender:logic:error"),
};

const { battery } = require("./battery");
const { disconnect, connect } = require("./notification");
const { MINIMAL_BATTERY_LIFE, MAXIMUM_BATTERY_LIFE } = require("./config");

async function verify() {
  try {
    const date = new Date().toLocaleString();
    const level = await battery.level();
    const charging = await battery.isCharging();

    console.log({ date, level, charging });

    if (level < MINIMAL_BATTERY_LIFE && !charging) {
      connect();
      return;
    }

    if (level >= MAXIMUM_BATTERY_LIFE && charging) {
      disconnect();
      return;
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = { verify };
