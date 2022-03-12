export default {
  rpc: {},
  types: {
    MatchingLedger: {
      totalStakeAmount: 'Balance',
      totalUnstakeAmount: 'Balance'
    },
    UnlockChunk: {
      value: 'Balance',
      era: 'EraIndex'
    },
    StakingLedger: {
      stash: 'AccountId',
      total: 'Balance',
      active: 'Balance',
      unlocking: 'Vec<UnlockChunk>',
      claimedRewards: 'Vec<EraIndex>'
    },
    DerivativeIndex: 'u16'
  }
};
