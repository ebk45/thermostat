'use strict';

const Thermostat = require('../thermostat.js');

var thermostat = new Thermostat();

test('default temperature set to 20 degrees', () => {
  expect(thermostat.temperature).toEqual(20);
});

test('temperature can be increased with "up"', () => {
  thermostat.up(1)
  expect(thermostat.temperature).toEqual(21);
});

test('temperature can be decreased with "down"', () => {
  thermostat.down(1)
  expect(thermostat.temperature).toEqual(19);
});
