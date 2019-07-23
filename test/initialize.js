'use strict'

var expect = require('chai').expect;

const initialize = require('../src/initialize');
const globals = require('../src/globals');

const { GlobalVars } = globals;

describe('test initialize functions', () => {
    it('should initialize webpage', () => {
        initialize.initialize(`<!DOCTYPE html><p>Hello world</p>`);
        expect(GlobalVars.isInitialized).to.equal(true);
        expect(GlobalVars.DOM.getAllTagged('p').textContent).to.equal('Hello world');
    });
});