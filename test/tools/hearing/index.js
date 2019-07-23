'use strict';

var expect = require('chai').expect;

const tools = require('../../../src').tools;

const hearing = tools.hearing;

describe('test hearing functions', () => {
    it('should return text', () =>{
        let result = 'test';
        expect(result).to.equal('test');
    });
});
