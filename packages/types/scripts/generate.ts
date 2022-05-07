/* eslint-disable */
// @ts-nocheck

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
import { Metadata } from '@polkadot/types';
import { TypeRegistry } from '@polkadot/types/create';
import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';
import {
  generateDefaultLookup,
  generateDefaultConsts,
  generateDefaultQuery,
  generateDefaultErrors,
  generateDefaultEvents,
  generateDefaultRpc,
  generateDefaultTx
} from '@polkadot/typegen/generate';
import { result as metadata } from '../src/metadata/static-latest.json';

import * as defaultDefinations from '@polkadot/types/interfaces/definitions';

import * as ormlDefinations from '@open-web3/orml-types/interfaces/definitions';

import * as parallelDefinations from '../src/interfaces/definitions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime, ...substrateDefinations } = defaultDefinations;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let { runtime: _runtime, ...ormlModulesDefinations } = ormlDefinations;
delete ormlModulesDefinations.rewards;
delete ormlModulesDefinations.__esModule;

const definations = {
  '@polkadot/types/interfaces': substrateDefinations,
  '@open-web3/orml-types/interfaces': ormlModulesDefinations,
  '@parallel-finance/types/interfaces': parallelDefinations
} as any;

const customLookupDefinitions = {
  rpc: {},
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
  types: require('../src/interfaces/lookup.ts').default
} as Definitions;
//
// generateTsDef(definations, 'packages/types/src/interfaces', '@parallel-finance/types/interfaces');
// generateInterfaceTypes(definations, 'packages/types/src/interfaces/augment-types.ts');
//
// generateDefaultConsts(
//   'packages/types/src/interfaces/augment-api-consts.ts',
//   metadata,
//   definations,
//   false,
//   customLookupDefinitions
// );
// generateDefaultTx(
//   'packages/types/src/interfaces/augment-api-tx.ts',
//   metadata,
//   definations,
//   false,
//   customLookupDefinitions
// );
// generateDefaultQuery(
//   'packages/types/src/interfaces/augment-api-query.ts',
//   metadata,
//   definations,
//   false,
//   customLookupDefinitions
// );
// generateDefaultRpc('packages/types/src/interfaces/augment-api-rpc.ts', definations);
// generateDefaultErrors('packages/types/src/interfaces/augment-api-errors.ts', metadata, definations, false);
// generateDefaultEvents(
//   'packages/types/src/interfaces/augment-api-events.ts',
//   metadata,
//   definations,
//   false,
//   customLookupDefinitions
// );
