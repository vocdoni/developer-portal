module.exports = [
  {type: 'doc', id: 'vocdoni-api/vocdoni-api'},
  {
    type: 'category',
    label: 'Chain',
    link: {type: 'doc', id: 'vocdoni-api/chain'},
    items: [
      {
        type: 'doc',
        id: 'vocdoni-api/estimate-block-to-date',
        label: 'Estimate block to date',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/get-block-by-hash',
        label: 'Get block (by hash)',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/get-block-by-height',
        label: 'Get block (by height)',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/transactions-in-a-block',
        label: 'Transactions in a block',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/estimate-date-to-block',
        label: 'Estimate date to block',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/vochain-information',
        label: 'Vochain information',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/circuit-info',
        label: 'Circuit info',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/price-factors-information',
        label: 'Price factors information',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/count-organizations',
        label: 'Count organizations',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-organizations-filtered',
        label: 'List organizations (filtered)',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-organizations',
        label: 'List organizations',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/submit-transaction',
        label: 'Submit transaction',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/transaction-costs',
        label: 'Transaction costs',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/transactions-count',
        label: 'Transactions count',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-transactions',
        label: 'List Transactions',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/transaction-by-index',
        label: 'Transaction by index',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/transaction-by-hash',
        label: 'Transaction by hash',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/transaction-by-block-height-and-index',
        label: 'Transaction by block height and index',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-validators',
        label: 'List validators',
        className: 'api-method get'
      }
    ]
  },
  {
    type: 'category',
    label: 'Accounts',
    link: {type: 'doc', id: 'vocdoni-api/accounts'},
    items: [
      {
        type: 'doc',
        id: 'vocdoni-api/set-account',
        label: 'Set account',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/total-number-of-accounts',
        label: 'Total number of accounts',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-of-the-existing-accounts',
        label: 'List of the existing accounts',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-account-token-fees',
        label: 'List account token fees',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/total-number-of-sent-and-received-transactions',
        label: 'Total number of sent and received transactions',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-account-received-and-sent-token-transfers',
        label: 'List account received and sent token transfers',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/get-account',
        label: 'Get account',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/get-account',
        label: 'Get account',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/count-organization-elections',
        label: 'Count organization elections',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-organization-elections',
        label: 'List organization elections',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-organization-elections-by-status',
        label: 'List organization elections by status',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-all-token-fees',
        label: 'List all token fees',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-all-token-fees-by-reference',
        label: 'List all token fees by reference',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-all-token-fees-by-type',
        label: 'List all token fees by type',
        className: 'api-method get'
      }
    ]
  },
  {
    type: 'category',
    label: 'Elections',
    link: {type: 'doc', id: 'vocdoni-api/elections'},
    items: [
      {
        type: 'doc',
        id: 'vocdoni-api/create-election',
        label: 'Create election',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-elections-filtered',
        label: 'List elections (filtered)',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/get-next-election-id',
        label: 'Get next election ID',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-elections',
        label: 'List elections',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/compute-election-price',
        label: 'Compute election price',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/election-information',
        label: 'Election information',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-encryption-keys',
        label: 'List encryption keys',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/election-results',
        label: 'Election results',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/count-election-votes',
        label: 'Count election votes',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-election-votes',
        label: 'List election votes',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/compute-ipfs-ci-dv-1-of-file',
        label: 'Compute IPFS CIDv1 of file',
        className: 'api-method post'
      }
    ]
  },
  {
    type: 'category',
    label: 'Censuses',
    link: {type: 'doc', id: 'vocdoni-api/censuses'},
    items: [
      {
        type: 'doc',
        id: 'vocdoni-api/export-census-database',
        label: 'Export census database',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/import-census-database',
        label: 'Import census database',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-all-census-references',
        label: 'List all census references',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/delete-census',
        label: 'Delete census',
        className: 'api-method delete'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/export-census',
        label: 'Export census',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/import-census',
        label: 'Import census',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/add-participants-to-census',
        label: 'Add participants to census',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/prove-key-to-census',
        label: 'Prove key to census',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/publish-census',
        label: 'Publish census',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/publish-census-at-root',
        label: 'Publish census at root',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/census-merkle-root',
        label: 'Census Merkle Root',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/census-size',
        label: 'Census size',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/get-type-of-census',
        label: 'Get type of census',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/verify-merkle-proof',
        label: 'Verify merkle proof',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/census-total-weight',
        label: 'Census total weight',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/create-a-new-census',
        label: 'Create a new census',
        className: 'api-method post'
      }
    ]
  },
  {
    type: 'category',
    label: 'Votes',
    link: {type: 'doc', id: 'vocdoni-api/votes'},
    items: [
      {
        type: 'doc',
        id: 'vocdoni-api/submit-a-vote',
        label: 'Submit a vote',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/verify-vote',
        label: 'Verify vote',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/get-vote',
        label: 'Get vote',
        className: 'api-method get'
      }
    ]
  },
  {
    type: 'category',
    label: 'Wallet',
    link: {type: 'doc', id: 'vocdoni-api/wallet'},
    items: [
      {
        type: 'doc',
        id: 'vocdoni-api/add-account',
        label: 'Add account',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/set-wallet-account',
        label: 'Set wallet account',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/create-election-for-wallet',
        label: 'Create election for wallet',
        className: 'api-method post'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/transfer-tokens',
        label: 'Transfer tokens',
        className: 'api-method get'
      }
    ]
  },
  {
    type: 'category',
    label: 'SIK',
    link: {type: 'doc', id: 'vocdoni-api/sik'},
    items: [
      {
        type: 'doc',
        id: 'vocdoni-api/list-of-valid-sik-roots',
        label: 'List of valid SIK roots',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/list-of-valid-sik-roots',
        label: 'List of valid SIK roots',
        className: 'api-method get'
      },
      {
        type: 'doc',
        id: 'vocdoni-api/returns-if-the-address-provided-has-a-valid-sik',
        label: 'Returns if the address provided has a valid SIK',
        className: 'api-method get'
      }
    ]
  },
  {
    type: 'category',
    label: 'Indexer',
    items: [
      {
        type: 'doc',
        id: 'vocdoni-api/exports-the-indexer-database',
        label: 'Exports the indexer database',
        className: 'api-method get'
      }
    ]
  }
]
