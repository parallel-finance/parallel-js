// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AssetId, FixedU128, Permill, Price } from '@parallel-finance/types/interfaces/runtime';
import type { i128, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

/** @name Amount */
export interface Amount extends i128 {}

/** @name AmountOf */
export interface AmountOf extends Amount {}

/** @name AssetIdOf */
export interface AssetIdOf extends AssetId {}

/** @name Currency */
export interface Currency extends CurrencyId {}

/** @name CurrencyId */
export interface CurrencyId extends AssetId {}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name PriceDetail */
export interface PriceDetail extends ITuple<[Price, Timestamp]> {}

/** @name Rate */
export interface Rate extends FixedU128 {}

/** @name Ratio */
export interface Ratio extends Permill {}

/** @name Timestamp */
export interface Timestamp extends u64 {}

export type PHANTOM_PRIMITIVES = 'primitives';
