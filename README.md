# Playwright Real World App

This is a demo application for Playwright workshops. It is a simple full-stack app built with React and Express, using a local JSON database. The goal is to provide a realistic playground for end-to-end testing with Playwright.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (see `.node-version` for the required version)
- [Yarn Classic](https://classic.yarnpkg.com/) (v1)

#### Installing Yarn Classic
If you don't have Yarn Classic installed, run:

```sh
npm install -g yarn@latest
```

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/danielsogl/playwright-realworld-app.git
cd playwright-realworld-app
yarn
```

If you are on a Mac with an M-series chip, use:

```sh
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
```

### Running the App

Start the backend and frontend:

```sh
yarn dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- API Backend: [http://localhost:3001](http://localhost:3001)

### Updating Playwright Browsers

After installing dependencies, make sure Playwright browsers are up to date:

```sh
yarn playwright install
```

If you ever need to update the browsers again, just rerun the above command.

### Login

- Use any example user from `data/database.json`.
- Default password for all users: `s3cret`

---

This app is for demo and educational purposes only.
