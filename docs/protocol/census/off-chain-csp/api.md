# Blind-CSP API

The Blind CSP API is a minimalistic HTTP(s) API that implements methods for authenticating users with the CSP.

## Auth Endpoint

The auth endpoint is the public endpoint that can be used by any client to get information and register users.

We'll show the usage of this endpoint with a simple example. This example CSP uses the Simple Math handler which authenticates users by asking them to solve a simple arithmetic problem.

The handler requires a two steps authentication process:
1. Requires a name and replies with the challenge (["123","200"])
2. Requires the challenge solution, the sum of the challenge elements (["323"])

### Election Info

Request:
- The `info` endpoint provides the description of the authentication handler. 
  
Response:
- The `authType` parameter indicates the kind of authentication required by the CSP.
- Currently only `auth` as authType is supported, but `oauth` or others might be added in the future.
- The `signatureType` is a string array containing the list of supported signature types (used as the CSP proof).
  - Currently the supported signature types are `blind` for ECDSA blind signature, `ecdsa` for plain ECDSA signature over an arbitrary payload, and `sharedkey` for fetching a shared secret (signature of electionId).
- The `authSteps` object array describes the authentication steps and its parameters for a given authentication handler.

In the following example there are two steps (size of the object array), the first one requires a
text field named `name`. The second a 4 digits integer named `solution`.

```js
curl http://127.0.0.1:5000/v1/auth/elections/info

{
  "title": "Simple math challenge",
  "authType": "auth",
  "signatureType": ["blind","ecdsa","sharedkey"],
  "authSteps": [
    {
      "title": "name",
      "type": "text"
    },
    {
      "title": "solution",
      "type": "int4"
    }
  ]
}
```

### Authentication Steps

The endpoint `blind/auth/<step>`, where step is a 32 byte integer, handles the authentication steps for the handler. 
The client needs to perform all steps (in our case 2) starting from 0, successfully and serially.

#### Step 0

An `authToken` is provided by the CSP in order to identify the client
in the following steps.

An array of strings named `response` might be returned by the handler if the client
requires some data for performing the next step. In our case the response includes our 'challenge', a set of numbers to be summed.

- Request
```bash
curl -s 127.0.0.1:5000/v1/auth/elections/A9893a41fc7046d66d39fdc073ed901af6bec66ecc070a97f9cb2dda02b11265/blind/auth/0 -X POST -d '{"authData":["John Smith"]}'
```
- Response OK
```json
{
      "authToken": "9ba29669-3a38-43ac-a8f6-d6ac99d2e3a2",
      "response": [
        "141",
        "484"
      ]
}
```
- Response Error
```json
{
	"error": "Error invalid name"
}
```

#### Step 1

There can be an unlimited number of authentication steps, but for our example there are only two (0 and 1). 

In the final step, if the authentication challenge is resolved, the CSP returns `token`, the data that can be used by the client to prepare and ask for the signature. In our case the signature is of type `blind` so the token is the curve point `R` required for blinding the payload.

- Request 
```bash
# for the authData the string 574 is passed as it is the sum of 141 and 484 as integers
curl -s 127.0.0.1:5000/v1/auth/elections/A9893a41fc7046d66d39fdc073ed901af6bec66ecc070a97f9cb2dda02b11265/ecdsa/auth/1 -X POST -d '{"authToken":"8b16df36-9720-487f-b3eb-a46dfdebdb36", "authData":["574"]}'
```
- Response OK
```json
{
      "token": "0d2347cf59313bdb4038f0c6643e9289d694c1c67d4d1d66f56968e374d48669"
}
```
- Response Error
```json
{
	"error": "Message goes here"
}
```

### Blind signature

The blind signature is the signature performed by the CSP that proves a voter's eligibility. The payload to sign is usually an ephemeral ECDSA public key that the client creates for performing the vote for a specific voting process, but can also be any kind of privacy preserving digital ID.

- Request
```bash
curl -X POST https://server.foo/v1/auth/processes/12345.../blind/sign -d '{ "payload": "0xabcdef...", "token": "0x123bcde..." }'
```
- Response OK
```json
{
	"signature": "0x1234567890abcde..." // the blind signature
}
```
- Response Error
```json
{
	"error": "Invalid token"
}
```

### Shared Key

The shared key endpoint provides a `sharedKey`, an optional key that provides users access to any encrypted data that accompanies a voting process. This is used when a private election that only provides access to voters is required.

The shared key is a ECDSA salted signature of a keccak256 hash of a given electionId and is identical for all voters belonging to an election.

The sharedkey endpoint requires the same authentication steps described by the `info` method.
However, the handler might apply different restrictions, such as allowing shared key authentication to succeed more than once for a single user.

- Request
```bash
curl -s 127.0.0.1:5000/v1/auth/elections/A9893a41fc7046d66d39fdc073ed901af6bec66ecc070a97f9cb2dda02b11265/sharedkey/0 -X POST -d '{"authData":["John Smith"]}'
```
- Response OK
```json
{     
      "authToken":"12ab5ec4-bfc5-4dd1-896f-46ae06b15e81",
      "response":["232","333"]
}
```
- Response Error
```json
{
	"error": "Message goes here"
}
```
- Request
```bash
curl -s 127.0.0.1:5000/v1/auth/elections/A9893a41fc7046d66d39fdc073ed901af6bec66ecc070a97f9cb2dda02b11265/sharedkey/1 -X POST -d '{"authToken":"12ab5ec4-bfc5-4dd1-896f-46ae06b15e81", "authData":["565"]}'
```
- Response OK
```json
{
      "sharedkey": "a6d7b59f5f6dfff418464c3fa2895ad872d402bda6e85f1ba62fe6f50f703ea87247ca8bf34a00a15cd768ba44cd6c99044a2ff4b6f837f77c243102872f03c101"
}
```
- Response Error
```json
{
  "error": "invalid authData"
}
```

### Indexer

Some handlers might enable an indexer in order to provide each user with a list of elections they are eligible to vote in. The indexer endpoint takes some form of unique identifier as a URL parameter (hexadecimal string format) and returns the list of election identifiers (if any).

- Request
```bash
curl http://127.0.0.1:5000/v1/auth/elections/indexer/a216bc43310f46d66d39fdc073ed901af6bec66ecc070a97f9cb2dda01ba0241
```
- Response Ok
``` json
{
  "elections": [
    {
      "electionId": "2222222222222222222222222222222222222222222222222222222222222222",
      "remainingAttempts": 5,
      "consumed": false,
      "extra": [
        "41"
      ]
    },
    {
      "electionId": "1111111111111111111111111111111111111111111111111111111111111111",
      "remainingAttempts": 5,
      "consumed": false,
      "extra": [
        "41"
      ]
    }
  ]
}

```
- Response Error
```json
{
  "error": "user not found"
}
```

## Admin

The blind-csp service provides administration endpoints as well. All the admin operations and results require authenticated admin user access to the service.

- [GET] `/admin/elections` : Returns all elections

- [GET] `/admin/elections/:electionId` : Returns the provided electionId information

- [POST] `/admin/elections` : Creates a new Census and attaches it to a new Election from the defined data. Returns the election and the admin token for that election.
Request JSON body example
```json
{ 
    "id": "0x.....",
    "handlers": 
    [
        {
            "handler": "oauth",
            "service": "facebook",
            "mode": "usernames",
            "data": ["12345","nigeon@gmail.com"]
        },
        {
            "handler": "oauth",
            "service": "github",
            "mode": "usernames",
            "data": ["nigeon"]
        },
        {
            "handler": "sms",
            "data": ["`666666666`", "637840295"]
        }
    ]
}
```

- [DELETE] `/admin/elections/:electionId` : Deletes election ID

- [GET] `/admin/elections/:electionId/users` : List users in election

- [POST] `/admin/elections/:electionId/users` : Add user in election
Request JSON body example:
```json
{
    "userId": "<user-id>",
    "handler": "oauth",
    "service": "facebook",
    "mode": "usernames",
    "data": "nigeon@gmail.com",
    "consumed": false
}
```
- [GET] `/admin/elections/[electionId]/users/[user]` : Get user

- [PUT] `/admin/elections/[electionId]users/[user]` : Edits user
Request JSON body example:
```json
{
    "consumed": true
}
```
- [DELETE] `/admin/elections/:electionId/users/[user]` : Deletes user

- [GET] `/admin/elections/:electionId/users` : List of users in the elections

## SMS Handler Admin

In the case that you are using a CSP with an SMS handler (users authenticated via an SMS text), there is an admin endpoint specifically for configuring this handler.

The SMS handler is backed by a database of user ids and phone numbers, as well as the set of elections each user is able to vote in.

The API requires a bearer authentication token, if not provided by the user the token is autogenerated.
The following examples with `curl` include an implicit header flag such as:

`curl -H "Authorization: Bearer 63d97da8-86e7-4313-92e7-2d8ae99e6c6e" <query>`

### Database Dump
Return all users and elections (JSON).
Note that this method can be quite heavy and reach HTTP body size limit if the database is too big.
Only suitable for debug purposes.

- Request
```bash
curl http://127.0.0.1:5001/smsapi/dump
```
- Response OK
```json
{
 "userID": "6d2347cf59313bdb4038f0c6643e9289d694c1c67d4d1d66f56968e374d48669",
 "elections": [
  {
   "electionId": "1111111111111111111111111111111111111111111111111111111111111111",
   "remainingAttempts": 5,
   "consumed": false
  },
  {
   "electionId": "2222222222222222222222222222222222222222222222222222222222222222",
   "remainingAttempts": 5,
   "consumed": false
  },
  {
   "electionId": "3333333333333333333333333333333333333333333333333333333333333333",
   "remainingAttempts": 5,
   "consumed": false
  }
 ],
 "extraData": "Vocdoni",
 "phone": {
  "country_code": 34,
  "national_number": 651200042
 }
}
```
- Response Error
```json
{
    "error": "auth token not valid"
}
```

### List Users
List all users identifiers (userID) registered to the SMS handler.

- Request
```bash
curl http://127.0.0.1:5001/smsapi/users 
```
- Response OK
```json
{
 "users": [
  "6c0b6e1020b6354c714fc65aa198eb95e663f038e32026671c58677e0e0f8eac",
  "bf5b6a9c69a5abee870b3667e92c589ef9c13458be0fc0493b2ba5a9658c690b",
  "87b1161ad7a5290dd1d2b4b8ded948950d7420551648000887fb2529be58a39e"
 ]
}
```
- Response Error
```json
{
    "error": "auth token not valid"
}
```

### Get User Data
Retrieve the user data given a userID.

- Request
```bash
curl http://127.0.0.1:5001/smsapi/user/6c0b6e1020b6354c714fc65aa198eb95e663f038e32026671c58677e0e0f8eac
```
- Response OK
```json
{
 "userID": "6c0b6e1020b6354c714fc65aa198eb95e663f038e32026671c58677e0e0f8eac",
 "elections": [
  {
   "electionId": "1111111111111111111111111111111111111111111111111111111111111111",
   "remainingAttempts": 5,
   "consumed": false
  },
  {
   "electionId": "2222222222222222222222222222222222222222222222222222222222222222",
   "remainingAttempts": 3,
   "consumed": false
  },
  {
   "electionId": "3333333333333333333333333333333333333333333333333333333333333333",
   "remainingAttempts": 5,
   "consumed": true
  }
 ],
 "extraData": "John 16/05/1984",
 "phone": {
  "country_code": 34,
  "national_number": 66778899
 }
}
```
- Response Error
```json
{
    "error": "user is unknown"
}
```

### Add SMS attempt
Increase by 1 the number of remaning SMS authentication attempts for a given userID and a given electionID.

- Request
```bash
# .../addAttempt/<userID>/<electionID>
curl http://127.0.0.1:5001/smsapi/addAttempt/6c0b6e1020b6354c714fc65aa198eb95e663f038e32026671c58677e0e0f8eac/2222222222222222222222222222222222222222222222222222222222222222
```
- Response OK
```json
{
    "ok":"true"
}
```
- Response Error 
```json
{
    "error": "user does not belong to election"
}
```

### Set Consumed
The consumed bool indicates if a user represented by userID has already fetched a CSP proof for a given electionId.

- Request
```bash
curl http://127.0.0.1:5001/smsapi/setConsumed/6c0b6e1020b6354c714fc65aa198eb95e663f038e32026671c58677e0e0f8eac/2222222222222222222222222222222222222222222222222222222222222222/true
```
- Response OK
```json
{
    "ok": "true"
}
```
- Response Error
```json
{
    "error":
}
```

After the two previous operations, the user looks like this:

```bash
curl http://127.0.0.1:5001/smsapi/user/6c0b6e1020b6354c714fc65aa198eb95e663f038e32026671c58677e0e0f8eac
```
```json
{
 "userID": "6c0b6e1020b6354c714fc65aa198eb95e663f038e32026671c58677e0e0f8eac",
 "elections": [
  {
   "electionId": "1111111111111111111111111111111111111111111111111111111111111111",
   "remainingAttempts": 5,
   "consumed": false
  },
  {
   "electionId": "2222222222222222222222222222222222222222222222222222222222222222",
   "remainingAttempts": 6,
   "consumed": true
  },
  {
   "electionId": "3333333333333333333333333333333333333333333333333333333333333333",
   "remainingAttempts": 5,
   "consumed": false
  }
 ],
 "extraData": "John 16/05/1984",
 "phone": {
  "country_code": 34,
  "national_number": 66778899
 }
}
```

### Clone User
Make a copy of a user with a new userID. The list of elections is preserved but not its internal status (consumed or remainingAttempts).
The first URL parameter is the source userID and the second the new userID.

- Request
```bash
curl http://127.0.0.1:5001/smsapi/cloneUser/6c0b6e1020b6354c714fc65aa198eb95e663f038e32026671c58677e0e0f8eac/b3deea91021d8c3dd6b52b2b1ba5defbe4b0b2fe03bc4ad6944148effb3e1222
```
- Response OK
```json
{
    "ok": "true"
}
```
- Response Error
```json
{
    "error": "user already exists"
}
```

The status of the user after the previous command is:

```bash
curl http://127.0.0.1:5001/smsapi/user/b3deea91021d8c3dd6b52b2b1ba5defbe4b0b2fe03bc4ad6944148effb3e1222
```
```json
{
 "userID": "b3deea91021d8c3dd6b52b2b1ba5defbe4b0b2fe03bc4ad6944148effb3e1222",
 "elections": [
  {
   "electionId": "1111111111111111111111111111111111111111111111111111111111111111",
   "remainingAttempts": 5,
   "consumed": false
  },
  {
   "electionId": "2222222222222222222222222222222222222222222222222222222222222222",
   "remainingAttempts": 5,
   "consumed": false
  },
  {
   "electionId": "3333333333333333333333333333333333333333333333333333333333333333",
   "remainingAttempts": 5,
   "consumed": false
  }
 ],
 "extraData": "John 16/05/1984",
 "phone": {
  "country_code": 34,
  "national_number": 66778899
 }
}
```

### Add a New User
Creates a new user with a `phone` and an `extra` field containing arbitrary data.

- Request
```bash
curl http://127.0.0.1:5001/smsapi/newUser/ff29acb484cc721c102715295af1698ff90e90cb1b70f4d05aaa19674dbddce4 -d '{"phone":"+34700605040","extra":"Alice 02/04/1991"}' -X POST
```
- Response OK
```json
{
    "ok": "true"
}
```
- Response Error
```json
{
    "error": "user already exists"
}
```
Then we can query the new user:
```bash
curl http://127.0.0.1:5001/smsapi/user/ff29acb484cc721c102715295af1698ff90e90cb1b70f4d05aaa19674dbddce4`
```
```json
{
 "userID": "ff29acb484cc721c102715295af1698ff90e90cb1b70f4d05aaa19674dbddce4",
 "extraData": "Alice 02/04/1991",
 "phone": {
  "country_code": 34,
  "national_number": 700605040
 }
}
```

### Add / Delete Elections
Adds a new election for a given user.

- Request
```bash
curl http://127.0.0.1:5001/smsapi/addElection/ff29acb484cc721c102715295af1698ff90e90cb1b70f4d05aaa19674dbddce4/3333333333333333333333333333333333333333333333333333333333333333
```
- Response OK
```json
{
    "ok": "true"
}
```
- Response Error
```json
{
    "error": "user is unknown"
}
```

Now the new user has the previous election configured:

```bash
curl http://127.0.0.1:5001/smsapi/user/ff29acb484cc721c102715295af1698ff90e90cb1b70f4d05aaa19674dbddce4
```
```json
{
 "userID": "ff29acb484cc721c102715295af1698ff90e90cb1b70f4d05aaa19674dbddce4",
 "elections": [
  {
   "electionId": "3333333333333333333333333333333333333333333333333333333333333333",
   "remainingAttempts": 5,
   "consumed": false
  }
 ],
 "extraData": "Alice 02/04/1991",
 "phone": {
  "country_code": 34,
  "national_number": 700605040
 }
}
```

Delete an election for a user.

- Request
```bash
curl http://127.0.0.1:5001/smsapi/delElection/ff29acb484cc721c102715295af1698ff90e90cb1b70f4d05aaa19674dbddce4/3333333333333333333333333333333333333333333333333333333333333333
```
- Response OK
```json
{
    "ok": "true"
}
```
- Response Error
```json
{
    "error": "error goes here"
}
```


### Search the ExtraData Field

The `extraData` field can store any arbitrary data regarding the user (full name, national ID, birth date, etc.).
The search endpoint returns the list of userID for a specific term contained inside the extraData field.
The search text function matches full words, such as "Alice" but not "Ali".

```bash
curl  http://127.0.0.1:5001/smsapi/search -d '{"term":"Alice"}' -X POST
```
```json
{
 "users": ["ff29acb484cc721c102715295af1698ff90e90cb1b70f4d05aaa19674dbddce4"]
}
```

### Delete a User
A user can be deleted by their userID.

```bash
curl http://127.0.0.1:5001/smsapi/delUser/ff29acb484cc721c102715295af1698ff90e90cb1b70f4d05aaa19674dbddce4
```
` Response OK
```json
{
    "ok": "true"
}
```
- Response Error
```json
{
    "error": "user is unknown"
}
```
### Import
Import can be used to insert (or update) the database using the output from a dump.

```bash
curl http://127.0.0.1:5001/smsapi/dump > dump.json
```

```bash
curl http://127.0.0.1:5001/smsapi/import -d @dump.json
```
` Response OK
```json
{
    "ok": "true"
}
```
- Response Error
```json
{
    "error": "error goes here"
}
```

### Set User Data
Modifies the existing user fields `phone` and `extra` by using the following POST call.


- Request
```bash
curl http://127.0.0.1:5001/smsapi/setUserData/6c0b6e1020b6354c714fc65aa198eb95e663f038e32026671c58677e0e0f8eac -d '{"phone":"+34722847182", "extra":"John Smith"}'
```
- Response OK
```json
{
    "ok": "true"
}
```
- Response Error
```json
{
    "error": "error goes here"
}
```
