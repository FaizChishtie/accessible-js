'use strict'

var expect = require('chai').expect;

const display = require('../../src').display;

describe('test display functions', () => {
    it('should return same object', () => {
        const results = display.render('something');
        expect(results).to.equal('something');
    });
});