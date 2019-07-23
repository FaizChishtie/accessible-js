'use strict';

var expect = require('chai').expect;

const tools = require('../../../src').tools;

const utils = require('../../../src').utils;

const vision = tools.vision;

// @TODO clayton tests
describe('test vision functions', () => {
	    const rawHtml = `<!DOCTYPE html><p>Hello world</p>`;
        const results = new utils.dom.DOM(rawHtml);
        vision.magnifier.Magnifier.magnify(results.getDocument());
        console.log(results.getDocument());
});
