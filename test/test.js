'use strict';

var expect = require('chai').expect;

const hearing = require('../src/index').tools.hearing;
const vision = require('../src/index').tools.vision;

// ideally things would be split up

describe('test hearing functions', () => {
    it('should return text', () =>{
        let result = hearing.readAloud('test');
        expect(result).to.equal('test');
    });
});

describe('test vision functions', () => {
    it('should return text', () =>{
        let result = vision.magnify('test');
        expect(result).to.equal('test');
    });
});
