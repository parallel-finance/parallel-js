export default {
  rpc: {},
  types: {
    BoundedBalance: 'BoundedVec<(Balance, BlockNumber), u32>',
    PoolInfo: {
      isActive: 'bool',
      totalSupply: 'Balance',
      lockDuration: 'BlockNumber',
      duration: 'BlockNumber',
      periodFinish: 'BlockNumber',
      lastUpdateBlock: 'BlockNumber',
      rewardRate: 'Balance',
      rewardPerShareStored: 'Balance'
    },
    UserPosition: {
      depositBalance: 'Balance',
      lockBalanceItems: 'BoundedBalance',
      rewardAmount: 'Balance',
      rewardPerSharePaid: 'Balance'
    }
  }
};
