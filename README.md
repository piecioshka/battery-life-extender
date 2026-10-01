<div align="center">

<img src="./icons/app-icon.png" alt="Battery Life Extender icon" width="160" height="160">

</div>

# Battery Life Extender 🔋

<!-- prettier-ignore-start -->

[![github-ci](https://github.com/piecioshka/battery-life-extender/actions/workflows/ci.yml/badge.svg)](https://github.com/piecioshka/battery-life-extender/actions/workflows/ci.yml)
[![release](https://github.com/piecioshka/battery-life-extender/actions/workflows/release.yml/badge.svg)](https://github.com/piecioshka/battery-life-extender/actions/workflows/release.yml)
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

1. Download the `*.dmg` for your Mac (`arm64` for Apple silicon, the one without an architecture for Intel) from the [latest release](https://github.com/piecioshka/battery-life-extender/releases/latest)
2. Open it and drag **Battery Life Extender** to Applications
3. The app is ad-hoc signed, not notarized: on first launch open System Settings > Privacy & Security and click **Open Anyway**

The app starts automatically after you log in.

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
