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
yarn update-metadata
```

## Build
```
yarn
curl -H "Content-Type: application/json" -d '{"id":"1", "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' http://localhost:9939 > ./custom-node-metadata.json
./node_modules/.bin/polkadot-types-from-chain --endpoint ws://localhost:9948 --output packages/types/src/interfaces
./node_modules/.bin/polkadot-types-from-defs --endpoint ./custom-node-metadata.json --input packages/types/src/interfaces --package @parallel-finance/types/interfaces
yarn build
```

## Open Source Credits

We would like to thank the following projects.

-   [polkadot-js/api](https://github.com/polkadot-js/api)
-   [open-web3.js](https://github.com/open-web3-stack/open-web3.js)
-   [acala.js](https://github.com/AcalaNetwork/acala.js)
