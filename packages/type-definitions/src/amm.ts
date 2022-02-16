export default {
  rpc: {},
  types: {
    Pool: {
      baseAmount: 'Balance',
      quoteAmount: 'Balance',
      rootKLast: 'Balance',
      lpTokenId: 'AssetId',
      blockTimestampLast: 'BlockNumber',
      price0CumulativeLast: 'Balance',
      price1CumulativeLast: 'Balance'
    }
  }
};
