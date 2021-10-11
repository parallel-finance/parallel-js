// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Option, U8aFixed, Vec, bool, u16, u32 } from '@polkadot/types';
import type { AnyNumber, ITuple } from '@polkadot/types/types';
import type { OrderedSet, TimestampedValueOf } from '@open-web3/orml-types/interfaces/oracle';
import type { Price } from '@open-web3/orml-types/interfaces/traits';
import type { VestingScheduleOf } from '@open-web3/orml-types/interfaces/vesting';
import type { PoolLiquidityAmount } from '@parallel-finance/types/interfaces/amm';
import type { MatchingLedger, StakingSettlementKind } from '@parallel-finance/types/interfaces/liquidStaking';
import type { BorrowSnapshot, Deposits, EarnedSnapshot, Market, ValidatorSet } from '@parallel-finance/types/interfaces/loans';
import type { AssetIdOf, CurrencyId, Rate, Ratio, Timestamp } from '@parallel-finance/types/interfaces/primitives';
import type { AccountId, AssetId, Balance, BalanceOf, BlockNumber, Hash, KeyTypeId, Moment, OpaqueCall, OracleKey, Releases, Slot, ValidatorId, Weight } from '@parallel-finance/types/interfaces/runtime';
import type { AssetApproval, AssetBalance, AssetDetails, AssetMetadata } from '@polkadot/types/interfaces/assets';
import type { UncleEntryItem } from '@polkadot/types/interfaces/authorship';
import type { AccountData, BalanceLock, ReserveData } from '@polkadot/types/interfaces/balances';
import type { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { ConfigData, OverweightIndex, PageCounter, PageIndexData } from '@polkadot/types/interfaces/cumulus';
import type { PreimageStatus, PropIndex, Proposal, ReferendumIndex, ReferendumInfo, Voting } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { AbridgedHostConfiguration, CandidateInfo, MessageQueueChain, MessagingStateSnapshot, OutboundHrmpMessage, ParaId, PersistedValidationData, RelayBlockNumber, RelayChainBlockNumber, UpwardMessage } from '@polkadot/types/interfaces/parachains';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { Keys, SessionIndex } from '@polkadot/types/interfaces/session';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { Multisig } from '@polkadot/types/interfaces/utility';
import type { InboundStatus, OutboundStatus, QueueConfigData, XcmpMessageFormat } from '@polkadot/types/interfaces/xcm';
import type { BaseStorageType, StorageDoubleMap, StorageMap } from '@open-web3/api-mobx';

export interface StorageType extends BaseStorageType {
  amm: {    /**
     * The exchange rate from the underlying to the internal collateral
     **/
    exchangeRate: Rate | null;
    /**
     * Accounts that deposits and withdraw assets in one or more pools
     **/
    liquidityProviders: Option<PoolLiquidityAmount> | null;
    /**
     * A bag of liquidity composed by two different assets
     **/
    pools: StorageDoubleMap<AssetIdOf | AnyNumber, AssetIdOf | AnyNumber, Option<PoolLiquidityAmount>>;
  };
  assets: {    /**
     * The number of units of assets held by any given account.
     **/
    account: StorageDoubleMap<AssetId | AnyNumber, AccountId | string, AssetBalance>;
    /**
     * Approved balance transfers. First balance is the amount approved for transfer. Second
     * is the amount of `T::Currency` reserved for storing this.
     * First key is the asset ID, second key is the owner and third key is the delegate.
     **/
    approvals: Option<AssetApproval> | null;
    /**
     * Details of an asset.
     **/
    asset: StorageMap<AssetId | AnyNumber, Option<AssetDetails>>;
    /**
     * Metadata of an asset.
     **/
    metadata: StorageMap<AssetId | AnyNumber, AssetMetadata>;
  };
  aura: {    /**
     * The current authority set.
     **/
    authorities: Vec<AuthorityId> | null;
    /**
     * The current slot of this block.
     * 
     * This will be set in `on_initialize`.
     **/
    currentSlot: Slot | null;
  };
  auraExt: {    /**
     * Serves as cache for the authorities.
     * 
     * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
     * but we require the old authorities to verify the seal when validating a PoV. This will always
     * be updated to the latest AuRa authorities in `on_finalize`.
     **/
    authorities: Vec<AuthorityId> | null;
  };
  authorship: {    /**
     * Author of current block.
     **/
    author: Option<AccountId> | null;
    /**
     * Whether uncles were already set in this block.
     **/
    didSetUncles: bool | null;
    /**
     * Uncles
     **/
    uncles: Vec<UncleEntryItem> | null;
  };
  balances: {    /**
     * The balance of an account.
     * 
     * NOTE: This is only used in the case that this pallet is used to store balances.
     **/
    account: StorageMap<AccountId | string, AccountData>;
    /**
     * Any liquidity locks on some account balances.
     * NOTE: Should only be accessed when setting, changing and freeing a lock.
     **/
    locks: StorageMap<AccountId | string, Vec<BalanceLock>>;
    /**
     * Named reserves on some account balances.
     **/
    reserves: StorageMap<AccountId | string, Vec<ReserveData>>;
    /**
     * Storage version of the pallet.
     * 
     * This is set to v2.0.0 for new networks.
     **/
    storageVersion: Releases | null;
    /**
     * The total units issued in the system.
     **/
    totalIssuance: Balance | null;
  };
  collatorSelection: {    /**
     * Fixed deposit bond for each candidate.
     **/
    candidacyBond: BalanceOf | null;
    /**
     * The (community, limited) collation candidates.
     **/
    candidates: Vec<CandidateInfo> | null;
    /**
     * Desired number of candidates.
     * 
     * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
     **/
    desiredCandidates: u32 | null;
    /**
     * The invulnerable, fixed collators.
     **/
    invulnerables: Vec<AccountId> | null;
    /**
     * Last block authored by collator.
     **/
    lastAuthoredBlock: StorageMap<AccountId | string, BlockNumber>;
  };
  democracy: {    /**
     * A record of who vetoed what. Maps proposal hash to a possible existent block number
     * (until when it may not be resubmitted) and who vetoed it.
     **/
    blacklist: StorageMap<Hash | string, Option<ITuple<[BlockNumber, Vec<AccountId>]>>>;
    /**
     * Record of all proposals that have been subject to emergency cancellation.
     **/
    cancellations: StorageMap<Hash | string, bool>;
    /**
     * Those who have locked a deposit.
     * 
     * TWOX-NOTE: Safe, as increasing integer keys are safe.
     **/
    depositOf: StorageMap<PropIndex | AnyNumber, Option<ITuple<[Vec<AccountId>, BalanceOf]>>>;
    /**
     * True if the last referendum tabled was submitted externally. False if it was a public
     * proposal.
     **/
    lastTabledWasExternal: bool | null;
    /**
     * Accounts for which there are locks in action which may be removed at some point in the
     * future. The value is the block number at which the lock expires and may be removed.
     * 
     * TWOX-NOTE: OK ― `AccountId` is a secure hash.
     **/
    locks: StorageMap<AccountId | string, Option<BlockNumber>>;
    /**
     * The lowest referendum index representing an unbaked referendum. Equal to
     * `ReferendumCount` if there isn't a unbaked referendum.
     **/
    lowestUnbaked: ReferendumIndex | null;
    /**
     * The referendum to be tabled whenever it would be valid to table an external proposal.
     * This happens when a referendum needs to be tabled and one of two conditions are met:
     * - `LastTabledWasExternal` is `false`; or
     * - `PublicProps` is empty.
     **/
    nextExternal: Option<ITuple<[Hash, VoteThreshold]>> | null;
    /**
     * Map of hashes to the proposal preimage, along with who registered it and their deposit.
     * The block number is the block at which it was deposited.
     **/
    preimages: StorageMap<Hash | string, Option<PreimageStatus>>;
    /**
     * The number of (public) proposals that have been made so far.
     **/
    publicPropCount: PropIndex | null;
    /**
     * The public proposals. Unsorted. The second item is the proposal's hash.
     **/
    publicProps: Vec<ITuple<[PropIndex, Hash, AccountId]>> | null;
    /**
     * The next free referendum index, aka the number of referenda started so far.
     **/
    referendumCount: ReferendumIndex | null;
    /**
     * Information concerning any given referendum.
     * 
     * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     **/
    referendumInfoOf: StorageMap<ReferendumIndex | AnyNumber, Option<ReferendumInfo>>;
    /**
     * Storage version of the pallet.
     * 
     * New networks start with last version.
     **/
    storageVersion: Option<Releases> | null;
    /**
     * All votes for a particular voter. We store the balance for the number of votes that we
     * have recorded. The second item is the total amount of delegations, that will be added.
     * 
     * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     **/
    votingOf: StorageMap<AccountId | string, Voting>;
  };
  dmpQueue: {    /**
     * The configuration.
     **/
    configuration: ConfigData | null;
    /**
     * The overweight messages.
     **/
    overweight: StorageMap<OverweightIndex | AnyNumber, Option<ITuple<[RelayBlockNumber, Bytes]>>>;
    /**
     * The page index.
     **/
    pageIndex: PageIndexData | null;
    /**
     * The queue pages.
     **/
    pages: StorageMap<PageCounter | AnyNumber, Vec<ITuple<[RelayBlockNumber, Bytes]>>>;
  };
  generalCouncil: {    /**
     * The current members of the collective. This is stored sorted (just by value).
     **/
    members: Vec<AccountId> | null;
    /**
     * The prime member that helps determine the default vote behavior in case of absentations.
     **/
    prime: Option<AccountId> | null;
    /**
     * Proposals so far.
     **/
    proposalCount: u32 | null;
    /**
     * Actual proposal for a given hash, if it's current.
     **/
    proposalOf: StorageMap<Hash | string, Option<Proposal>>;
    /**
     * The hashes of the active proposals.
     **/
    proposals: Vec<Hash> | null;
    /**
     * Votes on a given proposal, if it is ongoing.
     **/
    voting: StorageMap<Hash | string, Option<Votes>>;
  };
  generalCouncilMembership: {    /**
     * The current membership, stored as an ordered Vec.
     **/
    members: Vec<AccountId> | null;
    /**
     * The current prime member, if one exists.
     **/
    prime: Option<AccountId> | null;
  };
  liquidStaking: {    /**
     * The exchange rate between relaychain native asset and the voucher.
     **/
    exchangeRate: Rate | null;
    /**
     * Liquid currency asset id
     **/
    liquidCurrency: Option<AssetIdOf> | null;
    /**
     * Store total stake amount and unstake amount in each era,
     * And will update when stake/unstake occurred.
     **/
    matchingPool: MatchingLedger | null;
    /**
     * Fraction of reward currently set aside for reserves
     **/
    reserveFactor: Ratio | null;
    /**
     * Staking currency asset id
     **/
    stakingCurrency: Option<AssetIdOf> | null;
    /**
     * Total amount of staked assets in relaycahin.
     **/
    stakingPool: BalanceOf | null;
    /**
     * Records reward or slash of era.
     **/
    stakingSettlementRecords: StorageDoubleMap<EraIndex | AnyNumber, StakingSettlementKind | 'Reward'|'Slash' | number, Option<BalanceOf>>;
    /**
     * Manage which we should pay off to.
     * 
     * Insert a new record while user can't be paid instantly in unstaking operation.
     **/
    unstakeQueue: Vec<ITuple<[AccountId, BalanceOf]>> | null;
  };
  loans: {    /**
     * Mapping of account addresses to outstanding borrow balances
     * CurrencyId -> Owner -> BorrowSnapshot
     **/
    accountBorrows: StorageDoubleMap<AssetIdOf | AnyNumber, AccountId | string, BorrowSnapshot>;
    /**
     * Mapping of account addresses to deposit details
     * CollateralType -> Owner -> Deposits
     **/
    accountDeposits: StorageDoubleMap<AssetIdOf | AnyNumber, AccountId | string, Deposits>;
    /**
     * Mapping of account addresses to total deposit interest accrual
     * CurrencyId -> Owner -> EarnedSnapshot
     **/
    accountEarned: StorageDoubleMap<AssetIdOf | AnyNumber, AccountId | string, EarnedSnapshot>;
    /**
     * Accumulator of the total earned interest rate since the opening of the market
     * CurrencyId -> u128
     **/
    borrowIndex: StorageMap<AssetIdOf | AnyNumber, Rate>;
    /**
     * Mapping of borrow rate to currency type
     **/
    borrowRate: StorageMap<AssetIdOf | AnyNumber, Rate>;
    /**
     * The exchange rate from the underlying to the internal collateral
     **/
    exchangeRate: StorageMap<AssetIdOf | AnyNumber, Rate>;
    /**
     * The timestamp of the last calculation of accrued interest
     **/
    lastBlockTimestamp: Timestamp | null;
    /**
     * Mapping of asset id to its market
     **/
    markets: StorageMap<AssetIdOf | AnyNumber, Option<Market>>;
    /**
     * Mapping of supply rate to currency type
     **/
    supplyRate: StorageMap<AssetIdOf | AnyNumber, Rate>;
    /**
     * Total amount of outstanding borrows of the underlying in this market
     * CurrencyId -> Balance
     **/
    totalBorrows: StorageMap<AssetIdOf | AnyNumber, BalanceOf>;
    /**
     * Total amount of reserves of the underlying held in this market
     * CurrencyId -> Balance
     **/
    totalReserves: StorageMap<AssetIdOf | AnyNumber, BalanceOf>;
    /**
     * Total number of collateral tokens in circulation
     * CollateralType -> Balance
     **/
    totalSupply: StorageMap<AssetIdOf | AnyNumber, BalanceOf>;
    /**
     * Borrow utilization ratio
     **/
    utilizationRatio: StorageMap<AssetIdOf | AnyNumber, Ratio>;
  };
  multisig: {    calls: StorageMap<U8aFixed | string, Option<ITuple<[OpaqueCall, AccountId, BalanceOf]>>>;
    /**
     * The set of open multisig operations.
     **/
    multisigs: StorageDoubleMap<AccountId | string, U8aFixed | string, Option<Multisig>>;
  };
  nomineeElection: {    /**
     * Validators selected by off-chain client
     **/
    validators: ValidatorSet | null;
  };
  oracle: {    /**
     * If an oracle operator has feed a value in this block
     **/
    hasDispatched: OrderedSet | null;
    /**
     * True if Self::values(key) is up to date, otherwise the value is stale
     **/
    isUpdated: StorageMap<OracleKey | AnyNumber, bool>;
    /**
     * Raw values for each oracle operators
     **/
    rawValues: StorageDoubleMap<AccountId | string, OracleKey | AnyNumber, Option<TimestampedValueOf>>;
    /**
     * Combined value, may not be up to date
     **/
    values: StorageMap<OracleKey | AnyNumber, Option<TimestampedValueOf>>;
  };
  oracleMembership: {    /**
     * The current membership, stored as an ordered Vec.
     **/
    members: Vec<AccountId> | null;
    /**
     * The current prime member, if one exists.
     **/
    prime: Option<AccountId> | null;
  };
  parachainInfo: {    parachainId: ParaId | null;
  };
  parachainSystem: {    /**
     * The number of HRMP messages we observed in `on_initialize` and thus used that number for
     * announcing the weight of `on_initialize` and `on_finalize`.
     **/
    announcedHrmpMessagesPerCandidate: u32 | null;
    /**
     * The next authorized upgrade, if there is one.
     **/
    authorizedUpgrade: Option<Hash> | null;
    /**
     * Were the validation data set to notify the relay chain?
     **/
    didSetValidationCode: bool | null;
    /**
     * The parachain host configuration that was obtained from the relay parent.
     * 
     * This field is meant to be updated each block with the validation data inherent. Therefore,
     * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     * This data is also absent from the genesis.
     **/
    hostConfiguration: Option<AbridgedHostConfiguration> | null;
    /**
     * HRMP messages that were sent in a block.
     * 
     * This will be cleared in `on_initialize` of each new block.
     **/
    hrmpOutboundMessages: Vec<OutboundHrmpMessage> | null;
    /**
     * HRMP watermark that was set in a block.
     * 
     * This will be cleared in `on_initialize` of each new block.
     **/
    hrmpWatermark: BlockNumber | null;
    /**
     * The last downward message queue chain head we have observed.
     * 
     * This value is loaded before and saved after processing inbound downward messages carried
     * by the system inherent.
     **/
    lastDmqMqcHead: MessageQueueChain | null;
    /**
     * The message queue chain heads we have observed per each channel incoming channel.
     * 
     * This value is loaded before and saved after processing inbound downward messages carried
     * by the system inherent.
     **/
    lastHrmpMqcHeads: BTreeMap<ParaId, MessageQueueChain> | null;
    /**
     * The last relay parent block number at which we signalled the code upgrade.
     **/
    lastUpgrade: BlockNumber | null;
    /**
     * New validation code that was set in a block.
     * 
     * This will be cleared in `on_initialize` of each new block if no other pallet already set
     * the value.
     **/
    newValidationCode: Option<Bytes> | null;
    /**
     * We need to store the new validation function for the span between
     * setting it and applying it. If it has a
     * value, then [`PendingValidationCode`] must have a real value, and
     * together will coordinate the block number where the upgrade will happen.
     **/
    pendingRelayChainBlockNumber: Option<RelayChainBlockNumber> | null;
    /**
     * Upward messages that are still pending and not yet send to the relay chain.
     **/
    pendingUpwardMessages: Vec<UpwardMessage> | null;
    /**
     * The new validation function we will upgrade to when the relay chain
     * reaches [`PendingRelayChainBlockNumber`]. A real validation function must
     * exist here as long as [`PendingRelayChainBlockNumber`] is set.
     **/
    pendingValidationCode: Bytes | null;
    /**
     * Number of downward messages processed in a block.
     * 
     * This will be cleared in `on_initialize` of each new block.
     **/
    processedDownwardMessages: u32 | null;
    /**
     * The snapshot of some state related to messaging relevant to the current parachain as per
     * the relay parent.
     * 
     * This field is meant to be updated each block with the validation data inherent. Therefore,
     * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     * This data is also absent from the genesis.
     **/
    relevantMessagingState: Option<MessagingStateSnapshot> | null;
    /**
     * The weight we reserve at the beginning of the block for processing DMP messages. This
     * overrides the amount set in the Config trait.
     **/
    reservedDmpWeightOverride: Option<Weight> | null;
    /**
     * The weight we reserve at the beginning of the block for processing XCMP messages. This
     * overrides the amount set in the Config trait.
     **/
    reservedXcmpWeightOverride: Option<Weight> | null;
    /**
     * Upward messages that were sent in a block.
     * 
     * This will be cleared in `on_initialize` of each new block.
     **/
    upwardMessages: Vec<UpwardMessage> | null;
    /**
     * The [`PersistedValidationData`] set for this block.
     **/
    validationData: Option<PersistedValidationData> | null;
  };
  prices: {    /**
     * Mapping from currency id to it's emergency price
     **/
    emergencyPrice: StorageMap<CurrencyId | AnyNumber, Option<Price>>;
  };
  scheduler: {    /**
     * Items to be executed, indexed by the block number that they should be executed on.
     **/
    agenda: StorageMap<BlockNumber | AnyNumber, Vec<Option<Scheduled>>>;
    /**
     * Lookup from identity to the block number and index of the task.
     **/
    lookup: StorageMap<Bytes | string, Option<TaskAddress>>;
    /**
     * Storage version of the pallet.
     * 
     * New networks start with last version.
     **/
    storageVersion: Releases | null;
  };
  session: {    /**
     * Current index of the session.
     **/
    currentIndex: SessionIndex | null;
    /**
     * Indices of disabled validators.
     * 
     * The set is cleared when `on_session_ending` returns a new set of identities.
     **/
    disabledValidators: Vec<u32> | null;
    /**
     * The owner of a key. The key is the `KeyTypeId` + the encoded key.
     **/
    keyOwner: StorageMap<ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber, Bytes | string], Option<ValidatorId>>;
    /**
     * The next session keys for a validator.
     **/
    nextKeys: StorageMap<ValidatorId | string, Option<Keys>>;
    /**
     * True if the underlying economic identities or weighting behind the validators
     * has changed in the queued validator set.
     **/
    queuedChanged: bool | null;
    /**
     * The queued keys for the next session. When the next session begins, these keys
     * will be used to determine the validator's session keys.
     **/
    queuedKeys: Vec<ITuple<[ValidatorId, Keys]>> | null;
    /**
     * The current set of validators.
     **/
    validators: Vec<ValidatorId> | null;
  };
  sudo: {    /**
     * The `AccountId` of the sudo key.
     **/
    key: AccountId | null;
  };
  system: {    /**
     * The full account information for a particular account ID.
     **/
    account: StorageMap<AccountId | string, AccountInfo>;
    /**
     * Total length (in bytes) for all extrinsics put together, for the current block.
     **/
    allExtrinsicsLen: Option<u32> | null;
    /**
     * Map of block numbers to block hashes.
     **/
    blockHash: StorageMap<BlockNumber | AnyNumber, Hash>;
    /**
     * The current weight for the block.
     **/
    blockWeight: ConsumedWeight | null;
    /**
     * Digest of the current block, also part of the block header.
     **/
    digest: DigestOf | null;
    /**
     * The number of events in the `Events<T>` list.
     **/
    eventCount: EventIndex | null;
    /**
     * Events deposited for the current block.
     **/
    events: Vec<EventRecord> | null;
    /**
     * Mapping between a topic (represented by T::Hash) and a vector of indexes
     * of events in the `<Events<T>>` list.
     * 
     * All topic vectors have deterministic storage locations depending on the topic. This
     * allows light-clients to leverage the changes trie storage tracking mechanism and
     * in case of changes fetch the list of events of interest.
     * 
     * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     * the `EventIndex` then in case if the topic has the same contents on the next block
     * no notification will be triggered thus the event might be lost.
     **/
    eventTopics: StorageMap<Hash | string, Vec<ITuple<[BlockNumber, EventIndex]>>>;
    /**
     * The execution phase of the block.
     **/
    executionPhase: Option<Phase> | null;
    /**
     * Total extrinsics count for the current block.
     **/
    extrinsicCount: Option<u32> | null;
    /**
     * Extrinsics data for the current block (maps an extrinsic's index to its data).
     **/
    extrinsicData: StorageMap<u32 | AnyNumber, Bytes>;
    /**
     * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     **/
    lastRuntimeUpgrade: Option<LastRuntimeUpgradeInfo> | null;
    /**
     * The current block number being processed. Set by `execute_block`.
     **/
    number: BlockNumber | null;
    /**
     * Hash of the previous block.
     **/
    parentHash: Hash | null;
    /**
     * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     * (default) if not.
     **/
    upgradedToTripleRefCount: bool | null;
    /**
     * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     **/
    upgradedToU32RefCount: bool | null;
  };
  technicalCommittee: {    /**
     * The current members of the collective. This is stored sorted (just by value).
     **/
    members: Vec<AccountId> | null;
    /**
     * The prime member that helps determine the default vote behavior in case of absentations.
     **/
    prime: Option<AccountId> | null;
    /**
     * Proposals so far.
     **/
    proposalCount: u32 | null;
    /**
     * Actual proposal for a given hash, if it's current.
     **/
    proposalOf: StorageMap<Hash | string, Option<Proposal>>;
    /**
     * The hashes of the active proposals.
     **/
    proposals: Vec<Hash> | null;
    /**
     * Votes on a given proposal, if it is ongoing.
     **/
    voting: StorageMap<Hash | string, Option<Votes>>;
  };
  technicalCommitteeMembership: {    /**
     * The current membership, stored as an ordered Vec.
     **/
    members: Vec<AccountId> | null;
    /**
     * The current prime member, if one exists.
     **/
    prime: Option<AccountId> | null;
  };
  timestamp: {    /**
     * Did the timestamp get updated in this block?
     **/
    didUpdate: bool | null;
    /**
     * Current time for the current block.
     **/
    now: Moment | null;
  };
  transactionPayment: {    nextFeeMultiplier: Multiplier | null;
    storageVersion: Releases | null;
  };
  treasury: {    /**
     * Proposal indices that have been approved but not yet awarded.
     **/
    approvals: Vec<ProposalIndex> | null;
    /**
     * Number of proposals that have been made.
     **/
    proposalCount: ProposalIndex | null;
    /**
     * Proposals that have been made.
     **/
    proposals: StorageMap<ProposalIndex | AnyNumber, Option<TreasuryProposal>>;
  };
  validatorFeedersMembership: {    /**
     * The current membership, stored as an ordered Vec.
     **/
    members: Vec<AccountId> | null;
    /**
     * The current prime member, if one exists.
     **/
    prime: Option<AccountId> | null;
  };
  vesting: {    /**
     * Vesting schedules of an account.
     * 
     * VestingSchedules: map AccountId => Vec<VestingSchedule>
     **/
    vestingSchedules: StorageMap<AccountId | string, Vec<VestingScheduleOf>>;
  };
  xcmpQueue: {    /**
     * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     **/
    inboundXcmpMessages: StorageDoubleMap<ParaId | AnyNumber, RelayBlockNumber | AnyNumber, Bytes>;
    /**
     * Status of the inbound XCMP channels.
     **/
    inboundXcmpStatus: Vec<ITuple<[ParaId, InboundStatus, Vec<ITuple<[RelayBlockNumber, XcmpMessageFormat]>>]>> | null;
    /**
     * The messages outbound in a given XCMP channel.
     **/
    outboundXcmpMessages: StorageDoubleMap<ParaId | AnyNumber, u16 | AnyNumber, Bytes>;
    /**
     * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     * and last outbound message. If the two indices are equal, then it indicates an empty
     * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     * case of the need to send a high-priority signal message this block.
     * The bool is true if there is a signal message waiting to be sent.
     **/
    outboundXcmpStatus: Vec<ITuple<[ParaId, OutboundStatus, bool, u16, u16]>> | null;
    /**
     * The configuration which controls the dynamics of the outbound queue.
     **/
    queueConfig: QueueConfigData | null;
    /**
     * Any signal messages waiting to be sent.
     **/
    signalMessages: StorageMap<ParaId | AnyNumber, Bytes>;
  };
  xTokens: {  };
}
