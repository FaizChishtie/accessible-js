'use strict'

const render = (something) => {
    return something;
}

//sets accessiblity options such as contrast, font-size, etc into a cookie
const setOptions = (formData) => {
    let options = {screenReader: formData.screenReader, contrast: formData.contrast, fontSize: formData.fontSize};
    let JsonOptions = JSON.stringify(options);
    document.cookie = JsonOptions;
    return document.cookie; 
}
module.exports = {
    render,
    setOptions
};