export default {
  rpc: {},
  types: {
    Pool: {
      baseAmount: 'Balance',
      quoteAmount: 'Balance',
      baseAmountLast: 'Balance',
      quoteAmountLast: 'Balance',
      lpTokenId: 'AssetId',
      blockTimestampLast: 'BlockNumber',
      price0CumulativeLast: 'Balance',
      price1CumulativeLast: 'Balance'
    }
  }
};
