// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AssetId, Balance, BlockNumber } from '@parallel-finance/types/interfaces/runtime';
import type { Struct } from '@polkadot/types-codec';

/** @name Pool */
export interface Pool extends Struct {
  readonly baseAmount: Balance;
  readonly quoteAmount: Balance;
  readonly rootKLast: Balance;
  readonly lpTokenId: AssetId;
  readonly blockTimestampLast: BlockNumber;
  readonly price0CumulativeLast: Balance;
  readonly price1CumulativeLast: Balance;
}

export type PHANTOM_AMM = 'amm';
