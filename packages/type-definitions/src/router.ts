export default {
  rpc: {
    getBestRoute: {
      description: 'Returns the route that results in the largest amount out for amount in',
      params: [
        {
          name: 'amount',
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
          name: 'reversed',
          type: 'bool'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: '(Vec<CurrencyId>, FixedU128)',
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
