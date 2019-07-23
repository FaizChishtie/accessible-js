'use strict'

const dom = require('./dom');
const distributor = require('./distributor');

const read = (something) => {
    return something;
}

module.exports = {
    read,
    dom,
    distributor,
};