export default {
  rpc: {},
  types: {
    SwapType: {
      _enum: ['Buy', 'Sell']
    },
    AmountEvaluation: {
      accountAmount: 'Balance',
      poolAmount: 'Balance'
    },
    PoolLiquidityAmount: {
      baseAmount: 'Balance',
      quoteAmount: 'Balance',
      ownership: 'Balance'
    }
  }
};
