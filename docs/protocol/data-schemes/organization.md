# Organization Metadata


The metadata of an organization provides human readable content, featuring names, descriptions, images, the list of available processes and more.

## JSON schema


```json
{
  "version": "1.0",
  // The first language in the list is the default one
  // Use "default" or https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
  "languages": ["en", "fr"],
  "name": {
    "en": "Free Republic of Liberland",
    "fr": "République Libre de Liberland"
  },
  "description": {
    "en": "In a sovereign state...",
    "fr": "Dans un état souverain..."
  },
  "votingProcesses": {
    "active":["0x987...","0x876..."], // Process ID of the active votes
    "ended":["0x887...","0x886..."]   // Process ID of the ended votes
  },
  "newsFeed": {  // Unused, subject to revision
    "en": "ipfs://34567,https://hipsterpixel.co/feed.json",
    "fr": "ipfs://23456,https://feed2json.org/convert?url=http://www.intertwingly.net/blog/index.atom"
  },
  "media": {
    "avatar": "https://liberland.org/logo.png,ipfs://12345,ipfs://12345",
    "header": "https://liberland.org/header.png,ipfs://12345,ipfs://12345",
  },
  
  "actions": [ <ActionSchema>, ... ], // Unused, subject to revision

  "bootEntities": [ <OrganizationReference>, ... ],  // Unused, subject to revision

  "fallbackBootNodeEntities": [ <OrganizationReference>, ... ],  // Unused, subject to revision
  
  "trustedEntities": [ <OrganizationReference>, ... ],  // Unused, subject to revision
  
  "censusServiceManagedEntities": [ <OrganizationReference>, ... ]  // Unused, subject to revision
}
```


#### Register

Open a registration form within the client app.

```json
{
    "type": "register",
    "actionKey": "sign-up",   // The name you give to identify the action

    "name": {
        "default": "Register",
        "fr": "S'inscrire"
    },

    // The URL to POST the provided data to.
    // See the format below.
    "url": "https://census-registry.cloud/lambda/actions/",

    // Endpoint to query for the visibility (if dynamic).
    // Returning true will show the action and hide it otherwise.
    // See Action Visibility below.
    "visible": "https://census-registry.cloud/lambda/actions/"

    // "visible": "always"    (or make it always visible)
}
```

The body of the POST request submitted to `url` will contain a JSON body like:

```json
{
  "request": {
    "method": "register",
    "actionKey": "sign-up",
    "organizationId": "0xaabbccdd...",
    "firstName": "John",
    "lastName:": "Snow",
    "dateOfBirth": "2020-02-19T10:09:19.738Z",
    "email": "john@snow.me",
    "phone": "+1235678838",
    "timestamp": 1556110671
  },
  "signature": "0x1234..." // The public key will be extracted from the signature
̣}
```

As this all happens through Gateway requests, `signature` is computed from the stringified JSON of `request`, where its keys are sorted alphabetically.

The response from the backend should look like like:

```json
{
  "response": {
    "ok": true,
    // "error": "Something went wrong",  // Only if `ok` == false
    "timestamp": 1556110671
  },
  "signature": "" // Empty until registry public keys are available
}
```


