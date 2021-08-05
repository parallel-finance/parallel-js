export default {
  rpc: {},
  types: {
    OracleKey: 'CurrencyId',
    OracleValue: 'PriceWithDecimal',
    TimestampedValue: {
      value: "OracleValue",
      timestamp: "Moment"
    },
    TimestampedValueOf: 'TimestampedValue'
  }
};
