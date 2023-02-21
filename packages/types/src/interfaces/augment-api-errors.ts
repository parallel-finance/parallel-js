// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    amm: {
      /**
       * Conversion failure to u128
       **/
      ConversionToU128Failed: AugmentedError<ApiType>;
      /**
       * Identical assets
       **/
      IdenticalAssets: AugmentedError<ApiType>;
      /**
       * Insufficient amount in
       **/
      InsufficientAmountIn: AugmentedError<ApiType>;
      /**
       * Insufficient amount out
       **/
      InsufficientAmountOut: AugmentedError<ApiType>;
      /**
       * Insufficient liquidity
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Insufficient supply out.
       **/
      InsufficientSupplyOut: AugmentedError<ApiType>;
      /**
       * LP token has already been minted
       **/
      LpTokenAlreadyExists: AugmentedError<ApiType>;
      /**
       * Not an ideal price ratio
       **/
      NotAnIdealPrice: AugmentedError<ApiType>;
      /**
       * Pool does not exist
       **/
      PoolAlreadyExists: AugmentedError<ApiType>;
      /**
       * Pool does not exist
       **/
      PoolDoesNotExist: AugmentedError<ApiType>;
      /**
       * Protocol fee receiver not set
       **/
      ProtocolFeeReceiverNotSet: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ammRoute: {
      /**
       * Input duplicated route
       **/
      DuplicatedRoute: AugmentedError<ApiType>;
      /**
       * Must input one route at least
       **/
      EmptyRoute: AugmentedError<ApiType>;
      /**
       * Exceed the max length of routes we allow
       **/
      ExceedMaxLengthRoute: AugmentedError<ApiType>;
      /**
       * User hasn't enough tokens for transaction
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * A more specific UnexpectedSlippage when trading exact amount out
       **/
      MaximumAmountInViolated: AugmentedError<ApiType>;
      /**
       * A more specific UnexpectedSlippage when trading exact amount in
       **/
      MinimumAmountOutViolated: AugmentedError<ApiType>;
      /**
       * Route between tokens is not possible
       **/
      NoPossibleRoute: AugmentedError<ApiType>;
      /**
       * Token doesn't exists in all pools
       **/
      TokenDoesNotExists: AugmentedError<ApiType>;
      /**
       * Input balance must not be zero
       **/
      ZeroBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    assetRegistry: {
      AssetAlreadyExists: AugmentedError<ApiType>;
      AssetDoesNotExist: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    assets: {
      /**
       * The asset-account already exists.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * Invalid metadata given.
       **/
      BadMetadata: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      BalanceLow: AugmentedError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      MinBalanceZero: AugmentedError<ApiType>;
      /**
       * The account to alter does not exist.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * The asset-account doesn't have an associated deposit.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Unable to increment the consumer reference counters on the account. Either no provider
       * reference exists to allow a non-zero balance of a non-self-sufficient asset, or the
       * maximum number of consumers has been reached.
       **/
      NoProvider: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * The operation would result in funds being burned.
       **/
      WouldBurn: AugmentedError<ApiType>;
      /**
       * The source account would not survive the transfer and it needs to stay alive.
       **/
      WouldDie: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    authorship: {
      /**
       * The uncle is genesis.
       **/
      GenesisUncle: AugmentedError<ApiType>;
      /**
       * The uncle parent not in the chain.
       **/
      InvalidUncleParent: AugmentedError<ApiType>;
      /**
       * The uncle isn't recent enough to be included.
       **/
      OldUncle: AugmentedError<ApiType>;
      /**
       * The uncle is too high in chain.
       **/
      TooHighUncle: AugmentedError<ApiType>;
      /**
       * Too many uncles.
       **/
      TooManyUncles: AugmentedError<ApiType>;
      /**
       * The uncle is already included.
       **/
      UncleAlreadyIncluded: AugmentedError<ApiType>;
      /**
       * Uncles already set in the block.
       **/
      UnclesAlreadySet: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bridge: {
      /**
       * The bridging amount is exceed the capacity
       **/
      BridgeInCapExceeded: AugmentedError<ApiType>;
      /**
       * The bridging amount is exceed the capacity
       **/
      BridgeOutCapExceeded: AugmentedError<ApiType>;
      /**
       * The bridge token is invalid, it cannot be a existed bridge_token_id
       **/
      BridgeTokenAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * The bridge token is not available in cross-chain
       **/
      BridgeTokenDisabled: AugmentedError<ApiType>;
      /**
       * The bridge token is not registered and the related operation will be invalid
       **/
      BridgeTokenNotRegistered: AugmentedError<ApiType>;
      /**
       * The bridging amount is too low
       **/
      BridgingAmountTooLow: AugmentedError<ApiType>;
      /**
       * The chain_id is invalid, it cannot be a existed chain_id or this chain_id
       **/
      ChainIdAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * The chain_id is not registered and the related operation will be invalid
       **/
      ChainIdNotRegistered: AugmentedError<ApiType>;
      /**
       * The new threshold is invalid
       **/
      InvalidVoteThreshold: AugmentedError<ApiType>;
      /**
       * The RelayMembers already vote for the proposal
       **/
      MemberAlreadyVoted: AugmentedError<ApiType>;
      /**
       * Origin has no permission to operate on the bridge
       **/
      OriginNoPermission: AugmentedError<ApiType>;
      /**
       * Proposal has been finished
       **/
      ProposalAlreadyComplete: AugmentedError<ApiType>;
      /**
       * No proposal was found
       **/
      ProposalDoesNotExist: AugmentedError<ApiType>;
      /**
       * The proposal has exceeded its life time.
       **/
      ProposalExpired: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bridgeMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    collatorSelection: {
      /**
       * User is already a candidate
       **/
      AlreadyCandidate: AugmentedError<ApiType>;
      /**
       * User is already an Invulnerable
       **/
      AlreadyInvulnerable: AugmentedError<ApiType>;
      /**
       * Account has no associated validator ID
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * User is not a candidate
       **/
      NotCandidate: AugmentedError<ApiType>;
      /**
       * Permission issue
       **/
      Permission: AugmentedError<ApiType>;
      /**
       * Too few candidates
       **/
      TooFewCandidates: AugmentedError<ApiType>;
      /**
       * Too many candidates
       **/
      TooManyCandidates: AugmentedError<ApiType>;
      /**
       * Too many invulnerables
       **/
      TooManyInvulnerables: AugmentedError<ApiType>;
      /**
       * Unknown error
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * Validator ID is not yet registered
       **/
      ValidatorNotRegistered: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    crowdloans: {
      /**
       * Attempted contribution violates contribution cap
       **/
      CapExceeded: AugmentedError<ApiType>;
      /**
       * Crowdloan ParaId already exists
       **/
      CrowdloanAlreadyExists: AugmentedError<ApiType>;
      /**
       * CToken does not exist
       **/
      CTokenDoesNotExist: AugmentedError<ApiType>;
      /**
       * Proxy address is empty
       **/
      EmptyProxyAddress: AugmentedError<ApiType>;
      /**
       * Current relay block is greater than vault end block
       **/
      EndBlockExceeded: AugmentedError<ApiType>;
      /**
       * Vault is not in correct phase
       **/
      IncorrectVaultPhase: AugmentedError<ApiType>;
      /**
       * Balance is not enough
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Contribution is not enough
       **/
      InsufficientContribution: AugmentedError<ApiType>;
      /**
       * Capacity cannot be zero value
       **/
      InvalidCap: AugmentedError<ApiType>;
      /**
       * CToken for provided (leaseStart, leaseEnd) is different with what has been created previously
       **/
      InvalidCToken: AugmentedError<ApiType>;
      /**
       * Invalid params input
       **/
      InvalidParams: AugmentedError<ApiType>;
      /**
       * Last lease period must be greater than first lease period.
       **/
      LastPeriodBeforeFirstPeriod: AugmentedError<ApiType>;
      /**
       * There are no contributions stored in contributed childstorage
       **/
      NoContributions: AugmentedError<ApiType>;
      /**
       * Vault is not ready to be dissolved
       **/
      NotReadyToDissolve: AugmentedError<ApiType>;
      /**
       * Vault already exists
       **/
      VaultAlreadyExists: AugmentedError<ApiType>;
      /**
       * Vault does not exist
       **/
      VaultDoesNotExist: AugmentedError<ApiType>;
      /**
       * Vault for provided ParaId not ended
       **/
      VaultNotEnded: AugmentedError<ApiType>;
      /**
       * No contributions allowed during the VRF delay
       **/
      VrfDelayInProgress: AugmentedError<ApiType>;
      /**
       * BonusConfig is wrong
       **/
      WrongBonusConfig: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    crowdloansAutomatorsMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    cumulusXcm: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    currencyAdapter: {
      /**
       * Not a native token
       **/
      NotANativeToken: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Maximum number of items reached.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Voting period too low
       **/
      VotingPeriodLow: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dmpQueue: {
      /**
       * The amount of weight given is possibly not enough for executing the message.
       **/
      OverLimit: AugmentedError<ApiType>;
      /**
       * The message index given is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ethereum: {
      /**
       * Signature is invalid.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Pre-log is present, therefore transact is not allowed.
       **/
      PreLogExists: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    evm: {
      /**
       * Not enough balance to perform action
       **/
      BalanceLow: AugmentedError<ApiType>;
      /**
       * Calculating total fee overflowed
       **/
      FeeOverflow: AugmentedError<ApiType>;
      /**
       * Gas limit is too high.
       **/
      GasLimitTooHigh: AugmentedError<ApiType>;
      /**
       * Gas limit is too low.
       **/
      GasLimitTooLow: AugmentedError<ApiType>;
      /**
       * Gas price is too low.
       **/
      GasPriceTooLow: AugmentedError<ApiType>;
      /**
       * Nonce is invalid
       **/
      InvalidNonce: AugmentedError<ApiType>;
      /**
       * Calculating total payment overflowed
       **/
      PaymentOverflow: AugmentedError<ApiType>;
      /**
       * EVM reentrancy
       **/
      Reentrancy: AugmentedError<ApiType>;
      /**
       * Undefined error.
       **/
      Undefined: AugmentedError<ApiType>;
      /**
       * Withdraw fee failed
       **/
      WithdrawFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    evmSignatureCall: {
      /**
       * Bad nonce parameter.
       **/
      BadNonce: AugmentedError<ApiType>;
      /**
       * Signature decode fails.
       **/
      DecodeFailure: AugmentedError<ApiType>;
      /**
       * Signature and account mismatched.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    farming: {
      /**
       * Codec error
       **/
      CodecError: AugmentedError<ApiType>;
      /**
       * Deposit Balance must be greater than or equal to the withdraw amount
       **/
      DepositBalanceLow: AugmentedError<ApiType>;
      /**
       * Excess max cool down duration for pool
       **/
      ExcessMaxCoolDownDuration: AugmentedError<ApiType>;
      /**
       * Excess max lock duration for lock pool
       **/
      ExcessMaxLockDuration: AugmentedError<ApiType>;
      /**
       * Excess max user lock item count
       **/
      ExcessMaxUserLockItemsCount: AugmentedError<ApiType>;
      /**
       * Not a valid amount
       **/
      NotAValidAmount: AugmentedError<ApiType>;
      /**
       * Not a valid duration
       **/
      NotAValidDuration: AugmentedError<ApiType>;
      /**
       * Pool associacted with asset already exists
       **/
      PoolAlreadyExists: AugmentedError<ApiType>;
      /**
       * Pool does not exist
       **/
      PoolDoesNotExist: AugmentedError<ApiType>;
      /**
       * Pool is already in desire status
       **/
      PoolInStatus: AugmentedError<ApiType>;
      /**
       * Pool is in a target cool down duration status
       **/
      PoolIsInTargetCoolDownDuration: AugmentedError<ApiType>;
      /**
       * Pool is not active
       **/
      PoolIsNotActive: AugmentedError<ApiType>;
      /**
       * Pool is in lock status, withdraw is not allowed.
       **/
      PoolUnderLock: AugmentedError<ApiType>;
      /**
       * Last reward is not finish
       **/
      RewardNotFinish: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    generalCouncil: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    generalCouncilMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The provided judgement was for a different identity.
       **/
      JudgementForDifferentIdentity: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    liquidStaking: {
      /**
       * Stash is already bonded.
       **/
      AlreadyBonded: AugmentedError<ApiType>;
      /**
       * Exceeded liquid currency's market cap
       **/
      CapExceeded: AugmentedError<ApiType>;
      /**
       * Cannot have a nominator role with value less than the minimum defined by
       * `MinNominatorBond`
       **/
      InsufficientBond: AugmentedError<ApiType>;
      /**
       * Invalid market cap
       **/
      InvalidCap: AugmentedError<ApiType>;
      /**
       * Invalid commission rate
       **/
      InvalidCommissionRate: AugmentedError<ApiType>;
      /**
       * Invalid derivative index
       **/
      InvalidDerivativeIndex: AugmentedError<ApiType>;
      /**
       * Exchange rate is invalid.
       **/
      InvalidExchangeRate: AugmentedError<ApiType>;
      /**
       * The factor should be bigger than 0% and smaller than 100%
       **/
      InvalidFactor: AugmentedError<ApiType>;
      /**
       * Invalid liquid currency
       **/
      InvalidLiquidCurrency: AugmentedError<ApiType>;
      /**
       * The merkle proof is invalid
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Invalid staking currency
       **/
      InvalidStakingCurrency: AugmentedError<ApiType>;
      /**
       * Invalid staking ledger
       **/
      InvalidStakingLedger: AugmentedError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      NoMoreChunks: AugmentedError<ApiType>;
      /**
       * Stash wasn't bonded yet
       **/
      NotBonded: AugmentedError<ApiType>;
      /**
       * Nothing to claim yet
       **/
      NothingToClaim: AugmentedError<ApiType>;
      /**
       * Not withdrawn unbonded yet
       **/
      NotWithdrawn: AugmentedError<ApiType>;
      /**
       * No unlocking items
       **/
      NoUnlockings: AugmentedError<ApiType>;
      /**
       * The stake was below the minimum, `MinStake`.
       **/
      StakeTooSmall: AugmentedError<ApiType>;
      /**
       * Staking ledger is locked due to mutation in notification_received
       **/
      StakingLedgerLocked: AugmentedError<ApiType>;
      /**
       * The unstake was below the minimum, `MinUnstake`.
       **/
      UnstakeTooSmall: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    liquidStakingAgentsMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    loans: {
      /**
       * Upper bound of borrowing is exceeded
       **/
      BorrowCapacityExceeded: AugmentedError<ApiType>;
      /**
       * Codec error
       **/
      CodecError: AugmentedError<ApiType>;
      /**
       * Collateral is reserved and cannot be liquidated
       **/
      CollateralReserved: AugmentedError<ApiType>;
      /**
       * Deposits are not used as a collateral
       **/
      DepositsAreNotCollateral: AugmentedError<ApiType>;
      /**
       * Asset already enabled/disabled collateral
       **/
      DuplicateOperation: AugmentedError<ApiType>;
      /**
       * Insufficient cash in the pool
       **/
      InsufficientCash: AugmentedError<ApiType>;
      /**
       * Repay amount more than collateral amount
       **/
      InsufficientCollateral: AugmentedError<ApiType>;
      /**
       * Insufficient deposit to redeem
       **/
      InsufficientDeposit: AugmentedError<ApiType>;
      /**
       * Insufficient liquidity to borrow more or disable collateral
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Insufficient reserves
       **/
      InsufficientReserves: AugmentedError<ApiType>;
      /**
       * Insufficient shortfall to repay
       **/
      InsufficientShortfall: AugmentedError<ApiType>;
      /**
       * Amount cannot be zero
       **/
      InvalidAmount: AugmentedError<ApiType>;
      /**
       * Invalid asset id
       **/
      InvalidCurrencyId: AugmentedError<ApiType>;
      /**
       * The exchange rate should be greater than 0.02 and less than 1
       **/
      InvalidExchangeRate: AugmentedError<ApiType>;
      /**
       * The factor should be greater than 0% and less than 100%
       **/
      InvalidFactor: AugmentedError<ApiType>;
      /**
       * Invalid ptoken id
       **/
      InvalidPtokenId: AugmentedError<ApiType>;
      /**
       * Invalid rate model params
       **/
      InvalidRateModelParam: AugmentedError<ApiType>;
      /**
       * The supply cap cannot be zero
       **/
      InvalidSupplyCap: AugmentedError<ApiType>;
      /**
       * Liquidator is same as borrower
       **/
      LiquidatorIsBorrower: AugmentedError<ApiType>;
      /**
       * Market already exists
       **/
      MarketAlreadyExists: AugmentedError<ApiType>;
      /**
       * Market does not exist
       **/
      MarketDoesNotExist: AugmentedError<ApiType>;
      /**
       * Market not activated
       **/
      MarketNotActivated: AugmentedError<ApiType>;
      /**
       * New markets must have a pending state
       **/
      NewMarketMustHavePendingState: AugmentedError<ApiType>;
      /**
       * No deposit asset
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * Payer cannot be signer
       **/
      PayerIsSigner: AugmentedError<ApiType>;
      /**
       * Oracle price is zero
       **/
      PriceIsZero: AugmentedError<ApiType>;
      /**
       * Oracle price not ready
       **/
      PriceOracleNotReady: AugmentedError<ApiType>;
      /**
       * Upper bound of supplying is exceeded
       **/
      SupplyCapacityExceeded: AugmentedError<ApiType>;
      /**
       * Repay amount greater than allowed
       **/
      TooMuchRepay: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    oracle: {
      /**
       * Feeder has already feeded at this block
       **/
      AlreadyFeeded: AugmentedError<ApiType>;
      /**
       * Sender does not have permission
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    oracleMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ormlXcm: {
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * The message and destination was recognized as being reachable but
       * the operation could not be completed.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * The message and destination combination was not recognized as being
       * reachable.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parachainSystem: {
      /**
       * The inherent which supplies the host configuration did not run this block
       **/
      HostConfigurationNotAvailable: AugmentedError<ApiType>;
      /**
       * No code upgrade has been authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * No validation function upgrade is currently scheduled.
       **/
      NotScheduled: AugmentedError<ApiType>;
      /**
       * Attempt to upgrade validation function while existing upgrade pending
       **/
      OverlappingUpgrades: AugmentedError<ApiType>;
      /**
       * Polkadot currently prohibits this parachain from upgrading its validation function
       **/
      ProhibitedByPolkadot: AugmentedError<ApiType>;
      /**
       * The supplied validation function has compiled into a blob larger than Polkadot is
       * willing to run
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * The given code upgrade has not been authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * The inherent which supplies the validation data did not run this block
       **/
      ValidationDataNotAvailable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    polkadotXcm: {
      /**
       * The location is invalid since it already has a subscription from us.
       **/
      AlreadySubscribed: AugmentedError<ApiType>;
      /**
       * The given location could not be used (e.g. because it cannot be expressed in the
       * desired version of XCM).
       **/
      BadLocation: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `MultiLocation` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * The assets to be sent are empty.
       **/
      Empty: AugmentedError<ApiType>;
      /**
       * The message execution fails the filter.
       **/
      Filtered: AugmentedError<ApiType>;
      /**
       * Origin is invalid for sending.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * The referenced subscription could not be found.
       **/
      NoSubscription: AugmentedError<ApiType>;
      /**
       * There was some other issue (i.e. not to do with routing) in sending the message. Perhaps
       * a lack of space for buffering the message.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * Too many assets have been attempted for transfer.
       **/
      TooManyAssets: AugmentedError<ApiType>;
      /**
       * The desired destination was unreachable, generally because there is a no way of routing
       * to it.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    streaming: {
      /**
       * Stream cannot be cancelled
       **/
      CannotBeCancelled: AugmentedError<ApiType>;
      /**
       * Insufficient deposit size
       **/
      DepositLowerThanMinimum: AugmentedError<ApiType>;
      /**
       * End time is before start time
       **/
      EndTimeBeforeStartTime: AugmentedError<ApiType>;
      /**
       * Excess max streams count
       **/
      ExcessMaxStreamsCount: AugmentedError<ApiType>;
      /**
       * Stream was cancelled or completed
       **/
      HasFinished: AugmentedError<ApiType>;
      /**
       * Amount exceeds balance
       **/
      InsufficientStreamBalance: AugmentedError<ApiType>;
      /**
       * Asset is not supported to create stream
       **/
      InvalidAssetId: AugmentedError<ApiType>;
      /**
       * The duration calculated is too short or too long
       **/
      InvalidDuration: AugmentedError<ApiType>;
      /**
       * The rate per second calculated is zero
       **/
      InvalidRatePerSecond: AugmentedError<ApiType>;
      /**
       * The stream id is not found
       **/
      InvalidStreamId: AugmentedError<ApiType>;
      /**
       * Stream not started
       **/
      NotStarted: AugmentedError<ApiType>;
      /**
       * Caller is not the stream recipient
       **/
      NotTheRecipient: AugmentedError<ApiType>;
      /**
       * Caller is not the stream sender
       **/
      NotTheSender: AugmentedError<ApiType>;
      /**
       * Sender as specified themselves as the recipient
       **/
      RecipientIsAlsoSender: AugmentedError<ApiType>;
      /**
       * Start time is before current block time
       **/
      StartTimeBeforeCurrentTime: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCommitteeMembership: {
      /**
       * Already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Too many members.
       **/
      TooManyMembers: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * The spend origin is valid but the amount it is allowed to spend is lower than the
       * amount to be spent.
       **/
      InsufficientPermission: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * The vested transfer amount is too low
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * Insufficient amount of balance to lock
       **/
      InsufficientBalanceToLock: AugmentedError<ApiType>;
      /**
       * Failed because the maximum vesting schedules was exceeded
       **/
      MaxVestingSchedulesExceeded: AugmentedError<ApiType>;
      /**
       * This account have too many vesting schedules
       **/
      TooManyVestingSchedules: AugmentedError<ApiType>;
      /**
       * Vesting period is zero
       **/
      ZeroVestingPeriod: AugmentedError<ApiType>;
      /**
       * Number of vests is zero
       **/
      ZeroVestingPeriodCount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xcmHelper: {
      /**
       * Can not convert account success
       **/
      ConvertAccountError: AugmentedError<ApiType>;
      /**
       * Insufficient xcm fees
       **/
      InsufficientXcmFees: AugmentedError<ApiType>;
      /**
       * `MultiLocation` value ascend more parents than known ancestors of local location.
       **/
      MultiLocationNotInvertible: AugmentedError<ApiType>;
      /**
       * The message and destination was recognized as being reachable but
       * the operation could not be completed.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * Xcm fees cannot be zero
       **/
      ZeroXcmFees: AugmentedError<ApiType>;
      /**
       * XcmWeightMisc cannot have zero value
       **/
      ZeroXcmWeightMisc: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xcmpQueue: {
      /**
       * Bad overweight index.
       **/
      BadOverweightIndex: AugmentedError<ApiType>;
      /**
       * Bad XCM data.
       **/
      BadXcm: AugmentedError<ApiType>;
      /**
       * Bad XCM origin.
       **/
      BadXcmOrigin: AugmentedError<ApiType>;
      /**
       * Failed to send XCM message.
       **/
      FailedToSend: AugmentedError<ApiType>;
      /**
       * Provided weight is possibly not enough to execute the message.
       **/
      WeightOverLimit: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xTokens: {
      /**
       * Asset has no reserve location.
       **/
      AssetHasNoReserve: AugmentedError<ApiType>;
      /**
       * The specified index does not exist in a MultiAssets struct.
       **/
      AssetIndexNonExistent: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the
       * destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `MultiLocation` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * We tried sending distinct asset and fee but they have different
       * reserve chains.
       **/
      DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
      /**
       * Fee is not enough.
       **/
      FeeNotEnough: AugmentedError<ApiType>;
      /**
       * Could not get ancestry of asset reserve location.
       **/
      InvalidAncestry: AugmentedError<ApiType>;
      /**
       * The MultiAsset is invalid.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Invalid transfer destination.
       **/
      InvalidDest: AugmentedError<ApiType>;
      /**
       * MinXcmFee not registered for certain reserve location
       **/
      MinXcmFeeNotDefined: AugmentedError<ApiType>;
      /**
       * Not cross-chain transfer.
       **/
      NotCrossChainTransfer: AugmentedError<ApiType>;
      /**
       * Currency is not cross-chain transferable.
       **/
      NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
      /**
       * Not supported MultiLocation
       **/
      NotSupportedMultiLocation: AugmentedError<ApiType>;
      /**
       * The number of assets to be sent is over the maximum.
       **/
      TooManyAssetsBeingSent: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * XCM execution failed.
       **/
      XcmExecutionFailed: AugmentedError<ApiType>;
      /**
       * The transfering asset amount is zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * The fee is zero.
       **/
      ZeroFee: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
