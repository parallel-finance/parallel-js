import type { OverrideVersionedType } from '@polkadot/types/types';

const versioned: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      Address: "MultiAddress",
      LookupSource: "MultiAddress",
    },
  },
];

export default versioned;
