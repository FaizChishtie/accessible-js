'use strict'

var expect = require('chai').expect;

const configuration = require('../../src/globals/configuration');
const { Configuration, fromJson } = configuration;

describe('test configuration functions', () => {
    const newConfig = {
        enabled: true,
        developer: {
            vision: {
                magnifierSupport: false,
                colorblindSupport: true,
            },
            hearing: {
                screenreaderSupport: true,
            }
        },
        active: {
            vision: {
                magnifier: false,
                colorblind: true,
            },
            hearing: {
                screenreader: false,
            },
        }
    }
    it('should change configuration global', () => {
        fromJson(newConfig);
        const { enabled, developer, active } = Configuration;
        expect(newConfig.active).to.deep.equal(active);
        expect(newConfig.developer).to.deep.equal(developer);
        expect(newConfig.enabled).to.deep.equal(enabled);
    });
});
