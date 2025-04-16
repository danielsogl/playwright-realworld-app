# Playwright Real World App

This is a demo application for Playwright workshops. It is a simple full-stack app built with React and Express, using a local JSON database. The goal is to provide a realistic playground for end-to-end testing with Playwright.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (see `.node-version` for the required version)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/danielsogl/playwright-realworld-app.git
cd playwright-realworld-app
npm install
```

### Running the App

Start the backend and frontend:

```sh
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- API Backend: [http://localhost:3001](http://localhost:3001)

### Updating Playwright Browsers

After installing dependencies, make sure Playwright browsers are up to date:

```sh
npx playwright install
```

If you ever need to update the browsers again, just rerun the above command.

### Login

- Use any example user from `data/database.json`.
- Default password for all users: `s3cret`

### Running Playwright Tests

You can run Playwright end-to-end tests with the following commands:

- Run all tests in headless mode:
  ```sh
  npm run test:playwright
  ```
- Run tests in UI mode (for debugging):
  ```sh
  npm run test:playwright:ui
  ```
- Run tests with coverage:
  ```sh
  npm run test:playwright:coverage
  ```

---

This app is for demo and educational purposes only.
