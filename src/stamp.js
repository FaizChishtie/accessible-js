const buttonFile = require('./public/button.html');
const initialize = require('./initialize');
const fs = require("fs");

const prependJSDOM = (dom, htmlFile) => {
    const htmlToAdd = fs.readFileSync(htmlFile).toString();
    dom.window.document.body.insertAdjacentHTML('beforebegin', htmlToAdd);
}

const stamp = JSDOM.fromFile(window.location)
.then(dom => {
    prependJSDOM(dom, buttonFile);
    console.log(dom.serialize());
    initialize.initialize(dom.window.document);
});

module.exports = {
    stamp,
}
