'use strict'

// initialize will be called first & will contain all of our 
const fs = require('fs');

const utils = require('./utils');
const globals = require('./globals');
const updateConfigFromJson = require('./globals/configuration').fromJson;

const { GlobalVars } = globals;

const initialize = (document, pathToConfig = undefined) => {
    // set vars
    GlobalVars.initialized = true;
    GlobalVars.dom = convertDocument(document);

    getConfig(pathToConfig);
    // run functions to convert page

    // re-render
};

const convertDocument = (document) => {
    return new utils.dom.DOM(document);
};

const getConfig = (path) => {
    if (path) {
        const data = JSON.parse(fs.readFileSync(path, 'utf8'));
        updateConfigFromJson(data);
    }
}

module.exports = {
    initialize,
};