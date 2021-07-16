import { Definitions } from '@polkadot/types/types';

export default {
      rpc: {},
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
                  state: 'MarketState'
            },
            MarketState: {
                  _enum: ['Active', 'Pending', 'Supervision']
            }
      }
} as Definitions;
