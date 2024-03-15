# Data Schemes

When it comes to voting processes, there are two main types of data storage at the protocol-level: protocol-level data stored **on the [Vochain](/protocol#11-the-blockchain)** and readable metadata like election descriptions stored on **[IPFS](/protocol#13-distributed-storage)**. 

## Protocol Data

Protocol data is data that is published directly to the blockchain and determines how election, votes, and organizations behave. Much of the protocol data is defined by Protobuf-encoded packages sent in blockchain transactions. 

## Metadata

Metadata is typically human-readable data that is important but does not ***define*** how an election behaves at a protocol level. Metadata is represented as a JSON file that conforms to a specific schema. This data is typically retrieved using a P2P storage system like IPFS, with an immutable URI and hash of that data stored on the blockchain to ensure it cannot be tampered with.