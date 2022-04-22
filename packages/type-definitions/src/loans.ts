export default {
  rpc: {
    getAccountLiquidity: {
      description: 'Retrieves account liquidity for the given user.',
      params: [
        {
          name: 'account',
          type: 'AccountId'
        },
        {
          name: 'at',
          type: 'Option<Block>',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: '(Liquidity, Shortfall)',
      isSubscription: false,
      jsonrpc: 'loans_getAccountLiquidity',
      method: 'getAccountLiquidity',
      section: 'loans'
    },
    getMarketStatus: {
      description: 'Retrieves market status data for a given asset id.',
      params: [
        {
          name: 'asset_id',
          type: 'CurrencyId'
        },
        {
          name: 'at',
          type: 'Option<Block>',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: '(Rate, Rate, Rate, Ratio, u128, u128, FixedU128)',
      isSubscription: false,
      jsonrpc: 'loans_getMarketStatus',
      method: 'getMarketStatus',
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
      supplyCap: 'Balance',
      borrowCap: 'Balance',
      ptokenId: 'CurrencyId'
    },
    MarketState: {
      _enum: ['Active', 'Pending', 'Supervision']
    },
    Liquidity: 'FixedU128',
    Shortfall: 'FixedU128'
  }
};
