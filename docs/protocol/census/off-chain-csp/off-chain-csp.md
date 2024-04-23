# Off-Chain CSP Census

A census approach based on Credential Service Providers (CSPs) allows organizations to validate users manually and based off of any arbitrary criteria. Rather than a static census published before-hand, CSP census allows each user to be evaluated for voting eligibility individually, throughout the duration of the voting process.

In order to prove they are a member of the census, a voter needs to retrieve a certificate of eligibility from the CSP for that process. The CSP first verifies the user's validity (eg. `resident of Istanbul` or `human being standing in front of me`) and then provides this certificate by signing the voter's public key.

## Blind Signatures

In order to preserve the anonymity of each voter, the CSP server will perform a blind signature. Blind signatures were first suggested by David Chaum, who designed a cryptographic scheme that allows for signatures over disguised (blinded) messages. The blinder (voter in our scenario) can then un-blind the signature and use it as a standard one. This protocol was designed for RSA, but we will use it over EC secp256k1 (Ethereum and Vocdoni standard).

```mermaid
%%{init: {'theme':'forest'}}%%

sequenceDiagram
    participant Voter
    participant CSP 
    participant BC as Blockchain

    Voter->>BC: get processId
    Voter->>BC: get CSP public key
    Voter->>Voter: generate new key
    Voter->>CSP: authentication for processId
    CSP->>CSP: check identity
    Note right of CSP: CSP decides the kind of authentication

    Voter->>CSP: send blinded pubKey (bpk)
    CSP->>Voter: send blind signature over bpk
    Voter->>Voter: unbind signature
    Voter->>BC: cast the vote (using CSP unblinded signature as proof)
    Note over CSP, BC: Validators check the CSP<br/> signature over the voter's pubkey

```

In order to ensure that each CSP voter approval is valid only for one specific election process (processId), a deterministic key derivation is be used. Thus, the CSP is only required to publish a single root public key. The specific per-election keys are computed independently by all parties (CSP will derive its election private key and the election organizers will derive the election public key). To this end we use the following simple approach (G is the elliptic curve generator):

$PubKeyRoot = PrivKeyRoot * G$<br/>
$PrivKey2 = PrivkeyRoot + ProcessId$<br/>
$PubKey2 = PubKeyRoot + ProcessId$<br/>

Following this derivation, $PubKey2$ becomes the election public key. Thus, there is no way the CSP can share claims before the ProcessId is known and there is no way to reuse a CSP signature for a different election process.

![csp voting diagram](/img/docs/csp-voting.png)
### Known Problems

- There is a threat of a time correlation attack, by which the CSP could trace the timings of requesting signatures and submitting votes to de-anonymize a voter. 
*This could be solved using a delay mixnet (such as Nymtech)*

The SDK comes with an implementation of the common handler API of a CSP which is explained [here](https://github.com/vocdoni/blind-csp#api).

### Links

1. H. Mala, N. Nezhadansari, *"New Blind Signature Schemes Based on the (Elliptic Curve) Discrete Logarithm Problem"* [https://sci-hub.st/10.1109/iccke.2013.6682844](https://sci-hub.st/10.1109/iccke.2013.6682844) Implementation: [https://github.com/arnaucube/go-blindsecp256k1](https://github.com/arnaucube/go-blindsecp256k1)
2. *EC deterministic derivation key schema PoC implementation*
[https://github.com/p4u/go-eckey-derivation](https://github.com/p4u/go-eckey-derivation/blob/master/main.go)
3. CSP server implementation https://github.com/vocdoni/blind-csp