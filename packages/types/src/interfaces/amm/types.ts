// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct } from '@polkadot/types';
import type { Balance } from '@parallel-finance/types/interfaces/runtime';

/** @name AmountEvaluation */
export interface AmountEvaluation extends Struct {
  readonly accountAmount: Balance;
  readonly poolAmount: Balance;
}

/** @name PoolLiquidityAmount */
export interface PoolLiquidityAmount extends Struct {
  readonly baseAmount: Balance;
  readonly quoteAmount: Balance;
  readonly ownership: Balance;
}

/** @name SwapType */
export interface SwapType extends Enum {
  readonly isBuy: boolean;
  readonly isSell: boolean;
}

export type PHANTOM_AMM = 'amm';
