# Contributing

## Requirements

- macOS: the battery level and the power source come from `pmset -g batt`
- Node.js from `.nvmrc`

## Setup

```bash
npm install
npm start
```

`npm start` runs the app from the terminal with debug logs (the battery is checked every 60 seconds).

> [!NOTE]
> Since Electron 42 macOS shows notifications only from a signed app. The Electron binary behind `npm start` is unsigned, so its notifications fail silently. To see them, build the app and open the ad-hoc signed `dist/mac-arm64/Battery Life Extender.app`. The packaged app registers itself as a login item: remove it in System Settings > General > Login Items when you are done.

## Scripts

| Command                | What it does                                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| `npm start`            | Runs the app from source with debug logs                                                            |
| `npm run build:mac`    | Builds `*.dmg` and `*.zip` for Apple silicon and Intel into `dist/` (`npm run build` does the same) |
| `npm test`             | Unit tests                                                                                          |
| `npm run format`       | Prettier                                                                                            |
| `npm run format:check` | Checks formatting without writing                                                                   |

## Project structure

| Path                   | What it does                                                                |
| ---------------------- | --------------------------------------------------------------------------- |
| `index.js`             | Electron entry point: starts the tray and checks the battery on an interval |
| `src/battery.js`       | Reads and parses `pmset -g batt`                                            |
| `src/rules.js`         | Decides which notification, if any, the battery state deserves              |
| `src/limits.js`        | Thresholds: 15% (plug in) and 97% (unplug)                                  |
| `src/logic.js`         | Ties the battery reading, the rules and the notifications together          |
| `src/notification.js`  | Native notifications                                                        |
| `src/tray.js`          | Menu bar icon and its menu                                                  |
| `src/auto-launcher.js` | Registers the app as a login item                                           |
| `src/config.js`        | App name, check interval and icon paths                                     |

## Tests

```bash
npm test
```

Unit tests use the built-in `node:test` runner and do not start Electron.

## CI

GitHub Actions workflow `.github/workflows/ci.yml` checks formatting and runs the tests on every push and pull request.

`.github/workflows/release.yml` builds the installers on `macos-latest` with `npm run build:mac` and verifies the ad-hoc signature. Started by hand from the Actions tab, it only uploads the installers as workflow artifacts.

## Release

```bash
npm version patch
git push --follow-tags
```

`npm version` bumps `package.json` and creates the `vX.Y.Z` tag. A pushed tag runs the release workflow: the `release` job checks that the tag matches the `package.json` version and publishes the installers as a GitHub release.
