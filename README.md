webpack-play [![Travis](https://img.shields.io/travis/ThibWeb/webpack-play.svg?style=flat-square)](https://travis-ci.org/ThibWeb/webpack-play)
==========

> TODO
## Installation

> You first need to clone the project on your computer.

From the command-line:

```sh
cd ~/Development/sites/
git clone git@github.com:ThibWeb/webpack-play.git
cd webpack-play
```

Our main dependencies are:

- [Node.js](nodejs.org) JavaScript runtime and the [npm](https://www.npmjs.com/) ecosystem.
- [webpack](https://webpack.github.io/) module bundler and the [Babel](https://babeljs.io/) ES6/ES2015 transpiler.

> If you don't already have node installed, use `brew install node`.

To install our dependencies, run:

```sh
# Install the linters.
npm install --global eslint jscs babel-eslint esprima-fb eslint-plugin-react
# Then, install all project dependencies.
npm install
# If that's your thing, install the git hooks:
./.githooks/deploy
```

## Working on the project

> Everything mentioned in the installation process should already be done.

~~~sh
# Start the server and the development tools.
npm run start
# Voilà!
# You can then go to http://localhost:8080/ to see the site running.
# When you feel like it, you can run the tests.
npm run test
~~~

## Deployment

TODO
