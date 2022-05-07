/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

import fs from 'fs';
import { w3cwebsocket as WebSocket } from 'websocket';

const main = (): void => {
  const endpoint = 'wss://rpc.parallel.fi';
  console.log('Connecting to ', endpoint);
  const ws = new WebSocket(endpoint);
  ws.onopen = (): void => {
    ws.send('{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}');
  };
  ws.onmessage = (msg: any): void => {
    fs.writeFileSync('packages/types/src/metadata/static-latest.json', msg.data);
    console.log('Done');
    process.exit(0);
  };
};

main();
