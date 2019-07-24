'use strict'

const fs = require('fs');
const path = require('path');

const findFile = (file, directory = __dirname) => {
    console.log(`Searching for ~${file} in ~${directory}`);
    try {
        return fs.readFileSync(path.resolve(directory, file))
    } catch(err) {
        console.log(`Couldn't find ~${file} in ~${directory}`);
        return null;
    }
}

module.exports = {
    findFile,
}