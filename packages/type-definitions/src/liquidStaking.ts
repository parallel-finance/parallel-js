export default {
  rpc: {},
  types: {
    StakingSettlementKind: {
      _enum: ['Reward', 'Slash']
    },
    MatchingLedger: {
      totalStakeAmount: 'Balance',
      totalUnstakeAmount: 'Balance'
    }
  }
};
