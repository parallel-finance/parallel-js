import definitions from '@polkadot/types/interfaces/runtime/definitions';
import { Definitions } from '@polkadot/types/types';

export default {
    rpc: {},
    types: {
        ...definitions.types,
    }
} as Definitions;
