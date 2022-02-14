// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Balance } from '@parallel-finance/types/interfaces/runtime';
import type { Struct } from '@polkadot/types';

/** @name PoolLiquidityAmount */
export interface PoolLiquidityAmount extends Struct {
  readonly baseAmount: Balance;
  readonly quoteAmount: Balance;
  readonly ownership: Balance;
}

export type PHANTOM_ROUTER = 'router';
