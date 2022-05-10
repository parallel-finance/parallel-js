export default {
  rpc: {
    getCollateralLiquidity: {
      description: 'Retrieves collateral liquidity for the given user.',
      params: [
        {
          name: 'account',
          type: 'AccountId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: '(Liquidity, Shortfall)',
      isSubscription: false,
      jsonrpc: 'loans_getCollateralLiquidity',
      method: 'getCollateralLiquidity',
      section: 'loans'
    },
    getLiquidationThresholdLiquidity: {
      description: 'Retrieves liquidation threshold liquidity for the given user.',
      params: [
        {
          name: 'account',
          type: 'AccountId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: '(Liquidity, Shortfall)',
      isSubscription: false,
      jsonrpc: 'loans_getLiquidationThresholdLiquidity',
      method: 'getLiquidationThresholdLiquidity',
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
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: '(Rate, Rate, Rate, Ratio, Balance, Balance, FixedU128)',
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
      liquidationThreshold: 'Ratio',
      reserveFactor: 'Ratio',
      closeFactor: 'Ratio',
      liquidateIncentive: 'Rate',
      liquidateIncentiveReservedFactor: 'Ratio',
      rateModel: 'InterestRateModel',
      state: 'MarketState',
      supplyCap: 'Balance',
      borrowCap: 'Balance',
      ptokenId: 'CurrencyId'
    },
    MarketState: {
      _enum: ['Active', 'Pending', 'Supervision']
    },
    RewardMarketState: {
      index: 'Balance',
      block: 'BlockNumber'
    },
    Liquidity: 'FixedU128',
    Shortfall: 'FixedU128'
  }
};
