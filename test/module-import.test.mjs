import assert from 'node:assert/strict';
import { test } from 'node:test';
import isAudio from '../index.js';
import packageIsAudio from '@kikopalomares/is-audio';

test('exports an ESM default function', () => {
  assert.equal(typeof isAudio, 'function');
  assert.equal(isAudio('song.mp3'), true);
  assert.equal(isAudio('notes.txt'), false);
});

test('exports an ESM default function from the package entrypoint', () => {
  assert.equal(typeof packageIsAudio, 'function');
  assert.equal(packageIsAudio('song.mp3'), true);
  assert.equal(packageIsAudio('notes.txt'), false);
});
