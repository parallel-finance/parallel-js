# parallel-js

This library provides necessary types and JSON-RPC information for user to access Parallel Finance backend by using [polkadot.js](https://github.com/polkadot-js/api).

## Packages

- [api](./packages/api)
  - Contains necessary options to create a polkadot.js API instance
- [types](./packages/types)
  - Polkadot.js type definitions for Parallel Fanance

## Update metadata
Start a local node service on ws://localhost:9948
```
yarn
[ENDPOINT={ENDPOINT}] yarn update-metadata
```

## Build
```
yarn
yarn generate:defs
yarn generate:meta
yarn build
```

## Bump Version
```
./scripts/bump.sh 1.7.6
```

## Open Source Credits

We would like to thank the following projects.

-   [polkadot-js/api](https://github.com/polkadot-js/api)
-   [open-web3.js](https://github.com/open-web3-stack/open-web3.js)
-   [acala.js](https://github.com/AcalaNetwork/acala.js)
