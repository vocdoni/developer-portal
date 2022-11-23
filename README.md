# vocdoni-docs

Documentation about the Vocdoni API, SDK and more

## Run dev environment

```bash 
yarn install
yarn start
```

## Generate API documentation

Modify the swagger file under `swaggers/` folder and then run:

```bash
yarn run re-gen
```

This will generate all the API static files. 

## Deploy

* After push the branch you want to deploy
* And, locally, on the branch you want to deploy

Run:

```bash
USE_SSH=true yarn deploy
```