import {
  typesBundle as parallelTypesBundle,
  types as parallelTypes,
  typesAlias as parallelTypeAlias,
  rpc as parallelRpc,
  signedExtensions as parallelSignedExtensions
} from '@parallel-finance/type-definitions';
import type {
  OverrideBundleType,
  OverrideModuleType,
  RegistryTypes,
  DefinitionRpc,
  DefinitionRpcSub
} from '@polkadot/types/types';

import './interfaces/augment-api';
import './interfaces/augment-api-runtime';
import './interfaces/augment-api-consts';
import './interfaces/augment-api-events';
import './interfaces/augment-api-query';
import './interfaces/augment-api-rpc';
import './interfaces/augment-api-tx';
import './interfaces/augment-types';
import './interfaces/types-lookup';

export const types: RegistryTypes = parallelTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = parallelRpc;

export const typesAlias: Record<string, OverrideModuleType> = parallelTypeAlias;

export const typesBundle = parallelTypesBundle as unknown as OverrideBundleType;

export const signedExtensions = parallelSignedExtensions;

export * from '@polkadot/types';
