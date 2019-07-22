'use strict'

const render = (something) => {
    return something;
}

//sets accessiblity options such as contrast, font-size, etc into a cookie
exports.setOptions = (formData) => {
    let options = {screenReader: formData.screenReader, contrast: formData.contrast, fontSize: formData.fontSize};
    let jsonOptions = JSON.stringify(options);
    document.cookie = "options =  " + options + ";path=/";
}
module.exports = {
    render,
    setOptions
};