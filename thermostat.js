'use strict';
//create class
class Thermostat {
  //create constructor to initialize functions
  constructor(temperature = 20) {
    this.temperature = temperature;
  }

  up(degree) {
    this.temperature += degree
  }
};

module.exports = Thermostat;
