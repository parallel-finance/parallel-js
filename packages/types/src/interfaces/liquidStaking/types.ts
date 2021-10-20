// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Balance } from '@parallel-finance/types/interfaces/runtime';
import type { Enum, Struct } from '@polkadot/types';

/** @name MatchingLedger */
export interface MatchingLedger extends Struct {
  readonly totalStakeAmount: Balance;
  readonly totalUnstakeAmount: Balance;
}

/** @name StakingSettlementKind */
export interface StakingSettlementKind extends Enum {
  readonly isReward: boolean;
  readonly isSlash: boolean;
}

export type PHANTOM_LIQUIDSTAKING = 'liquidStaking';
