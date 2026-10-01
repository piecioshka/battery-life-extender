const test = require("node:test");
const assert = require("node:assert/strict");

const { parsePmsetOutput } = require("./battery");

test("reads the level and the discharging state", () => {
  const output = [
    "Now drawing from 'Battery Power'",
    " -InternalBattery-0 (id=22872163)\t43%; discharging; 1:50 remaining present: true",
  ].join("\n");

  assert.deepEqual(parsePmsetOutput(output), { level: 0.43, charging: false });
});

test("treats a connected adapter as charging", () => {
  const output = [
    "Now drawing from 'AC Power'",
    " -InternalBattery-0 (id=22872163)\t100%; charged; 0:00 remaining present: true",
  ].join("\n");

  assert.deepEqual(parsePmsetOutput(output), { level: 1, charging: true });
});

test("treats a held charge on the adapter as charging", () => {
  const output = [
    "Now drawing from 'AC Power'",
    " -InternalBattery-0 (id=22872163)\t80%; AC attached; not charging present: true",
  ].join("\n");

  assert.deepEqual(parsePmsetOutput(output), { level: 0.8, charging: true });
});

test("fails on a machine without a battery", () => {
  assert.throws(
    () => parsePmsetOutput("Now drawing from 'AC Power'\n"),
    /No battery/,
  );
});
