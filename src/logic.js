const console = {
  log: require("debug")("battery-life-extender:notification:log"),
  error: require("debug")("battery-life-extender:notification:error"),
};

const { battery } = require("./battery");
const { disconnect, connect } = require("./notification");
const { MINIMAL_BATTERY_LIFE, MAXIMUM_BATTERY_LIFE } = require("./config");

async function verify() {
  console.log("verify", new Date().toLocaleString());

  try {
    const lvl = await battery.level();
    const charging = await battery.isCharging();

    console.log({ lvl, charging });

    if (lvl < MINIMAL_BATTERY_LIFE && !charging) {
      connect();
      return;
    }

    if (lvl >= MAXIMUM_BATTERY_LIFE && charging) {
      disconnect();
      return;
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = { verify };
