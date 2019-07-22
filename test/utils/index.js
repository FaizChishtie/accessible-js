'use strict'

var expect = require('chai').expect;

const utils = require('../../src').utils;

describe('test util functions', () => {
    it('should return same object', () => {
        const results = utils.read('something');
        expect(results).to.equal('something');
    });
});