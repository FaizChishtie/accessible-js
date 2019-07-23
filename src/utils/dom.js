'use strict'

// parse html to json
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

class DOM {
    constructor(htmlDOM) {
        this.dom = new JSDOM(htmlDOM, {includeNodeLocations: true});
        this.document = this.dom.window.document;
    }

    getDocument() {
        return this.document;
    }

    getAllTagged(tag) {
        return this.document.querySelectorAll(tag);
    }
}

module.exports = {
    DOM,
}