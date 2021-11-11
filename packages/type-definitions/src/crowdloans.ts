export default {
  rpc: {},
  types: {
    VaultPhase: {
      _enum: ['CollectingContributions', 'Closed', 'Failed', 'Expired']
    },
    ContributionStrategy: {
      _enum: ['XCM', 'XCMWithProxy']
    },
    Vault: {
      ctoken: 'CurrencyId',
      phase: 'VaultPhase',
      contributionStrategy: 'ContributionStrategy',
      contributed: 'Balance'
    }
  }
};
