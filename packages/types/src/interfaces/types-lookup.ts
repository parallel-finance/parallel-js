// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

declare module '@polkadot/types/lookup' {
  import type { Data } from '@polkadot/types';
  import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U8aFixed, Vec, WrapperKeepOpaque, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
  import type { ITuple } from '@polkadot/types-codec/types';
  import type { Vote } from '@polkadot/types/interfaces/elections';
  import type { AccountId32, Call, H256, MultiAddress, Perbill, Permill } from '@polkadot/types/interfaces/runtime';
  import type { Event } from '@polkadot/types/interfaces/system';

  /** @name FrameSystemAccountInfo (3) */
  export interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  export interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  }

  /** @name FrameSupportWeightsPerDispatchClassU64 (7) */
  export interface FrameSupportWeightsPerDispatchClassU64 extends Struct {
    readonly normal: u64;
    readonly operational: u64;
    readonly mandatory: u64;
  }

  /** @name SpRuntimeDigest (11) */
  export interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (13) */
  export interface SpRuntimeDigestDigestItem extends Enum {
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

  /** @name FrameSystemEventRecord (16) */
  export interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (18) */
  export interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo;
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

  /** @name FrameSupportWeightsDispatchInfo (19) */
  export interface FrameSupportWeightsDispatchInfo extends Struct {
    readonly weight: u64;
    readonly class: FrameSupportWeightsDispatchClass;
    readonly paysFee: FrameSupportWeightsPays;
  }

  /** @name FrameSupportWeightsDispatchClass (20) */
  export interface FrameSupportWeightsDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportWeightsPays (21) */
  export interface FrameSupportWeightsPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (22) */
  export interface SpRuntimeDispatchError extends Enum {
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
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional';
  }

  /** @name SpRuntimeModuleError (23) */
  export interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (24) */
  export interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (25) */
  export interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (26) */
  export interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletUtilityEvent (27) */
  export interface PalletUtilityEvent extends Enum {
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

  /** @name PalletMultisigEvent (30) */
  export interface PalletMultisigEvent extends Enum {
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

  /** @name PalletMultisigTimepoint (31) */
  export interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletBalancesEvent (32) */
  export interface PalletBalancesEvent extends Enum {
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

  /** @name FrameSupportTokensMiscBalanceStatus (33) */
  export interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletAssetsEvent (34) */
  export interface PalletAssetsEvent extends Enum {
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
    readonly type: 'Created' | 'Issued' | 'Transferred' | 'Burned' | 'TeamChanged' | 'OwnerChanged' | 'Frozen' | 'Thawed' | 'AssetFrozen' | 'AssetThawed' | 'Destroyed' | 'ForceCreated' | 'MetadataSet' | 'MetadataCleared' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'TransferredApproved' | 'AssetStatusChanged';
  }

  /** @name PalletProxyEvent (36) */
  export interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isAnonymousCreated: boolean;
    readonly asAnonymousCreated: {
      readonly anonymous: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: KerriaRuntimeProxyType;
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
      readonly proxyType: KerriaRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: KerriaRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'AnonymousCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name KerriaRuntimeProxyType (37) */
  export interface KerriaRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isLoans: boolean;
    readonly isStaking: boolean;
    readonly isCrowdloans: boolean;
    readonly isFarming: boolean;
    readonly isStreaming: boolean;
    readonly isGovernance: boolean;
    readonly type: 'Any' | 'Loans' | 'Staking' | 'Crowdloans' | 'Farming' | 'Streaming' | 'Governance';
  }

  /** @name PalletIdentityEvent (39) */
  export interface PalletIdentityEvent extends Enum {
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

  /** @name PalletSudoEvent (40) */
  export interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name PalletDemocracyEvent (42) */
  export interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
      readonly depositors: Vec<AccountId32>;
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
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly refIndex: u32;
      readonly result: Result<Null, SpRuntimeDispatchError>;
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
    readonly isPreimageNoted: boolean;
    readonly asPreimageNoted: {
      readonly proposalHash: H256;
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isPreimageUsed: boolean;
    readonly asPreimageUsed: {
      readonly proposalHash: H256;
      readonly provider: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isPreimageInvalid: boolean;
    readonly asPreimageInvalid: {
      readonly proposalHash: H256;
      readonly refIndex: u32;
    } & Struct;
    readonly isPreimageMissing: boolean;
    readonly asPreimageMissing: {
      readonly proposalHash: H256;
      readonly refIndex: u32;
    } & Struct;
    readonly isPreimageReaped: boolean;
    readonly asPreimageReaped: {
      readonly proposalHash: H256;
      readonly provider: AccountId32;
      readonly deposit: u128;
      readonly reaper: AccountId32;
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
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Executed' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'PreimageNoted' | 'PreimageUsed' | 'PreimageInvalid' | 'PreimageMissing' | 'PreimageReaped' | 'Blacklisted' | 'Voted' | 'Seconded';
  }

  /** @name PalletDemocracyVoteThreshold (44) */
  export interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (45) */
  export interface PalletDemocracyVoteAccountVote extends Enum {
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
  export interface PalletCollectiveEvent extends Enum {
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
  export interface PalletTreasuryEvent extends Enum {
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
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit';
  }

  /** @name PalletSchedulerEvent (50) */
  export interface PalletSchedulerEvent extends Enum {
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
      readonly id: Option<Bytes>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallLookupFailed: boolean;
    readonly asCallLookupFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<Bytes>;
      readonly error: FrameSupportScheduleLookupError;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallLookupFailed';
  }

  /** @name FrameSupportScheduleLookupError (53) */
  export interface FrameSupportScheduleLookupError extends Enum {
    readonly isUnknown: boolean;
    readonly isBadFormat: boolean;
    readonly type: 'Unknown' | 'BadFormat';
  }

  /** @name PalletPreimageEvent (54) */
  export interface PalletPreimageEvent extends Enum {
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

  /** @name CumulusPalletXcmpQueueEvent (55) */
  export interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: Option<H256>;
    readonly isFail: boolean;
    readonly asFail: ITuple<[Option<H256>, XcmV2TraitsError]>;
    readonly isBadVersion: boolean;
    readonly asBadVersion: Option<H256>;
    readonly isBadFormat: boolean;
    readonly asBadFormat: Option<H256>;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: Option<H256>;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: Option<H256>;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: ITuple<[u32, u32, u64, u64]>;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: ITuple<[u64, u64]>;
    readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'UpwardMessageSent' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name XcmV2TraitsError (57) */
  export interface XcmV2TraitsError extends Enum {
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

  /** @name CumulusPalletDmpQueueEvent (59) */
  export interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV2TraitsOutcome]>;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: ITuple<[U8aFixed, u64, u64]>;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: ITuple<[U8aFixed, u64, u64]>;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: ITuple<[u64, u64]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name XcmV2TraitsOutcome (60) */
  export interface XcmV2TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: u64;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[u64, XcmV2TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV2TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name PalletXcmEvent (61) */
  export interface PalletXcmEvent extends Enum {
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
    readonly asNotifyOverweight: ITuple<[u64, u8, u8, u64, u64]>;
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
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail';
  }

  /** @name XcmV1MultiLocation (62) */
  export interface XcmV1MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV1MultilocationJunctions;
  }

  /** @name XcmV1MultilocationJunctions (63) */
  export interface XcmV1MultilocationJunctions extends Enum {
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

  /** @name XcmV1Junction (64) */
  export interface XcmV1Junction extends Enum {
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

  /** @name XcmV0JunctionNetworkId (66) */
  export interface XcmV0JunctionNetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV0JunctionBodyId (70) */
  export interface XcmV0JunctionBodyId extends Enum {
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

  /** @name XcmV0JunctionBodyPart (71) */
  export interface XcmV0JunctionBodyPart extends Enum {
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

  /** @name XcmV2Xcm (72) */
  export interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (74) */
  export interface XcmV2Instruction extends Enum {
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

  /** @name XcmV1MultiassetMultiAssets (75) */
  export interface XcmV1MultiassetMultiAssets extends Vec<XcmV1MultiAsset> {}

  /** @name XcmV1MultiAsset (77) */
  export interface XcmV1MultiAsset extends Struct {
    readonly id: XcmV1MultiassetAssetId;
    readonly fun: XcmV1MultiassetFungibility;
  }

  /** @name XcmV1MultiassetAssetId (78) */
  export interface XcmV1MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV1MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV1MultiassetFungibility (79) */
  export interface XcmV1MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV1MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV1MultiassetAssetInstance (80) */
  export interface XcmV1MultiassetAssetInstance extends Enum {
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

  /** @name XcmV2Response (83) */
  export interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV1MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV0OriginKind (86) */
  export interface XcmV0OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (87) */
  export interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV1MultiassetMultiAssetFilter (88) */
  export interface XcmV1MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV1MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV1MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV1MultiassetWildMultiAsset (89) */
  export interface XcmV1MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV1MultiassetAssetId;
      readonly fun: XcmV1MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV1MultiassetWildFungibility (90) */
  export interface XcmV1MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (91) */
  export interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedMultiAssets (93) */
  export interface XcmVersionedMultiAssets extends Enum {
    readonly isV0: boolean;
    readonly asV0: Vec<XcmV0MultiAsset>;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiassetMultiAssets;
    readonly type: 'V0' | 'V1';
  }

  /** @name XcmV0MultiAsset (95) */
  export interface XcmV0MultiAsset extends Enum {
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

  /** @name XcmV0MultiLocation (96) */
  export interface XcmV0MultiLocation extends Enum {
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

  /** @name XcmV0Junction (97) */
  export interface XcmV0Junction extends Enum {
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

  /** @name XcmVersionedMultiLocation (98) */
  export interface XcmVersionedMultiLocation extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0MultiLocation;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiLocation;
    readonly type: 'V0' | 'V1';
  }

  /** @name CumulusPalletXcmEvent (99) */
  export interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV2TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name PalletCollatorSelectionEvent (100) */
  export interface PalletCollatorSelectionEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: Vec<AccountId32>;
    readonly isNewDesiredCandidates: boolean;
    readonly asNewDesiredCandidates: u32;
    readonly isNewCandidacyBond: boolean;
    readonly asNewCandidacyBond: u128;
    readonly isCandidateAdded: boolean;
    readonly asCandidateAdded: ITuple<[AccountId32, u128]>;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: AccountId32;
    readonly type: 'NewInvulnerables' | 'NewDesiredCandidates' | 'NewCandidacyBond' | 'CandidateAdded' | 'CandidateRemoved';
  }

  /** @name PalletSessionEvent (101) */
  export interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name OrmlOracleModuleEvent (102) */
  export interface OrmlOracleModuleEvent extends Enum {
    readonly isNewFeedData: boolean;
    readonly asNewFeedData: {
      readonly sender: AccountId32;
      readonly values: Vec<ITuple<[u32, u128]>>;
    } & Struct;
    readonly type: 'NewFeedData';
  }

  /** @name OrmlXtokensModuleEvent (106) */
  export interface OrmlXtokensModuleEvent extends Enum {
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
  export interface OrmlXcmModuleEvent extends Enum {
    readonly isSent: boolean;
    readonly asSent: {
      readonly to: XcmV1MultiLocation;
      readonly message: XcmV2Xcm;
    } & Struct;
    readonly type: 'Sent';
  }

  /** @name OrmlVestingModuleEvent (108) */
  export interface OrmlVestingModuleEvent extends Enum {
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
  export interface OrmlVestingVestingSchedule extends Struct {
    readonly start: u32;
    readonly period: u32;
    readonly periodCount: u32;
    readonly perPeriod: Compact<u128>;
  }

  /** @name PalletLoansEvent (110) */
  export interface PalletLoansEvent extends Enum {
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
  export interface PalletLoansMarket extends Struct {
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
  export interface PalletLoansRateModelInterestRateModel extends Enum {
    readonly isJump: boolean;
    readonly asJump: PalletLoansRateModelJumpModel;
    readonly isCurve: boolean;
    readonly asCurve: PalletLoansRateModelCurveModel;
    readonly type: 'Jump' | 'Curve';
  }

  /** @name PalletLoansRateModelJumpModel (114) */
  export interface PalletLoansRateModelJumpModel extends Struct {
    readonly baseRate: u128;
    readonly jumpRate: u128;
    readonly fullRate: u128;
    readonly jumpUtilization: Permill;
  }

  /** @name PalletLoansRateModelCurveModel (115) */
  export interface PalletLoansRateModelCurveModel extends Struct {
    readonly baseRate: u128;
  }

  /** @name PalletLoansMarketState (116) */
  export interface PalletLoansMarketState extends Enum {
    readonly isActive: boolean;
    readonly isPending: boolean;
    readonly isSupervision: boolean;
    readonly type: 'Active' | 'Pending' | 'Supervision';
  }

  /** @name PalletPricesEvent (118) */
  export interface PalletPricesEvent extends Enum {
    readonly isSetPrice: boolean;
    readonly asSetPrice: ITuple<[u32, u128]>;
    readonly isResetPrice: boolean;
    readonly asResetPrice: u32;
    readonly type: 'SetPrice' | 'ResetPrice';
  }

  /** @name PalletCrowdloansEvent (119) */
  export interface PalletCrowdloansEvent extends Enum {
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
    readonly type: 'VaultCreated' | 'VaultUpdated' | 'VaultPhaseUpdated' | 'VaultDoContributing' | 'VaultDoWithdrawing' | 'VaultContributed' | 'VaultClaimed' | 'VaultWithdrew' | 'VaultRedeemed' | 'VrfUpdated' | 'NotificationReceived' | 'AllMigrated' | 'PartiallyMigrated' | 'VaultDissolved' | 'AllRefunded' | 'PartiallyRefunded' | 'UserRefunded';
  }

  /** @name PalletCrowdloansVaultPhase (120) */
  export interface PalletCrowdloansVaultPhase extends Enum {
    readonly isPending: boolean;
    readonly isContributing: boolean;
    readonly isClosed: boolean;
    readonly isFailed: boolean;
    readonly isSucceeded: boolean;
    readonly isExpired: boolean;
    readonly type: 'Pending' | 'Contributing' | 'Closed' | 'Failed' | 'Succeeded' | 'Expired';
  }

  /** @name PalletCrowdloansContributionStrategy (121) */
  export interface PalletCrowdloansContributionStrategy extends Enum {
    readonly isXcm: boolean;
    readonly type: 'Xcm';
  }

  /** @name PalletCrowdloansChildStorageKind (122) */
  export interface PalletCrowdloansChildStorageKind extends Enum {
    readonly isPending: boolean;
    readonly isFlying: boolean;
    readonly isContributed: boolean;
    readonly type: 'Pending' | 'Flying' | 'Contributed';
  }

  /** @name PalletLiquidStakingEvent (123) */
  export interface PalletLiquidStakingEvent extends Enum {
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
    readonly type: 'Staked' | 'Unstaked' | 'StakingLedgerUpdated' | 'Bonding' | 'BondingExtra' | 'Unbonding' | 'Rebonding' | 'WithdrawingUnbonded' | 'Nominating' | 'StakingLedgerCapUpdated' | 'ReserveFactorUpdated' | 'ExchangeRateUpdated' | 'NotificationReceived' | 'ClaimedFor' | 'NewEra' | 'Matching' | 'ReservesReduced' | 'UnstakeCancelled';
  }

  /** @name PalletLiquidStakingStakingLedger (124) */
  export interface PalletLiquidStakingStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PalletLiquidStakingUnlockChunk>;
    readonly claimedRewards: Vec<u32>;
  }

  /** @name PalletLiquidStakingUnlockChunk (126) */
  export interface PalletLiquidStakingUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletTraitsUmpRewardDestination (127) */
  export interface PalletTraitsUmpRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletMembershipEvent (128) */
  export interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name PalletAmmEvent (134) */
  export interface PalletAmmEvent extends Enum {
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: ITuple<[AccountId32, u32, u32, u128, u128, u32, u128, u128]>;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: ITuple<[AccountId32, u32, u32, u128, u128, u128, u32, u128, u128]>;
    readonly isPoolCreated: boolean;
    readonly asPoolCreated: ITuple<[AccountId32, u32, u32, u32]>;
    readonly isTraded: boolean;
    readonly asTraded: ITuple<[AccountId32, u32, u32, u128, u128, u32, u128, u128]>;
    readonly type: 'LiquidityAdded' | 'LiquidityRemoved' | 'PoolCreated' | 'Traded';
  }

  /** @name PalletRouterEvent (135) */
  export interface PalletRouterEvent extends Enum {
    readonly isTraded: boolean;
    readonly asTraded: ITuple<[AccountId32, u128, Vec<u32>, u128]>;
    readonly type: 'Traded';
  }

  /** @name PalletBridgeEvent (136) */
  export interface PalletBridgeEvent extends Enum {
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

  /** @name PalletBridgeBridgeType (137) */
  export interface PalletBridgeBridgeType extends Enum {
    readonly isBridgeOut: boolean;
    readonly isBridgeIn: boolean;
    readonly type: 'BridgeOut' | 'BridgeIn';
  }

  /** @name PalletEmergencyShutdownEvent (138) */
  export interface PalletEmergencyShutdownEvent extends Enum {
    readonly isToggledPallet: boolean;
    readonly asToggledPallet: bool;
    readonly isToggledCall: boolean;
    readonly asToggledCall: bool;
    readonly type: 'ToggledPallet' | 'ToggledCall';
  }

  /** @name PalletFarmingEvent (139) */
  export interface PalletFarmingEvent extends Enum {
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

  /** @name PalletXcmHelperEvent (140) */
  export interface PalletXcmHelperEvent extends Enum {
    readonly isXcmWeightFeeUpdated: boolean;
    readonly asXcmWeightFeeUpdated: PalletTraitsUmpXcmWeightFeeMisc;
    readonly type: 'XcmWeightFeeUpdated';
  }

  /** @name PalletTraitsUmpXcmWeightFeeMisc (141) */
  export interface PalletTraitsUmpXcmWeightFeeMisc extends Struct {
    readonly weight: u64;
    readonly fee: u128;
  }

  /** @name PalletStreamingEvent (142) */
  export interface PalletStreamingEvent extends Enum {
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

  /** @name PalletAssetRegistryEvent (143) */
  export interface PalletAssetRegistryEvent extends Enum {
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

  /** @name PalletTraitsXcmAssetType (144) */
  export interface PalletTraitsXcmAssetType extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV1MultiLocation;
    readonly type: 'Xcm';
  }

  /** @name CumulusPalletParachainSystemEvent (145) */
  export interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: u32;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: H256;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: u32;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: ITuple<[u64, H256]>;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed';
  }

  /** @name FrameSystemPhase (146) */
  export interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (149) */
  export interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (151) */
  export interface FrameSystemCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
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
    readonly type: 'FillBlock' | 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (156) */
  export interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: u64;
    readonly maxBlock: u64;
    readonly perClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportWeightsPerDispatchClassWeightsPerClass (157) */
  export interface FrameSupportWeightsPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (158) */
  export interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: Option<u64>;
    readonly maxTotal: Option<u64>;
    readonly reserved: Option<u64>;
  }

  /** @name FrameSystemLimitsBlockLength (160) */
  export interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportWeightsPerDispatchClassU32;
  }

  /** @name FrameSupportWeightsPerDispatchClassU32 (161) */
  export interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name FrameSupportWeightsRuntimeDbWeight (162) */
  export interface FrameSupportWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (163) */
  export interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (167) */
  export interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (168) */
  export interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletUtilityCall (169) */
  export interface PalletUtilityCall extends Enum {
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
      readonly asOrigin: KerriaRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch';
  }

  /** @name PalletMultisigCall (172) */
  export interface PalletMultisigCall extends Enum {
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
      readonly call: WrapperKeepOpaque<Call>;
      readonly storeCall: bool;
      readonly maxWeight: u64;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: u64;
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

  /** @name PalletBalancesCall (175) */
  export interface PalletBalancesCall extends Enum {
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

  /** @name PalletAssetsCall (178) */
  export interface PalletAssetsCall extends Enum {
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
    readonly isDestroy: boolean;
    readonly asDestroy: {
      readonly id: Compact<u32>;
      readonly witness: PalletAssetsDestroyWitness;
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
    readonly type: 'Create' | 'ForceCreate' | 'Destroy' | 'Mint' | 'Burn' | 'Transfer' | 'TransferKeepAlive' | 'ForceTransfer' | 'Freeze' | 'Thaw' | 'FreezeAsset' | 'ThawAsset' | 'TransferOwnership' | 'SetTeam' | 'SetMetadata' | 'ClearMetadata' | 'ForceSetMetadata' | 'ForceClearMetadata' | 'ForceAssetStatus' | 'ApproveTransfer' | 'CancelApproval' | 'ForceCancelApproval' | 'TransferApproved' | 'Touch' | 'Refund';
  }

  /** @name PalletAssetsDestroyWitness (179) */
  export interface PalletAssetsDestroyWitness extends Struct {
    readonly accounts: Compact<u32>;
    readonly sufficients: Compact<u32>;
    readonly approvals: Compact<u32>;
  }

  /** @name PalletProxyCall (180) */
  export interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: AccountId32;
      readonly forceProxyType: Option<KerriaRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: AccountId32;
      readonly proxyType: KerriaRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: AccountId32;
      readonly proxyType: KerriaRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isAnonymous: boolean;
    readonly asAnonymous: {
      readonly proxyType: KerriaRuntimeProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillAnonymous: boolean;
    readonly asKillAnonymous: {
      readonly spawner: AccountId32;
      readonly proxyType: KerriaRuntimeProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: AccountId32;
      readonly real: AccountId32;
      readonly forceProxyType: Option<KerriaRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'Anonymous' | 'KillAnonymous' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletIdentityCall (182) */
  export interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: AccountId32;
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
      readonly new_: AccountId32;
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

  /** @name PalletIdentityIdentityInfo (183) */
  export interface PalletIdentityIdentityInfo extends Struct {
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

  /** @name PalletIdentityBitFlags (219) */
  export interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (220) */
  export interface PalletIdentityIdentityField extends Enum {
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

  /** @name PalletIdentityJudgement (221) */
  export interface PalletIdentityJudgement extends Enum {
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

  /** @name PalletSudoCall (222) */
  export interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: u64;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletDemocracyCall (223) */
  export interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposalHash: H256;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
      readonly secondsUpperBound: Compact<u32>;
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
      readonly proposalHash: H256;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposalHash: H256;
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
    readonly isCancelQueued: boolean;
    readonly asCancelQueued: {
      readonly which: u32;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNotePreimageOperational: boolean;
    readonly asNotePreimageOperational: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNoteImminentPreimage: boolean;
    readonly asNoteImminentPreimage: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isNoteImminentPreimageOperational: boolean;
    readonly asNoteImminentPreimageOperational: {
      readonly encodedProposal: Bytes;
    } & Struct;
    readonly isReapPreimage: boolean;
    readonly asReapPreimage: {
      readonly proposalHash: H256;
      readonly proposalLenUpperBound: Compact<u32>;
    } & Struct;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: AccountId32;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isEnactProposal: boolean;
    readonly asEnactProposal: {
      readonly proposalHash: H256;
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
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'CancelQueued' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'NotePreimage' | 'NotePreimageOperational' | 'NoteImminentPreimage' | 'NoteImminentPreimageOperational' | 'ReapPreimage' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'EnactProposal' | 'Blacklist' | 'CancelProposal';
  }

  /** @name PalletDemocracyConviction (224) */
  export interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletCollectiveCall (226) */
  export interface PalletCollectiveCall extends Enum {
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
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: Compact<u64>;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'Close' | 'DisapproveProposal';
  }

  /** @name PalletTreasuryCall (228) */
  export interface PalletTreasuryCall extends Enum {
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
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'RemoveApproval';
  }

  /** @name PalletSchedulerCall (229) */
  export interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: Bytes;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: Bytes;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: Bytes;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: FrameSupportScheduleMaybeHashed;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name FrameSupportScheduleMaybeHashed (231) */
  export interface FrameSupportScheduleMaybeHashed extends Enum {
    readonly isValue: boolean;
    readonly asValue: Call;
    readonly isHash: boolean;
    readonly asHash: H256;
    readonly type: 'Value' | 'Hash';
  }

  /** @name PalletPreimageCall (232) */
  export interface PalletPreimageCall extends Enum {
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

  /** @name CumulusPalletXcmpQueueCall (233) */
  export interface CumulusPalletXcmpQueueCall extends Enum {
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

  /** @name CumulusPalletDmpQueueCall (234) */
  export interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: u64;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name PalletXcmCall (235) */
  export interface PalletXcmCall extends Enum {
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

  /** @name XcmVersionedXcm (236) */
  export interface XcmVersionedXcm extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0Xcm;
    readonly isV1: boolean;
    readonly asV1: XcmV1Xcm;
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly type: 'V0' | 'V1' | 'V2';
  }

  /** @name XcmV0Xcm (237) */
  export interface XcmV0Xcm extends Enum {
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

  /** @name XcmV0Order (239) */
  export interface XcmV0Order extends Enum {
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

  /** @name XcmV0Response (241) */
  export interface XcmV0Response extends Enum {
    readonly isAssets: boolean;
    readonly asAssets: Vec<XcmV0MultiAsset>;
    readonly type: 'Assets';
  }

  /** @name XcmV1Xcm (242) */
  export interface XcmV1Xcm extends Enum {
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

  /** @name XcmV1Order (244) */
  export interface XcmV1Order extends Enum {
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

  /** @name XcmV1Response (246) */
  export interface XcmV1Response extends Enum {
    readonly isAssets: boolean;
    readonly asAssets: XcmV1MultiassetMultiAssets;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Assets' | 'Version';
  }

  /** @name CumulusPalletXcmCall (260) */
  export type CumulusPalletXcmCall = Null;

  /** @name PalletAuthorshipCall (261) */
  export interface PalletAuthorshipCall extends Enum {
    readonly isSetUncles: boolean;
    readonly asSetUncles: {
      readonly newUncles: Vec<SpRuntimeHeader>;
    } & Struct;
    readonly type: 'SetUncles';
  }

  /** @name SpRuntimeHeader (263) */
  export interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeDigest;
  }

  /** @name SpRuntimeBlakeTwo256 (264) */
  export type SpRuntimeBlakeTwo256 = Null;

  /** @name PalletCollatorSelectionCall (265) */
  export interface PalletCollatorSelectionCall extends Enum {
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

  /** @name PalletSessionCall (266) */
  export interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: KerriaRuntimeOpaqueSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name KerriaRuntimeOpaqueSessionKeys (267) */
  export interface KerriaRuntimeOpaqueSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (268) */
  export interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (269) */
  export interface SpCoreSr25519Public extends U8aFixed {}

  /** @name OrmlOracleModuleCall (270) */
  export interface OrmlOracleModuleCall extends Enum {
    readonly isFeedValues: boolean;
    readonly asFeedValues: {
      readonly values: Vec<ITuple<[u32, u128]>>;
    } & Struct;
    readonly type: 'FeedValues';
  }

  /** @name OrmlXtokensModuleCall (271) */
  export interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: u32;
      readonly amount: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: u32;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: XcmVersionedMultiAsset;
      readonly fee: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[u32, u128]>>;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: XcmVersionedMultiAssets;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeight: u64;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name XcmVersionedMultiAsset (272) */
  export interface XcmVersionedMultiAsset extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0MultiAsset;
    readonly isV1: boolean;
    readonly asV1: XcmV1MultiAsset;
    readonly type: 'V0' | 'V1';
  }

  /** @name OrmlXcmModuleCall (275) */
  export interface OrmlXcmModuleCall extends Enum {
    readonly isSendAsSovereign: boolean;
    readonly asSendAsSovereign: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly type: 'SendAsSovereign';
  }

  /** @name OrmlVestingModuleCall (276) */
  export interface OrmlVestingModuleCall extends Enum {
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

  /** @name PalletLoansCall (278) */
  export interface PalletLoansCall extends Enum {
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

  /** @name PalletPricesCall (282) */
  export interface PalletPricesCall extends Enum {
    readonly isSetPrice: boolean;
    readonly asSetPrice: {
      readonly assetId: u32;
      readonly price: u128;
    } & Struct;
    readonly isResetPrice: boolean;
    readonly asResetPrice: {
      readonly assetId: u32;
    } & Struct;
    readonly type: 'SetPrice' | 'ResetPrice';
  }

  /** @name PalletCrowdloansCall (283) */
  export interface PalletCrowdloansCall extends Enum {
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
    readonly type: 'CreateVault' | 'UpdateVault' | 'Open' | 'Contribute' | 'SetVrf' | 'Close' | 'Reopen' | 'AuctionSucceeded' | 'AuctionFailed' | 'Claim' | 'ClaimFor' | 'Withdraw' | 'WithdrawFor' | 'Redeem' | 'SlotExpired' | 'MigratePending' | 'NotificationReceived' | 'Refund' | 'DissolveVault' | 'RefundFor';
  }

  /** @name PalletLiquidStakingCall (285) */
  export interface PalletLiquidStakingCall extends Enum {
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
    readonly type: 'Stake' | 'Unstake' | 'UpdateReserveFactor' | 'UpdateStakingLedgerCap' | 'Bond' | 'BondExtra' | 'Unbond' | 'Rebond' | 'WithdrawUnbonded' | 'Nominate' | 'NotificationReceived' | 'ClaimFor' | 'ForceSetEraStartBlock' | 'ForceSetCurrentEra' | 'ForceAdvanceEra' | 'ForceMatching' | 'ForceSetStakingLedger' | 'SetCurrentEra' | 'SetStakingLedger' | 'ReduceReserves' | 'CancelUnstake';
  }

  /** @name PalletLiquidStakingUnstakeProvider (286) */
  export interface PalletLiquidStakingUnstakeProvider extends Enum {
    readonly isRelayChain: boolean;
    readonly isLoans: boolean;
    readonly type: 'RelayChain' | 'Loans';
  }

  /** @name PalletMembershipCall (287) */
  export interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: AccountId32;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: AccountId32;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: AccountId32;
      readonly add: AccountId32;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: AccountId32;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: AccountId32;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name PalletAmmCall (293) */
  export interface PalletAmmCall extends Enum {
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
    readonly type: 'AddLiquidity' | 'RemoveLiquidity' | 'CreatePool';
  }

  /** @name PalletRouterCall (295) */
  export interface PalletRouterCall extends Enum {
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

  /** @name PalletCurrencyAdapterCall (296) */
  export interface PalletCurrencyAdapterCall extends Enum {
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

  /** @name PalletBridgeCall (297) */
  export interface PalletBridgeCall extends Enum {
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

  /** @name PalletBridgeBridgeToken (298) */
  export interface PalletBridgeBridgeToken extends Struct {
    readonly id: u32;
    readonly external: bool;
    readonly fee: u128;
    readonly enable: bool;
    readonly outCap: u128;
    readonly outAmount: u128;
    readonly inCap: u128;
    readonly inAmount: u128;
  }

  /** @name PalletEmergencyShutdownCall (299) */
  export interface PalletEmergencyShutdownCall extends Enum {
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

  /** @name PalletFarmingCall (300) */
  export interface PalletFarmingCall extends Enum {
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

  /** @name PalletXcmHelperCall (301) */
  export interface PalletXcmHelperCall extends Enum {
    readonly isUpdateXcmWeightFee: boolean;
    readonly asUpdateXcmWeightFee: {
      readonly xcmCall: PalletTraitsUmpXcmCall;
      readonly xcmWeightFeeMisc: PalletTraitsUmpXcmWeightFeeMisc;
    } & Struct;
    readonly type: 'UpdateXcmWeightFee';
  }

  /** @name PalletTraitsUmpXcmCall (302) */
  export interface PalletTraitsUmpXcmCall extends Enum {
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

  /** @name PalletStreamingCall (303) */
  export interface PalletStreamingCall extends Enum {
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

  /** @name PalletAssetRegistryCall (304) */
  export interface PalletAssetRegistryCall extends Enum {
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

  /** @name CumulusPalletParachainSystemCall (305) */
  export interface CumulusPalletParachainSystemCall extends Enum {
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

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (306) */
  export interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV2PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotPrimitivesV2PersistedValidationData (307) */
  export interface PolkadotPrimitivesV2PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name SpTrieStorageProof (309) */
  export interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (312) */
  export interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (315) */
  export interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name KerriaRuntimeOriginCaller (318) */
  export interface KerriaRuntimeOriginCaller extends Enum {
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
    readonly type: 'System' | 'Void' | 'GeneralCouncil' | 'TechnicalCommittee' | 'PolkadotXcm' | 'CumulusXcm';
  }

  /** @name FrameSupportDispatchRawOrigin (319) */
  export interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (320) */
  export interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PalletXcmOrigin (322) */
  export interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV1MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: XcmV1MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name CumulusPalletXcmOrigin (323) */
  export interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name SpCoreVoid (324) */
  export type SpCoreVoid = Null;

  /** @name PalletUtilityError (325) */
  export interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletMultisigMultisig (327) */
  export interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (329) */
  export interface PalletMultisigError extends Enum {
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

  /** @name PalletBalancesBalanceLock (331) */
  export interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (332) */
  export interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (335) */
  export interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesReleases (337) */
  export interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name PalletBalancesError (338) */
  export interface PalletBalancesError extends Enum {
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

  /** @name PalletTransactionPaymentReleases (339) */
  export interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name FrameSupportWeightsWeightToFeeCoefficient (341) */
  export interface FrameSupportWeightsWeightToFeeCoefficient extends Struct {
    readonly coeffInteger: u128;
    readonly coeffFrac: Perbill;
    readonly negative: bool;
    readonly degree: u8;
  }

  /** @name PalletAssetsAssetDetails (342) */
  export interface PalletAssetsAssetDetails extends Struct {
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
    readonly isFrozen: bool;
  }

  /** @name PalletAssetsAssetAccount (344) */
  export interface PalletAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly isFrozen: bool;
    readonly reason: PalletAssetsExistenceReason;
    readonly extra: Null;
  }

  /** @name PalletAssetsExistenceReason (345) */
  export interface PalletAssetsExistenceReason extends Enum {
    readonly isConsumer: boolean;
    readonly isSufficient: boolean;
    readonly isDepositHeld: boolean;
    readonly asDepositHeld: u128;
    readonly isDepositRefunded: boolean;
    readonly type: 'Consumer' | 'Sufficient' | 'DepositHeld' | 'DepositRefunded';
  }

  /** @name PalletAssetsApproval (347) */
  export interface PalletAssetsApproval extends Struct {
    readonly amount: u128;
    readonly deposit: u128;
  }

  /** @name PalletAssetsAssetMetadata (348) */
  export interface PalletAssetsAssetMetadata extends Struct {
    readonly deposit: u128;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly isFrozen: bool;
  }

  /** @name PalletAssetsError (350) */
  export interface PalletAssetsError extends Enum {
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
    readonly type: 'BalanceLow' | 'NoAccount' | 'NoPermission' | 'Unknown' | 'Frozen' | 'InUse' | 'BadWitness' | 'MinBalanceZero' | 'NoProvider' | 'BadMetadata' | 'Unapproved' | 'WouldDie' | 'AlreadyExists' | 'NoDeposit' | 'WouldBurn';
  }

  /** @name PalletProxyProxyDefinition (353) */
  export interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: KerriaRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (357) */
  export interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (359) */
  export interface PalletProxyError extends Enum {
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

  /** @name PalletIdentityRegistration (360) */
  export interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (368) */
  export interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (370) */
  export interface PalletIdentityError extends Enum {
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
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned';
  }

  /** @name PalletSudoError (371) */
  export interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletDemocracyPreimageStatus (375) */
  export interface PalletDemocracyPreimageStatus extends Enum {
    readonly isMissing: boolean;
    readonly asMissing: u32;
    readonly isAvailable: boolean;
    readonly asAvailable: {
      readonly data: Bytes;
      readonly provider: AccountId32;
      readonly deposit: u128;
      readonly since: u32;
      readonly expiry: Option<u32>;
    } & Struct;
    readonly type: 'Missing' | 'Available';
  }

  /** @name PalletDemocracyReferendumInfo (376) */
  export interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (377) */
  export interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposalHash: H256;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (378) */
  export interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (379) */
  export interface PalletDemocracyVoteVoting extends Enum {
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

  /** @name PalletDemocracyDelegations (382) */
  export interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (383) */
  export interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyReleases (386) */
  export interface PalletDemocracyReleases extends Enum {
    readonly isV1: boolean;
    readonly type: 'V1';
  }

  /** @name PalletDemocracyError (387) */
  export interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isDuplicatePreimage: boolean;
    readonly isNotImminent: boolean;
    readonly isTooEarly: boolean;
    readonly isImminent: boolean;
    readonly isPreimageMissing: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isPreimageInvalid: boolean;
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
    readonly isTooManyProposals: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'DuplicatePreimage' | 'NotImminent' | 'TooEarly' | 'Imminent' | 'PreimageMissing' | 'ReferendumInvalid' | 'PreimageInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooManyProposals';
  }

  /** @name PalletCollectiveVotes (389) */
  export interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (390) */
  export interface PalletCollectiveError extends Enum {
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

  /** @name PalletTreasuryProposal (393) */
  export interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (395) */
  export interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (396) */
  export interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'ProposalNotApproved';
  }

  /** @name PalletSchedulerScheduledV3 (399) */
  export interface PalletSchedulerScheduledV3 extends Struct {
    readonly maybeId: Option<Bytes>;
    readonly priority: u8;
    readonly call: FrameSupportScheduleMaybeHashed;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: KerriaRuntimeOriginCaller;
  }

  /** @name PalletSchedulerError (400) */
  export interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange';
  }

  /** @name PalletPreimageRequestStatus (401) */
  export interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: Option<ITuple<[AccountId32, u128]>>;
    readonly isRequested: boolean;
    readonly asRequested: u32;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (405) */
  export interface PalletPreimageError extends Enum {
    readonly isTooLarge: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooLarge' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (407) */
  export interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (408) */
  export interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesXcmpMessageFormat (411) */
  export interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (414) */
  export interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (415) */
  export interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (417) */
  export interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: u64;
    readonly weightRestrictDecay: u64;
    readonly xcmpMaxIndividualWeight: u64;
  }

  /** @name CumulusPalletXcmpQueueError (419) */
  export interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
  }

  /** @name CumulusPalletDmpQueueConfigData (420) */
  export interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: u64;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (421) */
  export interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (424) */
  export interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly type: 'Unknown' | 'OverLimit';
  }

  /** @name PalletXcmQueryStatus (425) */
  export interface PalletXcmQueryStatus extends Enum {
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

  /** @name XcmVersionedResponse (428) */
  export interface XcmVersionedResponse extends Enum {
    readonly isV0: boolean;
    readonly asV0: XcmV0Response;
    readonly isV1: boolean;
    readonly asV1: XcmV1Response;
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly type: 'V0' | 'V1' | 'V2';
  }

  /** @name PalletXcmVersionMigrationStage (434) */
  export interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name PalletXcmError (435) */
  export interface PalletXcmError extends Enum {
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

  /** @name CumulusPalletXcmError (436) */
  export type CumulusPalletXcmError = Null;

  /** @name PalletAuthorshipUncleEntryItem (438) */
  export interface PalletAuthorshipUncleEntryItem extends Enum {
    readonly isInclusionHeight: boolean;
    readonly asInclusionHeight: u32;
    readonly isUncle: boolean;
    readonly asUncle: ITuple<[H256, Option<AccountId32>]>;
    readonly type: 'InclusionHeight' | 'Uncle';
  }

  /** @name PalletAuthorshipError (439) */
  export interface PalletAuthorshipError extends Enum {
    readonly isInvalidUncleParent: boolean;
    readonly isUnclesAlreadySet: boolean;
    readonly isTooManyUncles: boolean;
    readonly isGenesisUncle: boolean;
    readonly isTooHighUncle: boolean;
    readonly isUncleAlreadyIncluded: boolean;
    readonly isOldUncle: boolean;
    readonly type: 'InvalidUncleParent' | 'UnclesAlreadySet' | 'TooManyUncles' | 'GenesisUncle' | 'TooHighUncle' | 'UncleAlreadyIncluded' | 'OldUncle';
  }

  /** @name PalletCollatorSelectionCandidateInfo (441) */
  export interface PalletCollatorSelectionCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletCollatorSelectionError (442) */
  export interface PalletCollatorSelectionError extends Enum {
    readonly isTooManyCandidates: boolean;
    readonly isTooFewCandidates: boolean;
    readonly isUnknown: boolean;
    readonly isPermission: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isAlreadyInvulnerable: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isValidatorNotRegistered: boolean;
    readonly type: 'TooManyCandidates' | 'TooFewCandidates' | 'Unknown' | 'Permission' | 'AlreadyCandidate' | 'NotCandidate' | 'AlreadyInvulnerable' | 'NoAssociatedValidatorId' | 'ValidatorNotRegistered';
  }

  /** @name SpCoreCryptoKeyTypeId (446) */
  export interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (447) */
  export interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name OrmlOracleModuleTimestampedValue (452) */
  export interface OrmlOracleModuleTimestampedValue extends Struct {
    readonly value: u128;
    readonly timestamp: u64;
  }

  /** @name OrmlUtilitiesOrderedSet (453) */
  export interface OrmlUtilitiesOrderedSet extends Vec<AccountId32> {}

  /** @name OrmlOracleModuleError (455) */
  export interface OrmlOracleModuleError extends Enum {
    readonly isNoPermission: boolean;
    readonly isAlreadyFeeded: boolean;
    readonly type: 'NoPermission' | 'AlreadyFeeded';
  }

  /** @name OrmlXtokensModuleError (456) */
  export interface OrmlXtokensModuleError extends Enum {
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
    readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedMultiLocation';
  }

  /** @name OrmlXcmModuleError (457) */
  export interface OrmlXcmModuleError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isBadVersion: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'BadVersion';
  }

  /** @name OrmlVestingModuleError (459) */
  export interface OrmlVestingModuleError extends Enum {
    readonly isZeroVestingPeriod: boolean;
    readonly isZeroVestingPeriodCount: boolean;
    readonly isInsufficientBalanceToLock: boolean;
    readonly isTooManyVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isMaxVestingSchedulesExceeded: boolean;
    readonly type: 'ZeroVestingPeriod' | 'ZeroVestingPeriodCount' | 'InsufficientBalanceToLock' | 'TooManyVestingSchedules' | 'AmountLow' | 'MaxVestingSchedulesExceeded';
  }

  /** @name PalletLoansBorrowSnapshot (460) */
  export interface PalletLoansBorrowSnapshot extends Struct {
    readonly principal: u128;
    readonly borrowIndex: u128;
  }

  /** @name PalletLoansDeposits (461) */
  export interface PalletLoansDeposits extends Struct {
    readonly voucherBalance: u128;
    readonly isCollateral: bool;
  }

  /** @name PalletLoansEarnedSnapshot (462) */
  export interface PalletLoansEarnedSnapshot extends Struct {
    readonly totalEarnedPrior: u128;
    readonly exchangeRatePrior: u128;
  }

  /** @name PalletLoansRewardMarketState (463) */
  export interface PalletLoansRewardMarketState extends Struct {
    readonly index: u128;
    readonly block: u32;
  }

  /** @name PalletLoansVersions (464) */
  export interface PalletLoansVersions extends Enum {
    readonly isV1: boolean;
    readonly isV2: boolean;
    readonly isV3: boolean;
    readonly isV4: boolean;
    readonly isV5: boolean;
    readonly isV6: boolean;
    readonly type: 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6';
  }

  /** @name PalletLoansError (465) */
  export interface PalletLoansError extends Enum {
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
    readonly isInsufficientMarketLiquidity: boolean;
    readonly isCodecError: boolean;
    readonly isCollateralReserved: boolean;
    readonly type: 'InsufficientLiquidity' | 'InsufficientDeposit' | 'TooMuchRepay' | 'DuplicateOperation' | 'NoDeposit' | 'InsufficientCollateral' | 'LiquidatorIsBorrower' | 'DepositsAreNotCollateral' | 'InsufficientShortfall' | 'InsufficientReserves' | 'InvalidRateModelParam' | 'MarketNotActivated' | 'PriceOracleNotReady' | 'PriceIsZero' | 'InvalidCurrencyId' | 'InvalidPtokenId' | 'MarketDoesNotExist' | 'MarketAlreadyExists' | 'NewMarketMustHavePendingState' | 'SupplyCapacityExceeded' | 'BorrowCapacityExceeded' | 'InsufficientCash' | 'InvalidFactor' | 'InvalidSupplyCap' | 'InvalidExchangeRate' | 'InvalidAmount' | 'PayerIsSigner' | 'InsufficientMarketLiquidity' | 'CodecError' | 'CollateralReserved';
  }

  /** @name PalletCrowdloansVault (467) */
  export interface PalletCrowdloansVault extends Struct {
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

  /** @name PalletCrowdloansXcmRequest (468) */
  export interface PalletCrowdloansXcmRequest extends Enum {
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

  /** @name PalletCrowdloansReleases (469) */
  export interface PalletCrowdloansReleases extends Enum {
    readonly isV000: boolean;
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V000' | 'V100' | 'V200';
  }

  /** @name PalletCrowdloansError (470) */
  export interface PalletCrowdloansError extends Enum {
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
    readonly type: 'IncorrectVaultPhase' | 'CrowdloanAlreadyExists' | 'InsufficientContribution' | 'NoContributions' | 'InsufficientBalance' | 'LastPeriodBeforeFirstPeriod' | 'CTokenDoesNotExist' | 'VaultAlreadyExists' | 'VaultDoesNotExist' | 'InvalidCToken' | 'VaultNotEnded' | 'VrfDelayInProgress' | 'CapExceeded' | 'EndBlockExceeded' | 'InvalidCap' | 'InvalidParams' | 'NotReadyToDissolve';
  }

  /** @name PalletLiquidStakingMatchingLedger (471) */
  export interface PalletLiquidStakingMatchingLedger extends Struct {
    readonly totalStakeAmount: PalletLiquidStakingReservableAmount;
    readonly totalUnstakeAmount: PalletLiquidStakingReservableAmount;
  }

  /** @name PalletLiquidStakingReservableAmount (472) */
  export interface PalletLiquidStakingReservableAmount extends Struct {
    readonly total: u128;
    readonly reserved: u128;
  }

  /** @name PalletLiquidStakingXcmRequest (473) */
  export interface PalletLiquidStakingXcmRequest extends Enum {
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

  /** @name PalletLiquidStakingVersions (474) */
  export interface PalletLiquidStakingVersions extends Enum {
    readonly isV1: boolean;
    readonly isV2: boolean;
    readonly isV3: boolean;
    readonly type: 'V1' | 'V2' | 'V3';
  }

  /** @name PalletLiquidStakingError (476) */
  export interface PalletLiquidStakingError extends Enum {
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
    readonly type: 'InvalidExchangeRate' | 'StakeTooSmall' | 'UnstakeTooSmall' | 'InvalidLiquidCurrency' | 'InvalidStakingCurrency' | 'InvalidDerivativeIndex' | 'InvalidStakingLedger' | 'CapExceeded' | 'InvalidCap' | 'InvalidFactor' | 'NothingToClaim' | 'NotBonded' | 'AlreadyBonded' | 'NoMoreChunks' | 'StakingLedgerLocked' | 'NotWithdrawn' | 'InsufficientBond' | 'InvalidProof' | 'NoUnlockings';
  }

  /** @name PalletMembershipError (477) */
  export interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly type: 'AlreadyMember' | 'NotMember';
  }

  /** @name PalletTraitsPool (483) */
  export interface PalletTraitsPool extends Struct {
    readonly baseAmount: u128;
    readonly quoteAmount: u128;
    readonly baseAmountLast: u128;
    readonly quoteAmountLast: u128;
    readonly lpTokenId: u32;
    readonly blockTimestampLast: u32;
    readonly price0CumulativeLast: u128;
    readonly price1CumulativeLast: u128;
  }

  /** @name PalletAmmError (484) */
  export interface PalletAmmError extends Enum {
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
    readonly type: 'PoolDoesNotExist' | 'InsufficientLiquidity' | 'NotAnIdealPrice' | 'PoolAlreadyExists' | 'InsufficientAmountOut' | 'InsufficientAmountIn' | 'InsufficientSupplyOut' | 'IdenticalAssets' | 'LpTokenAlreadyExists' | 'ConversionToU128Failed';
  }

  /** @name PalletRouterError (485) */
  export interface PalletRouterError extends Enum {
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

  /** @name PalletCurrencyAdapterError (486) */
  export interface PalletCurrencyAdapterError extends Enum {
    readonly isNotANativeToken: boolean;
    readonly type: 'NotANativeToken';
  }

  /** @name PalletBridgeMaterializeCall (491) */
  export interface PalletBridgeMaterializeCall extends Struct {
    readonly bridgeTokenId: u32;
    readonly to: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletBridgeProposal (492) */
  export interface PalletBridgeProposal extends Struct {
    readonly votesFor: Vec<AccountId32>;
    readonly votesAgainst: Vec<AccountId32>;
    readonly status: PalletBridgeProposalStatus;
    readonly expiry: u32;
  }

  /** @name PalletBridgeProposalStatus (493) */
  export interface PalletBridgeProposalStatus extends Enum {
    readonly isInitiated: boolean;
    readonly isApproved: boolean;
    readonly isRejected: boolean;
    readonly type: 'Initiated' | 'Approved' | 'Rejected';
  }

  /** @name PalletBridgeError (494) */
  export interface PalletBridgeError extends Enum {
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

  /** @name PalletFarmingPoolInfo (496) */
  export interface PalletFarmingPoolInfo extends Struct {
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

  /** @name PalletFarmingUserPosition (498) */
  export interface PalletFarmingUserPosition extends Struct {
    readonly depositBalance: u128;
    readonly lockBalanceItems: Vec<ITuple<[u128, u32]>>;
    readonly rewardAmount: u128;
    readonly rewardPerSharePaid: u128;
  }

  /** @name PalletFarmingError (502) */
  export interface PalletFarmingError extends Enum {
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

  /** @name PalletXcmHelperError (503) */
  export interface PalletXcmHelperError extends Enum {
    readonly isMultiLocationNotInvertible: boolean;
    readonly isZeroXcmWeightMisc: boolean;
    readonly isZeroXcmFees: boolean;
    readonly isInsufficientXcmFees: boolean;
    readonly isSendFailure: boolean;
    readonly type: 'MultiLocationNotInvertible' | 'ZeroXcmWeightMisc' | 'ZeroXcmFees' | 'InsufficientXcmFees' | 'SendFailure';
  }

  /** @name PalletStreamingStream (504) */
  export interface PalletStreamingStream extends Struct {
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

  /** @name PalletStreamingStreamStatus (505) */
  export interface PalletStreamingStreamStatus extends Enum {
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

  /** @name PalletStreamingStreamKind (507) */
  export interface PalletStreamingStreamKind extends Enum {
    readonly isSend: boolean;
    readonly isReceive: boolean;
    readonly isFinish: boolean;
    readonly type: 'Send' | 'Receive' | 'Finish';
  }

  /** @name PalletStreamingError (510) */
  export interface PalletStreamingError extends Enum {
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

  /** @name PalletAssetRegistryError (512) */
  export interface PalletAssetRegistryError extends Enum {
    readonly isAssetAlreadyExists: boolean;
    readonly isAssetDoesNotExist: boolean;
    readonly type: 'AssetAlreadyExists' | 'AssetDoesNotExist';
  }

  /** @name PolkadotPrimitivesV2UpgradeRestriction (514) */
  export interface PolkadotPrimitivesV2UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (515) */
  export interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV2AbridgedHrmpChannel]>>;
  }

  /** @name PolkadotPrimitivesV2AbridgedHrmpChannel (518) */
  export interface PolkadotPrimitivesV2AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV2AbridgedHostConfiguration (519) */
  export interface PolkadotPrimitivesV2AbridgedHostConfiguration extends Struct {
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

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (525) */
  export interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemError (526) */
  export interface CumulusPalletParachainSystemError extends Enum {
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

  /** @name SpRuntimeMultiSignature (528) */
  export interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (529) */
  export interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (531) */
  export interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (532) */
  export interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (535) */
  export type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (536) */
  export type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (537) */
  export type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (538) */
  export type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (541) */
  export interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (542) */
  export type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (543) */
  export interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name KerriaRuntimeRuntime (544) */
  export type KerriaRuntimeRuntime = Null;

} // declare module
