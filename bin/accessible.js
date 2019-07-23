#!/usr/bin/env node

const argv = require("yargs").argv;

//console.log(argv);
//console.log(process.args);

if (argv["install"])
{
    console.log("Installation trigger")
}


if (argv["remove"])
{
    console.log("Remove trigger")
}


if (argv["config"])
{
    console.log("Config trigger")
}