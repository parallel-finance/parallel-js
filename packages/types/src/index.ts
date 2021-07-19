import {
    typesBundle as parallelTypesBundle,
    types as parallelTypes,
    typesAlias as parallelTypeAlias,
    rpc as parallelRpc,
    signedExtensions as parallelSignedExtensions
} from '@parallel-js/type-definitions';
import {
    OverrideBundleType,
    OverrideModuleType,
    RegistryTypes,
    DefinitionRpc,
    DefinitionRpcSub
} from '@polkadot/types/types';

import './interfaces/augment-api';
import './interfaces/augment-api-consts';
import './interfaces/augment-api-query';
import './interfaces/augment-api-rpc';
import './interfaces/augment-api-tx';
import './interfaces/augment-types';

export * from './interfaces/augment-api-mobx';

export const types: RegistryTypes = parallelTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = parallelRpc;

export const typesAlias: Record<string, OverrideModuleType> = parallelTypeAlias;

export const typesBundle = (parallelTypesBundle as unknown) as OverrideBundleType;

export const signedExtensions = parallelSignedExtensions;
