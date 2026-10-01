const test = require("node:test");
const assert = require("node:assert/strict");

const { getBatteryAction } = require("./rules");

test("asks to plug the charger in when the battery is low and not charging", () => {
  assert.equal(getBatteryAction(0.1, false), "connect");
});

test("stays quiet when the battery is low but already charging", () => {
  assert.equal(getBatteryAction(0.1, true), null);
});

test("asks to unplug the charger when the battery is almost full and charging", () => {
  assert.equal(getBatteryAction(0.97, true), "disconnect");
  assert.equal(getBatteryAction(1, true), "disconnect");
});

test("stays quiet when the battery is full but not charging", () => {
  assert.equal(getBatteryAction(1, false), null);
});

test("stays quiet between the limits", () => {
  assert.equal(getBatteryAction(0.15, false), null);
  assert.equal(getBatteryAction(0.5, true), null);
  assert.equal(getBatteryAction(0.96, true), null);
});
