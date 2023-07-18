import {
    Account,
    AccountData,
    Census, CensusTypeEnum, ElectionStatus, IElectionInfoResponse,
    PublishedCensus,
    PublishedElection
} from "@vocdoni/sdk";

/**
 * On this file you will find mocks used on ui-components documentation
 */

const orgAddr = "f752b527e2aba395d1ba4c0de9c1471234567890";

const headerUrl = 'https://picsum.photos/seed/{seed}/1400/300';

export const mockedOrganization: AccountData = {
    address: orgAddr,
    balance: 0,
    nonce: 123,
    electionIndex: 13,
    account: new Account({
        languages: [
            'en'
        ],
        name: 'Awesome Organization',
        description: 'Description of Awesome organization',
        header: headerUrl.replace('{seed}', orgAddr),
        avatar: `https://picsum.photos/seed/${orgAddr}/300`,
        meta: []
    })
}

const electionId = `c5d2460186f7${orgAddr}020000000000`;

// curl https://api-dev.vocdoni.net/v2/elections/c5d2460186f79b821aa92de2efc28ad6391fede437a92ce696d1020000000000  -s | jq
const rawElection: IElectionInfoResponse = {
    electionCount: 0,
    electionId: electionId,
    organizationId: "9b821aa92de2efc28ad6391fede437a92ce696d1",
    status: ElectionStatus.RESULTS,
    startDate: "2023-06-27T03:01:10.621236881Z",
    endDate: "2023-07-17T05:49:16.598037746Z",
    voteCount: 8,
    finalResults: true,
    result: [
        [
            "80",
            "0",
            "0"
        ]
    ],
    census: {
        censusOrigin: CensusTypeEnum.OFF_CHAIN_TREE_WEIGHTED,
        censusRoot: "31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a",
        postRegisterCensusRoot: "",
        censusURL: "http://localhost:8080/census",
        // maxCensusSize: 12
    },
    metadataURL: "ipfs://bafybeieo6pbbqvd4qhcsk4pdrv53tdkrdmtbjl273cumel27jurotdgszi",
    creationTime: "2023-06-27T03:01:00Z",
    voteMode: {
        serial: false,
        anonymous: false,
        encryptedVotes: false,
        uniqueValues: false,
        costFromWeight: false
    },
    electionMode: {
        autoStart: true,
        interruptible: true,
        dynamicCensus: true,
        encryptedMetaData: false,
        preRegister: false
    },
    tallyMode: {
        maxCount: 1,
        maxValue: 2,
        maxVoteOverwrites: 0,
        maxTotalCost: 2,
        costExponent: 10000
    },
    // metadata: undefined
    metadata: {
        title: {
            default: "My awesome election"
        },
        version: "1.1",
        description: {
            default: "My awesome election description"
        },
        media: {
            header: headerUrl.replace('{seed}', electionId)
        },
        questions: [
            {
                choices: [
                    {
                        title: {
                            default: "Yes"
                        },
                        value: 0
                    },
                    {
                        title: {
                            default: "No"
                        },
                        value: 1
                    },
                ],
                description: {
                    default: "Test question 1 description"
                },
                title: {
                    default: "Test question 1"
                }
            }
        ],
        results: {
            aggregation: 'discrete-counting',
            display: 'multiple-choice'
        },
        meta: undefined,
    }
}

export const mockedElection: PublishedElection = PublishedElection.build({
    census: new PublishedCensus(
        rawElection.census.censusRoot,
        rawElection.census.censusURL,
        Census.censusTypeFromCensusOrigin(rawElection.census.censusOrigin),
        4, // curl https://api-dev.vocdoni.net/v2/censuses/31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a/size  -s | jq
        BigInt("40") // curl https://api-dev.vocdoni.net/v2/censuses/31755e98a4b7f6d0be2bb4071f05d45bbdb1c7871d37b1f93eb39d248d88ec9a/weight  -s | jq
    ),
    creationTime: rawElection.creationTime,
    electionCount: 0,
    endDate: rawElection.endDate,
    finalResults: rawElection.finalResults,
    id: rawElection.electionId,
    metadataURL: rawElection.metadataURL,
    organizationId: rawElection.organizationId,
    raw: rawElection,
    results: rawElection.result,
    status: rawElection.status,
    title: rawElection.metadata.title,
    description: rawElection.metadata.description,
    voteCount: rawElection.voteCount,
    header: rawElection.metadata.media.header,
    questions: rawElection.metadata.questions,
    startDate: rawElection.startDate,
    voteType: rawElection.voteMode,
    electionType:{
        autoStart: rawElection.electionMode.autoStart,
        interruptible: rawElection.electionMode.interruptible,
        dynamicCensus: rawElection.electionMode.dynamicCensus,
        secretUntilTheEnd: rawElection.voteMode.encryptedVotes,
        anonymous:  rawElection.voteMode.anonymous,
    }
})

