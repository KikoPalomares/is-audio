# is-audio

Check whether a filepath looks like an audio file.

`is-audio` is a tiny utility for extension-based checks. It does not read the
file, inspect binary contents, or detect the real MIME type.

## Install

```sh
npm install @kikopalomares/is-audio
```

## Usage

### CommonJS

```js
const isAudio = require('@kikopalomares/is-audio');

isAudio('uploads/song.mp3');
//=> true

isAudio('uploads/document.pdf');
//=> false
```

### ESM

```js
import isAudio from '@kikopalomares/is-audio';

isAudio('recordings/session.FLAC');
//=> true
```

### TypeScript

```ts
import isAudio from '@kikopalomares/is-audio';

const canAcceptFile = isAudio('voice-note.ogg');
//=> true
```

## Examples

Validate a user-provided filepath before accepting it:

```js
import isAudio from '@kikopalomares/is-audio';

function acceptUpload(filepath) {
  if (!isAudio(filepath)) {
    throw new Error('Only audio files are supported');
  }

  return filepath;
}
```

Matching is case-insensitive:

```js
isAudio('TRACK.MP3');
//=> true
```

Paths without an audio extension return `false`:

```js
isAudio('README');
//=> false
```

Non-string values return `false`:

```js
isAudio(null);
//=> false
```

## API

### `isAudio(filepath)`

Returns `true` when `filepath` is a string ending with a supported audio
extension.

```ts
function isAudio(filepath: string): boolean;
```

## Supported Extensions

The supported extension list is embedded in the package, so there are no runtime
dependencies:

`wav`, `bwf`, `raw`, `aiff`, `flac`, `m4a`, `pac`, `tta`, `wv`, `ast`, `aac`,
`mp2`, `mp3`, `mp4`, `amr`, `s3m`, `3gp`, `act`, `au`, `dct`, `dss`, `gsm`,
`m4p`, `mmf`, `mpc`, `ogg`, `oga`, `opus`, `ra`, `sln`, `vox`.

## Requirements

Node.js 18 or newer.

## License

MIT © [Kiko Palomares](https://kikopalomares.com)
