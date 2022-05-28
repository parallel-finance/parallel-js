// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AccountId, Balance } from '@parallel-finance/types/interfaces/runtime';
import type { Struct, Vec, u16 } from '@polkadot/types-codec';
import type { EraIndex } from '@polkadot/types/interfaces/staking';

/** @name DerivativeIndex */
export interface DerivativeIndex extends u16 {}

/** @name MatchingLedger */
export interface MatchingLedger extends Struct {
  readonly totalStakeAmount: ReservableAmount;
  readonly totalUnstakeAmount: ReservableAmount;
}

/** @name ReservableAmount */
export interface ReservableAmount extends Struct {
  readonly total: Balance;
  readonly reserved: Balance;
}

/** @name StakingLedger */
export interface StakingLedger extends Struct {
  readonly stash: AccountId;
  readonly total: Balance;
  readonly active: Balance;
  readonly unlocking: Vec<UnlockChunk>;
  readonly claimedRewards: Vec<EraIndex>;
}

/** @name UnlockChunk */
export interface UnlockChunk extends Struct {
  readonly value: Balance;
  readonly era: EraIndex;
}

export type PHANTOM_LIQUIDSTAKING = 'liquidStaking';
