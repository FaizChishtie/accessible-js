const utils = require('./utils');
const globals = require('../globals');
const { GlobalVars } = globals;
const { setActive, setDeveloper, setEnabled }  = require('../globals/configuration');

const currentConfig = GlobalVars.configuraton;
const configAsJson  = require('../globals/configuration').configAsJson;

const configureEnable = () => {
    let enabled = utils.yesNo('Would you like to automatically enable accessible-js on your website?(y/n) ');
    return enabled;
}

const configureDeveloper = () => {
    let developer = currentConfig.developer;
    developer.hearing.screenreaderSupport = utils.yesNo('Would you like to allow screen reader support on your website?(y/n) ');
    developer.vision.colorblindSupport = utils.yesNo('Would you like to allow colorblind support on your website?(y/n) ');
    developer.vision.magnifierSupport = utils.yesNo('Would you like to allow magnifier support on your website?(y/n) ');
    return developer;
}

const configureActive = () => {
    let active = currentConfig.active;
    let preExistingSupport = currentConfig.developer;
    // if developer has disabled features don't ask to enable them
    if (preExistingSupport.hearing.screenreaderSupport) {
        active.hearing.screenreader = utils.yesNo('Would you like to turn the screen reader on by default on your website?(y/n) ');
    } else {
        active.hearing.screenreader = false;
    }
    if (preExistingSupport.vision.colorblindSupport) {
        active.vision.colorblind = utils.yesNo('Would you like to turn color blind mode on by default on your website?(y/n) ');
    } else {
        active.vision.colorblind = false;
    }
    if (preExistingSupport.vision.magnifierSupport) {
        active.vision.magnifier = utils.yesNo('Would you like to turn the magnifier on by default on your website?(y/n) ');
    } else {
        active.vision.magnifier = false;
    }
}

const configure = () => {
    console.log('Configuring accessible-js...');
    setEnabled(configureEnable());
    setDeveloper(configureDeveloper());
    setActive(configureActive());
    console.log('\n.\n.\n.');
    console.log('Configuration complete...');
    console.log(JSON.stringify(configAsJson()));
    if (utils.yesNo('Would you like to reconfigure accessible-js?(y/n) ')) {
        configure();
    } else {
        console.log('Saving configuration...');
        utils.writeFile('.accessible', __dirname, configAsJson());
        GlobalVars.configuraton.PATH = __dirname;
        utils.exit(0, 'config');
    }
}

// MAIN SCRIPT //

const start = () => {
    console.log(`Running config command for accessible-js from:\n${__dirname}`);

    if (utils.findFile('.accessible') == null) {
        console.log('.\n.\n.\n')
        if (utils.yesNo('Would you like to create a new config file?(y/n) ')) {
            configure();
        } else {
            utils.exit(1, 'config');
        }
    } else {
        console.log('Found configuration file...');
        console.log(JSON.stringify(configAsJson()));
        if (utils.yesNo('Would you like to modify your current config file?(y/n) ')) {
            configure();
        } else {
            utils.exit(1, 'config')
        }
    }    
};

module.exports = {
    start,
};
