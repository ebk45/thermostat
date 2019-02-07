'use strict';

const Thermostat = require('../thermostat.js');

var thermostat = new Thermostat();

test('default temperature set to 20 degrees', () => {
  expect(thermostat.temperature).toBe(20);
});
