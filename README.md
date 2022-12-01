# parallel-js

This library provides necessary types and JSON-RPC information for user to access Parallel Finance backend by using [polkadot.js](https://github.com/polkadot-js/api).

## Usage
1. Add this repo as dependencies

```bash
yarn add @parallel-finance/api

```

2. Import the `ApiPromise` from this package
```typescript
import { ApiPromise, options, WsProvider, Keyring } from "@parallel-finance/api" 

const main = async () => {
  const api = await ApiPromise.create(options({
    provider: new WsProvider()
  }))

  const keyring = new Keyring({ type: "sr25519" });
  const signer = keyring.addFromUri("//Alice")

  await api.tx.system.remark("hello").signAndSend(signer);
  
  const [route, amount] = await api.rpc.router.getBestRoute("10000000", 100, 1, true);
}

```

## Maintenance

- [api](./packages/api)
  - Contains necessary options to create a polkadot.js API instance
- [types](./packages/types)
  - Polkadot.js types  for Parallel Fanance
- [types-definitions](./packages/types-definitions)
  - Polkadot.js type definitions for Parallel Fanance

## Update metadata
Start a local node service on ws://localhost:9948
```
yarn
ENDPOINT=ws://localhost:9948 yarn update-metadata
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
# For patch update(eg: 0.0.1 -> 0.0.2)
yarn bump patch
# For minor update(eg: 0.1.0 -> 0.2.0)
yarn bump minor
# For major update(eg: 1.0.0 -> 2.0.0)
yarn bump major

```

## Open Source Credits

We would like to thank the following projects.

-   [polkadot-js/api](https://github.com/polkadot-js/api)
-   [open-web3.js](https://github.com/open-web3-stack/open-web3.js)
-   [acala.js](https://github.com/AcalaNetwork/acala.js)
