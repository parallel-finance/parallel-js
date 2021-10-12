// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Vec } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AssetId } from '@parallel-finance/types/interfaces/runtime';

/** @name Route */
export interface Route extends Vec<ITuple<[AssetId, AssetId]>> {}

export type PHANTOM_ROUTER = 'router';
