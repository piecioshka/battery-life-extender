'use strict';

const { assert } = require('chai');

const { battery } = require('../src/battery');

it('should read battery status', async () => {
    assert.isObject(battery);
    assert.isNumber(await battery.level());
    assert.ok(await battery.level() > 0);
});

it('returns info about charging', async () => {
    assert.isBoolean(await battery.isCharging());
});
