export default {
  rpc: {
    getBestRoute: {
      description: 'Returns the route that results in the largest amount out for amount in',
      params: [
        {
          name: 'amount_in',
          type: 'Balance'
        },
        {
          name: 'token_in',
          type: 'CurrencyId'
        },
        {
          name: 'token_out',
          type: 'CurrencyId'
        },
        {
          name: 'at',
          type: 'Option<BlockHash>'
        }
      ],
      type: '(Vec<CurrencyId>, Balance)',
      isSubscription: false,
      jsonrpc: 'router_getBestRoute',
      method: 'getBestRoute',
      section: 'router'
    }
  },
  types: {
    Route: 'Vec<(AssetId, AssetId)>'
  }
};
