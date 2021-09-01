export default {
  rpc: {},
  types: {
    UnstakeInfo: {
      amount: 'Balance',
      blockNumber: 'u32',
      eraIndex: 'Option<u32>'
    },
    StakingSettlementKind: {
      _enum: ['Reward', 'Slash']
    },
    MatchingLedger: {
      totalStakeAmount: 'Balance',
      totalUnstakeAmount: 'Balance'
    }
  }
};
