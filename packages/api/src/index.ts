import type { ApiOptions } from '@polkadot/api/types';
import { derive as ormlDerives } from '@open-web3/orml-api-derive';
import {
  rpc as parallelRpc,
  types as parallelTypes,
  typesAlias as parallelTypesAlias,
  typesBundle as parallelTypesBundle,
  signedExtensions as parallelSignedExtensions
} from '@parallel-finance/types';

export const defaultOptions: ApiOptions = {
  types: parallelTypes,
  rpc: parallelRpc
};

export const options = ({
  types = {},
  rpc = {},
  typesAlias = {},
  typesBundle = {},
  signedExtensions,
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  types: {
    TAssetBalance: 'u128',
    ...parallelTypes,
    ...types
  },
  rpc: {
    ...parallelRpc,
    ...rpc
  },
  typesAlias: {
    ...parallelTypesAlias,
    ...typesAlias
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  derives: {
    ...ormlDerives
  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      parallel: {
        ...parallelTypesBundle?.spec?.parallel,
        ...typesBundle?.spec?.parallel
      }
    }
  },
  signedExtensions: {
    ...parallelSignedExtensions,
    ...signedExtensions
  },
  ...otherOptions
});

export * from '@polkadot/api';
