# is-audio

Check if a filepath points to a known audio file extension.

## Install

```sh
npm install @kikopalomares/is-audio
```

## Usage

### CommonJS

```js
const isAudio = require('@kikopalomares/is-audio');

isAudio('src/yourFile.mp3');
//=> true

isAudio('src/yourFile.txt');
//=> false
```

### ESM

```js
import isAudio from '@kikopalomares/is-audio';

isAudio('src/yourFile.ogg');
//=> true
```

### TypeScript

```ts
import isAudio from '@kikopalomares/is-audio';

isAudio('src/yourFile.ogg');
//=> true
```

## API

### `isAudio(filepath)`

Returns `true` when `filepath` is a string that ends with a recognized audio
extension. Matching is case-insensitive.

Returns `false` for paths without an extension, non-audio extensions, and
non-string input.

```ts
function isAudio(filepath: string): boolean;
```

## Supported extensions

The extension list is embedded in this package, so there are no runtime
dependencies:

`wav`, `bwf`, `raw`, `aiff`, `flac`, `m4a`, `pac`, `tta`, `wv`, `ast`, `aac`,
`mp2`, `mp3`, `mp4`, `amr`, `s3m`, `3gp`, `act`, `au`, `dct`, `dss`, `gsm`,
`m4p`, `mmf`, `mpc`, `ogg`, `oga`, `opus`, `ra`, `sln`, `vox`.

## Development

```sh
npm install
npm test
npm run typecheck
npm run pack:dry-run
```

## Releases

Releases are published to npm from GitHub Actions with npm Trusted Publishing.
Create a version tag locally and push it:

```sh
npm version patch
git push --follow-tags
```

Use `minor` or `major` instead of `patch` when appropriate. The npm trusted
publisher should point to this repository, the `publish.yml` workflow, and the
`npm-release` GitHub environment.

## License

MIT © [Kiko Palomares](https://kikopalomares.com)
