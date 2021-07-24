// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, U8aFixed, Vec, bool, u128, u32 } from '@polkadot/types';
import type { AnyNumber, ITuple } from '@polkadot/types/types';
import type { OrderedSet, TimestampedValueOf } from '@open-web3/orml-types/interfaces/oracle';
import type { UnstakeInfo } from '@parallel-finance/types/interfaces/liquidStaking';
import type { BorrowSnapshot, Deposits, EarnedSnapshot, Market, ValidatorSet } from '@parallel-finance/types/interfaces/loans';
import type { CurrencyId, PriceWithDecimal, Rate, Ratio, Timestamp } from '@parallel-finance/types/interfaces/primitives';
import type { AccountId, Balance, BalanceOf, BlockNumber, Hash, Moment, OpaqueCall, OracleKey, Releases } from '@parallel-finance/types/interfaces/runtime';
import type { AccountData, BalanceLock, ReserveData } from '@polkadot/types/interfaces/balances';
import type { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import type { PreimageStatus, PropIndex, Proposal, ReferendumIndex, ReferendumInfo, Voting } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { SeatHolder, Voter } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { Multisig } from '@polkadot/types/interfaces/utility';
import type { BaseStorageType, StorageDoubleMap, StorageMap } from '@open-web3/api-mobx';

export interface StorageType extends BaseStorageType {
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
  council: {    /**
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
  elections: {    /**
     * The present candidate list. A current member or runner-up can never enter this vector
     * and is always implicitly assumed to be a candidate.
     * 
     * Second element is the deposit.
     * 
     * Invariant: Always sorted based on account id.
     **/
    candidates: Vec<ITuple<[AccountId, BalanceOf]>> | null;
    /**
     * The total number of vote rounds that have happened, excluding the upcoming one.
     **/
    electionRounds: u32 | null;
    /**
     * The current elected members.
     * 
     * Invariant: Always sorted based on account id.
     **/
    members: Vec<SeatHolder> | null;
    /**
     * The current reserved runners-up.
     * 
     * Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
     * last (i.e. _best_) runner-up will be replaced.
     **/
    runnersUp: Vec<SeatHolder> | null;
    /**
     * Votes and locked stake of a particular voter.
     * 
     * TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
     **/
    voting: StorageMap<AccountId | string, Voter>;
  };
  grandpa: {    /**
     * The number of changes (both in terms of keys and underlying economic responsibilities)
     * in the "set" of Grandpa validators from genesis.
     **/
    currentSetId: SetId | null;
    /**
     * next block number where we can force a change.
     **/
    nextForced: Option<BlockNumber> | null;
    /**
     * Pending change: (signaled at, scheduled change).
     **/
    pendingChange: Option<StoredPendingChange> | null;
    /**
     * A mapping from grandpa set ID to the index of the *most recent* session for which its
     * members were responsible.
     * 
     * TWOX-NOTE: `SetId` is not under user control.
     **/
    setIdSession: StorageMap<SetId | AnyNumber, Option<SessionIndex>>;
    /**
     * `true` if we are currently stalled.
     **/
    stalled: Option<ITuple<[BlockNumber, BlockNumber]>> | null;
    /**
     * State of the current authority set.
     **/
    state: StoredState | null;
  };
  liquidStaking: {    /**
     * The queue stores all the pending unstaking requests.
     * Key is the owner of assets.
     **/
    accountPendingUnstake: StorageMap<AccountId | string, Option<UnstakeInfo>>;
    /**
     * The queue stores all the unstaking requests in process.
     * Key1 is the mutilsig agent in relaychain, key2 is the owner of assets.
     **/
    accountProcessingUnstake: StorageDoubleMap<AccountId | string, AccountId | string, Option<Vec<UnstakeInfo>>>;
    /**
     * The exchange rate converts staking native token to voucher.
     **/
    exchangeRate: Rate | null;
    /**
     * Fraction of reward currently set aside for reserves
     **/
    reserveFactor: Ratio | null;
    /**
     * The total person-times of staking operations.
     **/
    stakingPersonTimes: u128 | null;
    /**
     * The total amount of reserve.
     **/
    totalReserve: Balance | null;
    /**
     * The total amount of a staking asset.
     **/
    totalStakingAsset: Balance | null;
    /**
     * The total amount of staking voucher.
     **/
    totalVoucher: Balance | null;
  };
  loans: {    /**
     * Mapping of account addresses to outstanding borrow balances
     * CurrencyType -> Owner -> BorrowSnapshot
     **/
    accountBorrows: StorageDoubleMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, AccountId | string, BorrowSnapshot>;
    /**
     * Mapping of account addresses to deposit details
     * CollateralType -> Owner -> Deposits
     **/
    accountDeposits: StorageDoubleMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, AccountId | string, Deposits>;
    /**
     * Mapping of account addresses to total deposit interest accrual
     * CurrencyType -> Owner -> EarnedSnapshot
     **/
    accountEarned: StorageDoubleMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, AccountId | string, EarnedSnapshot>;
    /**
     * Accumulator of the total earned interest rate since the opening of the market
     * CurrencyType -> u128
     **/
    borrowIndex: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Rate>;
    /**
     * Mapping of borrow rate to currency type
     **/
    borrowRate: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Rate>;
    /**
     * The exchange rate from the underlying to the internal collateral
     **/
    exchangeRate: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Rate>;
    /**
     * The timestamp of the previous block or defaults to timestamp at genesis.
     **/
    lastBlockTimestamp: Timestamp | null;
    /**
     * Mapping of currency id to its market
     **/
    markets: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Option<Market>>;
    /**
     * Mapping of supply rate to currency type
     **/
    supplyRate: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Rate>;
    /**
     * Total amount of outstanding borrows of the underlying in this market
     * CurrencyType -> Balance
     **/
    totalBorrows: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Balance>;
    /**
     * Total amount of reserves of the underlying held in this market
     * CurrencyType -> Balance
     **/
    totalReserves: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Balance>;
    /**
     * Total number of collateral tokens in circulation
     * CollateralType -> Balance
     **/
    totalSupply: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Balance>;
    /**
     * Borrow utilization ratio
     **/
    utilizationRatio: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Ratio>;
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
    isUpdated: StorageMap<OracleKey | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, bool>;
    /**
     * Raw values for each oracle operators
     **/
    rawValues: StorageDoubleMap<AccountId | string, OracleKey | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Option<TimestampedValueOf>>;
    /**
     * Combined value, may not be up to date
     **/
    values: StorageMap<OracleKey | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Option<TimestampedValueOf>>;
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
  prices: {    /**
     * Mapping from currency id to it's emergency price
     **/
    emergencyPrice: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Option<PriceWithDecimal>>;
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
  technicalMembership: {    /**
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
  tokens: {    /**
     * The balance of a token type under an account.
     * 
     * NOTE: If the total is ever zero, decrease account ref account.
     * 
     * NOTE: This is only used in the case that this module is used to store
     * balances.
     **/
    accounts: StorageDoubleMap<AccountId | string, CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, AccountData>;
    /**
     * Any liquidity locks of a token type under an account.
     * NOTE: Should only be accessed when setting, changing and freeing a lock.
     **/
    locks: StorageDoubleMap<AccountId | string, CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Vec<BalanceLock>>;
    /**
     * The total issuance of a token type.
     **/
    totalIssuance: StorageMap<CurrencyId | 'DOT'|'KSM'|'USDT'|'xDOT'|'xKSM'|'HKO'|'PARA' | number, Balance>;
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
}
