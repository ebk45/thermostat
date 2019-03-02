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

  test('maxTemp is 25 when powerSave is on', () => {
    thermostat.powerSaveOn()
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  test('maxTemp is 32 when powerSave is off', () => {
    thermostat.powerSaveOff()
    for (let i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  });

  test('reset function sets temperature to 20 degrees', () => {
    thermostat.up();
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20);
  });

  test('energy usage is "low" when temp is below 18', () => {
    for (let i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.energyUsage()).toEqual("low usage");
  });

});
