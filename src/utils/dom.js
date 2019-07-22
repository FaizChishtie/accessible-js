'use strict'

// parse html to json
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class DOM {
    constructor(htmlDOM) {
        this.dom = new JSDOM(htmlDOM);
        this.document = this.dom.window.document;
    }

    getDocument() {
        return this.document;
    }

    getAllTagged(tag) {
        return this.document.querySelector(tag);
    }
}

module.exports = {
    DOM,
}