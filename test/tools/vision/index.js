'use strict';

var expect = require('chai').expect;

const tools = require('../../../src').tools;

const vision = tools.vision;

describe('test vision functions', () => {
    it('should return text', () =>{
        let result = vision.magnify('test');
        expect(result).to.equal('test');
    });
});
