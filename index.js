'use strict';
const path = require('path');
const audioExtensions = require('audio-extensions');
const exts = Object.create(null);

audioExtensions.forEach(function (el) {
    exts[el] = true;
});

module.exports = function (filepath) {
    return path.extname(filepath).slice(1).toLowerCase() in exts;
};