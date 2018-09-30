![Olist front-end test](https://image.ibb.co/iQvObp/Captura_de_Tela_2018_09_27_a_s_21_12_31.png)

# Olist Front-end challenge

This project is bases only on JavaScript(ES6+), HTML5 e Sass.
Developed in [OSX](https://www.apple.com/macos/) with [VSCode](https://code.visualstudio.com/).

## Installing / Getting started

```shell
git clone https://github.com/brunosantanarj/work-at-olist-front.git
cd work-at-olist-front
yarn
```

## Developing

### Built With
Webpack 4 was used like module bundle and Sass like CSS preprocessor.

### Prerequisites
You will need the [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) installed and a package manager(I prefer the yarn but you can choose other like the npm).

### Setting up Dev

```shell
yarn dev
```
or with npm
```shell
npm run dev
```

This command opens the browser in [http://localhost:8080](#) with `webpack-dev-server` configured.

### Building

```shell
yarn build
```
or with npm
```shell
npm run build
```

This command through the webpack generates the dist folder, which contains all bundle and optimized assets for production

## Tests

[Jest](https://jestjs.io/) with [Puppeteer](https://github.com/GoogleChrome/puppeteer) were used in the tests of this project.

In the project, there are unit tests and UI tests.

```shell
yarn test
```

To coverage run:
```shell
yarn cover
```
## Style guide
Our code uses style guide [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and to each file that saves the eslint will check if the code is in the defaults.
