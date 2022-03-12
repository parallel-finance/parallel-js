// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Balance, BlockNumber } from '@parallel-finance/types/interfaces/runtime';
import type { Struct, Vec, bool } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

/** @name BoundedBalance */
export interface BoundedBalance extends Vec<ITuple<[Balance, BlockNumber]>> {}

/** @name PoolInfo */
export interface PoolInfo extends Struct {
  readonly isActive: bool;
  readonly totalDeposited: Balance;
  readonly lockDuration: BlockNumber;
  readonly duration: BlockNumber;
  readonly periodFinish: BlockNumber;
  readonly lastUpdateBlock: BlockNumber;
  readonly rewardRate: Balance;
  readonly rewardPerShareStored: Balance;
}

/** @name UserPosition */
export interface UserPosition extends Struct {
  readonly depositBalance: Balance;
  readonly lockBalanceItems: BoundedBalance;
  readonly rewardAmount: Balance;
  readonly rewardPerSharePaid: Balance;
}

export type PHANTOM_FARMING = 'farming';
