const { MINIMAL_BATTERY_LIFE, MAXIMUM_BATTERY_LIFE } = require("./limits");

/**
 * Decides which notification (if any) the battery state deserves.
 *
 * @param {number} level Battery level between 0 and 1.
 * @param {boolean} charging
 * @returns {"connect" | "disconnect" | null}
 */
function getBatteryAction(level, charging) {
  if (level < MINIMAL_BATTERY_LIFE && !charging) {
    return "connect";
  }

  if (level >= MAXIMUM_BATTERY_LIFE && charging) {
    return "disconnect";
  }

  return null;
}

module.exports = { getBatteryAction };
