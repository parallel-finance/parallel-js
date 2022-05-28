export default {
  rpc: {},
  types: {
    ReservableAmount: {
      total: 'Balance',
      reserved: 'Balance'
    },
    MatchingLedger: {
      totalStakeAmount: 'ReservableAmount',
      totalUnstakeAmount: 'ReservableAmount'
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
