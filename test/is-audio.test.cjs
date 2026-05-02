'use strict';

const assert = require('node:assert/strict');
const { test } = require('node:test');
const isAudio = require('../index.cjs');
const packageIsAudio = require('@kikopalomares/is-audio');

test('returns true for known audio extensions', () => {
  for (const filepath of [
    'track.mp3',
    'mix.ogg',
    'archive/flac/sample.flac',
    'recordings/session.wav',
    'voice-note.m4a',
    'podcast.opus'
  ]) {
    assert.equal(isAudio(filepath), true, filepath);
  }
});

test('matches extensions case-insensitively', () => {
  assert.equal(isAudio('TRACK.MP3'), true);
});

test('returns false for paths without audio extensions', () => {
  for (const filepath of ['README', 'src/file.txt', 'archive.tar.gz', '']) {
    assert.equal(isAudio(filepath), false, filepath);
  }
});

test('returns false for non-string input', () => {
  for (const value of [undefined, null, 42, {}, [], true]) {
    assert.equal(isAudio(value), false, String(value));
  }
});

test('exports a CommonJS function from the package entrypoint', () => {
  assert.equal(typeof packageIsAudio, 'function');
  assert.equal(packageIsAudio('song.mp3'), true);
  assert.equal(packageIsAudio('notes.txt'), false);
});
