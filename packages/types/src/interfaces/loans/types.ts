// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { CurrencyId, Rate, Ratio } from '@parallel-finance/types/interfaces/primitives';
import type { Balance, BlockNumber, FixedU128 } from '@parallel-finance/types/interfaces/runtime';
import type { Enum, Struct, bool, u128 } from '@polkadot/types-codec';

/** @name BorrowSnapshot */
export interface BorrowSnapshot extends Struct {
  readonly principal: Balance;
  readonly borrowIndex: u128;
}

/** @name CurveModel */
export interface CurveModel extends Struct {
  readonly baseRate: Rate;
}

/** @name Deposits */
export interface Deposits extends Struct {
  readonly voucherBalance: Balance;
  readonly isCollateral: bool;
}

/** @name EarnedSnapshot */
export interface EarnedSnapshot extends Struct {
  readonly totalEarnedPrior: Balance;
  readonly exchangeRatePrior: u128;
}

/** @name InterestRateModel */
export interface InterestRateModel extends Enum {
  readonly isJumpModel: boolean;
  readonly asJumpModel: JumpModel;
  readonly isCurveModel: boolean;
  readonly asCurveModel: CurveModel;
  readonly type: 'JumpModel' | 'CurveModel';
}

/** @name JumpModel */
export interface JumpModel extends Struct {
  readonly baseRate: Rate;
  readonly jumpRate: Rate;
  readonly fullRate: Rate;
  readonly jumpUtilization: Ratio;
}

/** @name Liquidity */
export interface Liquidity extends FixedU128 {}

/** @name Market */
export interface Market extends Struct {
  readonly collateralFactor: Ratio;
  readonly liquidationThreshold: Ratio;
  readonly reserveFactor: Ratio;
  readonly closeFactor: Ratio;
  readonly liquidateIncentive: Rate;
  readonly liquidateIncentiveReservedFactor: Ratio;
  readonly rateModel: InterestRateModel;
  readonly state: MarketState;
  readonly supplyCap: Balance;
  readonly borrowCap: Balance;
  readonly ptokenId: CurrencyId;
}

/** @name MarketState */
export interface MarketState extends Enum {
  readonly isActive: boolean;
  readonly isPending: boolean;
  readonly isSupervision: boolean;
  readonly type: 'Active' | 'Pending' | 'Supervision';
}

/** @name RewardMarketState */
export interface RewardMarketState extends Struct {
  readonly index: Balance;
  readonly block: BlockNumber;
}

/** @name Shortfall */
export interface Shortfall extends FixedU128 {}

export type PHANTOM_LOANS = 'loans';
