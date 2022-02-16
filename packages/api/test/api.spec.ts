import { jest } from '@jest/globals';
import { options } from '@parallel-finance/api';
import { ApiPromise, WsProvider } from '@polkadot/api';

describe('parallel online test', () => {
  let api: ApiPromise;

  beforeAll(async () => {
    jest.setTimeout(30000);

    process.env.NODE_ENV = 'test';

    const provider = new WsProvider('wss://heiko-rpc.parallel.fi');
    api = await ApiPromise.create(
      options({
        types: {
          TAssetBalance: 'Balance'
        },
        provider
      })
    );
  });

  afterAll(async () => {
    api && (await api.disconnect());
  });

  it('should fetch metadata', async () => {
    console.log(api.consts.liquidStaking.palletId.toHuman());
  });

  it.skip('should decode evnets', async () => {
    const head = await api.rpc.chain.getBlockHash();
    await api.query.system.events.at(head);
  });
});
