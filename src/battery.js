const batteryLevel = require('battery-level');
const isCharging = require('is-charging');

module.exports = {
    battery: {
        level: batteryLevel,
        isCharging,
    }
};
