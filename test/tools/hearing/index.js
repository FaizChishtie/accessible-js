'use strict';
var expect = require('chai').expect;
const tools = require('../../../src').tools;
const utils = require('../../../src').utils;
const hearing = require('../../../src/tools').hearing;

describe('test hearing functions', () => {
    it("should return a dom object", () => {
        const rawHtml = `<!DOCTYPE html>
        <body>
        <div>
            <p>Hello world</p>
            <h1>TestH1</h1>
            <h2>TestH2</h2>
            <h3>TestH3</h3>
            <h4>TestH4</h4>
            <h5>TestH5</h5>
            <h6>TestH6</h6>
            <a>TestA</a>
            <title>TestTitle</title>
            <q>TestQ</q>
            <blockquote>TestBlockQuote</blockquote>
        </div>
        <div>
            <p>Test2</p>
        </div>
        </body>`;
        const dom = new utils.dom.DOM(rawHtml);
        const result = hearing.Hearing.parseTags(dom);
        expect(result).to.equal(`\n        \n            \nHello world\n            \nTestH1\n            \nTestH2\n            \nTestH3\n            \nTestH4\n            \nTestH5\n            \nTestH6\n            \nTestA\n            \nTestTitle\n            \nTestQ\n            \nTestBlockQuote\n        \n        \n            \nTest2\n        \n        `);
    }) 
});
