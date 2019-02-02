const path = require('path');
const { app } = require('electron');

const root = app.getAppPath();

const ONE_SECOND = 1000; // in milliseconds unit
const CHECKING_BATTERY_STATUS_INTERVAL_TIME = 60; // in seconds unit

module.exports = {
    appName: 'Battery Life Extender',

    batteryLowIcon: path.join(root, 'images', 'battery', 'battery-low.png'),
    batteryFullIcon: path.join(root, 'images', 'battery', 'battery-full.png'),

    // Battery levels are between 0 and 1.
    MINIMAL_BATTERY_LIFE: 0.15,
    MAXIMUM_BATTERY_LIFE: 0.97,

    locale: {
        pl: {
            CONNECT_POWER: 'Bateria rozładowana.\nPodłącz przewód zasilający!',
            DISCONNECT_POWER: 'Bateria w pełni naładowana.\nOdłącz przewód zasilający!',
            CLOSE: 'Zamknij'
        }
    },

    INTERVAL_TIME: CHECKING_BATTERY_STATUS_INTERVAL_TIME * ONE_SECOND
};
