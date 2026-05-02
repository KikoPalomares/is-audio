'use strict';

const path = require('node:path');
const audioExtensions = require('./audio-extensions.json');

const extensions = new Set(audioExtensions);

function isAudio(filepath) {
  if (typeof filepath !== 'string') {
    return false;
  }

  const extension = path.extname(filepath).slice(1).toLowerCase();

  return extensions.has(extension);
}

module.exports = isAudio;

