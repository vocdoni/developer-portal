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

This will delete and re-generate all the API static files. Note that using only `yarn gen-all` will skip rewrite 
existing files and won't update them if swagger content is different. 

## Translations

We integrated crowdin for translations. Use:

```bash
yarn crowdin:upload
```

To upload translations to crowdin. There you can translate the files and then download them using:

```bash
yarn crowdin:download
```

This will download translation files to `i18n/` folder. To test them use `yarn start -- --locale es`.

See this issues [1](https://community.crowdin.com/t/exclude-single-line-on-markdown-headers/2897), 
[2](https://community.crowdin.com/t/broken-mdx-components-on-download/2912) to understand why the `pre`/`post` scripts 
on crowdin download and upload: 

## Deploy

* After push the branch you want to deploy
* And, locally, on the branch you want to deploy

Run:

```bash
USE_SSH=true yarn deploy
```