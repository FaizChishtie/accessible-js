#!/usr/bin/env node

const argv = require("yargs").argv;
const installation = require('../src/installation');

if (argv["install"]) {
    installation.configuration.start();
    console.log('Installation complete...\nMake sure to initialize accessible-js by importing it and calling apply stamp!');
}

if (argv["config"]) {
    installation.configuration.start();
}