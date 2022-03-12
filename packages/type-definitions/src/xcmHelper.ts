export default {
  rpc: {},
  types: {
    XcmWeightFeeMisc: {
      weight: 'Weight',
      fee: 'Balance'
    },
    XcmCall: {
      _enum: [
        'Bond',
        'BondExtra',
        'Unbond',
        'Rebond',
        'WithdrawUnbonded',
        'Nominate',
        'Contribute',
        'Withdraw',
        'AddMemo'
      ]
    }
  }
};
