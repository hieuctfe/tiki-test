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
