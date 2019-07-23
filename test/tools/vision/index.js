'use strict';

var expect = require('chai').expect;

const tools = require('../../../src').tools;

const vision = tools.vision;

describe('test vision functions', () => {
    it('should return text', () =>{
    	const rawHtml = `<!DOCTYPE html><p>Hello world</p>`;
    	const results = new utils.dom.DOM(rawHtml);
        const result = vision.magnify();
        console.log(result);
        expect(result).to.equal('test');
    });
});
