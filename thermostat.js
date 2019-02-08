'use strict';
//create class
class Thermostat {
  //create constructor to initialize functions
  constructor(temperature = 20) {
    this.temperature = temperature;
    this._minTemp = 10;
  };

  up() {
    this.temperature += 1
  };

  down() {
    if (this.temperature === this._minTemp) {
      this.temperature = this._minTemp
    } else {
      this.temperature -= 1
    }
  };
};

module.exports = Thermostat;
