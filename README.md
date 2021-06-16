# material-table-core

# Contributing 

### this package uses `yarn` not `npm`!

### In order to publish you will need:

- Permissions to the GitHub repo (uses GH pages to serve website from X branch)
- To run the following command: `yarn deploy <your_username>`
  - This kicks off `node ./deploy.js <your_username>`
  - Ultimtely, setting the `GIT_USER` env var before running `docusaurus deploy`

## [How to add your own demo to this website](https://material-table-core.com/demos#how-to-add-demo)

---

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
