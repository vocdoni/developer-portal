# vocdoni-docs

Documentation about the Vocdoni API, SDK and more

## Run dev environment

This generates the api docs from the swagger into the `docs/vocdoni-api` and then run docusaurus development server.


```bash 
yarn install
yarn start
```

## Build

This generates the api docs from the swagger into the `docs/vocdoni-api` and then build the site to `build/` folder.

```bash
yarn build
```

## Deploy locally

Locally, on the branch you want to deploy, run:

```bash
USE_SSH=true yarn deploy
```

This will run `docusaurus deploy`. You may need to regenerate the swagger docs if there are ungenerated changes. 

The command, finally, will  push the build result to remote `gh-pages` branch. 

## Generate only the API documentation

If you modified the swagger file under `swaggers/` folder and want to build `.mdx` files again:

```bash
yarn run re-gen
```

This will generate all the API static files.