'use strict'

// initialize will be called first & will contain all of our 

const utils = require('../src/utils');
const globals = require('../src/globals');

const { GlobalVars } = globals;

const initialize = (document) => {
    // set vars
    GlobalVars.isInitialized = true;
    GlobalVars.DOM = convertDocument(document);

    // run functions to convert page

    // re-render
};

const convertDocument = (document) => {
    return new utils.dom.DOM(document);
};

module.exports = {
    initialize,
};