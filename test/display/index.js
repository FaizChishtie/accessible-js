'use strict'

var expect = require('chai').expect;

const display = require('../../src').display;
beforeEach(() => {
    global.document = {
        cookie: {}
    }
});
describe('test display functions', () => {
    it('should return same object', () => {
        const results = display.render('something');
        expect(results).to.equal('something');
    });
    it('should return same object', () => {
        const results = display.setOptions({screenReader: true, contrast: 'high', fontSize: 16});
        let parsed = JSON.parse(results);
        expect(parsed.screenReader+";"+parsed.contrast+";"+parsed.fontSize).to.equal('true;high;16');
    });
});