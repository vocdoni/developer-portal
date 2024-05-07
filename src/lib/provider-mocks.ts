import {Wallet} from '@ethersproject/wallet';
import {
  ElectionResultsTypeNames,
  ElectionStatusReady,
  EnvOptions,
  IElectionInfoResponse,
  VocdoniSDKClient,
} from '@vocdoni/sdk';
import {HttpResponse, http} from 'msw';

/**
 * This file contains mock request responses used for the ui-components documentation.
 * Request interception is done with Mock Service Workers (static/workers/mockServiceWorker.js)
 * New mock workers must be added to src/theme/layout.ts which starts the mock service workers
 *  before the react-live panes render.
 */

export const electionId =
  '4be20a8eb4caa2f2508be2538decb9648bd9fab41f1d5a549a42020000000000';
// Election ID for mock election using 'spreadsheet' csp census
// Election ID for mock election using 'spreadsheet' csp census
export const spreadsheetElectionId =
  '6be20a8eb4ca923f171c6502a404112ad06c05491f859949633e020000000003';

export const organizationId = 'a2f2508be2538decb9648bd9fab41f1d5a549a42';

const signer = new Wallet(
  '0x51129d8e9e17f740997687a7e15d60642cb2fe33565e17823859fae5fd72d3cb'
);

export const client = new VocdoniSDKClient({
  env: EnvOptions.STG,
  wallet: signer,
  electionId: electionId,
});

const cspCensus = {
  censusOrigin: 'OFF_CHAIN_CA',
  censusRoot:
    '025de8cb8de1005aa939c1403e37e1fa165ebc758da49cb37215c6237d01591104',
  postRegisterCensusRoot: '',
  censusURL: 'https://csp-dev-simplemath.vocdoni.net/v1',
  maxCensusSize: 2000,
  size: 1,
};

const mockElection = (id, {census = null, metaCensus = null} = {}) => {
  const election: IElectionInfoResponse = {
    electionId: id,
    organizationId: organizationId,
    status: ElectionStatusReady.READY,
    startDate: '2024-04-12T15:18:09Z',
    endDate: '2027-04-12T15:19:44Z',
    voteCount: 0,
    finalResults: false,
    result: [['23', '300']],
    manuallyEnded: false,
    fromArchive: false,
    chainId: 'vocdoni/STAGE/11',
    census: census ?? {
      censusOrigin: 'OFF_CHAIN_TREE_WEIGHTED',
      censusRoot:
        '7412677fec3de360c31899b5204a76b95f05d93131320e829376312bacbb6a14',
      postRegisterCensusRoot: '',
      censusURL:
        'ipfs://bafybeihj4hjmdmgxdcdmplnfm7gnhvlcpyphr3pgcchnhpz4emnmls5br4',
      maxCensusSize: 1,
      size: 1,
    },
    metadataURL:
      'ipfs://bafybeia6vwrynwrkkkw2zhozchvxxobblk3mipquann37ztzijnvzagi2m',
    creationTime: '2024-04-12T15:17:59Z',
    voteMode: {
      serial: false,
      anonymous: false,
      encryptedVotes: false,
      uniqueValues: false,
      costFromWeight: false,
    },
    electionMode: {
      autoStart: true,
      interruptible: true,
      dynamicCensus: false,
      encryptedMetaData: false,
      preRegister: false,
    },
    tallyMode: {
      maxCount: 1,
      maxValue: 1,
      maxVoteOverwrites: 0,
      maxTotalCost: 0,
      costExponent: 1,
    },
    metadata: {
      title: {default: 'Election title'},
      version: '1.2',
      description: {default: 'Election description'},
      media: {header: 'https://source.unsplash.com/random/800x400'},
      meta: {
        sdk: {version: '0.7.5'},
        census: metaCensus === null ? undefined : metaCensus,
      },
      questions: [
        {
          choices: [
            {title: {default: 'Option 1'}, value: 0},
            {title: {default: 'Option 2'}, value: 1},
          ],
          description: {default: 'This is a description'},
          title: {default: 'This is a title'},
        },
      ],
      type: {
        name: ElectionResultsTypeNames.SINGLE_CHOICE_MULTIQUESTION,
        properties: {},
      },
    },
  };
  return election;
};

export const mockAccountService = http.get(
  client.url + '/accounts/:id',
  ({params}) => {
    const id = params.id as string;
    return HttpResponse.json({
      address: id,
      nonce: 0,
      balance: 9999,
      electionIndex: 0,
      infoURL:
        'ipfs://bafybeif5mbhhwuju2pyd54bxhn3tdsj6m5cukx6f5xvchqfh2wvzkpbjpy',
      metadata: {
        version: '1.0',
        languages: ['en'],
        name: {default: 'Account name'},
        description: {default: 'Description of the account'},
        newsFeed: {default: ''},
        media: {
          logo: 'https://source.unsplash.com/random/400x400',
          header: 'https://source.unsplash.com/random/800x400',
        },
        meta: {},
      },
      sik: 'd5f382daca25f43ca46f629e6fa7b0a448f1c69c48fcb2031feee0bf439d502c',
    });
  }
);

export const mockElectionService = http.get(
  client.url + '/elections/:id',
  ({params}) => {
    const id = params.id as string;
    if (id === spreadsheetElectionId) {
      const metaCensus = {
        fields: ['firstname', 'lastname', 'email'],
        type: 'spreadsheet',
      };
      return HttpResponse.json(
        mockElection(id, {census: cspCensus, metaCensus: metaCensus})
      );
    }
    return HttpResponse.json(mockElection(id));
  }
);

export const mockTransactionService = http.post(
  client.url + '/chain/transactions',
  () => {
    return HttpResponse.json({
      hash: 'd59c08ef32a57e2fd18041dd6d4a871d06ebe4fe91449be9f034269d80cc9de8',
      code: 0,
    });
  }
);

export const mockTransactionReferenceService = http.get(
  client.url + '/chain/transactions/reference/:id',
  ({params}) => {
    return HttpResponse.json({
      transactionNumber: 13615,
      transactionHash: params.id,
      blockHeight: 489898,
      transactionIndex: 1,
      transactionType: 'setProcess',
    });
  }
);

export const mockCensusService = http.get(
  client.url + '/censuses/:id/proof/:proof',
  ({params}) => {
    return HttpResponse.json({
      type: 'weighted',
      weight: '1',
      censusRoot: params.id,
      censusProof: '04000000',
      value: '0100000000000000000000000000000000000000000000000000000000000000',
    });
  }
);

export const mockCensusTypeService = http.get(
  client.url + '/censuses/:id/type',
  () => {
    return HttpResponse.json({type: 'weighted'});
  }
);

export const mockCensusSizeService = http.get(
  client.url + '/censuses/:id/size',
  () => {
    return HttpResponse.json({size: '10'});
  }
);
export const mockCensusWeightService = http.get(
  client.url + '/censuses/:id/weight',
  () => {
    return HttpResponse.json({weight: '10'});
  }
);

export const mockVoteService = http.get(
  client.url + '/votes/:id',
  ({params}) => {
    return new HttpResponse('No vote cast', {status: 404});
  }
);
