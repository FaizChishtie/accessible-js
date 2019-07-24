'use strict'

const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');

const findFile = (file, directory = __dirname) => {
    console.log(`Searching for ~${file} in ~${directory}`);
    try {
        return fs.readFileSync(path.resolve(directory, file))
    } catch(err) {
        console.log(`Couldn't find ~${file} in ~${directory}`);
        return null;
    }
}

// @TODO test
const writeFile = (file, directory = __dirname, data) => {
    console.log(`Writing to ~${file} in ~${directory}`);
    const stringData = JSON.stringify(data);
    try {
        fs.writeFileSync(path.resolve(directory, file), stringData, 'utf-8');
        console.log(`Wrote to ~${file} in ~${directory}...`);
        return true;
    } catch(err) {
        console.log(`Could not write to ~${file} in ~${directory}...`);
        return false;
    }
}

// @TODO test
const yesNo = (question) => {
    let response = readline.question(question);
    if (response === 'y' || response === 'Y') {
        return true;
    }
    else if (response === 'n' || response === 'N') {
        return false;
    }
    else {
        console.log('Invalid input, please try again.\n.\n.');
        yesNo(question);
    }
}

const exit = (x, script="") => {
    console.log(`Exiting ${script}...`);
    process.exit(x);
}

module.exports = {
    findFile,
    writeFile,
    yesNo,
    exit,
}