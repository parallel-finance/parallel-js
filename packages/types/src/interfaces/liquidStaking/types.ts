// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Option, Struct, u32 } from '@polkadot/types';
import type { Balance } from '@parallel-js/types/interfaces/runtime';

/** @name UnstakeInfo */
export interface UnstakeInfo extends Struct {
  readonly amount: Balance;
  readonly blockNumber: u32;
  readonly eraIndex: Option<u32>;
}

export type PHANTOM_LIQUIDSTAKING = 'liquidStaking';
