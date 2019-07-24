#!/usr/bin/env node

const argv = require("yargs").argv;

//console.log(argv);
//console.log(process.args);

if (argv["install"]) {
    console.log("Installation trigger")
}

if (argv["help"]) {

}

if (argv["remove"]) {
    
}


if (argv["config"])
{
    console.log("Config trigger")
}