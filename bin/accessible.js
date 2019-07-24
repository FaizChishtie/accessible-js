#!/usr/bin/env node

const argv = require("yargs").argv;
const installation = require('../src/installation');

if (argv["install"]) {
    installation.configuration.start();
    console.log('Installation complete...\nMake sure to initialize accessible-js by importing it and calling apply stamp!');
}

if (argv["help"]) {
    console.log("\t--install\t\tInstalls module to a folder");
    console.log("\t--install\t\Configures module .accessible file within a folder");
}

if (argv["config"]) {
    installation.configuration.start();
}