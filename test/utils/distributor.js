'use strict'

var expect = require('chai').expect;

const utils = require('../../src').utils;

describe('test util functions', () => {

    class Hook {
    };
    Hook.called = false;
    Hook.handleDataRecieved = (document) => {
        Hook.called = true;
    }

    const hooks = [ Hook ];

    const distributor = new utils.distributor.Distributor(hooks);

    it('should distribute documents to hook', () => {
        const results = distributor.executeAllChanges('someDocument');
        expect(Hook.called).to.equal(true);
    });
});