'use strict'

class ColorBlind {
};

ColorBlind.type = "colorblind";
ColorBlind.handleDataRecieved = (document) => {
    const sheet = document.styleSheets[0];
    sheet.insertRule('div.contrastColor p: {color: black; background-color: white;}');

    for (element in document.querySelectorAll()) {
        let wrapper = document.createElement('div');
        wrapper.classList.add = ("contrastColor");
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendchild(element);
    }
};

module.exports = {
    ColorBlind,
}