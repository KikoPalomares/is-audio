# is-audio
Check if a file path is an audio file

## Install

```
$ npm i @kikopalomares/is-audio
```


## Usage

```js
const isAudio = require('@kikopalomares/is-audio');

isAudio('src/yourFile.mp3');
//=> true

isAudio('src/yourFile.txt');
//=> false
```

```ts
import isAudio from '@kikopalomares/is-audio';

isAudio('src/yourFile.ogg');
//=> true
```

## API

`isAudio(filepath: string): boolean`

Checks whether `filepath` ends with a recognized audio extension from the
[`audio-extensions`](https://www.npmjs.com/package/audio-extensions) list.

The package also includes TypeScript definitions in `index.d.ts`.

## License

MIT © [Kiko Palomares](https://kikopalomares.com)
