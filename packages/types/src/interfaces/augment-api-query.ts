// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Option, U8aFixed, Vec, bool, u128, u16, u32 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { OrderedSet, TimestampedValueOf } from '@open-web3/orml-types/interfaces/oracle';
import type { VestingScheduleOf } from '@open-web3/orml-types/interfaces/vesting';
import type { PoolLiquidityAmount } from '@parallel-finance/types/interfaces/amm';
import type { UnstakeInfo } from '@parallel-finance/types/interfaces/liquidStaking';
import type { BorrowSnapshot, Deposits, EarnedSnapshot, Market, ValidatorSet } from '@parallel-finance/types/interfaces/loans';
import type { CurrencyId, PriceWithDecimal, Rate, Ratio, Timestamp } from '@parallel-finance/types/interfaces/primitives';
import type { AccountId, Balance, BalanceOf, BlockNumber, Hash, KeyTypeId, Moment, OpaqueCall, OracleKey, Releases, Slot, ValidatorId, Weight } from '@parallel-finance/types/interfaces/runtime';
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
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { Multisig } from '@polkadot/types/interfaces/utility';
import type { InboundStatus, MultiLocation, OutboundStatus, QueueConfigData, XcmpMessageFormat } from '@polkadot/types/interfaces/xcm';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    amm: {
      /**
       * The exchange rate from the underlying to the internal collateral
       **/
      exchangeRate: AugmentedQuery<ApiType, () => Observable<Rate>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Accounts that deposits and withdraw assets in one or more pools
       **/
      liquidityProviders: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, arg3: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<PoolLiquidityAmount>, [AccountId, CurrencyId, CurrencyId]> & QueryableStorageEntry<ApiType, [AccountId, CurrencyId, CurrencyId]>;
      /**
       * A bag of liquidity composed by two different assets
       **/
      pools: AugmentedQuery<ApiType, (arg1: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, arg2: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<PoolLiquidityAmount>, [CurrencyId, CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId, CurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    aura: {
      /**
       * The current authority set.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<AuthorityId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current slot of this block.
       * 
       * This will be set in `on_initialize`.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<Slot>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    auraExt: {
      /**
       * Serves as cache for the authorities.
       * 
       * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
       * but we require the old authorities to verify the seal when validating a PoV. This will always
       * be updated to the latest AuRa authorities in `on_finalize`.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<AuthorityId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Whether uncles were already set in this block.
       **/
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Uncles
       **/
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<UncleEntryItem>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    balances: {
      /**
       * The balance of an account.
       * 
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountData>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<ReserveData>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<Balance>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    collatorSelection: {
      /**
       * Fixed deposit bond for each candidate.
       **/
      candidacyBond: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The (community, limited) collation candidates.
       **/
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<CandidateInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Desired number of candidates.
       * 
       * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
       **/
      desiredCandidates: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The invulnerable, fixed collators.
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Last block authored by collator.
       **/
      lastAuthoredBlock: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<BlockNumber>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    democracy: {
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ITuple<[BlockNumber, Vec<AccountId>]>>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<bool>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: PropIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId>, BalanceOf]>>>, [PropIndex]> & QueryableStorageEntry<ApiType, [PropIndex]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Accounts for which there are locks in action which may be removed at some point in the
       * future. The value is the block number at which the lock expires and may be removed.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<BlockNumber>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[Hash, VoteThreshold]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of hashes to the proposal preimage, along with who registered it and their deposit.
       * The block number is the block at which it was deposited.
       **/
      preimages: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<PreimageStatus>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<PropIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal's hash.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[PropIndex, Hash, AccountId]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: ReferendumIndex | AnyNumber | Uint8Array) => Observable<Option<ReferendumInfo>>, [ReferendumIndex]> & QueryableStorageEntry<ApiType, [ReferendumIndex]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Option<Releases>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Voting>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    dmpQueue: {
      /**
       * The configuration.
       **/
      configuration: AugmentedQuery<ApiType, () => Observable<ConfigData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The overweight messages.
       **/
      overweight: AugmentedQuery<ApiType, (arg: OverweightIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[RelayBlockNumber, Bytes]>>>, [OverweightIndex]> & QueryableStorageEntry<ApiType, [OverweightIndex]>;
      /**
       * The page index.
       **/
      pageIndex: AugmentedQuery<ApiType, () => Observable<PageIndexData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queue pages.
       **/
      pages: AugmentedQuery<ApiType, (arg: PageCounter | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[RelayBlockNumber, Bytes]>>>, [PageCounter]> & QueryableStorageEntry<ApiType, [PageCounter]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    generalCouncil: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    generalCouncilMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    liquidStaking: {
      /**
       * The queue stores all the pending unstaking requests.
       * Key is the owner of assets.
       **/
      accountPendingUnstake: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<UnstakeInfo>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * The queue stores all the unstaking requests in process.
       * Key1 is the mutilsig agent in relaychain, key2 is the owner of assets.
       **/
      accountProcessingUnstake: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<Option<Vec<UnstakeInfo>>>, [AccountId, AccountId]> & QueryableStorageEntry<ApiType, [AccountId, AccountId]>;
      /**
       * The exchange rate converts staking native token to voucher.
       **/
      exchangeRate: AugmentedQuery<ApiType, () => Observable<Rate>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fraction of reward currently set aside for reserves
       **/
      reserveFactor: AugmentedQuery<ApiType, () => Observable<Ratio>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total person-times of staking operations.
       **/
      stakingPersonTimes: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total amount of reserve.
       **/
      totalReserve: AugmentedQuery<ApiType, () => Observable<Balance>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total amount of a staking asset.
       **/
      totalStakingAsset: AugmentedQuery<ApiType, () => Observable<Balance>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The total amount of staking voucher.
       **/
      totalVoucher: AugmentedQuery<ApiType, () => Observable<Balance>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    liquidStakingAgentMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    loans: {
      /**
       * Mapping of account addresses to outstanding borrow balances
       * CurrencyType -> Owner -> BorrowSnapshot
       **/
      accountBorrows: AugmentedQuery<ApiType, (arg1: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<BorrowSnapshot>, [CurrencyId, AccountId]> & QueryableStorageEntry<ApiType, [CurrencyId, AccountId]>;
      /**
       * Mapping of account addresses to deposit details
       * CollateralType -> Owner -> Deposits
       **/
      accountDeposits: AugmentedQuery<ApiType, (arg1: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<Deposits>, [CurrencyId, AccountId]> & QueryableStorageEntry<ApiType, [CurrencyId, AccountId]>;
      /**
       * Mapping of account addresses to total deposit interest accrual
       * CurrencyType -> Owner -> EarnedSnapshot
       **/
      accountEarned: AugmentedQuery<ApiType, (arg1: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<EarnedSnapshot>, [CurrencyId, AccountId]> & QueryableStorageEntry<ApiType, [CurrencyId, AccountId]>;
      /**
       * Accumulator of the total earned interest rate since the opening of the market
       * CurrencyType -> u128
       **/
      borrowIndex: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Rate>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * Mapping of borrow rate to currency type
       **/
      borrowRate: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Rate>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * The exchange rate from the underlying to the internal collateral
       **/
      exchangeRate: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Rate>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * The timestamp of the previous block or defaults to timestamp at genesis.
       **/
      lastBlockTimestamp: AugmentedQuery<ApiType, () => Observable<Timestamp>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping of currency id to its market
       **/
      markets: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Option<Market>>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * Mapping of supply rate to currency type
       **/
      supplyRate: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Rate>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * Total amount of outstanding borrows of the underlying in this market
       * CurrencyType -> Balance
       **/
      totalBorrows: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Balance>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * Total amount of reserves of the underlying held in this market
       * CurrencyType -> Balance
       **/
      totalReserves: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Balance>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * Total number of collateral tokens in circulation
       * CollateralType -> Balance
       **/
      totalSupply: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Balance>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * Borrow utilization ratio
       **/
      utilizationRatio: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Ratio>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    multisig: {
      calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[OpaqueCall, AccountId, BalanceOf]>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<Multisig>>, [AccountId, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId, U8aFixed]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    nomineeElection: {
      /**
       * Validators selected by off-chain client
       **/
      validators: AugmentedQuery<ApiType, () => Observable<ValidatorSet>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    oracle: {
      /**
       * If an oracle operator has feed a value in this block
       **/
      hasDispatched: AugmentedQuery<ApiType, () => Observable<OrderedSet>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if Self::values(key) is up to date, otherwise the value is stale
       **/
      isUpdated: AugmentedQuery<ApiType, (arg: OracleKey | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<bool>, [OracleKey]> & QueryableStorageEntry<ApiType, [OracleKey]>;
      /**
       * Raw values for each oracle operators
       **/
      rawValues: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: OracleKey | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Option<TimestampedValueOf>>, [AccountId, OracleKey]> & QueryableStorageEntry<ApiType, [AccountId, OracleKey]>;
      /**
       * Combined value, may not be up to date
       **/
      values: AugmentedQuery<ApiType, (arg: OracleKey | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Option<TimestampedValueOf>>, [OracleKey]> & QueryableStorageEntry<ApiType, [OracleKey]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    oracleMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    ormlVesting: {
      /**
       * Vesting schedules of an account.
       * 
       * VestingSchedules: map AccountId => Vec<VestingSchedule>
       **/
      vestingSchedules: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<VestingScheduleOf>>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainInfo: {
      parachainId: AugmentedQuery<ApiType, () => Observable<ParaId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainSystem: {
      /**
       * The number of HRMP messages we observed in `on_initialize` and thus used that number for
       * announcing the weight of `on_initialize` and `on_finalize`.
       **/
      announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The next authorized upgrade, if there is one.
       **/
      authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<Hash>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Were the validation data set to notify the relay chain?
       **/
      didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The parachain host configuration that was obtained from the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<AbridgedHostConfiguration>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * HRMP messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<OutboundHrmpMessage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * HRMP watermark that was set in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpWatermark: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The last downward message queue chain head we have observed.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<MessageQueueChain>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The message queue chain heads we have observed per each channel incoming channel.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<ParaId, MessageQueueChain>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The last relay parent block number at which we signalled the code upgrade.
       **/
      lastUpgrade: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * New validation code that was set in a block.
       * 
       * This will be cleared in `on_initialize` of each new block if no other pallet already set
       * the value.
       **/
      newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * We need to store the new validation function for the span between
       * setting it and applying it. If it has a
       * value, then [`PendingValidationCode`] must have a real value, and
       * together will coordinate the block number where the upgrade will happen.
       **/
      pendingRelayChainBlockNumber: AugmentedQuery<ApiType, () => Observable<Option<RelayChainBlockNumber>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Upward messages that are still pending and not yet send to the relay chain.
       **/
      pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<UpwardMessage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The new validation function we will upgrade to when the relay chain
       * reaches [`PendingRelayChainBlockNumber`]. A real validation function must
       * exist here as long as [`PendingRelayChainBlockNumber`] is set.
       **/
      pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of downward messages processed in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The snapshot of some state related to messaging relevant to the current parachain as per
       * the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<MessagingStateSnapshot>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The weight we reserve at the beginning of the block for processing DMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<Weight>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The weight we reserve at the beginning of the block for processing XCMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<Weight>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Upward messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<UpwardMessage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The [`PersistedValidationData`] set for this block.
       **/
      validationData: AugmentedQuery<ApiType, () => Observable<Option<PersistedValidationData>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    prices: {
      /**
       * Mapping from currency id to it's emergency price
       **/
      emergencyPrice: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Option<PriceWithDecimal>>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Option<Scheduled>>>, [BlockNumber]> & QueryableStorageEntry<ApiType, [BlockNumber]>;
      /**
       * Lookup from identity to the block number and index of the task.
       **/
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<TaskAddress>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<SessionIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Indices of disabled validators.
       * 
       * The set is cleared when `on_session_ending` returns a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[KeyTypeId, Bytes]> | [KeyTypeId | AnyNumber | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<ValidatorId>>, [ITuple<[KeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[KeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: ValidatorId | string | Uint8Array) => Observable<Option<Keys>>, [ValidatorId]> & QueryableStorageEntry<ApiType, [ValidatorId]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ValidatorId, Keys]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<ValidatorId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountInfo>, [AccountId]> & QueryableStorageEntry<ApiType, [AccountId]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>, [BlockNumber]> & QueryableStorageEntry<ApiType, [BlockNumber]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<ConsumedWeight>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<DigestOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
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
      eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<Phase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<LastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<Hash>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    technicalCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]> & QueryableStorageEntry<ApiType, [Hash]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    technicalCommitteeMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<Moment>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    tokens: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<AccountData>, [AccountId, CurrencyId]> & QueryableStorageEntry<ApiType, [AccountId, CurrencyId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId, CurrencyId]> & QueryableStorageEntry<ApiType, [AccountId, CurrencyId]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => Observable<Balance>, [CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []> & QueryableStorageEntry<ApiType, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    treasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<ProposalIndex>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<ProposalIndex>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: ProposalIndex | AnyNumber | Uint8Array) => Observable<Option<TreasuryProposal>>, [ProposalIndex]> & QueryableStorageEntry<ApiType, [ProposalIndex]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    unknownTokens: {
      /**
       * Abstract fungible balances under a given location and a abstract
       * fungible id.
       * 
       * double_map: who, asset_id => u128
       **/
      abstractFungibleBalances: AugmentedQuery<ApiType, (arg1: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<u128>, [MultiLocation, Bytes]> & QueryableStorageEntry<ApiType, [MultiLocation, Bytes]>;
      /**
       * Concrete fungible balances under a given location and a concrete
       * fungible id.
       * 
       * double_map: who, asset_id => u128
       **/
      concreteFungibleBalances: AugmentedQuery<ApiType, (arg1: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, arg2: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array) => Observable<u128>, [MultiLocation, MultiLocation]> & QueryableStorageEntry<ApiType, [MultiLocation, MultiLocation]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    validatorFeedersMembership: {
      /**
       * The current membership, stored as an ordered Vec.
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current prime member, if one exists.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xcmpQueue: {
      /**
       * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
       **/
      inboundXcmpMessages: AugmentedQuery<ApiType, (arg1: ParaId | AnyNumber | Uint8Array, arg2: RelayBlockNumber | AnyNumber | Uint8Array) => Observable<Bytes>, [ParaId, RelayBlockNumber]> & QueryableStorageEntry<ApiType, [ParaId, RelayBlockNumber]>;
      /**
       * Status of the inbound XCMP channels.
       **/
      inboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ParaId, InboundStatus, Vec<ITuple<[RelayBlockNumber, XcmpMessageFormat]>>]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The messages outbound in a given XCMP channel.
       **/
      outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: ParaId | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [ParaId, u16]> & QueryableStorageEntry<ApiType, [ParaId, u16]>;
      /**
       * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
       * and last outbound message. If the two indices are equal, then it indicates an empty
       * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
       * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
       * case of the need to send a high-priority signal message this block.
       * The bool is true if there is a signal message waiting to be sent.
       **/
      outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ParaId, OutboundStatus, bool, u16, u16]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The configuration which controls the dynamics of the outbound queue.
       **/
      queueConfig: AugmentedQuery<ApiType, () => Observable<QueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any signal messages waiting to be sent.
       **/
      signalMessages: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Bytes>, [ParaId]> & QueryableStorageEntry<ApiType, [ParaId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xTokens: {
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    [key: string]: QueryableModuleStorage<ApiType>;
  }
}
