export default {
  rpc: {},
  types: {
    ValidatorInfo: {
      name: 'Option<Text>',
      address: 'AccountId',
      stakes: 'u128',
      score: 'u128'
    },
    ValidatorSet: 'Vec<ValidatorInfo>'
  }
};
