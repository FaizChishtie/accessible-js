'use strict';

var expect = require('chai').expect;

const hearing = require('../src/index').hearing;
const vision = require('../src/index').vision;

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
