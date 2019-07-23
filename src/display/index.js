'use strict'

const configuration = require('../globals/configuration');

const render = (something) => {
    return something;
}

//sets accessiblity options such as contrast, font-size, etc into a cookie
const setOptions = (formData) => {
    configuration.setActive(formData);
    let jsonOptions = JSON.stringify(configuration.Configuration.active);
    document.cookie = jsonOptions;
    return document.cookie; 
}

const getOptions = () => {
    return configuration.Configuration.active;
}

module.exports = {
    render,
    setOptions,
    getOptions,
};