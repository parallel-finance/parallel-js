export default {
  rpc: {},
  types: {
    BridgeToken: {
      id: 'CurrencyId',
      external: 'bool',
      fee: 'Balance'
    },
    ProposalStatus: {
      _enum: ['Initiated', 'Approved', 'Rejected']
    }
  }
};
