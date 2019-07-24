'use strict'

var expect = require('chai').expect;

const installs = require('../../src/installation');
const { utils } = installs;
const dir = __dirname;

describe('test installation utils functions', () => {
    it('should find json file and return data', () => {
        const results = JSON.parse(utils.findFile('temporary.json', dir).toString());
        expect(results).to.deep.equal({ somedata: true });
    });
    it('should not find the file and return undefined', () => {
        const results = utils.findFile('nonExistent.json');
        expect(results).to.equal(null);
    });
});