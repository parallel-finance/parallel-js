export default {
  rpc: {},
  types: {
    Amount: 'i128',
    AmountOf: 'Amount',
    Rate: 'FixedU128',
    Ratio: 'Permill',
    Timestamp: 'u64',
    PriceDetail: '(Price, Timestamp)',
    CurrencyId: {
      _enum: ['DOT', 'KSM', 'USDT', 'xDOT', 'xKSM', 'HKO', 'PARA']
    },
    CurrencyIdOf: 'CurrencyId',
    Currency: 'CurrencyId',
    PriceWithDecimal: {
      price: 'Price',
      decimal: 'u8'
    }
  }
};
