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
    if (this.powerSave === true && this.temperature === this._maxTemp) {
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

  checkPowerSaveMode() {
    return this.powerSave;
  };

  powerSaveOn() {
    this.powerSave = true;
    this._maxTemp = 25;
  };
};

module.exports = Thermostat;
