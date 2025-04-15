<p align="center">
  <!-- We use two SVGs here so that this displays correctly
    on Github. This might not look right in other Markdown previewers. -->
  <img alt="Cypress Real World App Logo" src="./src/svgs/rwa-logo-light.svg#gh-dark-mode-only" />
  <img alt="Cypress Real World App Logo" src="./src/svgs/rwa-logo.svg#gh-light-mode-only" />
</p>

<p align="center">
  <a href="https://cypress.io">
    <img width="140" alt="Cypress Logo" src="./src/svgs/built-by-cypress.svg" />
    </a>
</p>

<p align="center">
   <a href="https://cloud.cypress.io/projects/7s5okt/runs">
    <img src="https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/7s5okt/develop&style=flat&logo=cypress" />
  </a>

  <a href="https://codecov.io/gh/cypress-io/cypress-realworld-app">
    <img src="https://codecov.io/gh/cypress-io/cypress-realworld-app/branch/develop/graph/badge.svg" />
  </a>

  <a href="https://percy.io/cypress-io/cypress-realworld-app">
    <img src="https://percy.io/static/images/percy-badge.svg" />
  </a>

   <a href="#contributors-">
    <img src="https://img.shields.io/badge/all_contributors-6-green.svg?style=flat" />
  </a>
</p>

<p align="center">
A payment application to demonstrate <strong>real-world</strong> usage of <a href="https://cypress.io">Cypress</a> testing methods, patterns, and workflows.
</p>

<p align="center">
  <img style='width: 70%' alt="Cypress Real World App" src="./public/img/rwa-readme-screenshot.png" />
</p>

> 💬 **Note from maintainers**
>
> This application is purely for demonstration and educational purposes. Its setup and configuration resemble typical real-world applications, but it's not a full-fledged production system. Use this app to learn, experiment, tinker, and practice application testing with Cypress.
>
> Happy Testing!

---

## Features

🛠 Built with [React][reactjs], [XState][xstate], [Express][express], [lowdb][lowdb], [Material-UI][material-ui] and [TypeScript][typescript]
⚡️ Zero database dependencies
🚀 Full-stack [Express][express]/[React][reactjs] application with real-world features and tests
👮‍♂️ Local Authentication
🔥 Database Seeding with End-to-end Tests
💻 CI/CD + [Cypress Cloud][cypresscloud]

## Getting Started

The Cypress Real-World App (RWA) is a full-stack Express/React application backed by a local JSON database ([lowdb]).

The app is bundled with [example data](./data/database.json) (`data/database.json`) that contains everything you need to start using the app and run tests out-of-the-box.

> 🚩 **Note**
>
> You can login to the app with any of the [example app users](./data/database.json#L2). The default password for all users is `s3cret`.
> Example users can be seen by running `yarn list:dev:users`.

### Prerequisites

This project requires [Node.js](https://nodejs.org/en/) to be installed on your machine. Refer to the [.node-version](./.node-version) file for the exact version.

[Yarn Classic](https://classic.yarnpkg.com/) is also required. Once you have [Node.js](https://nodejs.org/en/) installed, execute the following to install the npm module [yarn](https://www.npmjs.com/package/yarn) (Classic - version 1) globally.

```shell
npm install yarn@latest -g
```

If you have Node.js' experimental [Corepack](https://nodejs.org/dist/latest/docs/api/corepack.html) feature enabled, then you should skip the step `npm install yarn@latest -g` to install Yarn Classic globally. The RWA project is locally configured for `Corepack` to use Yarn Classic (version 1).

#### Yarn Modern

**This project is not compatible with [Yarn Modern](https://yarnpkg.com/) (version 2 and later).**

### Installation

To clone the repo to your local system and install dependencies, execute the following commands:

```shell
git clone https://github.com/cypress-io/cypress-realworld-app
cd cypress-realworld-app
yarn
```

#### Mac users with M-series chips will need to prepend `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true`.

```shell
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
```

### Run the app

```shell
yarn dev
```

> 🚩 **Note**
>
> The app will run on port `3000` (frontend) and `3001` (API backend) by default. Please make sure there are no other applications or services running on both ports.
> If you want to change the default ports, you can do so by modifying `PORT` and `VITE_BACKEND_PORT` variables in `.env` file.
> However, make sure the modified port numbers in `.env` are not committed into Git since the CI environments still expect the application to run on the default ports.

### Start Cypress

```shell
yarn cypress:open
```

> 🚩 **Note**
>
> If you have changed the default ports, then you need to update Cypress configuration file (`cypress.config.ts`) locally.
> There are three properties that you need to update in `cypress.config.ts`: `e2e.baseUrl`, `env.apiUrl`, and `env.url`.
> The port number in `e2e.baseUrl` corresponds to `PORT` variable in `.env` file. Similarly, the port number in `env.apiUrl` and `env.url` correspond to `VITE_BACKEND_PORT`.
> For example, if you have changed `PORT` to `13000` and `VITE_BACKEND_PORT` to `13001` in `.env` file, then your `cypress.config.ts` should look similar to the following snippet:
>
> ```js
> {
>   env: {
>     apiUrl: "http://localhost:13001",
>     codeCoverage: {
>       url: "http://localhost:13001/__coverage__"
>     },
>   },
>   e2e: {
>     baseUrl: "http://localhost:13000"
>   }
> }
> ```
>
> Avoid committing the modified `cypress.config.ts` into Git since the CI environments still expect the application to be run on default ports.

## Tests

| Type      | Location                                 |
| --------- | ---------------------------------------- |
| api       | [cypress/tests/api](./cypress/tests/api) |
| ui        | [cypress/tests/ui](./cypress/tests/ui)   |
| component | [src/(next to component)](./src)         |
| unit      | [`src/__tests__`](./src/__tests__)       |

## Database

- The local JSON database is located in [data/database.json](./data/database.json) and is managed with [lowdb].

- The database is [reseeded](./data/database-seed.json) each time the application is started (via `yarn dev`). Database seeding is done in between each [Cypress End-to-End test](./cypress/tests).

- Updates via the React frontend are sent to the [Express][express] server and handled by a set of [database utilities](backend/database.ts)

- Generate a new database using `yarn db:seed`.

- An [empty database seed](./data/empty-seed.json) is provided along with a script (`yarn start:empty`) to view the application without data.

## Additional NPM Scripts

| Script         | Description                                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dev            | Starts backend in watch mode and frontend                                                                                                                                         |
| dev:coverage   | Starts backend in watch mode and frontend with instrumented code coverage enabled                                                                                                 |
| dev:auth0      | Starts backend in watch mode and frontend; [Uses Auth0 for Authentication](#auth0) > [Read Guide](http://on.cypress.io/auth0)                                                     |
| dev:okta       | Starts backend in watch mode and frontend; [Uses Okta for Authentication](#okta) > [Read Guide](http://on.cypress.io/okta)                                                        |
| dev:cognito    | Starts backend in watch mode and frontend; [Uses Cognito for Authentication](#amazon-cognito) > [Read Guide](http://on.cypress.io/amazon-cognito)                                 |
| dev:google     | Starts backend in watch mode and frontend; [Uses Google for Authentication](#google) > [Read Guide](https://docs.cypress.io/guides/testing-strategies/google-authentication.html) |
| start          | Starts backend and frontend                                                                                                                                                       |
| types          | Validates types                                                                                                                                                                   |
| db:seed        | Generates fresh database seeds for json files in /data                                                                                                                            |
| start:empty    | Starts backend, frontend and Cypress with empty database seed                                                                                                                     |
| tsnode         | Customized ts-node command to get around react-scripts restrictions                                                                                                               |
| list:dev:users | Provides id and username for users in the dev database                                                                                                                            |

For a complete list of scripts see [package.json](./package.json)

## Code Coverage Report

The Cypress Real-World App uses the [@cypress/code-coverage](https://github.com/cypress-io/code-coverage) plugin to generate code coverage reports for the app frontend and backend.

To generate a code coverage report:

1. Start the development server with coverage enabled by running `yarn dev:coverage`.
2. Run `yarn cypress:run --env coverage=true` and wait for the test run to complete.
3. Once the test run is complete, you can view the report at `coverage/index.html`.

## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).

[reactjs]: https://reactjs.org
[xstate]: https://xstate.js.org
[express]: https://expressjs.com
[lowdb]: https://github.com/typicode/lowdb
[typescript]: https://typescriptlang.org
[cypresscloud]: https://cloud.cypress.io/projects/7s5okt/runs
[material-ui]: https://material-ui.com
[okta]: https://okta.com
[auth0]: https://auth0.com
[oktacreateapp]: https://developer.okta.com/docs/guides/sign-into-spa/react/create-okta-application/
[cognito]: https://aws.amazon.com/cognito
[awsamplify]: https://amplify.aws
[google]: https://google.com

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.kevinold.com"><img src="https://avatars0.githubusercontent.com/u/21967?v=4" width="100px;" alt=""/><br /><sub><b>Kevin Old</b></sub></a></td>
    <td align="center"><a href="https://twitter.com/amirrustam"><img src="https://avatars0.githubusercontent.com/u/334337?v=4" width="100px;" alt=""/><br /><sub><b>Amir Rustamzadeh</b></sub></a></td>
    <td align="center"><a href="https://twitter.com/be_mann"><img src="https://avatars2.githubusercontent.com/u/1268976?v=4" width="100px;" alt=""/><br /><sub><b>Brian Mann</b></sub></a></td>
    <td align="center"><a href="https://glebbahmutov.com/"><img src="https://avatars1.githubusercontent.com/u/2212006?v=4" width="100px;" alt=""/><br /><sub><b>Gleb Bahmutov</b></sub></a></td>
    <td align="center"><a href="http://www.bencodezen.io"><img src="https://avatars0.githubusercontent.com/u/4836334?v=4" width="100px;" alt=""/><br /><sub><b>Ben Hong</b></sub></a></td>
    <td align="center"><a href="https://github.com/davidkpiano"><img src="https://avatars2.githubusercontent.com/u/1093738?v=4" width="100px;" alt=""/><br /><sub><b>David Khourshid</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!!
