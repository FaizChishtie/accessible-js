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
    it('should set display options', () => {
        const options = { 
            vision: {
                magnifier: false,
                colorblind: true,
            },
            hearing: {
                screenreader: false,
            },
        };
        const results = display.setOptions(options);
        let parsed = JSON.parse(results);
        expect(parsed).to.deep.equal(options);
    });
});
