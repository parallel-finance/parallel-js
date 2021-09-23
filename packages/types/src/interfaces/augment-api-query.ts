// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Option, U8aFixed, Vec, bool, u128, u16, u32 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { OrderedSet, TimestampedValueOf } from '@open-web3/orml-types/interfaces/oracle';
import type { Price } from '@open-web3/orml-types/interfaces/traits';
import type { PoolLiquidityAmount } from '@parallel-finance/types/interfaces/amm';
import type { MatchingLedger, StakingSettlementKind } from '@parallel-finance/types/interfaces/liquidStaking';
import type { BorrowSnapshot, Deposits, EarnedSnapshot, Market, ValidatorSet } from '@parallel-finance/types/interfaces/loans';
import type { AssetIdOf, CurrencyId, Rate, Ratio, Timestamp } from '@parallel-finance/types/interfaces/primitives';
import type { AccountId, AssetId, Balance, BalanceOf, BlockNumber, Hash, OpaqueCall, OracleKey, Releases } from '@parallel-finance/types/interfaces/runtime';
import type { AccountData, BalanceLock, ReserveData } from '@polkadot/types/interfaces/balances';
import type { Votes } from '@polkadot/types/interfaces/collective';
import type { ConfigData, OverweightIndex, PageCounter, PageIndexData } from '@polkadot/types/interfaces/cumulus';
import type { Proposal } from '@polkadot/types/interfaces/democracy';
import type { ParaId, RelayBlockNumber } from '@polkadot/types/interfaces/parachains';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
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
      liquidityProviders: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: CurrencyId | AnyNumber | Uint8Array, arg3: CurrencyId | AnyNumber | Uint8Array) => Observable<PoolLiquidityAmount>, [AccountId, CurrencyId, CurrencyId]> & QueryableStorageEntry<ApiType, [AccountId, CurrencyId, CurrencyId]>;
      /**
       * A bag of liquidity composed by two different assets
       **/
      pools: AugmentedQuery<ApiType, (arg1: CurrencyId | AnyNumber | Uint8Array, arg2: CurrencyId | AnyNumber | Uint8Array) => Observable<Option<PoolLiquidityAmount>>, [CurrencyId, CurrencyId]> & QueryableStorageEntry<ApiType, [CurrencyId, CurrencyId]>;
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
    liquidStaking: {
      /**
       * The exchange rate between relaychain native asset and the voucher.
       **/
      exchangeRate: AugmentedQuery<ApiType, () => Observable<Rate>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Liquid currency asset id
       **/
      liquidCurrency: AugmentedQuery<ApiType, () => Observable<Option<AssetIdOf>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Store total stake amount and unstake amount in each era,
       * And will update when stake/unstake occurred.
       **/
      matchingPool: AugmentedQuery<ApiType, () => Observable<MatchingLedger>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fraction of reward currently set aside for reserves
       **/
      reserveFactor: AugmentedQuery<ApiType, () => Observable<Ratio>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Staking currency asset id
       **/
      stakingCurrency: AugmentedQuery<ApiType, () => Observable<Option<AssetIdOf>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total amount of staked assets in relaycahin.
       **/
      stakingPool: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Records reward or slash of era.
       **/
      stakingSettlementRecords: AugmentedQuery<ApiType, (arg1: EraIndex | AnyNumber | Uint8Array, arg2: StakingSettlementKind | 'Reward' | 'Slash' | number | Uint8Array) => Observable<Option<BalanceOf>>, [EraIndex, StakingSettlementKind]> & QueryableStorageEntry<ApiType, [EraIndex, StakingSettlementKind]>;
      /**
       * Manage which we should pay off to.
       * 
       * Insert a new record while user can't be paid instantly in unstaking operation.
       **/
      unstakeQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId, BalanceOf]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    loans: {
      /**
       * Mapping of account addresses to outstanding borrow balances
       * AssetId -> Owner -> BorrowSnapshot
       **/
      accountBorrows: AugmentedQuery<ApiType, (arg1: AssetIdOf | AnyNumber | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<BorrowSnapshot>, [AssetIdOf, AccountId]> & QueryableStorageEntry<ApiType, [AssetIdOf, AccountId]>;
      /**
       * Mapping of account addresses to deposit details
       * CollateralType -> Owner -> Deposits
       **/
      accountDeposits: AugmentedQuery<ApiType, (arg1: AssetIdOf | AnyNumber | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<Deposits>, [AssetIdOf, AccountId]> & QueryableStorageEntry<ApiType, [AssetIdOf, AccountId]>;
      /**
       * Mapping of account addresses to total deposit interest accrual
       * AssetId -> Owner -> EarnedSnapshot
       **/
      accountEarned: AugmentedQuery<ApiType, (arg1: AssetIdOf | AnyNumber | Uint8Array, arg2: AccountId | string | Uint8Array) => Observable<EarnedSnapshot>, [AssetIdOf, AccountId]> & QueryableStorageEntry<ApiType, [AssetIdOf, AccountId]>;
      /**
       * Accumulator of the total earned interest rate since the opening of the market
       * AssetId -> u128
       **/
      borrowIndex: AugmentedQuery<ApiType, (arg: AssetIdOf | AnyNumber | Uint8Array) => Observable<Rate>, [AssetIdOf]> & QueryableStorageEntry<ApiType, [AssetIdOf]>;
      /**
       * Mapping of borrow rate to currency type
       **/
      borrowRate: AugmentedQuery<ApiType, (arg: AssetIdOf | AnyNumber | Uint8Array) => Observable<Rate>, [AssetIdOf]> & QueryableStorageEntry<ApiType, [AssetIdOf]>;
      /**
       * The exchange rate from the underlying to the internal collateral
       **/
      exchangeRate: AugmentedQuery<ApiType, (arg: AssetIdOf | AnyNumber | Uint8Array) => Observable<Rate>, [AssetIdOf]> & QueryableStorageEntry<ApiType, [AssetIdOf]>;
      /**
       * The timestamp of the previous block or defaults to timestamp at genesis.
       **/
      lastBlockTimestamp: AugmentedQuery<ApiType, () => Observable<Timestamp>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping of asset id to its market
       **/
      markets: AugmentedQuery<ApiType, (arg: AssetIdOf | AnyNumber | Uint8Array) => Observable<Option<Market>>, [AssetIdOf]> & QueryableStorageEntry<ApiType, [AssetIdOf]>;
      /**
       * Mapping of supply rate to currency type
       **/
      supplyRate: AugmentedQuery<ApiType, (arg: AssetIdOf | AnyNumber | Uint8Array) => Observable<Rate>, [AssetIdOf]> & QueryableStorageEntry<ApiType, [AssetIdOf]>;
      /**
       * Total amount of outstanding borrows of the underlying in this market
       * AssetId -> Balance
       **/
      totalBorrows: AugmentedQuery<ApiType, (arg: AssetIdOf | AnyNumber | Uint8Array) => Observable<BalanceOf>, [AssetIdOf]> & QueryableStorageEntry<ApiType, [AssetIdOf]>;
      /**
       * Total amount of reserves of the underlying held in this market
       * AssetId -> Balance
       **/
      totalReserves: AugmentedQuery<ApiType, (arg: AssetIdOf | AnyNumber | Uint8Array) => Observable<BalanceOf>, [AssetIdOf]> & QueryableStorageEntry<ApiType, [AssetIdOf]>;
      /**
       * Total number of collateral tokens in circulation
       * CollateralType -> Balance
       **/
      totalSupply: AugmentedQuery<ApiType, (arg: AssetIdOf | AnyNumber | Uint8Array) => Observable<BalanceOf>, [AssetIdOf]> & QueryableStorageEntry<ApiType, [AssetIdOf]>;
      /**
       * Borrow utilization ratio
       **/
      utilizationRatio: AugmentedQuery<ApiType, (arg: AssetIdOf | AnyNumber | Uint8Array) => Observable<Ratio>, [AssetIdOf]> & QueryableStorageEntry<ApiType, [AssetIdOf]>;
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
      isUpdated: AugmentedQuery<ApiType, (arg: OracleKey | AnyNumber | Uint8Array) => Observable<bool>, [OracleKey]> & QueryableStorageEntry<ApiType, [OracleKey]>;
      /**
       * Raw values for each oracle operators
       **/
      rawValues: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: OracleKey | AnyNumber | Uint8Array) => Observable<Option<TimestampedValueOf>>, [AccountId, OracleKey]> & QueryableStorageEntry<ApiType, [AccountId, OracleKey]>;
      /**
       * Combined value, may not be up to date
       **/
      values: AugmentedQuery<ApiType, (arg: OracleKey | AnyNumber | Uint8Array) => Observable<Option<TimestampedValueOf>>, [OracleKey]> & QueryableStorageEntry<ApiType, [OracleKey]>;
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
    prices: {
      /**
       * Mapping from currency id to it's emergency price
       **/
      emergencyPrice: AugmentedQuery<ApiType, (arg: AssetId | AnyNumber | Uint8Array) => Observable<Option<Price>>, [AssetId]> & QueryableStorageEntry<ApiType, [AssetId]>;
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
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []> & QueryableStorageEntry<ApiType, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []> & QueryableStorageEntry<ApiType, []>;
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
      abstractFungibleBalances: AugmentedQuery<ApiType, (arg1: MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<u128>, [MultiLocation, Bytes]> & QueryableStorageEntry<ApiType, [MultiLocation, Bytes]>;
      /**
       * Concrete fungible balances under a given location and a concrete
       * fungible id.
       * 
       * double_map: who, asset_id => u128
       **/
      concreteFungibleBalances: AugmentedQuery<ApiType, (arg1: MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, arg2: MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => Observable<u128>, [MultiLocation, MultiLocation]> & QueryableStorageEntry<ApiType, [MultiLocation, MultiLocation]>;
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
