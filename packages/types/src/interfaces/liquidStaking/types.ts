// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Balance } from '@parallel-finance/types/interfaces/runtime';
import type { Struct } from '@polkadot/types-codec';

/** @name MatchingLedger */
export interface MatchingLedger extends Struct {
  readonly totalStakeAmount: Balance;
  readonly totalUnstakeAmount: Balance;
}

export type PHANTOM_LIQUIDSTAKING = 'liquidStaking';
