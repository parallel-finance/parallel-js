export default {
  rpc: {
    getAccountLiquidity: {
      description: 'Retrieves the oracle value for a given key.',
      params: [
        {
          name: 'account',
          type: 'AccountId'
        },
        {
          name: 'at',
          type: 'Option<Block>'
        }
      ],
      type: '(Liquidity, Shortfall)',
      isSubscription: false,
      jsonrpc: 'loans_getAccountLiquidity',
      method: 'getAccountLiquidity',
      section: 'loans'
    }
  },
  types: {
    Deposits: {
      voucherBalance: 'Balance',
      isCollateral: 'bool'
    },
    BorrowSnapshot: {
      principal: 'Balance',
      borrowIndex: 'u128'
    },
    EarnedSnapshot: {
      totalEarnedPrior: 'Balance',
      exchangeRatePrior: 'u128'
    },
    JumpModel: {
      baseRate: 'Rate',
      jumpRate: 'Rate',
      fullRate: 'Rate',
      jumpUtilization: 'Ratio'
    },
    CurveModel: {
      baseRate: 'Rate'
    },
    InterestRateModel: {
      _enum: {
        JumpModel: 'JumpModel',
        CurveModel: 'CurveModel'
      }
    },
    Market: {
      collateralFactor: 'Ratio',
      reserveFactor: 'Ratio',
      closeFactor: 'Ratio',
      liquidateIncentive: 'Rate',
      rateModel: 'InterestRateModel',
      state: 'MarketState',
      cap: 'Balance',
      ptokenId: 'CurrencyId'
    },
    MarketState: {
      _enum: ['Active', 'Pending', 'Supervision']
    },
    Liquidity: 'FixedU128',
    Shortfall: 'FixedU128',
    ValidatorInfo: {
      name: 'Option<Text>',
      address: 'AccountId',
      stakes: 'u128',
      score: 'u128'
    },
    ValidatorSet: 'Vec<ValidatorInfo>'
  }
};
