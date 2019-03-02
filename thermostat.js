'use strict';
//create class
class Thermostat {
  //create constructor to initialize functions
  constructor(temperature = 20) {
    this.temperature = temperature;
    this._minTemp = 10;
    this.powerSave = true;
    this._maxTemp = 25;
  };

  up() {
    if (this.temperature === this.checkMaxTemp()) {
      this.temperature += 0
    } else {
      this.temperature += 1
    }
  };

  down() {
    if (this.temperature === this._minTemp) {
      this.temperature = this._minTemp
    } else {
      this.temperature -= 1
    }
  };

  reset() {
    this.temperature = 20;
  };

  checkPowerSaveMode() {
    return this.powerSave;
  };

  powerSaveOn() {
    this.powerSave = true;
  };

  powerSaveOff() {
    this.powerSave = false;
  };

  checkMaxTemp() {
    if (this.checkPowerSaveMode() === true) {
      return this._maxTemp = 25
    } else {
      return this._maxTemp = 32
    }
  };

  energyUsage() {
    if (this.temperature <= 18) {
      return "low usage"
    }
  };
};

module.exports = Thermostat;
