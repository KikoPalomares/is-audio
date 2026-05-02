# AGENTS.md

Internal guidance for agents and maintainers working on this repository.

## Project Goals

- Keep `@kikopalomares/is-audio` small, dependency-light, and easy to consume.
- Keep `README.md` focused on external users who want to install and use the
  package in their own projects.
- Put maintainer, CI, release, and repository-operation notes here instead of in
  the public README.

## Development Checks

Run these before committing changes:

```sh
npm ci
npm test
npm run typecheck
npm pack --dry-run
```

Use `npm publish --dry-run` before release-related changes.

## Package Boundaries

- Do not add runtime dependencies unless there is a strong reason.
- Keep the public API as a single default function, available from both CommonJS
  and ESM.
- If behavior changes, update runtime tests, TypeScript fixtures, README, and
  CHANGELOG together.
- If the supported extension list changes, update `audio-extensions.json`,
  tests, README, and CHANGELOG together.

## Release Process

- Releases are published to npm through GitHub Actions Trusted Publishing.
- The publish workflow is `.github/workflows/publish.yml`.
- The GitHub environment is `npm-release`.
- Releases are triggered by tags matching `v*`.
- The tag must match `package.json` exactly, for example `v0.2.1` for version
  `0.2.1`.
- Do not use an `NPM_TOKEN` for publishing; the workflow uses OIDC.

## Documentation Rules

- `README.md` is for package consumers.
- `AGENTS.md` is for maintainers and agents.
- Avoid release, CI, and local development instructions in the README unless
  they directly help someone use the package.

