import { ApiPromise } from '@polkadot/api';
import { AddressOrPair } from '@polkadot/api/types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createStream = async (
  api: ApiPromise,
  sender: AddressOrPair,
  recipient: string,
  deposit: string | number,
  currencyId: string | number,
  startTime: number,
  stopTime: number
): Promise<any> => {
  const tx = api.tx.stream.createStream(recipient, deposit, currencyId, startTime, stopTime);
  const unsub = await tx.signAndSend(sender, (result) => {
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
export const cancelStream = async (api: ApiPromise, sender: AddressOrPair, streamId: number): Promise<any> => {
  const tx = api.tx.stream.cancelStream(streamId);
  const unsub = await tx.signAndSend(sender, (result) => {
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
export const withdrawFromStream = async (
  api: ApiPromise,
  sender: AddressOrPair,
  streamId: number,
  amount: string | number
): Promise<any> => {
  const tx = api.tx.stream.withdrawFromStream(streamId, amount);
  const unsub = await tx.signAndSend(sender, (result) => {
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
