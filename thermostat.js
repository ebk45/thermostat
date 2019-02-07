'use strict';
//create class
class Thermostat {
  //create constructor to initialize functions
  constructor(temperature = 20) {
    this.temperature = temperature;
  }

  up() {
    this.temperature += 1
  }

  down() {
    this.temperature -= 1
  }
};

module.exports = Thermostat;
