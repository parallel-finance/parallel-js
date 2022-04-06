# @parallel-finance/stream

Api lib for executing stream pallet

## Usage

```
import { ApiPromise, WsProvider } from '@parallel-finance/api';
import { Keyring } from "@polkadot/keyring";
import { bulkTransfer } from "@parallel-finance/bulk-transfer";
import "dotenv/config";

async function usage() {
  const provider = new WsProvider('wss://heiko-rpc.parallel.fi');
  const api = await ApiPromise.create(
    options({
      types: {
        TAssetBalance: 'Balance'
      },
      provider
    })
  );
  const keyring = new Keyring();
  const sender = keyring.addFromUri(process.env.mnemonic!, { name: 'bulk transfer test' }, 'sr25519');
  const recipients = [
    'stAZnJwXAvRRo884Anfu2in9SBB6tssvcsjBAZnvnVn53krpP',
    'st8p7os56kbysAKCxRjC1PeUyobEP8b94sQkBbmeWSc2GJzEt'
  ];
  const amounts = ['1000', '1000'];
  await bulkTransfer(api, sender, recipients, amounts);
  api.disconnect();
}

await usage();
```