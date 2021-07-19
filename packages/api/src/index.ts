import {ApiOptions} from '@polkadot/api/types';
import {derive as ormlDerives} from '@open-web3/orml-api-derive';
import {
    rpc as parallelRpc,
    types as parallelTypes,
    typesAlias as parallelTypesAlias,
    typesBundle as parallelTypesBundle,
    signedExtensions as parallelSignedExtensions
} from '@parallel-js/types';

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
            },
        }
    },
    signedExtensions: {
        ...parallelSignedExtensions,
        ...signedExtensions
    },
    ...otherOptions
});
