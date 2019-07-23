'use strict'

var expect = require('chai').expect;

const utils = require('../../src').utils;

describe('test util functions', () => {
    it('should return same object', () => {
        const results = utils.read('something');
        expect(results).to.equal('something');
    });
    it('should parse html to dom', () => {
        const rawHtml = `<!DOCTYPE html><p>Hello world</p>`;
        const results = new utils.dom.DOM(rawHtml);
        expect(results.getAllTagged('p').item(0).textContent).to.equal('Hello world');
    });
});