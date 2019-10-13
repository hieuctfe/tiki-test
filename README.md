
 <br>
<div align="center">Booking ticked screen, With dynamic generate kind of seat and zoom feature, With structure can write Unit test</div>

<br />

## Quick start

1. Clone this repo using `https://github.com/hieuctfe/tiki-test.git`
2. Move to the appropriate directory: `cd tiki-test`.<br />
3. Run `yarn` or `npm install` to install dependencies.<br />
4. Run `npm start` to see the example app at `http://localhost:3000`.

Now you're enjoy to booking movie!

## Features

This website using boilerplate features all the latest tools and practices in the industry.

- _React.js_ - **React 16**✨, React Router 5
- _Redux.js_ - Redux saga and Reselect
- _Babel_ - ES6, ESNext, Airbnb and React/Recommended config
- _Webpack_ - **Webpack 4**✨, Hot Reloading, Code Splitting, Optimized Prod Build and more
- _Test_ - Jest with Enzyme
- _Lint_ - ESlint
- _Styles_ - SCSS Styling

Here are a few highlights to look out for in this boilerplate 

<dl>
  <dt>Dynamic generate seat of kind</dt>
  <dd>Kind of seat can generate by input data, Not fixed.</dd>

  <dt>Zoom for easy to book</dt>

  <dt>Vurtualize cinema map</dt>

</dl>

## Structure

```
|-- instagram-private
    |-- .editorconfig
    |-- .eslintrc
    |-- .gitattributes
    |-- .gitignore
    |-- .prettierignore
    |-- .prettierrc
    |-- .travis.yml
    |-- LICENSE.md
    |-- README.md
    |-- babel.config.js
    |-- directoryList.md
    |-- jest.config.js
    |-- model-test.json
    |-- package-lock.json
    |-- package.json
    |-- yarn.lock
    |-- .vscode
    |   |-- settings.json
    |-- app
    |   |-- app.js
    |   |-- configureStore.js
    |   |-- index.html
    |   |-- init.js
    |   |-- reducers.js
    |   |-- components
    |   |   |-- .DS_Store
    |   |   |-- Footer
    |   |   |   |-- Footer.js
    |   |   |   |-- index.js
    |   |   |   |-- style.scss
    |   |   |   |-- tests
    |   |   |       |-- index.test.js
    |   |   |-- GeneralInfo
    |   |   |   |-- GeneralInfo.js
    |   |   |   |-- index.js
    |   |   |   |-- style.scss
    |   |   |   |-- image
    |   |   |   |   |-- firm-bd.png
    |   |   |   |-- tests
    |   |   |       |-- index.test.js
    |   |   |-- Header
    |   |   |   |-- Header.js
    |   |   |   |-- index.js
    |   |   |   |-- style.scss
    |   |   |   |-- images
    |   |   |   |   |-- logo-tiki.png
    |   |   |   |-- tests
    |   |   |       |-- index.test.js
    |   |   |-- LoadingIndicator
    |   |   |   |-- LoadingIndicator.js
    |   |   |   |-- index.js
    |   |   |   |-- style.scss
    |   |   |   |-- tests
    |   |   |       |-- index.test.js
    |   |   |-- ReposList
    |   |   |   |-- ReposList.js
    |   |   |   |-- index.js
    |   |   |   |-- style.scss
    |   |   |   |-- tests
    |   |   |       |-- index.test.js
    |   |   |-- Seat
    |   |   |   |-- Seat.js
    |   |   |   |-- index.js
    |   |   |   |-- style.scss
    |   |   |   |-- tests
    |   |   |       |-- index.test.js
    |   |   |-- SeatKind
    |   |       |-- .DS_Store
    |   |       |-- SeatKind.js
    |   |       |-- index.js
    |   |       |-- style.scss
    |   |-- containers
    |   |   |-- App
    |   |   |   |-- App.js
    |   |   |   |-- actions.js
    |   |   |   |-- constants.js
    |   |   |   |-- index.js
    |   |   |   |-- reducer.js
    |   |   |   |-- selectors.js
    |   |   |   |-- style.scss
    |   |   |   |-- tests
    |   |   |       |-- index.test.js
    |   |   |-- HomePage
    |   |   |   |-- HomePage.js
    |   |   |   |-- Loadable.js
    |   |   |   |-- actions.js
    |   |   |   |-- constants.js
    |   |   |   |-- index.js
    |   |   |   |-- reducer.js
    |   |   |   |-- saga.js
    |   |   |   |-- selectors.js
    |   |   |   |-- style.scss
    |   |   |   |-- image
    |   |   |       |-- bg-screen.png
    |   |   |-- RepoListItem
    |   |       |-- RepoListItem.js
    |   |       |-- index.js
    |   |       |-- style.scss
    |   |       |-- tests
    |   |           |-- index.test.js
    |   |-- images
    |   |   |-- favicon.ico
    |   |-- styles
    |   |   |-- global-styles.scss
    |   |   |-- seat-color.scss
    |   |   |-- theme.scss
    |   |-- tests
    |   |   |-- store.test.js
    |   |-- utils
    |       |-- checkStore.js
    |       |-- constants.js
    |       |-- history.js
    |       |-- injectReducer.js
    |       |-- injectSaga.js
    |       |-- reducerInjectors.js
    |       |-- request.js
    |       |-- sagaInjectors.js
    |       |-- utils.js
    |       |-- tests
    |           |-- checkStore.test.js
    |           |-- injectReducer.test.js
    |           |-- injectSaga.test.js
    |           |-- reducerInjectors.test.js
    |           |-- request.test.js
    |           |-- sagaInjectors.test.js
    |-- config
    |   |-- jest.config.js
    |   |-- test-setup.js
    |   |-- webpack.base.babel.js
    |   |-- webpack.dev.babel.js
    |   |-- webpack.prod.babel.js
    |   |-- jest-mocks
    |       |-- cssModule.js
    |       |-- image.js
    |-- server
        |-- index.js
        |-- middlewares
        |   |-- addDevMiddlewares.js
        |   |-- addProdMiddlewares.js
        |   |-- frontendMiddleware.js
        |-- util
            |-- argv.js
            |-- logger.js
            |-- port.js

```


## License

Copyright (c) 2019 Cao Trung Hieu.
