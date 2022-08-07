export default {
  rpc: {},
  types: {
    VaultPhase: {
      _enum: ['Pending', 'Contributing', 'Closed', 'Failed', 'Succeeded', 'Expired']
    },
    ContributionStrategy: {
      _enum: ['XCM', 'XCMPROXY']
    },
    ChildStorageKind: {
      _enum: ['Pending', 'Flying', 'Contributed']
    },
    TrieIndex: 'u32',
    LeasePeriod: 'BlockNumber',
    Vault: {
      ctoken: 'AssetId',
      phase: 'VaultPhase',
      contributed: 'Balance',
      pending: 'Balance',
      flying: 'Balance',
      contributionStrategy: 'ContributionStrategy',
      cap: 'Balance',
      endBlock: 'BlockNumber',
      trieIndex: 'TrieIndex',
      leaseStart: 'LeasePeriod',
      leaseEnd: 'LeasePeriod'
    }
  }
};
