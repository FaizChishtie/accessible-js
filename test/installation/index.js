'use strict'

var expect = require('chai').expect;

const installation = require('../../src').installation;

describe('test installation functions', () => {
    it('should return true', () => {
        expect(installation.install()).to.equal(true);
    });
});