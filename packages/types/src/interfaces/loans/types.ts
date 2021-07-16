// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, bool, u128 } from '@polkadot/types';

/** @name BorrowSnapshot */
export interface BorrowSnapshot extends Struct {
  readonly principal: Balance;
  readonly borrowIndex: u128;
}

/** @name CurrencyId */
export interface CurrencyId extends Enum {
  readonly isDot: boolean;
  readonly isKsm: boolean;
  readonly isUsdt: boolean;
  readonly isXDot: boolean;
  readonly isXKsm: boolean;
  readonly isNative: boolean;
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
}

/** @name JumpModel */
export interface JumpModel extends Struct {
  readonly baseRate: Rate;
  readonly jumpRate: Rate;
  readonly fullRate: Rate;
  readonly jumpUtilization: Ratio;
}

/** @name Market */
export interface Market extends Struct {
  readonly collateralFactor: Ratio;
  readonly reserveFactor: Ratio;
  readonly closeFactor: Ratio;
  readonly liquidateIncentive: Rate;
  readonly rateModel: InterestRateModel;
  readonly state: MarketState;
}

/** @name MarketState */
export interface MarketState extends Enum {
  readonly isActive: boolean;
  readonly isPending: boolean;
  readonly isSupervision: boolean;
}

export type PHANTOM_LOANS = 'loans';
