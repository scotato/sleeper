<h1>
  <a href="https://sleeper.fyi"><img alt="sleeper" src="https://sleeper.fyi/logo.svg" width="48" /></a>
  Sleeper
</h1>

An ambient new tab browser extension

## Installation

Sleeper is available for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/sleeper/) or [Chrome](https://chrome.google.com/webstore/detail/sleeper/njihjodgjnlpkoipodopnchepnpoogdi), see it in action at [sleeper.fyi](sleeper.fyi).

## Architecture

This is a monorepo using [yarn workspaces](https://yarnpkg.com/features/workspaces) that contains the sleeper [extension](https://github.com/scotato/sleeper/tree/master/extension) and [website](https://github.com/scotato/sleeper/tree/master/web).

The extension and site are built with [React](https://reactjs.org/) using [create-react-app](https://github.com/facebook/create-react-app), [blobs](https://github.com/g-harel/blobs), [react-spring](react-spring.io/), and [styled-components](https://styled-components.com/). Design based on [iOS 13](https://www.apple.com/ios/ios-13/) dark mode wallpapers.

The extension contains scripts to bundle and zip the project for release. The website is hosted by [Netlify](http://netlify.com/) which watches the master branch of this repo and automatically deploys the site on change.

The project is versioned with [npm-version](https://docs.npmjs.com/cli/version), which triggers the extension build script then pushes the repo which redeploys the site.

[![Netlify Status](https://api.netlify.com/api/v1/badges/c7e02ad5-89a4-44f3-9e3b-50e4741e9829/deploy-status)](https://app.netlify.com/sites/sleeper/deploys)

## Available Scripts

In the root project directory, you can run:

### `yarn install`

Installs the `node_modules` required to run and build the apps.

### `yarn start`

Runs the extension and website in the development mode.

Open [http://localhost:3000](http://localhost:3000) and [http://localhost:4000](http://localhost:4000) to view them in the browser.

Projects can be run individually with `yarn ext` or `yarn web`.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `yarn build`

Builds the extension and website for production to their respective `build` folders.

Projects can be build individually with `yarn ext:build` or `yarn web:build`.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `yarn ext:release`

Builds and zips the app for production as `sleeper-vX.X.X.zip` in the extension directory.

When a release is ready, run [`npm version`](https://docs.npmjs.com/cli/version) with major/minor/patch and message.

## Additional Info

See the [extension](https://github.com/scotato/sleeper/tree/master/extension) and [website](https://github.com/scotato/sleeper/tree/master/web) projects for more info.

This is a [goldilocks.design](https://goldilocks.design) project by [@scotato](https://twitter.com/scotato) 🤞

