/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';

import * as defaultDefinations from '@polkadot/types/interfaces/definitions';

import * as ormlDefinations from '@open-web3/orml-types/interfaces/definitions';

import * as parallelDefinations from '../src/interfaces/definitions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime, ...substrateDefinations } = defaultDefinations;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime: _runtime, ...ormlModulesDefinations } = ormlDefinations;

const definations = {
    '@polkadot/types/interfaces': substrateDefinations,
    '@open-web3/orml-types/interfaces': ormlModulesDefinations,
    '@parallel-js/types/interfaces': parallelDefinations
} as any;

generateTsDef(definations, 'packages/types/src/interfaces', '@parallel-js/types/interfaces');
