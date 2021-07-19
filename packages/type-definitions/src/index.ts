/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { OverrideVersionedType } from '@polkadot/types/types';
import { rpc as ormlRpc, types as ormlTypes, typesAlias as ormlAlias } from '@open-web3/orml-type-definitions';
import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';

import { signedExtensions as parallelSignedExtensions } from './signedExtensions';

import liquidStaking from './liquidStaking';
import loans from './loans';
import prices from './prices';
import primitives from './primitives';
import runtime from './runtime';

import parallelVersioned from './spec/parallel';

const parallelDefs = {
  liquidStaking,
  loans,
  prices,
  primitives,
  runtime
};

export const types = {
  ...ormlTypes,
  ...typesFromDefs(parallelDefs)
};

export const rpc = jsonrpcFromDefs(parallelDefs, { ...ormlRpc });
export const typesAlias = typesAliasFromDefs(parallelDefs, { ...ormlAlias });

function getBundle(versioned: OverrideVersionedType[]) {
  return {
    rpc,
    instances: {
      council: ['generalCouncil']
    },
    types: [...versioned].map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...types,
          ...version.types
        }
      };
    }),
    alias: typesAlias
  };
}

export const typesBundle = {
  spec: {
    parallel: getBundle(parallelVersioned)
  }
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    parallel: getBundle(parallelVersioned)
  }
};

export const signedExtensions = parallelSignedExtensions;
