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

## Generate the SDK documentation

If you want to generate the SDK documentation for yourself, you can do so from inside the `docs` directory in the `vocdoni-sdk` project. 

~~~bash
yarn
yarn build
~~~

This creates a temporary documentation folder `temp_docs`.
Then you can replace the SDK documentation folder in your developer portal directory:

~~~bash
# Set the vocdoni sdk folder path
export VOCDONI_SDK_PATH=....
# Delete existing SDK docs folder
rm -rf ./docs/sdk/reference
# Copy the new docs to the SDK folder
cp -R  $VOCDONI_SDK_PATH/docs/temp_docs/ ./docs/sdk/reference
# Remove the now redundant docs folder in vocdoni-sdk
rm -rf $VOCDONI_SDK_PATH/docs/temp_docs
# Clean-up the generated links to the readme file
# Note this command was run on MacOS, the sed command may need to be tweaked on a linux system
find ./docs/sdk/reference -type f | xargs sed -i '' -r 's/\[\@vocdoni\/sdk\]\((\.\.\/)*README\.md\)/\[\@vocdoni\/sdk\]\(\/sdk\)/g'
~~~

Note that the SDK docs are tracked by git, and you should not need to do this if you are not a repo maintainer.

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