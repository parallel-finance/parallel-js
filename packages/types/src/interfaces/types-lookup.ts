// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H160, H256, MultiAddress, Permill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (7) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (8) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (13) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (15) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (18) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (20) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (21) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (22) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (23) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (24) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpRuntimeArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable';
  }

  /** @name SpRuntimeModuleError (25) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (26) */
  interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (27) */
  interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (28) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletUtilityEvent (29) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletMultisigEvent (32) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (33) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletBalancesEvent (34) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (35) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (36) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletAssetsEvent (37) */
  interface PalletAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly assetId: u32;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly totalSupply: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly assetId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly assetId: u32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isAssetFrozen: boolean;
    readonly asAssetFrozen: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetThawed: boolean;
    readonly asAssetThawed: {
      readonly assetId: u32;
    } & Struct;
    readonly isAccountsDestroyed: boolean;
    readonly asAccountsDestroyed: {
      readonly assetId: u32;
      readonly accountsDestroyed: u32;
      readonly accountsRemaining: u32;
    } & Struct;
    readonly isApprovalsDestroyed: boolean;
    readonly asApprovalsDestroyed: {
      readonly assetId: u32;
      readonly approvalsDestroyed: u32;
      readonly approvalsRemaining: u32;
    } & Struct;
    readonly isDestructionStarted: boolean;
    readonly asDestructionStarted: {
      readonly assetId: u32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly assetId: u32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly assetId: u32;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly assetId: u32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly assetId: u32;
      readonly source: AccountId32;
      readonly delegate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isTransferredApproved: boolean;
    readonly asTransferredApproved: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAssetStatusChanged: boolean;
    readonly asAssetStatusChanged: {
      readonly assetId: u32;
    } & Struct;
    readonly type: 'Created' | 'Issued' | 'Transferred' | 'Burned' | 'TeamChanged' | 'OwnerChanged' | 'Frozen' | 'Thawed' | 'AssetFrozen' | 'AssetThawed' | 'AccountsDestroyed' | 'ApprovalsDestroyed' | 'DestructionStarted' | 'Destroyed' | 'ForceCreated' | 'MetadataSet' | 'MetadataCleared' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'TransferredApproved' | 'AssetStatusChanged';
  }

  /** @name PalletProxyEvent (39) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: HeikoRuntimeProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: HeikoRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: HeikoRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name HeikoRuntimeProxyType (40) */
  interface HeikoRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isLoans: boolean;
    readonly isStaking: boolean;
    readonly isCrowdloans: boolean;
    readonly isFarming: boolean;
    readonly isStreaming: boolean;
    readonly isGovernance: boolean;
    readonly isAmm: boolean;
    readonly isEvm: boolean;
    readonly type: 'Any' | 'Loans' | 'Staking' | 'Crowdloans' | 'Farming' | 'Streaming' | 'Governance' | 'Amm' | 'Evm';
  }

  /** @name PalletIdentityEvent (42) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletDemocracyEvent (43) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled';
  }

  /** @name PalletDemocracyVoteThreshold (44) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (45) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletCollectiveEvent (47) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletTreasuryEvent (49) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved';
  }

  /** @name PalletSchedulerEvent (50) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
  }

  /** @name PalletPreimageEvent (53) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name CumulusPalletXcmpQueueEvent (54) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: {
      readonly messageHash: Option<H256>;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isFail: boolean;
    readonly asFail: {
      readonly messageHash: Option<H256>;
      readonly error: XcmV2TraitsError;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isBadVersion: boolean;
    readonly asBadVersion: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isBadFormat: boolean;
    readonly asBadFormat: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: Option<H256>;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly index: u64;
      readonly required: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly index: u64;
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'UpwardMessageSent' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name XcmV2TraitsError (56) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name CumulusPalletDmpQueueEvent (58) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: {
      readonly messageId: U8aFixed;
      readonly outcome: XcmV2TraitsOutcome;
    } & Struct;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: {
      readonly messageId: U8aFixed;
      readonly remainingWeight: SpWeightsWeightV2Weight;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly messageId: U8aFixed;
      readonly overweightIndex: u64;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly overweightIndex: u64;
      readonly weightUsed: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name XcmV2TraitsOutcome (59) */
  interface XcmV2TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: u64;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[u64, XcmV2TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV2TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name PalletXcmEvent (60) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: XcmV2TraitsOutcome;
    readonly isSent: boolean;
    readonly asSent: ITuple<[XcmV1MultiLocation, XcmV1MultiLocation, XcmV2Xcm]>;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: ITuple<[XcmV1MultiLocation, u64]>;
    readonly isResponseReady: boolean;
    readonly asResponseReady: ITuple<[u64, XcmV2Response]>;
    readonly isNotified: boolean;
    readonly asNotified: ITuple<[u64, u8, u8]>;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: ITuple<[u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: ITuple<[XcmV1MultiLocation, u64, Option<XcmV1MultiLocation>]>;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: ITuple<[XcmV1MultiLocation, u64]>;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: u64;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: ITuple<[H256, XcmV1MultiLocation, XcmVersionedMultiAssets]>;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: ITuple<[XcmV1MultiLocation, u32]>;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: ITuple<[XcmV1MultiLocation, u32]>;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: ITuple<[XcmV1MultiLocation, u64, XcmV2TraitsError]>;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: ITuple<[XcmVersionedMultiLocation, u64]>;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: ITuple<[H256, XcmV1MultiLocation, XcmVersionedMultiAssets]>;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'AssetsClaimed';
  }

  /** @name XcmV1MultiLocation (61) */
  interface XcmV1MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV1MultilocationJunctions;
  }

  /** @name XcmV1MultilocationJunctions (62) */
  interface XcmV1MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV1Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV1Junction, XcmV1Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction, XcmV1Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV1Junction (63) */
  interface XcmV1Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV0JunctionNetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV0JunctionNetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV0JunctionNetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV0JunctionBodyId;
      readonly part: XcmV0JunctionBodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV0JunctionNetworkId (65) */
  interface XcmV0JunctionNetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV0JunctionBodyId (69) */
  interface XcmV0JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial';
  }

  /** @name XcmV0JunctionBodyPart (70) */
  interface XcmV0JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV2Xcm (71) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (73) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV1MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV1MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV1MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly dest: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV0OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV1MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV1MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV1MultiassetMultiAssetFilter;
      readonly receive: XcmV1MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly reserve: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly dest: XcmV1MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV1MultiLocation;
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV1MultiAsset;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly ticket: XcmV1MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV1MultiassetMultiAssets (74) */
  interface XcmV1MultiassetMultiAssets extends Vec<XcmV1MultiAsset> {}

  /** @name XcmV1MultiAsset (76) */
  interface XcmV1MultiAsset extends Struct {
    readonly id: XcmV1MultiassetAssetId;
    readonly fun: XcmV1MultiassetFungibility;
  }

  /** @name XcmV1MultiassetAssetId (77) */
  interface XcmV1MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV1MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV1MultiassetFungibility (78) */
  interface XcmV1MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV1MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV1MultiassetAssetInstance (79) */
  interface XcmV1MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name XcmV2Response (82) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV1MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV0OriginKind (85) */
  interface XcmV0OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (86) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV1MultiassetMultiAssetFilter (87) */
  interface XcmV1MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV1MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV1MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV1MultiassetWildMultiAsset (88) */
  interface XcmV1MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV1MultiassetAssetId;
      readonly fun: XcmV1MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV1MultiassetWildFungibility (89) */
  interface XcmV1MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (90) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedMultiAssets (92) */
  interface XcmVersionedMultiAssets extends Enum {
    readonly isV0: boolean;
    readonly asV0: Vec<XcmV0MultiAsset>;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiassetMultiAssets;
    readonly type: 'V0' | 'V1';
  }

  /** @name XcmV0MultiAsset (94) */
  interface XcmV0MultiAsset extends Enum {
    readonly isNone: boolean;
    readonly isAll: boolean;
    readonly isAllFungible: boolean;
    readonly isAllNonFungible: boolean;
    readonly isAllAbstractFungible: boolean;
    readonly asAllAbstractFungible: {
      readonly id: Bytes;
    } & Struct;
    readonly isAllAbstractNonFungible: boolean;
    readonly asAllAbstractNonFungible: {
      readonly class: Bytes;
    } & Struct;
    readonly isAllConcreteFungible: boolean;
    readonly asAllConcreteFungible: {
      readonly id: XcmV0MultiLocation;
    } & Struct;
    readonly isAllConcreteNonFungible: boolean;
    readonly asAllConcreteNonFungible: {
      readonly class: XcmV0MultiLocation;
    } & Struct;
    readonly isAbstractFungible: boolean;
    readonly asAbstractFungible: {
      readonly id: Bytes;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isAbstractNonFungible: boolean;
    readonly asAbstractNonFungible: {
      readonly class: Bytes;
      readonly instance: XcmV1MultiassetAssetInstance;
    } & Struct;
    readonly isConcreteFungible: boolean;
    readonly asConcreteFungible: {
      readonly id: XcmV0MultiLocation;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isConcreteNonFungible: boolean;
    readonly asConcreteNonFungible: {
      readonly class: XcmV0MultiLocation;
      readonly instance: XcmV1MultiassetAssetInstance;
    } & Struct;
    readonly type: 'None' | 'All' | 'AllFungible' | 'AllNonFungible' | 'AllAbstractFungible' | 'AllAbstractNonFungible' | 'AllConcreteFungible' | 'AllConcreteNonFungible' | 'AbstractFungible' | 'AbstractNonFungible' | 'ConcreteFungible' | 'ConcreteNonFungible';
  }

  /** @name XcmV0MultiLocation (95) */
  interface XcmV0MultiLocation extends Enum {
    readonly isNull: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV0Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV0Junction, XcmV0Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction, XcmV0Junction]>;
    readonly type: 'Null' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV0Junction (96) */
  interface XcmV0Junction extends Enum {
    readonly isParent: boolean;
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV0JunctionNetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV0JunctionNetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV0JunctionNetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV0JunctionBodyId;
      readonly part: XcmV0JunctionBodyPart;
    } & Struct;
    readonly type: 'Parent' | 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmVersionedMultiLocation (97) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0MultiLocation;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiLocation;
    readonly type: 'V0' | 'V1';
  }

  /** @name CumulusPalletXcmEvent (98) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV2TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name PalletCollatorSelectionEvent (99) */
  interface PalletCollatorSelectionEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isNewDesiredCandidates: boolean;
    readonly asNewDesiredCandidates: {
      readonly desiredCandidates: u32;
    } & Struct;
    readonly isNewCandidacyBond: boolean;
    readonly asNewCandidacyBond: {
      readonly bondAmount: u128;
    } & Struct;
    readonly isCandidateAdded: boolean;
    readonly asCandidateAdded: {
      readonly accountId: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'NewInvulnerables' | 'NewDesiredCandidates' | 'NewCandidacyBond' | 'CandidateAdded' | 'CandidateRemoved';
  }

  /** @name PalletSessionEvent (101) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name OrmlOracleModuleEvent (102) */
  interface OrmlOracleModuleEvent extends Enum {
    readonly isNewFeedData: boolean;
    readonly asNewFeedData: {
      readonly sender: AccountId32;
      readonly values: Vec<ITuple<[u32, u128]>>;
    } & Struct;
    readonly type: 'NewFeedData';
  }

  /** @name OrmlXtokensModuleEvent (106) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredMultiAssets: boolean;
    readonly asTransferredMultiAssets: {
      readonly sender: AccountId32;
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly fee: XcmV1MultiAsset;
      readonly dest: XcmV1MultiLocation;
    } & Struct;
    readonly type: 'TransferredMultiAssets';
  }

  /** @name OrmlXcmModuleEvent (107) */
  interface OrmlXcmModuleEvent extends Enum {
    readonly isSent: boolean;
    readonly asSent: {
      readonly to: XcmV1MultiLocation;
      readonly message: XcmV2Xcm;
    } & Struct;
    readonly type: 'Sent';
  }

  /** @name OrmlVestingModuleEvent (108) */
  interface OrmlVestingModuleEvent extends Enum {
    readonly isVestingScheduleAdded: boolean;
    readonly asVestingScheduleAdded: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly vestingSchedule: OrmlVestingVestingSchedule;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isVestingSchedulesUpdated: boolean;
    readonly asVestingSchedulesUpdated: {
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'VestingScheduleAdded' | 'Claimed' | 'VestingSchedulesUpdated';
  }

  /** @name OrmlVestingVestingSchedule (109) */
  interface OrmlVestingVestingSchedule extends Struct {
    readonly start: u32;
    readonly period: u32;
    readonly periodCount: u32;
    readonly perPeriod: Compact<u128>;
  }

  /** @name PalletLoansEvent (110) */
  interface PalletLoansEvent extends Enum {
    readonly isCollateralAssetAdded: boolean;
    readonly asCollateralAssetAdded: ITuple<[AccountId32, u32]>;
    readonly isCollateralAssetRemoved: boolean;
    readonly asCollateralAssetRemoved: ITuple<[AccountId32, u32]>;
    readonly isDeposited: boolean;
    readonly asDeposited: ITuple<[AccountId32, u32, u128]>;
    readonly isRedeemed: boolean;
    readonly asRedeemed: ITuple<[AccountId32, u32, u128]>;
    readonly isBorrowed: boolean;
    readonly asBorrowed: ITuple<[AccountId32, u32, u128]>;
    readonly isRepaidBorrow: boolean;
    readonly asRepaidBorrow: ITuple<[AccountId32, u32, u128]>;
    readonly isLiquidatedBorrow: boolean;
    readonly asLiquidatedBorrow: ITuple<[AccountId32, AccountId32, u32, u32, u128, u128]>;
    readonly isReservesReduced: boolean;
    readonly asReservesReduced: ITuple<[AccountId32, u32, u128, u128]>;
    readonly isReservesAdded: boolean;
    readonly asReservesAdded: ITuple<[AccountId32, u32, u128, u128]>;
    readonly isNewMarket: boolean;
    readonly asNewMarket: ITuple<[u32, PalletLoansMarket]>;
    readonly isActivatedMarket: boolean;
    readonly asActivatedMarket: u32;
    readonly isUpdatedMarket: boolean;
    readonly asUpdatedMarket: ITuple<[u32, PalletLoansMarket]>;
    readonly isRewardAdded: boolean;
    readonly asRewardAdded: ITuple<[AccountId32, u128]>;
    readonly isRewardWithdrawn: boolean;
    readonly asRewardWithdrawn: ITuple<[AccountId32, u128]>;
    readonly isMarketRewardSpeedUpdated: boolean;
    readonly asMarketRewardSpeedUpdated: ITuple<[u32, u128, u128]>;
    readonly isDistributedSupplierReward: boolean;
    readonly asDistributedSupplierReward: ITuple<[u32, AccountId32, u128, u128]>;
    readonly isDistributedBorrowerReward: boolean;
    readonly asDistributedBorrowerReward: ITuple<[u32, AccountId32, u128, u128]>;
    readonly isRewardPaid: boolean;
    readonly asRewardPaid: ITuple<[AccountId32, u128]>;
    readonly isIncentiveReservesReduced: boolean;
    readonly asIncentiveReservesReduced: ITuple<[AccountId32, u32, u128]>;
    readonly isLiquidationFreeCollateralsUpdated: boolean;
    readonly asLiquidationFreeCollateralsUpdated: Vec<u32>;
    readonly type: 'CollateralAssetAdded' | 'CollateralAssetRemoved' | 'Deposited' | 'Redeemed' | 'Borrowed' | 'RepaidBorrow' | 'LiquidatedBorrow' | 'ReservesReduced' | 'ReservesAdded' | 'NewMarket' | 'ActivatedMarket' | 'UpdatedMarket' | 'RewardAdded' | 'RewardWithdrawn' | 'MarketRewardSpeedUpdated' | 'DistributedSupplierReward' | 'DistributedBorrowerReward' | 'RewardPaid' | 'IncentiveReservesReduced' | 'LiquidationFreeCollateralsUpdated';
  }

  /** @name PalletLoansMarket (111) */
  interface PalletLoansMarket extends Struct {
    readonly collateralFactor: Permill;
    readonly liquidationThreshold: Permill;
    readonly reserveFactor: Permill;
    readonly closeFactor: Permill;
    readonly liquidateIncentive: u128;
    readonly liquidateIncentiveReservedFactor: Permill;
    readonly rateModel: PalletLoansRateModelInterestRateModel;
    readonly state: PalletLoansMarketState;
    readonly supplyCap: u128;
    readonly borrowCap: u128;
    readonly ptokenId: u32;
  }

  /** @name PalletLoansRateModelInterestRateModel (113) */
  interface PalletLoansRateModelInterestRateModel extends Enum {
    readonly isJump: boolean;
    readonly asJump: PalletLoansRateModelJumpModel;
    readonly isCurve: boolean;
    readonly asCurve: PalletLoansRateModelCurveModel;
    readonly type: 'Jump' | 'Curve';
  }

  /** @name PalletLoansRateModelJumpModel (114) */
  interface PalletLoansRateModelJumpModel extends Struct {
    readonly baseRate: u128;
    readonly jumpRate: u128;
    readonly fullRate: u128;
    readonly jumpUtilization: Permill;
  }

  /** @name PalletLoansRateModelCurveModel (115) */
  interface PalletLoansRateModelCurveModel extends Struct {
    readonly baseRate: u128;
  }

  /** @name PalletLoansMarketState (116) */
  interface PalletLoansMarketState extends Enum {
    readonly isActive: boolean;
    readonly isPending: boolean;
    readonly isSupervision: boolean;
    readonly type: 'Active' | 'Pending' | 'Supervision';
  }

  /** @name PalletPricesEvent (118) */
  interface PalletPricesEvent extends Enum {
    readonly isSetPrice: boolean;
    readonly asSetPrice: ITuple<[u32, u128]>;
    readonly isResetPrice: boolean;
    readonly asResetPrice: u32;
    readonly type: 'SetPrice' | 'ResetPrice';
  }

  /** @name PalletCrowdloansEvent (119) */
  interface PalletCrowdloansEvent extends Enum {
    readonly isVaultCreated: boolean;
    readonly asVaultCreated: ITuple<[u32, ITuple<[u32, u32]>, u32, PalletCrowdloansVaultPhase, PalletCrowdloansContributionStrategy, u128, u32, u32]>;
    readonly isVaultUpdated: boolean;
    readonly asVaultUpdated: ITuple<[u32, ITuple<[u32, u32]>, PalletCrowdloansContributionStrategy, u128, u32]>;
    readonly isVaultPhaseUpdated: boolean;
    readonly asVaultPhaseUpdated: ITuple<[u32, ITuple<[u32, u32]>, PalletCrowdloansVaultPhase, PalletCrowdloansVaultPhase]>;
    readonly isVaultDoContributing: boolean;
    readonly asVaultDoContributing: ITuple<[u32, ITuple<[u32, u32]>, AccountId32, u128, Bytes]>;
    readonly isVaultDoWithdrawing: boolean;
    readonly asVaultDoWithdrawing: ITuple<[u32, ITuple<[u32, u32]>, u128, PalletCrowdloansVaultPhase]>;
    readonly isVaultContributed: boolean;
    readonly asVaultContributed: ITuple<[u32, ITuple<[u32, u32]>, AccountId32, u128, Bytes]>;
    readonly isVaultClaimed: boolean;
    readonly asVaultClaimed: ITuple<[u32, ITuple<[u32, u32]>, u32, AccountId32, u128, PalletCrowdloansVaultPhase]>;
    readonly isVaultWithdrew: boolean;
    readonly asVaultWithdrew: ITuple<[u32, ITuple<[u32, u32]>, AccountId32, u128, PalletCrowdloansVaultPhase]>;
    readonly isVaultRedeemed: boolean;
    readonly asVaultRedeemed: ITuple<[u32, ITuple<[u32, u32]>, u32, AccountId32, u128, PalletCrowdloansVaultPhase]>;
    readonly isVrfUpdated: boolean;
    readonly asVrfUpdated: bool;
    readonly isNotificationReceived: boolean;
    readonly asNotificationReceived: ITuple<[XcmV1MultiLocation, u64, Option<ITuple<[u32, XcmV2TraitsError]>>]>;
    readonly isAllMigrated: boolean;
    readonly asAllMigrated: ITuple<[u32, ITuple<[u32, u32]>]>;
    readonly isPartiallyMigrated: boolean;
    readonly asPartiallyMigrated: ITuple<[u32, ITuple<[u32, u32]>]>;
    readonly isVaultDissolved: boolean;
    readonly asVaultDissolved: ITuple<[u32, ITuple<[u32, u32]>]>;
    readonly isAllRefunded: boolean;
    readonly asAllRefunded: ITuple<[u32, ITuple<[u32, u32]>]>;
    readonly isPartiallyRefunded: boolean;
    readonly asPartiallyRefunded: ITuple<[u32, ITuple<[u32, u32]>]>;
    readonly isUserRefunded: boolean;
    readonly asUserRefunded: ITuple<[u32, ITuple<[u32, u32]>, AccountId32, PalletCrowdloansChildStorageKind, u128]>;
    readonly isProxyUpdated: boolean;
    readonly asProxyUpdated: AccountId32;
    readonly isLeasesBonusUpdated: boolean;
    readonly asLeasesBonusUpdated: ITuple<[ITuple<[u32, u32]>, PalletCrowdloansBonusConfig]>;
    readonly type: 'VaultCreated' | 'VaultUpdated' | 'VaultPhaseUpdated' | 'VaultDoContributing' | 'VaultDoWithdrawing' | 'VaultContributed' | 'VaultClaimed' | 'VaultWithdrew' | 'VaultRedeemed' | 'VrfUpdated' | 'NotificationReceived' | 'AllMigrated' | 'PartiallyMigrated' | 'VaultDissolved' | 'AllRefunded' | 'PartiallyRefunded' | 'UserRefunded' | 'ProxyUpdated' | 'LeasesBonusUpdated';
  }

  /** @name PalletCrowdloansVaultPhase (120) */
  interface PalletCrowdloansVaultPhase extends Enum {
    readonly isPending: boolean;
    readonly isContributing: boolean;
    readonly isClosed: boolean;
    readonly isFailed: boolean;
    readonly isSucceeded: boolean;
    readonly isExpired: boolean;
    readonly type: 'Pending' | 'Contributing' | 'Closed' | 'Failed' | 'Succeeded' | 'Expired';
  }

  /** @name PalletCrowdloansContributionStrategy (121) */
  interface PalletCrowdloansContributionStrategy extends Enum {
    readonly isXcm: boolean;
    readonly isXcmproxy: boolean;
    readonly type: 'Xcm' | 'Xcmproxy';
  }

  /** @name PalletCrowdloansChildStorageKind (122) */
  interface PalletCrowdloansChildStorageKind extends Enum {
    readonly isPending: boolean;
    readonly isFlying: boolean;
    readonly isContributed: boolean;
    readonly type: 'Pending' | 'Flying' | 'Contributed';
  }

  /** @name PalletCrowdloansBonusConfig (123) */
  interface PalletCrowdloansBonusConfig extends Struct {
    readonly bonusPerToken: u128;
    readonly startTime: u64;
    readonly endTime: u64;
  }

  /** @name PalletLiquidStakingEvent (124) */
  interface PalletLiquidStakingEvent extends Enum {
    readonly isStaked: boolean;
    readonly asStaked: ITuple<[AccountId32, u128]>;
    readonly isUnstaked: boolean;
    readonly asUnstaked: ITuple<[AccountId32, u128, u128]>;
    readonly isStakingLedgerUpdated: boolean;
    readonly asStakingLedgerUpdated: ITuple<[u16, PalletLiquidStakingStakingLedger]>;
    readonly isBonding: boolean;
    readonly asBonding: ITuple<[u16, AccountId32, u128, PalletTraitsUmpRewardDestination]>;
    readonly isBondingExtra: boolean;
    readonly asBondingExtra: ITuple<[u16, u128]>;
    readonly isUnbonding: boolean;
    readonly asUnbonding: ITuple<[u16, u128]>;
    readonly isRebonding: boolean;
    readonly asRebonding: ITuple<[u16, u128]>;
    readonly isWithdrawingUnbonded: boolean;
    readonly asWithdrawingUnbonded: ITuple<[u16, u32]>;
    readonly isNominating: boolean;
    readonly asNominating: ITuple<[u16, Vec<AccountId32>]>;
    readonly isStakingLedgerCapUpdated: boolean;
    readonly asStakingLedgerCapUpdated: u128;
    readonly isReserveFactorUpdated: boolean;
    readonly asReserveFactorUpdated: Permill;
    readonly isExchangeRateUpdated: boolean;
    readonly asExchangeRateUpdated: u128;
    readonly isNotificationReceived: boolean;
    readonly asNotificationReceived: ITuple<[XcmV1MultiLocation, u64, Option<ITuple<[u32, XcmV2TraitsError]>>]>;
    readonly isClaimedFor: boolean;
    readonly asClaimedFor: ITuple<[AccountId32, u128]>;
    readonly isNewEra: boolean;
    readonly asNewEra: u32;
    readonly isMatching: boolean;
    readonly asMatching: ITuple<[u128, u128, u128]>;
    readonly isReservesReduced: boolean;
    readonly asReservesReduced: ITuple<[AccountId32, u128]>;
    readonly isUnstakeCancelled: boolean;
    readonly asUnstakeCancelled: ITuple<[AccountId32, u128, u128]>;
    readonly isCommissionRateUpdated: boolean;
    readonly asCommissionRateUpdated: u128;
    readonly isFastUnstakeMatched: boolean;
    readonly asFastUnstakeMatched: ITuple<[AccountId32, u128, u128, u128]>;
    readonly isIncentiveUpdated: boolean;
    readonly asIncentiveUpdated: u128;
    readonly type: 'Staked' | 'Unstaked' | 'StakingLedgerUpdated' | 'Bonding' | 'BondingExtra' | 'Unbonding' | 'Rebonding' | 'WithdrawingUnbonded' | 'Nominating' | 'StakingLedgerCapUpdated' | 'ReserveFactorUpdated' | 'ExchangeRateUpdated' | 'NotificationReceived' | 'ClaimedFor' | 'NewEra' | 'Matching' | 'ReservesReduced' | 'UnstakeCancelled' | 'CommissionRateUpdated' | 'FastUnstakeMatched' | 'IncentiveUpdated';
  }

  /** @name PalletLiquidStakingStakingLedger (125) */
  interface PalletLiquidStakingStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PalletLiquidStakingUnlockChunk>;
    readonly claimedRewards: Vec<u32>;
  }

  /** @name PalletLiquidStakingUnlockChunk (127) */
  interface PalletLiquidStakingUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletTraitsUmpRewardDestination (128) */
  interface PalletTraitsUmpRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletMembershipEvent (129) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletAmmEvent (135) */
  interface PalletAmmEvent extends Enum {
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: ITuple<[AccountId32, u32, u32, u128, u128, u32, u128, u128]>;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: ITuple<[AccountId32, u32, u32, u128, u128, u128, u32, u128, u128]>;
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: ITuple<[AccountId32, u32, u32, u32]>;
    readonly isTraded: boolean;
    readonly asTraded: ITuple<[AccountId32, u32, u32, u128, u128, u32, u128, u128]>;
    readonly isProtocolFeeUpdated: boolean;
    readonly asProtocolFeeUpdated: Permill;
    readonly isProtocolFeeReceiverUpdated: boolean;
    readonly asProtocolFeeReceiverUpdated: AccountId32;
    readonly type: 'LiquidityAdded' | 'LiquidityRemoved' | 'PoolCreated' | 'Traded' | 'ProtocolFeeUpdated' | 'ProtocolFeeReceiverUpdated';
  }

  /** @name PalletRouterEvent (136) */
  interface PalletRouterEvent extends Enum {
    readonly isTraded: boolean;
    readonly asTraded: ITuple<[AccountId32, u128, Vec<u32>, u128]>;
    readonly type: 'Traded';
  }

  /** @name PalletBridgeEvent (137) */
  interface PalletBridgeEvent extends Enum {
    readonly isVoteThresholdUpdated: boolean;
    readonly asVoteThresholdUpdated: u32;
    readonly isChainRegistered: boolean;
    readonly asChainRegistered: u32;
    readonly isChainRemoved: boolean;
    readonly asChainRemoved: u32;
    readonly isBridgeTokenRegistered: boolean;
    readonly asBridgeTokenRegistered: ITuple<[u32, u32, bool, u128, bool, u128, u128, u128, u128]>;
    readonly isBridgeTokenRemoved: boolean;
    readonly asBridgeTokenRemoved: ITuple<[u32, u32]>;
    readonly isBridgeTokenFeeUpdated: boolean;
    readonly asBridgeTokenFeeUpdated: ITuple<[u32, u128]>;
    readonly isBridgeTokenStatusUpdated: boolean;
    readonly asBridgeTokenStatusUpdated: ITuple<[u32, bool]>;
    readonly isBridgeTokenCapUpdated: boolean;
    readonly asBridgeTokenCapUpdated: ITuple<[u32, PalletBridgeBridgeType, u128]>;
    readonly isBridgeTokenAccumulatedValueCleaned: boolean;
    readonly asBridgeTokenAccumulatedValueCleaned: ITuple<[u32, PalletBridgeBridgeType]>;
    readonly isTeleportBurned: boolean;
    readonly asTeleportBurned: ITuple<[AccountId32, u32, u64, u32, Bytes, u128, u128]>;
    readonly isMaterializeInitialized: boolean;
    readonly asMaterializeInitialized: ITuple<[AccountId32, u32, u64, u32, AccountId32, u128]>;
    readonly isMaterializeMinted: boolean;
    readonly asMaterializeMinted: ITuple<[u32, u64, u32, AccountId32, u128]>;
    readonly isMaterializeVoteFor: boolean;
    readonly asMaterializeVoteFor: ITuple<[u32, u64, AccountId32, u32, AccountId32, u128]>;
    readonly isMaterializeVoteAgainst: boolean;
    readonly asMaterializeVoteAgainst: ITuple<[u32, u64, AccountId32, u32, AccountId32, u128]>;
    readonly isProposalApproved: boolean;
    readonly asProposalApproved: ITuple<[u32, u64]>;
    readonly isProposalRejected: boolean;
    readonly asProposalRejected: ITuple<[u32, u64]>;
    readonly type: 'VoteThresholdUpdated' | 'ChainRegistered' | 'ChainRemoved' | 'BridgeTokenRegistered' | 'BridgeTokenRemoved' | 'BridgeTokenFeeUpdated' | 'BridgeTokenStatusUpdated' | 'BridgeTokenCapUpdated' | 'BridgeTokenAccumulatedValueCleaned' | 'TeleportBurned' | 'MaterializeInitialized' | 'MaterializeMinted' | 'MaterializeVoteFor' | 'MaterializeVoteAgainst' | 'ProposalApproved' | 'ProposalRejected';
  }

  /** @name PalletBridgeBridgeType (138) */
  interface PalletBridgeBridgeType extends Enum {
    readonly isBridgeOut: boolean;
    readonly isBridgeIn: boolean;
    readonly type: 'BridgeOut' | 'BridgeIn';
  }

  /** @name PalletEmergencyShutdownEvent (139) */
  interface PalletEmergencyShutdownEvent extends Enum {
    readonly isToggledPallet: boolean;
    readonly asToggledPallet: bool;
    readonly isToggledCall: boolean;
    readonly asToggledCall: bool;
    readonly type: 'ToggledPallet' | 'ToggledCall';
  }

  /** @name PalletFarmingEvent (140) */
  interface PalletFarmingEvent extends Enum {
    readonly isPoolAdded: boolean;
    readonly asPoolAdded: ITuple<[u32, u32, u32]>;
    readonly isPoolStatusChanged: boolean;
    readonly asPoolStatusChanged: ITuple<[u32, u32, u32, bool]>;
    readonly isPoolCoolDownDurationChanged: boolean;
    readonly asPoolCoolDownDurationChanged: ITuple<[u32, u32, u32, u32]>;
    readonly isPoolUnlockHeightReset: boolean;
    readonly asPoolUnlockHeightReset: ITuple<[u32, u32, u32, u32]>;
    readonly isAssetsDeposited: boolean;
    readonly asAssetsDeposited: ITuple<[AccountId32, u32, u32, u32, u128]>;
    readonly isAssetsWithdrew: boolean;
    readonly asAssetsWithdrew: ITuple<[AccountId32, u32, u32, u32, u128]>;
    readonly isAssetsRedeem: boolean;
    readonly asAssetsRedeem: ITuple<[AccountId32, u32, u32, u32, u128]>;
    readonly isRewardPaid: boolean;
    readonly asRewardPaid: ITuple<[AccountId32, u32, u32, u32, u128]>;
    readonly isRewardAdded: boolean;
    readonly asRewardAdded: ITuple<[u32, u32, u32, u128]>;
    readonly type: 'PoolAdded' | 'PoolStatusChanged' | 'PoolCoolDownDurationChanged' | 'PoolUnlockHeightReset' | 'AssetsDeposited' | 'AssetsWithdrew' | 'AssetsRedeem' | 'RewardPaid' | 'RewardAdded';
  }

  /** @name PalletXcmHelperEvent (141) */
  interface PalletXcmHelperEvent extends Enum {
    readonly isXcmWeightFeeUpdated: boolean;
    readonly asXcmWeightFeeUpdated: PalletTraitsUmpXcmWeightFeeMisc;
    readonly type: 'XcmWeightFeeUpdated';
  }

  /** @name PalletTraitsUmpXcmWeightFeeMisc (142) */
  interface PalletTraitsUmpXcmWeightFeeMisc extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly fee: u128;
  }

  /** @name PalletStreamingEvent (143) */
  interface PalletStreamingEvent extends Enum {
    readonly isStreamCreated: boolean;
    readonly asStreamCreated: ITuple<[u128, AccountId32, AccountId32, u128, u32, u64, u64, bool]>;
    readonly isStreamWithdrawn: boolean;
    readonly asStreamWithdrawn: ITuple<[u128, AccountId32, u32, u128]>;
    readonly isStreamCancelled: boolean;
    readonly asStreamCancelled: ITuple<[u128, AccountId32, AccountId32, u32, u128, u128]>;
    readonly isMinimumDepositSet: boolean;
    readonly asMinimumDepositSet: ITuple<[u32, u128]>;
    readonly type: 'StreamCreated' | 'StreamWithdrawn' | 'StreamCancelled' | 'MinimumDepositSet';
  }

  /** @name PalletAssetRegistryEvent (144) */
  interface PalletAssetRegistryEvent extends Enum {
    readonly isAssetRegistered: boolean;
    readonly asAssetRegistered: {
      readonly assetId: u32;
      readonly assetType: PalletTraitsXcmAssetType;
    } & Struct;
    readonly isUnitsPerSecondUpdated: boolean;
    readonly asUnitsPerSecondUpdated: {
      readonly assetType: PalletTraitsXcmAssetType;
      readonly unitsPerSecond: u128;
    } & Struct;
    readonly isAssetTypeUpdated: boolean;
    readonly asAssetTypeUpdated: {
      readonly assetId: u32;
      readonly newAssetType: PalletTraitsXcmAssetType;
    } & Struct;
    readonly isAssetDeregisteredd: boolean;
    readonly asAssetDeregisteredd: {
      readonly assetId: u32;
      readonly assetType: PalletTraitsXcmAssetType;
    } & Struct;
    readonly isFeePaymentAssetRemoved: boolean;
    readonly asFeePaymentAssetRemoved: {
      readonly assetType: PalletTraitsXcmAssetType;
    } & Struct;
    readonly type: 'AssetRegistered' | 'UnitsPerSecondUpdated' | 'AssetTypeUpdated' | 'AssetDeregisteredd' | 'FeePaymentAssetRemoved';
  }

  /** @name PalletTraitsXcmAssetType (145) */
  interface PalletTraitsXcmAssetType extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV1MultiLocation;
    readonly type: 'Xcm';
  }

  /** @name PalletEvmEvent (146) */
  interface PalletEvmEvent extends Enum {
    readonly isLog: boolean;
    readonly asLog: {
      readonly log: EthereumLog;
    } & Struct;
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly address: H160;
    } & Struct;
    readonly isCreatedFailed: boolean;
    readonly asCreatedFailed: {
      readonly address: H160;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly address: H160;
    } & Struct;
    readonly isExecutedFailed: boolean;
    readonly asExecutedFailed: {
      readonly address: H160;
    } & Struct;
    readonly type: 'Log' | 'Created' | 'CreatedFailed' | 'Executed' | 'ExecutedFailed';
  }

  /** @name EthereumLog (147) */
  interface EthereumLog extends Struct {
    readonly address: H160;
    readonly topics: Vec<H256>;
    readonly data: Bytes;
  }

  /** @name PalletEthereumEvent (150) */
  interface PalletEthereumEvent extends Enum {
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly from: H160;
      readonly to: H160;
      readonly transactionHash: H256;
      readonly exitReason: EvmCoreErrorExitReason;
    } & Struct;
    readonly type: 'Executed';
  }

  /** @name EvmCoreErrorExitReason (151) */
  interface EvmCoreErrorExitReason extends Enum {
    readonly isSucceed: boolean;
    readonly asSucceed: EvmCoreErrorExitSucceed;
    readonly isError: boolean;
    readonly asError: EvmCoreErrorExitError;
    readonly isRevert: boolean;
    readonly asRevert: EvmCoreErrorExitRevert;
    readonly isFatal: boolean;
    readonly asFatal: EvmCoreErrorExitFatal;
    readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
  }

  /** @name EvmCoreErrorExitSucceed (152) */
  interface EvmCoreErrorExitSucceed extends Enum {
    readonly isStopped: boolean;
    readonly isReturned: boolean;
    readonly isSuicided: boolean;
    readonly type: 'Stopped' | 'Returned' | 'Suicided';
  }

  /** @name EvmCoreErrorExitError (153) */
  interface EvmCoreErrorExitError extends Enum {
    readonly isStackUnderflow: boolean;
    readonly isStackOverflow: boolean;
    readonly isInvalidJump: boolean;
    readonly isInvalidRange: boolean;
    readonly isDesignatedInvalid: boolean;
    readonly isCallTooDeep: boolean;
    readonly isCreateCollision: boolean;
    readonly isCreateContractLimit: boolean;
    readonly isOutOfOffset: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutOfFund: boolean;
    readonly isPcUnderflow: boolean;
    readonly isCreateEmpty: boolean;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly isInvalidCode: boolean;
    readonly asInvalidCode: u8;
    readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other' | 'InvalidCode';
  }

  /** @name EvmCoreErrorExitRevert (157) */
  interface EvmCoreErrorExitRevert extends Enum {
    readonly isReverted: boolean;
    readonly type: 'Reverted';
  }

  /** @name EvmCoreErrorExitFatal (158) */
  interface EvmCoreErrorExitFatal extends Enum {
    readonly isNotSupported: boolean;
    readonly isUnhandledInterrupt: boolean;
    readonly isCallErrorAsFatal: boolean;
    readonly asCallErrorAsFatal: EvmCoreErrorExitError;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
  }

  /** @name PalletBaseFeeEvent (159) */
  interface PalletBaseFeeEvent extends Enum {
    readonly isNewBaseFeePerGas: boolean;
    readonly asNewBaseFeePerGas: {
      readonly fee: U256;
    } & Struct;
    readonly isBaseFeeOverflow: boolean;
    readonly isNewElasticity: boolean;
    readonly asNewElasticity: {
      readonly elasticity: Permill;
    } & Struct;
    readonly type: 'NewBaseFeePerGas' | 'BaseFeeOverflow' | 'NewElasticity';
  }

  /** @name PalletEvmSignaturesEvent (162) */
  interface PalletEvmSignaturesEvent extends Enum {
    readonly isExecuted: boolean;
    readonly asExecuted: ITuple<[AccountId32, Result<Null, SpRuntimeDispatchError>]>;
    readonly type: 'Executed';
  }

  /** @name CumulusPalletParachainSystemEvent (163) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
    } & Struct;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed';
  }

  /** @name FrameSystemPhase (164) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (166) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (167) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (171) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (172) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (173) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (175) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (176) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (177) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (178) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (182) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (183) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletUtilityCall (184) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: HeikoRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name PalletMultisigCall (187) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletBalancesCall (189) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
  }

  /** @name PalletAssetsCall (192) */
  interface PalletAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly id: Compact<u32>;
      readonly admin: MultiAddress;
      readonly minBalance: u128;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly isSufficient: bool;
      readonly minBalance: Compact<u128>;
    } & Struct;
    readonly isStartDestroy: boolean;
    readonly asStartDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyAccounts: boolean;
    readonly asDestroyAccounts: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyApprovals: boolean;
    readonly asDestroyApprovals: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isFinishDestroy: boolean;
    readonly asFinishDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly id: Compact<u32>;
      readonly beneficiary: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly id: Compact<u32>;
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isFreezeAsset: boolean;
    readonly asFreezeAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isThawAsset: boolean;
    readonly asThawAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly id: Compact<u32>;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isForceClearMetadata: boolean;
    readonly asForceClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceAssetStatus: boolean;
    readonly asForceAssetStatus: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly minBalance: Compact<u128>;
      readonly isSufficient: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isForceCancelApproval: boolean;
    readonly asForceCancelApproval: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly destination: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly id: Compact<u32>;
      readonly allowBurn: bool;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'StartDestroy' | 'DestroyAccounts' | 'DestroyApprovals' | 'FinishDestroy' | 'Mint' | 'Burn' | 'Transfer' | 'TransferKeepAlive' | 'ForceTransfer' | 'Freeze' | 'Thaw' | 'FreezeAsset' | 'ThawAsset' | 'TransferOwnership' | 'SetTeam' | 'SetMetadata' | 'ClearMetadata' | 'ForceSetMetadata' | 'ForceClearMetadata' | 'ForceAssetStatus' | 'ApproveTransfer' | 'CancelApproval' | 'ForceCancelApproval' | 'TransferApproved' | 'Touch' | 'Refund';
  }

  /** @name PalletProxyCall (193) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<HeikoRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: HeikoRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: HeikoRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: HeikoRuntimeProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: HeikoRuntimeProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<HeikoRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletIdentityCall (195) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (196) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (232) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (233) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (234) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletDemocracyCall (235) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: MultiAddress;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal';
  }

  /** @name FrameSupportPreimagesBounded (236) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name PalletDemocracyConviction (238) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletCollectiveCall (240) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isCloseOldWeight: boolean;
    readonly asCloseOldWeight: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: Compact<u64>;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'CloseOldWeight' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletTreasuryCall (245) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
  }

  /** @name PalletSchedulerCall (246) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletPreimageCall (248) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
  }

  /** @name CumulusPalletXcmpQueueCall (249) */
  interface CumulusPalletXcmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: u64;
    } & Struct;
    readonly isSuspendXcmExecution: boolean;
    readonly isResumeXcmExecution: boolean;
    readonly isUpdateSuspendThreshold: boolean;
    readonly asUpdateSuspendThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateDropThreshold: boolean;
    readonly asUpdateDropThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateResumeThreshold: boolean;
    readonly asUpdateResumeThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateThresholdWeight: boolean;
    readonly asUpdateThresholdWeight: {
      readonly new_: u64;
    } & Struct;
    readonly isUpdateWeightRestrictDecay: boolean;
    readonly asUpdateWeightRestrictDecay: {
      readonly new_: u64;
    } & Struct;
    readonly isUpdateXcmpMaxIndividualWeight: boolean;
    readonly asUpdateXcmpMaxIndividualWeight: {
      readonly new_: u64;
    } & Struct;
    readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
  }

  /** @name CumulusPalletDmpQueueCall (250) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: u64;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name PalletXcmCall (251) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: u64;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: XcmV1MultiLocation;
      readonly xcmVersion: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets';
  }

  /** @name XcmVersionedXcm (252) */
  interface XcmVersionedXcm extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0Xcm;
    readonly isV1: boolean;
    readonly asV1: XcmV1Xcm;
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly type: 'V0' | 'V1' | 'V2';
  }

  /** @name XcmV0Xcm (253) */
  interface XcmV0Xcm extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isReserveAssetDeposit: boolean;
    readonly asReserveAssetDeposit: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isTeleportAsset: boolean;
    readonly asTeleportAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV0Response;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV0OriginKind;
      readonly requireWeightAtMost: u64;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isRelayedFrom: boolean;
    readonly asRelayedFrom: {
      readonly who: XcmV0MultiLocation;
      readonly message: XcmV0Xcm;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposit' | 'TeleportAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'RelayedFrom';
  }

  /** @name XcmV0Order (255) */
  interface XcmV0Order extends Enum {
    readonly isNull: boolean;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: Vec<XcmV0MultiAsset>;
      readonly receive: Vec<XcmV0MultiAsset>;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly reserve: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: Vec<XcmV0MultiAsset>;
      readonly dest: XcmV0MultiLocation;
      readonly effects: Vec<XcmV0Order>;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV0MultiLocation;
      readonly assets: Vec<XcmV0MultiAsset>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV0MultiAsset;
      readonly weight: u64;
      readonly debt: u64;
      readonly haltOnError: bool;
      readonly xcm: Vec<XcmV0Xcm>;
    } & Struct;
    readonly type: 'Null' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution';
  }

  /** @name XcmV0Response (257) */
  interface XcmV0Response extends Enum {
    readonly isAssets: boolean;
    readonly asAssets: Vec<XcmV0MultiAsset>;
    readonly type: 'Assets';
  }

  /** @name XcmV1Xcm (258) */
  interface XcmV1Xcm extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV1Response;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssets;
      readonly dest: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV0OriginKind;
      readonly requireWeightAtMost: u64;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isRelayedFrom: boolean;
    readonly asRelayedFrom: {
      readonly who: XcmV1MultilocationJunctions;
      readonly message: XcmV1Xcm;
    } & Struct;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'RelayedFrom' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV1Order (260) */
  interface XcmV1Order extends Enum {
    readonly isNoop: boolean;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: u32;
      readonly beneficiary: XcmV1MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly maxAssets: u32;
      readonly dest: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV1MultiassetMultiAssetFilter;
      readonly receive: XcmV1MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly reserve: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV1MultiassetMultiAssetFilter;
      readonly dest: XcmV1MultiLocation;
      readonly effects: Vec<XcmV1Order>;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV1MultiLocation;
      readonly assets: XcmV1MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV1MultiAsset;
      readonly weight: u64;
      readonly debt: u64;
      readonly haltOnError: bool;
      readonly instructions: Vec<XcmV1Xcm>;
    } & Struct;
    readonly type: 'Noop' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution';
  }

  /** @name XcmV1Response (262) */
  interface XcmV1Response extends Enum {
    readonly isAssets: boolean;
    readonly asAssets: XcmV1MultiassetMultiAssets;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Assets' | 'Version';
  }

  /** @name CumulusPalletXcmCall (276) */
  type CumulusPalletXcmCall = Null;

  /** @name PalletAuthorshipCall (277) */
  interface PalletAuthorshipCall extends Enum {
    readonly isSetUncles: boolean;
    readonly asSetUncles: {
      readonly newUncles: Vec<SpRuntimeHeader>;
    } & Struct;
    readonly type: 'SetUncles';
  }

  /** @name SpRuntimeHeader (279) */
  interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeDigest;
  }

  /** @name SpRuntimeBlakeTwo256 (280) */
  type SpRuntimeBlakeTwo256 = Null;

  /** @name PalletCollatorSelectionCall (281) */
  interface PalletCollatorSelectionCall extends Enum {
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly new_: Vec<AccountId32>;
    } & Struct;
    readonly isSetDesiredCandidates: boolean;
    readonly asSetDesiredCandidates: {
      readonly max: u32;
    } & Struct;
    readonly isSetCandidacyBond: boolean;
    readonly asSetCandidacyBond: {
      readonly bond: u128;
    } & Struct;
    readonly isRegisterAsCandidate: boolean;
    readonly isLeaveIntent: boolean;
    readonly type: 'SetInvulnerables' | 'SetDesiredCandidates' | 'SetCandidacyBond' | 'RegisterAsCandidate' | 'LeaveIntent';
  }

  /** @name PalletSessionCall (282) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: HeikoRuntimeOpaqueSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name HeikoRuntimeOpaqueSessionKeys (283) */
  interface HeikoRuntimeOpaqueSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (284) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (285) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name OrmlOracleModuleCall (286) */
  interface OrmlOracleModuleCall extends Enum {
    readonly isFeedValues: boolean;
    readonly asFeedValues: {
      readonly values: Vec<ITuple<[u32, u128]>>;
    } & Struct;
    readonly type: 'FeedValues';
  }

  /** @name OrmlXtokensModuleCall (287) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: u32;
      readonly amount: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: u32;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: XcmVersionedMultiAsset;
      readonly fee: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[u32, u128]>>;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: XcmVersionedMultiAssets;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name XcmVersionedMultiAsset (288) */
  interface XcmVersionedMultiAsset extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0MultiAsset;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiAsset;
    readonly type: 'V0' | 'V1';
  }

  /** @name OrmlXcmModuleCall (291) */
  interface OrmlXcmModuleCall extends Enum {
    readonly isSendAsSovereign: boolean;
    readonly asSendAsSovereign: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly type: 'SendAsSovereign';
  }

  /** @name OrmlVestingModuleCall (292) */
  interface OrmlVestingModuleCall extends Enum {
    readonly isClaim: boolean;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly dest: MultiAddress;
      readonly schedule: OrmlVestingVestingSchedule;
    } & Struct;
    readonly isUpdateVestingSchedules: boolean;
    readonly asUpdateVestingSchedules: {
      readonly who: MultiAddress;
      readonly vestingSchedules: Vec<OrmlVestingVestingSchedule>;
    } & Struct;
    readonly isClaimFor: boolean;
    readonly asClaimFor: {
      readonly dest: MultiAddress;
    } & Struct;
    readonly type: 'Claim' | 'VestedTransfer' | 'UpdateVestingSchedules' | 'ClaimFor';
  }

  /** @name PalletLoansCall (294) */
  interface PalletLoansCall extends Enum {
    readonly isAddMarket: boolean;
    readonly asAddMarket: {
      readonly assetId: u32;
      readonly market: PalletLoansMarket;
    } & Struct;
    readonly isActivateMarket: boolean;
    readonly asActivateMarket: {
      readonly assetId: u32;
    } & Struct;
    readonly isUpdateRateModel: boolean;
    readonly asUpdateRateModel: {
      readonly assetId: u32;
      readonly rateModel: PalletLoansRateModelInterestRateModel;
    } & Struct;
    readonly isUpdateMarket: boolean;
    readonly asUpdateMarket: {
      readonly assetId: u32;
      readonly collateralFactor: Option<Permill>;
      readonly liquidationThreshold: Option<Permill>;
      readonly reserveFactor: Option<Permill>;
      readonly closeFactor: Option<Permill>;
      readonly liquidateIncentiveReservedFactor: Option<Permill>;
      readonly liquidateIncentive: Option<u128>;
      readonly supplyCap: Option<u128>;
      readonly borrowCap: Option<u128>;
    } & Struct;
    readonly isForceUpdateMarket: boolean;
    readonly asForceUpdateMarket: {
      readonly assetId: u32;
      readonly market: PalletLoansMarket;
    } & Struct;
    readonly isAddReward: boolean;
    readonly asAddReward: {
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawMissingReward: boolean;
    readonly asWithdrawMissingReward: {
      readonly targetAccount: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpdateMarketRewardSpeed: boolean;
    readonly asUpdateMarketRewardSpeed: {
      readonly assetId: u32;
      readonly supplyRewardPerBlock: Option<u128>;
      readonly borrowRewardPerBlock: Option<u128>;
    } & Struct;
    readonly isClaimReward: boolean;
    readonly isClaimRewardForMarket: boolean;
    readonly asClaimRewardForMarket: {
      readonly assetId: u32;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly assetId: u32;
      readonly mintAmount: Compact<u128>;
    } & Struct;
    readonly isRedeem: boolean;
    readonly asRedeem: {
      readonly assetId: u32;
      readonly redeemAmount: Compact<u128>;
    } & Struct;
    readonly isRedeemAll: boolean;
    readonly asRedeemAll: {
      readonly assetId: u32;
    } & Struct;
    readonly isBorrow: boolean;
    readonly asBorrow: {
      readonly assetId: u32;
      readonly borrowAmount: Compact<u128>;
    } & Struct;
    readonly isRepayBorrow: boolean;
    readonly asRepayBorrow: {
      readonly assetId: u32;
      readonly repayAmount: Compact<u128>;
    } & Struct;
    readonly isRepayBorrowAll: boolean;
    readonly asRepayBorrowAll: {
      readonly assetId: u32;
    } & Struct;
    readonly isCollateralAsset: boolean;
    readonly asCollateralAsset: {
      readonly assetId: u32;
      readonly enable: bool;
    } & Struct;
    readonly isLiquidateBorrow: boolean;
    readonly asLiquidateBorrow: {
      readonly borrower: AccountId32;
      readonly liquidationAssetId: u32;
      readonly repayAmount: Compact<u128>;
      readonly collateralAssetId: u32;
    } & Struct;
    readonly isAddReserves: boolean;
    readonly asAddReserves: {
      readonly payer: MultiAddress;
      readonly assetId: u32;
      readonly addAmount: Compact<u128>;
    } & Struct;
    readonly isReduceReserves: boolean;
    readonly asReduceReserves: {
      readonly receiver: MultiAddress;
      readonly assetId: u32;
      readonly reduceAmount: Compact<u128>;
    } & Struct;
    readonly isReduceIncentiveReserves: boolean;
    readonly asReduceIncentiveReserves: {
      readonly receiver: MultiAddress;
      readonly assetId: u32;
      readonly redeemAmount: Compact<u128>;
    } & Struct;
    readonly isUpdateLiquidationFreeCollateral: boolean;
    readonly asUpdateLiquidationFreeCollateral: {
      readonly collaterals: Vec<u32>;
    } & Struct;
    readonly type: 'AddMarket' | 'ActivateMarket' | 'UpdateRateModel' | 'UpdateMarket' | 'ForceUpdateMarket' | 'AddReward' | 'WithdrawMissingReward' | 'UpdateMarketRewardSpeed' | 'ClaimReward' | 'ClaimRewardForMarket' | 'Mint' | 'Redeem' | 'RedeemAll' | 'Borrow' | 'RepayBorrow' | 'RepayBorrowAll' | 'CollateralAsset' | 'LiquidateBorrow' | 'AddReserves' | 'ReduceReserves' | 'ReduceIncentiveReserves' | 'UpdateLiquidationFreeCollateral';
  }

  /** @name PalletPricesCall (298) */
  interface PalletPricesCall extends Enum {
    readonly isSetPrice: boolean;
    readonly asSetPrice: {
      readonly assetId: u32;
      readonly price: u128;
    } & Struct;
    readonly isResetPrice: boolean;
    readonly asResetPrice: {
      readonly assetId: u32;
    } & Struct;
    readonly isSetForeignAsset: boolean;
    readonly asSetForeignAsset: {
      readonly foreignAssetId: u32;
      readonly assetId: u32;
    } & Struct;
    readonly type: 'SetPrice' | 'ResetPrice' | 'SetForeignAsset';
  }

  /** @name PalletCrowdloansCall (299) */
  interface PalletCrowdloansCall extends Enum {
    readonly isCreateVault: boolean;
    readonly asCreateVault: {
      readonly crowdloan: u32;
      readonly ctoken: u32;
      readonly leaseStart: u32;
      readonly leaseEnd: u32;
      readonly contributionStrategy: PalletCrowdloansContributionStrategy;
      readonly cap: Compact<u128>;
      readonly endBlock: u32;
    } & Struct;
    readonly isUpdateVault: boolean;
    readonly asUpdateVault: {
      readonly crowdloan: u32;
      readonly cap: Option<u128>;
      readonly endBlock: Option<u32>;
      readonly contributionStrategy: Option<PalletCrowdloansContributionStrategy>;
    } & Struct;
    readonly isOpen: boolean;
    readonly asOpen: {
      readonly crowdloan: u32;
    } & Struct;
    readonly isContribute: boolean;
    readonly asContribute: {
      readonly crowdloan: u32;
      readonly amount: Compact<u128>;
      readonly referralCode: Bytes;
    } & Struct;
    readonly isSetVrf: boolean;
    readonly asSetVrf: {
      readonly flag: bool;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly crowdloan: u32;
    } & Struct;
    readonly isReopen: boolean;
    readonly asReopen: {
      readonly crowdloan: u32;
    } & Struct;
    readonly isAuctionSucceeded: boolean;
    readonly asAuctionSucceeded: {
      readonly crowdloan: u32;
    } & Struct;
    readonly isAuctionFailed: boolean;
    readonly asAuctionFailed: {
      readonly crowdloan: u32;
    } & Struct;
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly crowdloan: u32;
      readonly leaseStart: u32;
      readonly leaseEnd: u32;
    } & Struct;
    readonly isClaimFor: boolean;
    readonly asClaimFor: {
      readonly dest: MultiAddress;
      readonly crowdloan: u32;
      readonly leaseStart: u32;
      readonly leaseEnd: u32;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly crowdloan: u32;
      readonly leaseStart: u32;
      readonly leaseEnd: u32;
    } & Struct;
    readonly isWithdrawFor: boolean;
    readonly asWithdrawFor: {
      readonly dest: MultiAddress;
      readonly crowdloan: u32;
      readonly leaseStart: u32;
      readonly leaseEnd: u32;
    } & Struct;
    readonly isRedeem: boolean;
    readonly asRedeem: {
      readonly crowdloan: u32;
      readonly leaseStart: u32;
      readonly leaseEnd: u32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isSlotExpired: boolean;
    readonly asSlotExpired: {
      readonly crowdloan: u32;
    } & Struct;
    readonly isMigratePending: boolean;
    readonly asMigratePending: {
      readonly crowdloan: u32;
    } & Struct;
    readonly isNotificationReceived: boolean;
    readonly asNotificationReceived: {
      readonly queryId: u64;
      readonly response: XcmV2Response;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly crowdloan: u32;
      readonly leaseStart: u32;
      readonly leaseEnd: u32;
    } & Struct;
    readonly isDissolveVault: boolean;
    readonly asDissolveVault: {
      readonly crowdloan: u32;
      readonly leaseStart: u32;
      readonly leaseEnd: u32;
    } & Struct;
    readonly isRefundFor: boolean;
    readonly asRefundFor: {
      readonly dest: MultiAddress;
      readonly crowdloan: u32;
      readonly kind: PalletCrowdloansChildStorageKind;
      readonly amount: Compact<u128>;
      readonly leaseStart: u32;
      readonly leaseEnd: u32;
    } & Struct;
    readonly isUpdateProxy: boolean;
    readonly asUpdateProxy: {
      readonly proxyAddress: AccountId32;
    } & Struct;
    readonly isUpdateLeasesBonus: boolean;
    readonly asUpdateLeasesBonus: {
      readonly leaseStart: u32;
      readonly leaseEnd: u32;
      readonly bonusConfig: PalletCrowdloansBonusConfig;
    } & Struct;
    readonly type: 'CreateVault' | 'UpdateVault' | 'Open' | 'Contribute' | 'SetVrf' | 'Close' | 'Reopen' | 'AuctionSucceeded' | 'AuctionFailed' | 'Claim' | 'ClaimFor' | 'Withdraw' | 'WithdrawFor' | 'Redeem' | 'SlotExpired' | 'MigratePending' | 'NotificationReceived' | 'Refund' | 'DissolveVault' | 'RefundFor' | 'UpdateProxy' | 'UpdateLeasesBonus';
  }

  /** @name PalletLiquidStakingCall (301) */
  interface PalletLiquidStakingCall extends Enum {
    readonly isStake: boolean;
    readonly asStake: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUnstake: boolean;
    readonly asUnstake: {
      readonly liquidAmount: Compact<u128>;
      readonly unstakeProvider: PalletLiquidStakingUnstakeProvider;
    } & Struct;
    readonly isUpdateReserveFactor: boolean;
    readonly asUpdateReserveFactor: {
      readonly reserveFactor: Permill;
    } & Struct;
    readonly isUpdateStakingLedgerCap: boolean;
    readonly asUpdateStakingLedgerCap: {
      readonly cap: Compact<u128>;
    } & Struct;
    readonly isBond: boolean;
    readonly asBond: {
      readonly derivativeIndex: u16;
      readonly amount: Compact<u128>;
      readonly payee: PalletTraitsUmpRewardDestination;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly derivativeIndex: u16;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly derivativeIndex: u16;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly derivativeIndex: u16;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly derivativeIndex: u16;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly derivativeIndex: u16;
      readonly targets: Vec<AccountId32>;
    } & Struct;
    readonly isNotificationReceived: boolean;
    readonly asNotificationReceived: {
      readonly queryId: u64;
      readonly response: XcmV2Response;
    } & Struct;
    readonly isClaimFor: boolean;
    readonly asClaimFor: {
      readonly dest: MultiAddress;
    } & Struct;
    readonly isForceSetEraStartBlock: boolean;
    readonly asForceSetEraStartBlock: {
      readonly blockNumber: u32;
    } & Struct;
    readonly isForceSetCurrentEra: boolean;
    readonly asForceSetCurrentEra: {
      readonly era: u32;
    } & Struct;
    readonly isForceAdvanceEra: boolean;
    readonly asForceAdvanceEra: {
      readonly offset: u32;
    } & Struct;
    readonly isForceMatching: boolean;
    readonly isForceSetStakingLedger: boolean;
    readonly asForceSetStakingLedger: {
      readonly derivativeIndex: u16;
      readonly stakingLedger: PalletLiquidStakingStakingLedger;
    } & Struct;
    readonly isSetCurrentEra: boolean;
    readonly asSetCurrentEra: {
      readonly era: u32;
      readonly proof: Vec<Bytes>;
    } & Struct;
    readonly isSetStakingLedger: boolean;
    readonly asSetStakingLedger: {
      readonly derivativeIndex: u16;
      readonly stakingLedger: PalletLiquidStakingStakingLedger;
      readonly proof: Vec<Bytes>;
    } & Struct;
    readonly isReduceReserves: boolean;
    readonly asReduceReserves: {
      readonly receiver: MultiAddress;
      readonly reduceAmount: Compact<u128>;
    } & Struct;
    readonly isCancelUnstake: boolean;
    readonly asCancelUnstake: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUpdateCommissionRate: boolean;
    readonly asUpdateCommissionRate: {
      readonly commissionRate: u128;
    } & Struct;
    readonly isFastMatchUnstake: boolean;
    readonly asFastMatchUnstake: {
      readonly unstakerList: Vec<AccountId32>;
    } & Struct;
    readonly isUpdateIncentive: boolean;
    readonly asUpdateIncentive: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'Stake' | 'Unstake' | 'UpdateReserveFactor' | 'UpdateStakingLedgerCap' | 'Bond' | 'BondExtra' | 'Unbond' | 'Rebond' | 'WithdrawUnbonded' | 'Nominate' | 'NotificationReceived' | 'ClaimFor' | 'ForceSetEraStartBlock' | 'ForceSetCurrentEra' | 'ForceAdvanceEra' | 'ForceMatching' | 'ForceSetStakingLedger' | 'SetCurrentEra' | 'SetStakingLedger' | 'ReduceReserves' | 'CancelUnstake' | 'UpdateCommissionRate' | 'FastMatchUnstake' | 'UpdateIncentive';
  }

  /** @name PalletLiquidStakingUnstakeProvider (302) */
  interface PalletLiquidStakingUnstakeProvider extends Enum {
    readonly isRelayChain: boolean;
    readonly isLoans: boolean;
    readonly isMatchingPool: boolean;
    readonly type: 'RelayChain' | 'Loans' | 'MatchingPool';
  }

  /** @name PalletMembershipCall (303) */
  interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: MultiAddress;
      readonly add: MultiAddress;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletAmmCall (309) */
  interface PalletAmmCall extends Enum {
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly pair: ITuple<[u32, u32]>;
      readonly desiredAmounts: ITuple<[u128, u128]>;
      readonly minimumAmounts: ITuple<[u128, u128]>;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly pair: ITuple<[u32, u32]>;
      readonly liquidity: Compact<u128>;
    } & Struct;
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly pair: ITuple<[u32, u32]>;
      readonly liquidityAmounts: ITuple<[u128, u128]>;
      readonly lptokenReceiver: AccountId32;
      readonly lpTokenId: u32;
    } & Struct;
    readonly isUpdateProtocolFee: boolean;
    readonly asUpdateProtocolFee: {
      readonly protocolFee: Permill;
    } & Struct;
    readonly isUpdateProtocolFeeReceiver: boolean;
    readonly asUpdateProtocolFeeReceiver: {
      readonly protocolFeeReceiver: AccountId32;
    } & Struct;
    readonly type: 'AddLiquidity' | 'RemoveLiquidity' | 'CreatePool' | 'UpdateProtocolFee' | 'UpdateProtocolFeeReceiver';
  }

  /** @name PalletRouterCall (311) */
  interface PalletRouterCall extends Enum {
    readonly isSwapExactTokensForTokens: boolean;
    readonly asSwapExactTokensForTokens: {
      readonly route: Vec<u32>;
      readonly amountIn: Compact<u128>;
      readonly minAmountOut: Compact<u128>;
    } & Struct;
    readonly isSwapTokensForExactTokens: boolean;
    readonly asSwapTokensForExactTokens: {
      readonly route: Vec<u32>;
      readonly amountOut: Compact<u128>;
      readonly maxAmountIn: Compact<u128>;
    } & Struct;
    readonly type: 'SwapExactTokensForTokens' | 'SwapTokensForExactTokens';
  }

  /** @name PalletCurrencyAdapterCall (312) */
  interface PalletCurrencyAdapterCall extends Enum {
    readonly isForceSetLock: boolean;
    readonly asForceSetLock: {
      readonly asset: u32;
      readonly who: AccountId32;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceRemoveLock: boolean;
    readonly asForceRemoveLock: {
      readonly asset: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'ForceSetLock' | 'ForceRemoveLock';
  }

  /** @name PalletBridgeCall (313) */
  interface PalletBridgeCall extends Enum {
    readonly isRegisterChain: boolean;
    readonly asRegisterChain: {
      readonly chainId: u32;
    } & Struct;
    readonly isUnregisterChain: boolean;
    readonly asUnregisterChain: {
      readonly chainId: u32;
    } & Struct;
    readonly isRegisterBridgeToken: boolean;
    readonly asRegisterBridgeToken: {
      readonly assetId: u32;
      readonly bridgeToken: PalletBridgeBridgeToken;
    } & Struct;
    readonly isUnregisterBridgeToken: boolean;
    readonly asUnregisterBridgeToken: {
      readonly bridgeTokenId: u32;
    } & Struct;
    readonly isSetBridgeTokenFee: boolean;
    readonly asSetBridgeTokenFee: {
      readonly bridgeTokenId: u32;
      readonly newFee: u128;
    } & Struct;
    readonly isSetBridgeTokenStatus: boolean;
    readonly asSetBridgeTokenStatus: {
      readonly bridgeTokenId: u32;
      readonly enable: bool;
    } & Struct;
    readonly isSetBridgeTokenCap: boolean;
    readonly asSetBridgeTokenCap: {
      readonly bridgeTokenId: u32;
      readonly bridgeType: PalletBridgeBridgeType;
      readonly newCap: u128;
    } & Struct;
    readonly isCleanCapAccumulatedValue: boolean;
    readonly asCleanCapAccumulatedValue: {
      readonly bridgeTokenId: u32;
      readonly bridgeType: PalletBridgeBridgeType;
    } & Struct;
    readonly isTeleport: boolean;
    readonly asTeleport: {
      readonly destId: u32;
      readonly bridgeTokenId: u32;
      readonly to: Bytes;
      readonly amount: u128;
    } & Struct;
    readonly isMaterialize: boolean;
    readonly asMaterialize: {
      readonly srcId: u32;
      readonly srcNonce: u64;
      readonly bridgeTokenId: u32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly favour: bool;
    } & Struct;
    readonly type: 'RegisterChain' | 'UnregisterChain' | 'RegisterBridgeToken' | 'UnregisterBridgeToken' | 'SetBridgeTokenFee' | 'SetBridgeTokenStatus' | 'SetBridgeTokenCap' | 'CleanCapAccumulatedValue' | 'Teleport' | 'Materialize';
  }

  /** @name PalletBridgeBridgeToken (314) */
  interface PalletBridgeBridgeToken extends Struct {
    readonly id: u32;
    readonly external: bool;
    readonly fee: u128;
    readonly enable: bool;
    readonly outCap: u128;
    readonly outAmount: u128;
    readonly inCap: u128;
    readonly inAmount: u128;
  }

  /** @name PalletEmergencyShutdownCall (315) */
  interface PalletEmergencyShutdownCall extends Enum {
    readonly isTogglePallet: boolean;
    readonly asTogglePallet: {
      readonly palletIdx: u8;
    } & Struct;
    readonly isToggleCall: boolean;
    readonly asToggleCall: {
      readonly palletIdx: u8;
      readonly callIdx: u8;
    } & Struct;
    readonly type: 'TogglePallet' | 'ToggleCall';
  }

  /** @name PalletFarmingCall (316) */
  interface PalletFarmingCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly asset: u32;
      readonly rewardAsset: u32;
      readonly lockDuration: u32;
      readonly coolDownDuration: u32;
    } & Struct;
    readonly isSetPoolStatus: boolean;
    readonly asSetPoolStatus: {
      readonly asset: u32;
      readonly rewardAsset: u32;
      readonly lockDuration: u32;
      readonly isActive: bool;
    } & Struct;
    readonly isSetPoolCoolDownDuration: boolean;
    readonly asSetPoolCoolDownDuration: {
      readonly asset: u32;
      readonly rewardAsset: u32;
      readonly lockDuration: u32;
      readonly coolDownDuration: u32;
    } & Struct;
    readonly isResetPoolUnlockHeight: boolean;
    readonly asResetPoolUnlockHeight: {
      readonly asset: u32;
      readonly rewardAsset: u32;
      readonly lockDuration: u32;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly asset: u32;
      readonly rewardAsset: u32;
      readonly lockDuration: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly asset: u32;
      readonly rewardAsset: u32;
      readonly lockDuration: u32;
      readonly amount: u128;
    } & Struct;
    readonly isRedeem: boolean;
    readonly asRedeem: {
      readonly asset: u32;
      readonly rewardAsset: u32;
      readonly lockDuration: u32;
    } & Struct;
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly asset: u32;
      readonly rewardAsset: u32;
      readonly lockDuration: u32;
    } & Struct;
    readonly isDispatchReward: boolean;
    readonly asDispatchReward: {
      readonly asset: u32;
      readonly rewardAsset: u32;
      readonly lockDuration: u32;
      readonly payer: MultiAddress;
      readonly amount: u128;
      readonly rewardDuration: u32;
    } & Struct;
    readonly type: 'Create' | 'SetPoolStatus' | 'SetPoolCoolDownDuration' | 'ResetPoolUnlockHeight' | 'Deposit' | 'Withdraw' | 'Redeem' | 'Claim' | 'DispatchReward';
  }

  /** @name PalletXcmHelperCall (317) */
  interface PalletXcmHelperCall extends Enum {
    readonly isUpdateXcmWeightFee: boolean;
    readonly asUpdateXcmWeightFee: {
      readonly xcmCall: PalletTraitsUmpXcmCall;
      readonly xcmWeightFeeMisc: PalletTraitsUmpXcmWeightFeeMisc;
    } & Struct;
    readonly type: 'UpdateXcmWeightFee';
  }

  /** @name PalletTraitsUmpXcmCall (318) */
  interface PalletTraitsUmpXcmCall extends Enum {
    readonly isBond: boolean;
    readonly isBondExtra: boolean;
    readonly isUnbond: boolean;
    readonly isRebond: boolean;
    readonly isWithdrawUnbonded: boolean;
    readonly isNominate: boolean;
    readonly isContribute: boolean;
    readonly isWithdraw: boolean;
    readonly isAddMemo: boolean;
    readonly isTransferToSiblingchain: boolean;
    readonly asTransferToSiblingchain: XcmV1MultiLocation;
    readonly isProxy: boolean;
    readonly isAddProxy: boolean;
    readonly isRemoveProxy: boolean;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'Rebond' | 'WithdrawUnbonded' | 'Nominate' | 'Contribute' | 'Withdraw' | 'AddMemo' | 'TransferToSiblingchain' | 'Proxy' | 'AddProxy' | 'RemoveProxy';
  }

  /** @name PalletStreamingCall (319) */
  interface PalletStreamingCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly recipient: AccountId32;
      readonly deposit: u128;
      readonly assetId: u32;
      readonly startTime: u64;
      readonly endTime: u64;
      readonly cancellable: bool;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly streamId: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly streamId: u128;
      readonly amount: u128;
    } & Struct;
    readonly isSetMinimumDeposit: boolean;
    readonly asSetMinimumDeposit: {
      readonly assetId: u32;
      readonly minimumDeposit: u128;
    } & Struct;
    readonly type: 'Create' | 'Cancel' | 'Withdraw' | 'SetMinimumDeposit';
  }

  /** @name PalletAssetRegistryCall (320) */
  interface PalletAssetRegistryCall extends Enum {
    readonly isRegisterAsset: boolean;
    readonly asRegisterAsset: {
      readonly assetId: u32;
      readonly assetType: PalletTraitsXcmAssetType;
    } & Struct;
    readonly isUpdateAssetUnitsPerSecond: boolean;
    readonly asUpdateAssetUnitsPerSecond: {
      readonly assetType: PalletTraitsXcmAssetType;
      readonly unitsPerSecond: u128;
    } & Struct;
    readonly isUpdateAssetType: boolean;
    readonly asUpdateAssetType: {
      readonly assetId: u32;
      readonly newAssetType: PalletTraitsXcmAssetType;
    } & Struct;
    readonly isRemoveFeePaymentAsset: boolean;
    readonly asRemoveFeePaymentAsset: {
      readonly assetType: PalletTraitsXcmAssetType;
    } & Struct;
    readonly isDeregisterAsset: boolean;
    readonly asDeregisterAsset: {
      readonly assetId: u32;
    } & Struct;
    readonly type: 'RegisterAsset' | 'UpdateAssetUnitsPerSecond' | 'UpdateAssetType' | 'RemoveFeePaymentAsset' | 'DeregisterAsset';
  }

  /** @name PalletEvmCall (321) */
  interface PalletEvmCall extends Enum {
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly address: H160;
      readonly value: u128;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly source: H160;
      readonly target: H160;
      readonly input: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly source: H160;
      readonly init: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate2: boolean;
    readonly asCreate2: {
      readonly source: H160;
      readonly init: Bytes;
      readonly salt: H256;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly type: 'Withdraw' | 'Call' | 'Create' | 'Create2';
  }

  /** @name PalletEthereumCall (325) */
  interface PalletEthereumCall extends Enum {
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly transaction: EthereumTransactionTransactionV2;
    } & Struct;
    readonly type: 'Transact';
  }

  /** @name EthereumTransactionTransactionV2 (326) */
  interface EthereumTransactionTransactionV2 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumTransactionLegacyTransaction;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumTransactionEip2930Transaction;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumTransactionEip1559Transaction;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumTransactionLegacyTransaction (327) */
  interface EthereumTransactionLegacyTransaction extends Struct {
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly signature: EthereumTransactionTransactionSignature;
  }

  /** @name EthereumTransactionTransactionAction (328) */
  interface EthereumTransactionTransactionAction extends Enum {
    readonly isCall: boolean;
    readonly asCall: H160;
    readonly isCreate: boolean;
    readonly type: 'Call' | 'Create';
  }

  /** @name EthereumTransactionTransactionSignature (329) */
  interface EthereumTransactionTransactionSignature extends Struct {
    readonly v: u64;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionEip2930Transaction (331) */
  interface EthereumTransactionEip2930Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionAccessListItem (333) */
  interface EthereumTransactionAccessListItem extends Struct {
    readonly address: H160;
    readonly storageKeys: Vec<H256>;
  }

  /** @name EthereumTransactionEip1559Transaction (334) */
  interface EthereumTransactionEip1559Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly maxPriorityFeePerGas: U256;
    readonly maxFeePerGas: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name PalletBaseFeeCall (335) */
  interface PalletBaseFeeCall extends Enum {
    readonly isSetBaseFeePerGas: boolean;
    readonly asSetBaseFeePerGas: {
      readonly fee: U256;
    } & Struct;
    readonly isSetElasticity: boolean;
    readonly asSetElasticity: {
      readonly elasticity: Permill;
    } & Struct;
    readonly type: 'SetBaseFeePerGas' | 'SetElasticity';
  }

  /** @name PalletEvmSignaturesCall (336) */
  interface PalletEvmSignaturesCall extends Enum {
    readonly isCall: boolean;
    readonly asCall: {
      readonly call: Call;
      readonly signer: AccountId32;
      readonly signature: Bytes;
      readonly nonce: Compact<u32>;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly asset: u32;
      readonly address: H160;
      readonly value: u128;
    } & Struct;
    readonly type: 'Call' | 'Withdraw';
  }

  /** @name CumulusPalletParachainSystemCall (337) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (338) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV2PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotPrimitivesV2PersistedValidationData (339) */
  interface PolkadotPrimitivesV2PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name SpTrieStorageProof (341) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (344) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (347) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name HeikoRuntimeOriginCaller (350) */
  interface HeikoRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isGeneralCouncil: boolean;
    readonly asGeneralCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly isEthereum: boolean;
    readonly asEthereum: PalletEthereumRawOrigin;
    readonly type: 'System' | 'Void' | 'GeneralCouncil' | 'TechnicalCommittee' | 'PolkadotXcm' | 'CumulusXcm' | 'Ethereum';
  }

  /** @name FrameSupportDispatchRawOrigin (351) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (352) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PalletXcmOrigin (354) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV1MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: XcmV1MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name CumulusPalletXcmOrigin (355) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name PalletEthereumRawOrigin (356) */
  interface PalletEthereumRawOrigin extends Enum {
    readonly isEthereumTransaction: boolean;
    readonly asEthereumTransaction: H160;
    readonly type: 'EthereumTransaction';
  }

  /** @name SpCoreVoid (357) */
  type SpCoreVoid = Null;

  /** @name PalletUtilityError (358) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletMultisigMultisig (360) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (362) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletBalancesBalanceLock (364) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (365) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (368) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesError (370) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name PalletTransactionPaymentReleases (371) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletAssetsAssetDetails (372) */
  interface PalletAssetsAssetDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly supply: u128;
    readonly deposit: u128;
    readonly minBalance: u128;
    readonly isSufficient: bool;
    readonly accounts: u32;
    readonly sufficients: u32;
    readonly approvals: u32;
    readonly status: PalletAssetsAssetStatus;
  }

  /** @name PalletAssetsAssetStatus (373) */
  interface PalletAssetsAssetStatus extends Enum {
    readonly isLive: boolean;
    readonly isFrozen: boolean;
    readonly isDestroying: boolean;
    readonly type: 'Live' | 'Frozen' | 'Destroying';
  }

  /** @name PalletAssetsAssetAccount (375) */
  interface PalletAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly isFrozen: bool;
    readonly reason: PalletAssetsExistenceReason;
    readonly extra: Null;
  }

  /** @name PalletAssetsExistenceReason (376) */
  interface PalletAssetsExistenceReason extends Enum {
    readonly isConsumer: boolean;
    readonly isSufficient: boolean;
    readonly isDepositHeld: boolean;
    readonly asDepositHeld: u128;
    readonly isDepositRefunded: boolean;
    readonly type: 'Consumer' | 'Sufficient' | 'DepositHeld' | 'DepositRefunded';
  }

  /** @name PalletAssetsApproval (378) */
  interface PalletAssetsApproval extends Struct {
    readonly amount: u128;
    readonly deposit: u128;
  }

  /** @name PalletAssetsAssetMetadata (379) */
  interface PalletAssetsAssetMetadata extends Struct {
    readonly deposit: u128;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly isFrozen: bool;
  }

  /** @name PalletAssetsError (381) */
  interface PalletAssetsError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isNoAccount: boolean;
    readonly isNoPermission: boolean;
    readonly isUnknown: boolean;
    readonly isFrozen: boolean;
    readonly isInUse: boolean;
    readonly isBadWitness: boolean;
    readonly isMinBalanceZero: boolean;
    readonly isNoProvider: boolean;
    readonly isBadMetadata: boolean;
    readonly isUnapproved: boolean;
    readonly isWouldDie: boolean;
    readonly isAlreadyExists: boolean;
    readonly isNoDeposit: boolean;
    readonly isWouldBurn: boolean;
    readonly isLiveAsset: boolean;
    readonly isAssetNotLive: boolean;
    readonly isIncorrectStatus: boolean;
    readonly isNotFrozen: boolean;
    readonly type: 'BalanceLow' | 'NoAccount' | 'NoPermission' | 'Unknown' | 'Frozen' | 'InUse' | 'BadWitness' | 'MinBalanceZero' | 'NoProvider' | 'BadMetadata' | 'Unapproved' | 'WouldDie' | 'AlreadyExists' | 'NoDeposit' | 'WouldBurn' | 'LiveAsset' | 'AssetNotLive' | 'IncorrectStatus' | 'NotFrozen';
  }

  /** @name PalletProxyProxyDefinition (384) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: HeikoRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (388) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (390) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletIdentityRegistration (391) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (399) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (401) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
  }

  /** @name PalletDemocracyReferendumInfo (407) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (408) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (409) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (410) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (414) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (415) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyError (418) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow';
  }

  /** @name PalletCollectiveVotes (420) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (421) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name PalletTreasuryProposal (424) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (426) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (427) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletSchedulerScheduled (430) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: HeikoRuntimeOriginCaller;
  }

  /** @name PalletSchedulerError (432) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletPreimageRequestStatus (433) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (438) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (440) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (441) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesXcmpMessageFormat (444) */
  interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (447) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (448) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (450) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: SpWeightsWeightV2Weight;
    readonly weightRestrictDecay: SpWeightsWeightV2Weight;
    readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletXcmpQueueError (452) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
  }

  /** @name CumulusPalletDmpQueueConfigData (453) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (454) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (457) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly type: 'Unknown' | 'OverLimit';
  }

  /** @name PalletXcmQueryStatus (458) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedMultiLocation;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedMultiLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: XcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name XcmVersionedResponse (461) */
  interface XcmVersionedResponse extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0Response;
    readonly isV1: boolean;
    readonly asV1: XcmV1Response;
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly type: 'V0' | 'V1' | 'V2';
  }

  /** @name PalletXcmVersionMigrationStage (467) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name PalletXcmError (469) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed';
  }

  /** @name CumulusPalletXcmError (470) */
  type CumulusPalletXcmError = Null;

  /** @name PalletAuthorshipUncleEntryItem (472) */
  interface PalletAuthorshipUncleEntryItem extends Enum {
    readonly isInclusionHeight: boolean;
    readonly asInclusionHeight: u32;
    readonly isUncle: boolean;
    readonly asUncle: ITuple<[H256, Option<AccountId32>]>;
    readonly type: 'InclusionHeight' | 'Uncle';
  }

  /** @name PalletAuthorshipError (474) */
  interface PalletAuthorshipError extends Enum {
    readonly isInvalidUncleParent: boolean;
    readonly isUnclesAlreadySet: boolean;
    readonly isTooManyUncles: boolean;
    readonly isGenesisUncle: boolean;
    readonly isTooHighUncle: boolean;
    readonly isUncleAlreadyIncluded: boolean;
    readonly isOldUncle: boolean;
    readonly type: 'InvalidUncleParent' | 'UnclesAlreadySet' | 'TooManyUncles' | 'GenesisUncle' | 'TooHighUncle' | 'UncleAlreadyIncluded' | 'OldUncle';
  }

  /** @name PalletCollatorSelectionCandidateInfo (477) */
  interface PalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletCollatorSelectionError (479) */
  interface PalletCollatorSelectionError extends Enum {
    readonly isTooManyCandidates: boolean;
    readonly isTooFewCandidates: boolean;
    readonly isUnknown: boolean;
    readonly isPermission: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isTooManyInvulnerables: boolean;
    readonly isAlreadyInvulnerable: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isValidatorNotRegistered: boolean;
    readonly type: 'TooManyCandidates' | 'TooFewCandidates' | 'Unknown' | 'Permission' | 'AlreadyCandidate' | 'NotCandidate' | 'TooManyInvulnerables' | 'AlreadyInvulnerable' | 'NoAssociatedValidatorId' | 'ValidatorNotRegistered';
  }

  /** @name SpCoreCryptoKeyTypeId (483) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (484) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name OrmlOracleModuleTimestampedValue (489) */
  interface OrmlOracleModuleTimestampedValue extends Struct {
    readonly value: u128;
    readonly timestamp: u64;
  }

  /** @name OrmlUtilitiesOrderedSet (490) */
  interface OrmlUtilitiesOrderedSet extends Vec<AccountId32> {}

  /** @name OrmlOracleModuleError (492) */
  interface OrmlOracleModuleError extends Enum {
    readonly isNoPermission: boolean;
    readonly isAlreadyFeeded: boolean;
    readonly type: 'NoPermission' | 'AlreadyFeeded';
  }

  /** @name OrmlXtokensModuleError (493) */
  interface OrmlXtokensModuleError extends Enum {
    readonly isAssetHasNoReserve: boolean;
    readonly isNotCrossChainTransfer: boolean;
    readonly isInvalidDest: boolean;
    readonly isNotCrossChainTransferableCurrency: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isXcmExecutionFailed: boolean;
    readonly isCannotReanchor: boolean;
    readonly isInvalidAncestry: boolean;
    readonly isInvalidAsset: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isBadVersion: boolean;
    readonly isDistinctReserveForAssetAndFee: boolean;
    readonly isZeroFee: boolean;
    readonly isZeroAmount: boolean;
    readonly isTooManyAssetsBeingSent: boolean;
    readonly isAssetIndexNonExistent: boolean;
    readonly isFeeNotEnough: boolean;
    readonly isNotSupportedMultiLocation: boolean;
    readonly isMinXcmFeeNotDefined: boolean;
    readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedMultiLocation' | 'MinXcmFeeNotDefined';
  }

  /** @name OrmlXcmModuleError (494) */
  interface OrmlXcmModuleError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isBadVersion: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'BadVersion';
  }

  /** @name OrmlVestingModuleError (496) */
  interface OrmlVestingModuleError extends Enum {
    readonly isZeroVestingPeriod: boolean;
    readonly isZeroVestingPeriodCount: boolean;
    readonly isInsufficientBalanceToLock: boolean;
    readonly isTooManyVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isMaxVestingSchedulesExceeded: boolean;
    readonly type: 'ZeroVestingPeriod' | 'ZeroVestingPeriodCount' | 'InsufficientBalanceToLock' | 'TooManyVestingSchedules' | 'AmountLow' | 'MaxVestingSchedulesExceeded';
  }

  /** @name PalletLoansBorrowSnapshot (497) */
  interface PalletLoansBorrowSnapshot extends Struct {
    readonly principal: u128;
    readonly borrowIndex: u128;
  }

  /** @name PalletLoansDeposits (498) */
  interface PalletLoansDeposits extends Struct {
    readonly voucherBalance: u128;
    readonly isCollateral: bool;
  }

  /** @name PalletLoansEarnedSnapshot (499) */
  interface PalletLoansEarnedSnapshot extends Struct {
    readonly totalEarnedPrior: u128;
    readonly exchangeRatePrior: u128;
  }

  /** @name PalletLoansRewardMarketState (500) */
  interface PalletLoansRewardMarketState extends Struct {
    readonly index: u128;
    readonly block: u32;
  }

  /** @name PalletLoansVersions (501) */
  interface PalletLoansVersions extends Enum {
    readonly isV1: boolean;
    readonly isV2: boolean;
    readonly isV3: boolean;
    readonly isV4: boolean;
    readonly isV5: boolean;
    readonly isV6: boolean;
    readonly type: 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6';
  }

  /** @name PalletLoansError (502) */
  interface PalletLoansError extends Enum {
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientDeposit: boolean;
    readonly isTooMuchRepay: boolean;
    readonly isDuplicateOperation: boolean;
    readonly isNoDeposit: boolean;
    readonly isInsufficientCollateral: boolean;
    readonly isLiquidatorIsBorrower: boolean;
    readonly isDepositsAreNotCollateral: boolean;
    readonly isInsufficientShortfall: boolean;
    readonly isInsufficientReserves: boolean;
    readonly isInvalidRateModelParam: boolean;
    readonly isMarketNotActivated: boolean;
    readonly isPriceOracleNotReady: boolean;
    readonly isPriceIsZero: boolean;
    readonly isInvalidCurrencyId: boolean;
    readonly isInvalidPtokenId: boolean;
    readonly isMarketDoesNotExist: boolean;
    readonly isMarketAlreadyExists: boolean;
    readonly isNewMarketMustHavePendingState: boolean;
    readonly isSupplyCapacityExceeded: boolean;
    readonly isBorrowCapacityExceeded: boolean;
    readonly isInsufficientCash: boolean;
    readonly isInvalidFactor: boolean;
    readonly isInvalidSupplyCap: boolean;
    readonly isInvalidExchangeRate: boolean;
    readonly isInvalidAmount: boolean;
    readonly isPayerIsSigner: boolean;
    readonly isCodecError: boolean;
    readonly isCollateralReserved: boolean;
    readonly type: 'InsufficientLiquidity' | 'InsufficientDeposit' | 'TooMuchRepay' | 'DuplicateOperation' | 'NoDeposit' | 'InsufficientCollateral' | 'LiquidatorIsBorrower' | 'DepositsAreNotCollateral' | 'InsufficientShortfall' | 'InsufficientReserves' | 'InvalidRateModelParam' | 'MarketNotActivated' | 'PriceOracleNotReady' | 'PriceIsZero' | 'InvalidCurrencyId' | 'InvalidPtokenId' | 'MarketDoesNotExist' | 'MarketAlreadyExists' | 'NewMarketMustHavePendingState' | 'SupplyCapacityExceeded' | 'BorrowCapacityExceeded' | 'InsufficientCash' | 'InvalidFactor' | 'InvalidSupplyCap' | 'InvalidExchangeRate' | 'InvalidAmount' | 'PayerIsSigner' | 'CodecError' | 'CollateralReserved';
  }

  /** @name PalletCrowdloansVault (504) */
  interface PalletCrowdloansVault extends Struct {
    readonly ctoken: u32;
    readonly phase: PalletCrowdloansVaultPhase;
    readonly contributed: u128;
    readonly pending: u128;
    readonly flying: u128;
    readonly contributionStrategy: PalletCrowdloansContributionStrategy;
    readonly cap: u128;
    readonly endBlock: u32;
    readonly trieIndex: u32;
    readonly leaseStart: u32;
    readonly leaseEnd: u32;
  }

  /** @name PalletCrowdloansXcmRequest (505) */
  interface PalletCrowdloansXcmRequest extends Enum {
    readonly isContribute: boolean;
    readonly asContribute: {
      readonly crowdloan: u32;
      readonly vaultId: ITuple<[u32, u32]>;
      readonly who: AccountId32;
      readonly amount: u128;
      readonly referralCode: Bytes;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly crowdloan: u32;
      readonly vaultId: ITuple<[u32, u32]>;
      readonly amount: u128;
      readonly targetPhase: PalletCrowdloansVaultPhase;
    } & Struct;
    readonly type: 'Contribute' | 'Withdraw';
  }

  /** @name PalletCrowdloansReleases (506) */
  interface PalletCrowdloansReleases extends Enum {
    readonly isV000: boolean;
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V000' | 'V100' | 'V200';
  }

  /** @name PalletCrowdloansError (507) */
  interface PalletCrowdloansError extends Enum {
    readonly isIncorrectVaultPhase: boolean;
    readonly isCrowdloanAlreadyExists: boolean;
    readonly isInsufficientContribution: boolean;
    readonly isNoContributions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isLastPeriodBeforeFirstPeriod: boolean;
    readonly isCTokenDoesNotExist: boolean;
    readonly isVaultAlreadyExists: boolean;
    readonly isVaultDoesNotExist: boolean;
    readonly isInvalidCToken: boolean;
    readonly isVaultNotEnded: boolean;
    readonly isVrfDelayInProgress: boolean;
    readonly isCapExceeded: boolean;
    readonly isEndBlockExceeded: boolean;
    readonly isInvalidCap: boolean;
    readonly isInvalidParams: boolean;
    readonly isNotReadyToDissolve: boolean;
    readonly isEmptyProxyAddress: boolean;
    readonly isWrongBonusConfig: boolean;
    readonly type: 'IncorrectVaultPhase' | 'CrowdloanAlreadyExists' | 'InsufficientContribution' | 'NoContributions' | 'InsufficientBalance' | 'LastPeriodBeforeFirstPeriod' | 'CTokenDoesNotExist' | 'VaultAlreadyExists' | 'VaultDoesNotExist' | 'InvalidCToken' | 'VaultNotEnded' | 'VrfDelayInProgress' | 'CapExceeded' | 'EndBlockExceeded' | 'InvalidCap' | 'InvalidParams' | 'NotReadyToDissolve' | 'EmptyProxyAddress' | 'WrongBonusConfig';
  }

  /** @name PalletLiquidStakingMatchingLedger (508) */
  interface PalletLiquidStakingMatchingLedger extends Struct {
    readonly totalStakeAmount: PalletLiquidStakingReservableAmount;
    readonly totalUnstakeAmount: PalletLiquidStakingReservableAmount;
  }

  /** @name PalletLiquidStakingReservableAmount (509) */
  interface PalletLiquidStakingReservableAmount extends Struct {
    readonly total: u128;
    readonly reserved: u128;
  }

  /** @name PalletLiquidStakingXcmRequest (510) */
  interface PalletLiquidStakingXcmRequest extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly index: u16;
      readonly amount: u128;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly index: u16;
      readonly amount: u128;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly index: u16;
      readonly amount: u128;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly index: u16;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly index: u16;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly index: u16;
      readonly targets: Vec<AccountId32>;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'Rebond' | 'WithdrawUnbonded' | 'Nominate';
  }

  /** @name PalletLiquidStakingVersions (511) */
  interface PalletLiquidStakingVersions extends Enum {
    readonly isV1: boolean;
    readonly isV2: boolean;
    readonly isV3: boolean;
    readonly type: 'V1' | 'V2' | 'V3';
  }

  /** @name PalletLiquidStakingError (513) */
  interface PalletLiquidStakingError extends Enum {
    readonly isInvalidExchangeRate: boolean;
    readonly isStakeTooSmall: boolean;
    readonly isUnstakeTooSmall: boolean;
    readonly isInvalidLiquidCurrency: boolean;
    readonly isInvalidStakingCurrency: boolean;
    readonly isInvalidDerivativeIndex: boolean;
    readonly isInvalidStakingLedger: boolean;
    readonly isCapExceeded: boolean;
    readonly isInvalidCap: boolean;
    readonly isInvalidFactor: boolean;
    readonly isNothingToClaim: boolean;
    readonly isNotBonded: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isStakingLedgerLocked: boolean;
    readonly isNotWithdrawn: boolean;
    readonly isInsufficientBond: boolean;
    readonly isInvalidProof: boolean;
    readonly isNoUnlockings: boolean;
    readonly isInvalidCommissionRate: boolean;
    readonly type: 'InvalidExchangeRate' | 'StakeTooSmall' | 'UnstakeTooSmall' | 'InvalidLiquidCurrency' | 'InvalidStakingCurrency' | 'InvalidDerivativeIndex' | 'InvalidStakingLedger' | 'CapExceeded' | 'InvalidCap' | 'InvalidFactor' | 'NothingToClaim' | 'NotBonded' | 'AlreadyBonded' | 'NoMoreChunks' | 'StakingLedgerLocked' | 'NotWithdrawn' | 'InsufficientBond' | 'InvalidProof' | 'NoUnlockings' | 'InvalidCommissionRate';
  }

  /** @name PalletMembershipError (515) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name PalletTraitsPool (526) */
  interface PalletTraitsPool extends Struct {
    readonly baseAmount: u128;
    readonly quoteAmount: u128;
    readonly baseAmountLast: u128;
    readonly quoteAmountLast: u128;
    readonly lpTokenId: u32;
    readonly blockTimestampLast: u32;
    readonly price0CumulativeLast: u128;
    readonly price1CumulativeLast: u128;
  }

  /** @name PalletAmmError (527) */
  interface PalletAmmError extends Enum {
    readonly isPoolDoesNotExist: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isNotAnIdealPrice: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly isInsufficientAmountOut: boolean;
    readonly isInsufficientAmountIn: boolean;
    readonly isInsufficientSupplyOut: boolean;
    readonly isIdenticalAssets: boolean;
    readonly isLpTokenAlreadyExists: boolean;
    readonly isConversionToU128Failed: boolean;
    readonly isProtocolFeeReceiverNotSet: boolean;
    readonly type: 'PoolDoesNotExist' | 'InsufficientLiquidity' | 'NotAnIdealPrice' | 'PoolAlreadyExists' | 'InsufficientAmountOut' | 'InsufficientAmountIn' | 'InsufficientSupplyOut' | 'IdenticalAssets' | 'LpTokenAlreadyExists' | 'ConversionToU128Failed' | 'ProtocolFeeReceiverNotSet';
  }

  /** @name PalletRouterError (528) */
  interface PalletRouterError extends Enum {
    readonly isZeroBalance: boolean;
    readonly isEmptyRoute: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExceedMaxLengthRoute: boolean;
    readonly isDuplicatedRoute: boolean;
    readonly isMaximumAmountInViolated: boolean;
    readonly isMinimumAmountOutViolated: boolean;
    readonly isTokenDoesNotExists: boolean;
    readonly isNoPossibleRoute: boolean;
    readonly type: 'ZeroBalance' | 'EmptyRoute' | 'InsufficientBalance' | 'ExceedMaxLengthRoute' | 'DuplicatedRoute' | 'MaximumAmountInViolated' | 'MinimumAmountOutViolated' | 'TokenDoesNotExists' | 'NoPossibleRoute';
  }

  /** @name PalletCurrencyAdapterError (529) */
  interface PalletCurrencyAdapterError extends Enum {
    readonly isNotANativeToken: boolean;
    readonly type: 'NotANativeToken';
  }

  /** @name PalletBridgeMaterializeCall (534) */
  interface PalletBridgeMaterializeCall extends Struct {
    readonly bridgeTokenId: u32;
    readonly to: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletBridgeProposal (535) */
  interface PalletBridgeProposal extends Struct {
    readonly votesFor: Vec<AccountId32>;
    readonly votesAgainst: Vec<AccountId32>;
    readonly status: PalletBridgeProposalStatus;
    readonly expiry: u32;
  }

  /** @name PalletBridgeProposalStatus (536) */
  interface PalletBridgeProposalStatus extends Enum {
    readonly isInitiated: boolean;
    readonly isApproved: boolean;
    readonly isRejected: boolean;
    readonly type: 'Initiated' | 'Approved' | 'Rejected';
  }

  /** @name PalletBridgeError (537) */
  interface PalletBridgeError extends Enum {
    readonly isInvalidVoteThreshold: boolean;
    readonly isOriginNoPermission: boolean;
    readonly isChainIdAlreadyRegistered: boolean;
    readonly isChainIdNotRegistered: boolean;
    readonly isBridgeTokenAlreadyRegistered: boolean;
    readonly isBridgeTokenNotRegistered: boolean;
    readonly isBridgeTokenDisabled: boolean;
    readonly isMemberAlreadyVoted: boolean;
    readonly isBridgingAmountTooLow: boolean;
    readonly isBridgeOutCapExceeded: boolean;
    readonly isBridgeInCapExceeded: boolean;
    readonly isProposalDoesNotExist: boolean;
    readonly isProposalAlreadyComplete: boolean;
    readonly isProposalExpired: boolean;
    readonly type: 'InvalidVoteThreshold' | 'OriginNoPermission' | 'ChainIdAlreadyRegistered' | 'ChainIdNotRegistered' | 'BridgeTokenAlreadyRegistered' | 'BridgeTokenNotRegistered' | 'BridgeTokenDisabled' | 'MemberAlreadyVoted' | 'BridgingAmountTooLow' | 'BridgeOutCapExceeded' | 'BridgeInCapExceeded' | 'ProposalDoesNotExist' | 'ProposalAlreadyComplete' | 'ProposalExpired';
  }

  /** @name PalletFarmingPoolInfo (539) */
  interface PalletFarmingPoolInfo extends Struct {
    readonly isActive: bool;
    readonly totalDeposited: u128;
    readonly unlockHeight: u32;
    readonly coolDownDuration: u32;
    readonly rewardDuration: u32;
    readonly periodFinish: u32;
    readonly lastUpdateBlock: u32;
    readonly rewardRate: u128;
    readonly rewardPerShareStored: u128;
  }

  /** @name PalletFarmingUserPosition (541) */
  interface PalletFarmingUserPosition extends Struct {
    readonly depositBalance: u128;
    readonly lockBalanceItems: Vec<ITuple<[u128, u32]>>;
    readonly rewardAmount: u128;
    readonly rewardPerSharePaid: u128;
  }

  /** @name PalletFarmingError (545) */
  interface PalletFarmingError extends Enum {
    readonly isPoolDoesNotExist: boolean;
    readonly isPoolAlreadyExists: boolean;
    readonly isPoolIsNotActive: boolean;
    readonly isPoolInStatus: boolean;
    readonly isNotAValidDuration: boolean;
    readonly isPoolIsInTargetCoolDownDuration: boolean;
    readonly isNotAValidAmount: boolean;
    readonly isPoolUnderLock: boolean;
    readonly isDepositBalanceLow: boolean;
    readonly isCodecError: boolean;
    readonly isExcessMaxLockDuration: boolean;
    readonly isExcessMaxCoolDownDuration: boolean;
    readonly isExcessMaxUserLockItemsCount: boolean;
    readonly isRewardNotFinish: boolean;
    readonly type: 'PoolDoesNotExist' | 'PoolAlreadyExists' | 'PoolIsNotActive' | 'PoolInStatus' | 'NotAValidDuration' | 'PoolIsInTargetCoolDownDuration' | 'NotAValidAmount' | 'PoolUnderLock' | 'DepositBalanceLow' | 'CodecError' | 'ExcessMaxLockDuration' | 'ExcessMaxCoolDownDuration' | 'ExcessMaxUserLockItemsCount' | 'RewardNotFinish';
  }

  /** @name PalletXcmHelperError (546) */
  interface PalletXcmHelperError extends Enum {
    readonly isMultiLocationNotInvertible: boolean;
    readonly isZeroXcmWeightMisc: boolean;
    readonly isZeroXcmFees: boolean;
    readonly isInsufficientXcmFees: boolean;
    readonly isSendFailure: boolean;
    readonly isConvertAccountError: boolean;
    readonly type: 'MultiLocationNotInvertible' | 'ZeroXcmWeightMisc' | 'ZeroXcmFees' | 'InsufficientXcmFees' | 'SendFailure' | 'ConvertAccountError';
  }

  /** @name PalletStreamingStream (547) */
  interface PalletStreamingStream extends Struct {
    readonly remainingBalance: u128;
    readonly deposit: u128;
    readonly assetId: u32;
    readonly ratePerSec: u128;
    readonly sender: AccountId32;
    readonly recipient: AccountId32;
    readonly startTime: u64;
    readonly endTime: u64;
    readonly status: PalletStreamingStreamStatus;
    readonly cancellable: bool;
  }

  /** @name PalletStreamingStreamStatus (548) */
  interface PalletStreamingStreamStatus extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: {
      readonly asCollateral: bool;
    } & Struct;
    readonly isCompleted: boolean;
    readonly asCompleted: {
      readonly cancelled: bool;
    } & Struct;
    readonly type: 'Ongoing' | 'Completed';
  }

  /** @name PalletStreamingStreamKind (550) */
  interface PalletStreamingStreamKind extends Enum {
    readonly isSend: boolean;
    readonly isReceive: boolean;
    readonly isFinish: boolean;
    readonly type: 'Send' | 'Receive' | 'Finish';
  }

  /** @name PalletStreamingError (553) */
  interface PalletStreamingError extends Enum {
    readonly isRecipientIsAlsoSender: boolean;
    readonly isInvalidAssetId: boolean;
    readonly isDepositLowerThanMinimum: boolean;
    readonly isStartTimeBeforeCurrentTime: boolean;
    readonly isEndTimeBeforeStartTime: boolean;
    readonly isInvalidDuration: boolean;
    readonly isInvalidRatePerSecond: boolean;
    readonly isInvalidStreamId: boolean;
    readonly isNotTheSender: boolean;
    readonly isNotTheRecipient: boolean;
    readonly isCannotBeCancelled: boolean;
    readonly isInsufficientStreamBalance: boolean;
    readonly isExcessMaxStreamsCount: boolean;
    readonly isNotStarted: boolean;
    readonly isHasFinished: boolean;
    readonly type: 'RecipientIsAlsoSender' | 'InvalidAssetId' | 'DepositLowerThanMinimum' | 'StartTimeBeforeCurrentTime' | 'EndTimeBeforeStartTime' | 'InvalidDuration' | 'InvalidRatePerSecond' | 'InvalidStreamId' | 'NotTheSender' | 'NotTheRecipient' | 'CannotBeCancelled' | 'InsufficientStreamBalance' | 'ExcessMaxStreamsCount' | 'NotStarted' | 'HasFinished';
  }

  /** @name PalletAssetRegistryError (555) */
  interface PalletAssetRegistryError extends Enum {
    readonly isAssetAlreadyExists: boolean;
    readonly isAssetDoesNotExist: boolean;
    readonly type: 'AssetAlreadyExists' | 'AssetDoesNotExist';
  }

  /** @name PalletEvmError (557) */
  interface PalletEvmError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isFeeOverflow: boolean;
    readonly isPaymentOverflow: boolean;
    readonly isWithdrawFailed: boolean;
    readonly isGasPriceTooLow: boolean;
    readonly isInvalidNonce: boolean;
    readonly isGasLimitTooLow: boolean;
    readonly isGasLimitTooHigh: boolean;
    readonly isUndefined: boolean;
    readonly isReentrancy: boolean;
    readonly type: 'BalanceLow' | 'FeeOverflow' | 'PaymentOverflow' | 'WithdrawFailed' | 'GasPriceTooLow' | 'InvalidNonce' | 'GasLimitTooLow' | 'GasLimitTooHigh' | 'Undefined' | 'Reentrancy';
  }

  /** @name FpRpcTransactionStatus (560) */
  interface FpRpcTransactionStatus extends Struct {
    readonly transactionHash: H256;
    readonly transactionIndex: u32;
    readonly from: H160;
    readonly to: Option<H160>;
    readonly contractAddress: Option<H160>;
    readonly logs: Vec<EthereumLog>;
    readonly logsBloom: EthbloomBloom;
  }

  /** @name EthbloomBloom (563) */
  interface EthbloomBloom extends U8aFixed {}

  /** @name EthereumReceiptReceiptV3 (565) */
  interface EthereumReceiptReceiptV3 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumReceiptEip658ReceiptData;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumReceiptEip658ReceiptData;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumReceiptEip658ReceiptData;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumReceiptEip658ReceiptData (566) */
  interface EthereumReceiptEip658ReceiptData extends Struct {
    readonly statusCode: u8;
    readonly usedGas: U256;
    readonly logsBloom: EthbloomBloom;
    readonly logs: Vec<EthereumLog>;
  }

  /** @name EthereumBlock (567) */
  interface EthereumBlock extends Struct {
    readonly header: EthereumHeader;
    readonly transactions: Vec<EthereumTransactionTransactionV2>;
    readonly ommers: Vec<EthereumHeader>;
  }

  /** @name EthereumHeader (568) */
  interface EthereumHeader extends Struct {
    readonly parentHash: H256;
    readonly ommersHash: H256;
    readonly beneficiary: H160;
    readonly stateRoot: H256;
    readonly transactionsRoot: H256;
    readonly receiptsRoot: H256;
    readonly logsBloom: EthbloomBloom;
    readonly difficulty: U256;
    readonly number: U256;
    readonly gasLimit: U256;
    readonly gasUsed: U256;
    readonly timestamp: u64;
    readonly extraData: Bytes;
    readonly mixHash: H256;
    readonly nonce: EthereumTypesHashH64;
  }

  /** @name EthereumTypesHashH64 (569) */
  interface EthereumTypesHashH64 extends U8aFixed {}

  /** @name PalletEthereumError (574) */
  interface PalletEthereumError extends Enum {
    readonly isInvalidSignature: boolean;
    readonly isPreLogExists: boolean;
    readonly type: 'InvalidSignature' | 'PreLogExists';
  }

  /** @name PalletEvmSignaturesError (575) */
  interface PalletEvmSignaturesError extends Enum {
    readonly isDecodeFailure: boolean;
    readonly isInvalidSignature: boolean;
    readonly isBadNonce: boolean;
    readonly type: 'DecodeFailure' | 'InvalidSignature' | 'BadNonce';
  }

  /** @name PolkadotPrimitivesV2UpgradeRestriction (577) */
  interface PolkadotPrimitivesV2UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (578) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
  }

  /** @name PolkadotPrimitivesV2AbridgedHrmpChannel (581) */
  interface PolkadotPrimitivesV2AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV2AbridgedHostConfiguration (582) */
  interface PolkadotPrimitivesV2AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (588) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemError (589) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name SpRuntimeMultiSignature (591) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (592) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (594) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (595) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (598) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (599) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (600) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (601) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (604) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (605) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (606) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name HeikoRuntimeRuntime (608) */
  type HeikoRuntimeRuntime = Null;

} // declare module
