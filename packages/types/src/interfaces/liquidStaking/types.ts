// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option, Struct, u32 } from '@polkadot/types';
import type { Balance } from '@parallel-finance/types/interfaces/runtime';

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

/** @name UnstakeInfo */
export interface UnstakeInfo extends Struct {
  readonly amount: Balance;
  readonly blockNumber: u32;
  readonly eraIndex: Option<u32>;
}

export type PHANTOM_LIQUIDSTAKING = 'liquidStaking';
