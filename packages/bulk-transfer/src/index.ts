import { ApiPromise } from '@polkadot/api';
import type { AddressOrPair } from '@polkadot/api/types';
import type { Vec } from '@polkadot/types';
import type { Call } from '@polkadot/types/interfaces';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const bulkTransfer = async (
  api: ApiPromise,
  sender: AddressOrPair,
  recipients: Array<any>,
  amounts: Array<any>
) => {
  const txs = [];
  if (recipients.length !== amounts.length) {
    throw Error('recipient length does not match with amount set length to send');
  }
  // build txs
  for (let i = 0; i < recipients.length; i++) {
    const tx = api.tx.balances.transfer(recipients[i], amounts[i]);
    txs.push(tx);
  }
  const unsub = await api.tx.utility.batch(txs as unknown as Vec<Call>).signAndSend(sender, (result) => {
    if (result.status.isInBlock) {
      console.log(`included in ${result.status.asInBlock}`);
    } else if (result.status.isFinalized) {
      console.log(`included in ${result.status.asFinalized}`);
      unsub();
    }
  });
  // Leave this out as we are not sure if api is still needs to be connected
  // await api.disconnect();
};
