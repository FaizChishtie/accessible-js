'use strict'

// initialize will be called first & will contain all of our 
const fs = require('fs');

const utils = require('./utils');
const globals = require('./globals');
const tools = require('./tools');
const updateConfigFromJson = require('./globals/configuration').fromJson;

const { GlobalVars } = globals;

const initialize = async (document, pathToConfig = undefined) => {
    // set vars
    GlobalVars.initialized = true;
    GlobalVars.dom = convertDocument(document);

    getConfig(pathToConfig);
    // distribute tasks
    const distributor = new utils.distributor.Distributor(getHooksFromConfig());
    await distributor.executeAllChanges(document);
    // run functions to convert page

    // re-render
};

// @TODO test
const convertDocument = (document) => {
    return new utils.dom.DOM(document);
};

// @TODO test 
const getConfig = (path) => {
    if (path) {
        const data = JSON.parse(fs.readFileSync(path, 'utf8'));
        updateConfigFromJson(data);
    }
    // otherwise uses default configuration
}

// @TODO test
const getHooksFromConfig = () => {
    let hooks = [];
    if (globals.GlobalVars.configuraton.active.hearing.screenreader) {
        hooks.push(tools.vision.screenreader.ScreenReader);
    }
    if (globals.GlobalVars.configuraton.active.vision.colorblind) {
        hooks.push(tools.vision.colorblind.ColorBlind);
    }
    if (globals.GlobalVars.configuraton.active.vision.magnifier) {
        hooks.push(tools.vision.screenreader.Magnifier);
    }
    return hooks;
}

module.exports = {
    initialize,
};