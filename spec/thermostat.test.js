'use strict';

const Thermostat = require('../thermostat.js');

describe('Thermostat', () => {

  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  test('default temperature set to 20 degrees', () => {
    expect(thermostat.temperature).toEqual(20);
  });

  test('temperature can be increased with "up"', () => {
    thermostat.up()
    expect(thermostat.temperature).toEqual(21);
  });

  test('temperature can be decreased with "down"', () => {
    thermostat.down()
    expect(thermostat.temperature).toEqual(19);
  });

  test('temperature does not go below 10 degrees', () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  test('powerSave mode is on by default', () => {
    expect(thermostat.checkPowerSaveMode()).toEqual(true);
  });

});
