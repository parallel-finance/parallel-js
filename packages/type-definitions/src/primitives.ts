export default {
  rpc: {},
  types: {
    Amount: 'i128',
    AmountOf: 'Amount',
    Rate: 'FixedU128',
    Ratio: 'Permill',
    Timestamp: 'u64',
    PriceDetail: '(Price, Timestamp)',
    CurrencyId: 'AssetId',
    CurrencyIdOf: 'CurrencyId',
    Currency: 'CurrencyId',
    AssetIdOf: 'AssetId'
  }
};
