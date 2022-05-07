// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AssetId } from '@parallel-finance/types/src/interfaces/runtime';
import type { Vec } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

/** @name Route */
export interface Route extends Vec<ITuple<[AssetId, AssetId]>> {}

export type PHANTOM_ROUTER = 'router';
