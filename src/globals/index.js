'use strict'

// put all global variables here

const configuraton = require('./configuration');
const { Configuration } = configuraton;

class GlobalVars { 
};

GlobalVars.initialized = false;
GlobalVars.dom = null;
GlobalVars.configuraton = Configuration;

module.exports = {
    GlobalVars
};