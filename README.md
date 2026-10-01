<div align="center">

<img src="./icons/app-icon.png" alt="Battery Life Extender icon" width="160" height="160">

</div>

# Battery Life Extender 🔋

<!-- prettier-ignore-start -->

[![Release](https://img.shields.io/github/v/release/piecioshka/battery-life-extender)](https://github.com/piecioshka/battery-life-extender/releases/latest)
[![Platforms](https://img.shields.io/badge/platforms-macOS-lightgrey)](#installation)
[![Electron](https://img.shields.io/badge/Electron-44-47848F?logo=electron&logoColor=white)](https://www.electronjs.org/)
[![Menu bar](https://img.shields.io/badge/lives%20in-menu%20bar-blue)](#features)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](https://piecioshka.mit-license.org)

<!-- prettier-ignore-end -->

🔋 **Know when to plug the charger in and when to pull it out.**

A macOS menu bar app that notifies you about battery health: when the level drops below 15% and when it is almost full.

## Preview 🎉

![](./screenshots/demo-battery-low.png)
![](./screenshots/demo-battery-full.png)

## Features

- ✅ Display notification when the battery level is less than 15%
- ✅ Display notification when the battery level is almost 100%
- ✅ Display tray icon in the menubar

## Installation

1. Download `*.zip` file from <https://github.com/piecioshka/battery-life-extender/releases>
2. Unzip
3. Move `*.dmg` file to Applications
4. Run `Battery Life Extender.dmg`

The app will be running when system staring.

## Development

```bash
npm install
npm start
```

## Unit tests

```bash
npm test
```

## Build

```bash
npm run build
```

Installers (`*.dmg` and `*.zip` for Apple silicon and Intel) land in `dist/`.

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2026
