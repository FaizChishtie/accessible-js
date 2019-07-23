'use strict'

const configuration = require('../globals').GlobalVars.configuraton;

class Distributor {
    // hooks will be tool classes
    constructor(hooks = []) {
        this.configureDistributor();
        this.hooks = hooks;
    }

    configureDistributor() {
        this.currentConfig = configuration.active;
    }

    plug(hook) {
        this.hooks.push(hook);
    }

    // @TODO test
    async executeAllChanges(document) {
        this.hooks.forEach((hook) => {
            hook.handleDataRecieved(document);
        })
    }
}

module.exports = {
    Distributor,
};
