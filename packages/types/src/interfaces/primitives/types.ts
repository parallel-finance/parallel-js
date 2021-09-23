// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { i128, u64 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { Price } from '@open-web3/orml-types/interfaces/traits';
import type { AssetId, FixedU128, Permill } from '@parallel-finance/types/interfaces/runtime';

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
