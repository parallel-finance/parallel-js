// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Option, U8aFixed, Vec, bool, u16, u32, u64 } from '@polkadot/types';
import type { AnyNumber, ITuple } from '@polkadot/types/types';
import type { Price } from '@open-web3/orml-types/interfaces/traits';
import type { StakingSettlementKind } from '@parallel-finance/types/interfaces/liquidStaking';
import type { Market, ValidatorInfo } from '@parallel-finance/types/interfaces/loans';
import type { AssetIdOf, CurrencyId } from '@parallel-finance/types/interfaces/primitives';
import type { AccountId, Balance, BalanceOf, Call, ChangesTrieConfiguration, Hash, KeyValue, LookupSource, OpaqueCall, OracleKey, OracleValue, Perbill, Weight } from '@parallel-finance/types/interfaces/runtime';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { OverweightIndex } from '@polkadot/types/interfaces/cumulus';
import type { Proposal } from '@polkadot/types/interfaces/democracy';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { Key } from '@polkadot/types/interfaces/system';
import type { Timepoint } from '@polkadot/types/interfaces/utility';
import type { MultiAsset, MultiLocation, VersionedMultiAssets, VersionedMultiLocation, VersionedXcm, Xcm } from '@polkadot/types/interfaces/xcm';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    amm: {
      /**
       * Allow users to add liquidity to a given pool
       * 
       * - `pool`: Currency pool, in which liquidity will be added
       * - `liquidity_amounts`: Liquidity amounts to be added in pool
       * - `minimum_amounts`: specifying its "worst case" ratio when pool already exists
       **/
      addLiquidity: AugmentedSubmittable<(pool: ITuple<[AssetIdOf, AssetIdOf]> | [AssetIdOf | AnyNumber | Uint8Array, AssetIdOf | AnyNumber | Uint8Array], liquidityAmounts: ITuple<[BalanceOf, BalanceOf]> | [BalanceOf | AnyNumber | Uint8Array, BalanceOf | AnyNumber | Uint8Array], minimumAmounts: ITuple<[BalanceOf, BalanceOf]> | [BalanceOf | AnyNumber | Uint8Array, BalanceOf | AnyNumber | Uint8Array], assetId: AssetIdOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ITuple<[AssetIdOf, AssetIdOf]>, ITuple<[BalanceOf, BalanceOf]>, ITuple<[BalanceOf, BalanceOf]>, AssetIdOf]>;
      /**
       * "force" the creation of a new pool by root
       * 
       * - `pool`: Currency pool, in which liquidity will be added
       * - `liquidity_amounts`: Liquidity amounts to be added in pool
       * - `lptoken_receiver`: Allocate any liquidity tokens to lptoken_receiver
       **/
      forceCreatePool: AugmentedSubmittable<(pool: ITuple<[AssetIdOf, AssetIdOf]> | [AssetIdOf | AnyNumber | Uint8Array, AssetIdOf | AnyNumber | Uint8Array], liquidityAmounts: ITuple<[BalanceOf, BalanceOf]> | [BalanceOf | AnyNumber | Uint8Array, BalanceOf | AnyNumber | Uint8Array], lptokenReceiver: AccountId | string | Uint8Array, assetId: AssetIdOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ITuple<[AssetIdOf, AssetIdOf]>, ITuple<[BalanceOf, BalanceOf]>, AccountId, AssetIdOf]>;
      /**
       * Allow users to remove liquidity from a given pool
       * 
       * - `pool`: Currency pool, in which liquidity will be removed
       * - `ownership_to_remove`: Ownership to be removed from user's ownership
       **/
      removeLiquidity: AugmentedSubmittable<(pool: ITuple<[AssetIdOf, AssetIdOf]> | [AssetIdOf | AnyNumber | Uint8Array, AssetIdOf | AnyNumber | Uint8Array], ownershipToRemove: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ITuple<[AssetIdOf, AssetIdOf]>, BalanceOf]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is
       * not assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, LookupSource, Compact<Balance>]>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also decrease the total issuance of the system (`TotalIssuance`).
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       * 
       * The dispatch origin for this call is `root`.
       * 
       * # <weight>
       * - Independent of the arguments.
       * - Contains a limited number of reads and writes.
       * ---------------------
       * - Base Weight:
       * - Creating: 27.56 µs
       * - Killing: 35.11 µs
       * - DB Weight: 1 Read, 1 Write to `who`
       * # </weight>
       **/
      setBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<Balance> | AnyNumber | Uint8Array, newReserved: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>, Compact<Balance>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the `TransferFee`.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * # <weight>
       * - Dependent on arguments but not critical, given proper implementations for
       * input config types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex computation.
       * 
       * Related functions:
       * 
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional
       * check that the transfer will not kill the origin account.
       * ---------------------------------
       * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
       * - DB Weight: 1 Read and 1 Write to destination account
       * - Origin account is already in memory, so no DB operations for them.
       * # </weight>
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
      /**
       * Transfer the entire transferable balance from the caller account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the account has, causing the sender account to be killed (false), or
       * transfer everything except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       * # <weight>
       * - O(1). Just like transfer, but reading the user's transferable balance first.
       * #</weight>
       **/
      transferAll: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, bool]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * [`transfer`]: struct.Pallet.html#method.transfer
       * # <weight>
       * - Cheaper than transfer because account cannot be killed.
       * - Base Weight: 51.4 µs
       * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
       * #</weight>
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<Balance>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dmpQueue: {
      /**
       * Service a single overweight message.
       * 
       * - `origin`: Must pass `ExecuteOverweightOrigin`.
       * - `index`: The index of the overweight message to service.
       * - `weight_limit`: The amount of weight that message execution may take.
       * 
       * Errors:
       * - `Unknown`: Message of `index` is unknown.
       * - `OverLimit`: Message execution may use greater than `weight_limit`.
       * 
       * Events:
       * - `OverweightServiced`: On success.
       **/
      serviceOverweight: AugmentedSubmittable<(index: OverweightIndex | AnyNumber | Uint8Array, weightLimit: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [OverweightIndex, Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    generalCouncil: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       * 
       * May be called by any signed account in order to finish voting and close the proposal.
       * 
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       * 
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       * 
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       * 
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       * - DB:
       * - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, proposalWeightBound: Compact<Weight> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, Compact<Weight>, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current state.
       * 
       * Must be called by the Root origin.
       * 
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       * 
       * # <weight>
       * Complexity: O(P) where P is the number of max proposals
       * DB Weight:
       * * Reads: Proposals
       * * Writes: Voting, Proposals, ProposalOf
       * # </weight>
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Proposal, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       * 
       * Requires the sender to be member.
       * 
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       * - DB:
       * - 1 storage read `is_member` (codec `O(M)`)
       * - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
       * - DB accesses influenced by `threshold`:
       * - EITHER storage accesses done by `proposal` (`threshold < 2`)
       * - OR proposal insertion (`threshold <= 2`)
       * - 1 storage mutation `Proposals` (codec `O(P2)`)
       * - 1 storage mutation `ProposalCount` (codec `O(1)`)
       * - 1 storage write `ProposalOf` (codec `O(B)`)
       * - 1 storage write `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<MemberCount>, Proposal, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage.
       * Used for weight estimation.
       * 
       * Requires root origin.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[], prime: Option<AccountId> | null | object | string | Uint8Array, oldCount: MemberCount | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Option<AccountId>, MemberCount]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    liquidStaking: {
      /**
       * Handle staking settlement at the end of an era, such as getting reward or been slashed in relaychain.
       **/
      recordStakingSettlement: AugmentedSubmittable<(eraIndex: EraIndex | AnyNumber | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array, kind: StakingSettlementKind | 'Reward' | 'Slash' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [EraIndex, Compact<BalanceOf>, StakingSettlementKind]>;
      /**
       * set liquid currency via governance
       **/
      setLiquidCurrency: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf]>;
      /**
       * set staking currency via governance
       **/
      setStakingCurrency: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf]>;
      /**
       * Do settlement for matching pool.
       * 
       * Calculate the imbalance of current state and send corresponding operations to
       * relay-chain.
       * 
       * NOTE: currently it finished by stake-client.
       **/
      settlement: AugmentedSubmittable<(unbondingAmount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>]>;
      /**
       * Put assets under staking, the native assets will be transferred to the account
       * owned by the pallet, user receive derivative in return, such derivative can be
       * further used as collateral for lending.
       * 
       * - `amount`: the amount of staking assets
       **/
      stake: AugmentedSubmittable<(amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>]>;
      /**
       * Unstake by exchange derivative for assets, the assets will not be avaliable immediately.
       * Instead, the request is recorded and pending for the nomination accounts in relay
       * chain to do the `unbond` operation.
       * 
       * - `amount`: the amount of derivative
       **/
      unstake: AugmentedSubmittable<(liquidAmount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    loans: {
      /**
       * Activates a market. Returns `Err` if the market currency does not exist.
       * 
       * If the market is already activated, does nothing.
       * 
       * - `asset_id`: Market related currency
       **/
      activeMarket: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf]>;
      /**
       * Stores a new market and its related currency. Returns `Err` if a currency
       * is not attached to an existent market.
       * 
       * All provided market states must be `Pending`, otherwise an error will be returned.
       * 
       * If a currency is already attached to a market, then the market will be replaced
       * by the new provided value.
       * 
       * - `asset_id`: Market related currency
       * - `market`: The market that is going to be stored
       **/
      addMarket: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array, market: Market | { collateralFactor?: any; reserveFactor?: any; closeFactor?: any; liquidateIncentive?: any; rateModel?: any; state?: any; cap?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, Market]>;
      /**
       * Add reserves by transferring from payer.
       * 
       * May only be called from `T::ReserveOrigin`.
       * 
       * - `payer`: the payer account.
       * - `asset_id`: the assets to be added.
       * - `add_amount`: the amount to be added.
       **/
      addReserves: AugmentedSubmittable<(payer: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, assetId: AssetIdOf | AnyNumber | Uint8Array, addAmount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, AssetIdOf, BalanceOf]>;
      /**
       * Sender borrows assets from the protocol to their own address.
       * 
       * - `asset_id`: the asset to be borrowed.
       * - `borrow_amount`: the amount to be borrowed.
       **/
      borrow: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array, borrowAmount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, BalanceOf]>;
      /**
       * Set the collateral asset.
       * 
       * - `asset_id`: the asset to be set.
       * - `enable`: turn on/off the collateral option.
       **/
      collateralAsset: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array, enable: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, bool]>;
      /**
       * The sender liquidates the borrower's collateral.
       * 
       * - `borrower`: the borrower to be liquidated.
       * - `liquidate_token`: the assert to be liquidated.
       * - `repay_amount`: the amount to be repaid borrow.
       * - `collateral_token`: The collateral to seize from the borrower.
       **/
      liquidateBorrow: AugmentedSubmittable<(borrower: AccountId | string | Uint8Array, liquidateToken: AssetIdOf | AnyNumber | Uint8Array, repayAmount: BalanceOf | AnyNumber | Uint8Array, collateralToken: AssetIdOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AssetIdOf, BalanceOf, AssetIdOf]>;
      /**
       * Sender supplies assets into the market and receives internal supplies in exchange.
       * 
       * - `asset_id`: the asset to be deposited.
       * - `mint_amount`: the amount to be deposited.
       **/
      mint: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array, mintAmount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, BalanceOf]>;
      /**
       * Sender redeems some of internal supplies in exchange for the underlying asset.
       * 
       * - `asset_id`: the asset to be redeemed.
       * - `redeem_amount`: the amount to be redeemed.
       **/
      redeem: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array, redeemAmount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, BalanceOf]>;
      /**
       * Sender redeems all of internal supplies in exchange for the underlying asset.
       * 
       * - `asset_id`: the asset to be redeemed.
       **/
      redeemAll: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf]>;
      /**
       * Reduces reserves by transferring to receiver.
       * 
       * May only be called from `T::ReserveOrigin`.
       * 
       * - `receiver`: the receiver account.
       * - `asset_id`: the assets to be reduced.
       * - `reduce_amount`: the amount to be reduced.
       **/
      reduceReserves: AugmentedSubmittable<(receiver: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, assetId: AssetIdOf | AnyNumber | Uint8Array, reduceAmount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, AssetIdOf, BalanceOf]>;
      /**
       * Sender repays some of their debts.
       * 
       * - `asset_id`: the asset to be repaid.
       * - `repay_amount`: the amount to be repaid.
       **/
      repayBorrow: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array, repayAmount: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, BalanceOf]>;
      /**
       * Sender repays all of their debts.
       * 
       * - `asset_id`: the asset to be repaid.
       **/
      repayBorrowAll: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf]>;
      /**
       * Updates a stored market. Returns `Err` if the market currency does not exist.
       * 
       * Market state won't be modified, regardless of the provided value.
       * 
       * - `asset_id`: Market related currency
       * - `market`: The new market parameters
       **/
      updateMarket: AugmentedSubmittable<(assetId: AssetIdOf | AnyNumber | Uint8Array, market: Market | { collateralFactor?: any; reserveFactor?: any; closeFactor?: any; liquidateIncentive?: any; rateModel?: any; state?: any; cap?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetIdOf, Market]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multisig: {
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * NOTE: If this is the final approval, you will want to use `as_multi` instead.
       * 
       * # <weight>
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `DepositBase + threshold * DepositFactor`.
       * ----------------------------------
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account]
       * - Write: Multisig Storage, [Caller Account]
       * # </weight>
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, callHash: U8aFixed | string | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Option<Timepoint>, U8aFixed, Weight]>;
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * If there are enough, then dispatch the call.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call`: The call to be executed.
       * 
       * NOTE: Unless this is the final approval, you will generally want to use
       * `approve_as_multi` instead, since it only requires a hash of the call.
       * 
       * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
       * on success, result is `Ok` and the result from the interior call, if it was executed,
       * may be found in the deposited `MultisigExecuted` event.
       * 
       * # <weight>
       * - `O(S + Z + Call)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - The weight of the `call`.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a
       * deposit taken for its lifetime of
       * `DepositBase + threshold * DepositFactor`.
       * -------------------------------
       * - DB Weight:
       * - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
       * - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
       * - Plus Call Weight
       * # </weight>
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], maybeTimepoint: Option<Timepoint> | null | object | string | Uint8Array, call: OpaqueCall | string | Uint8Array, storeCall: bool | boolean | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Option<Timepoint>, OpaqueCall, bool, Weight]>;
      /**
       * Immediately dispatch a multi-signature call using a single approval from the caller.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `other_signatories`: The accounts (other than the sender) who are part of the
       * multi-signature, but do not participate in the approval process.
       * - `call`: The call to be executed.
       * 
       * Result is equivalent to the dispatched result.
       * 
       * # <weight>
       * O(Z + C) where Z is the length of the call and C its execution weight.
       * -------------------------------
       * - DB Weight: None
       * - Plus Call Weight
       * # </weight>
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Call]>;
      /**
       * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
       * for this operation will be unreserved on success.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `timepoint`: The timepoint (block number and transaction index) of the first approval
       * transaction for this dispatch.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * # <weight>
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - One event.
       * - I/O: 1 read `O(S)`, one remove.
       * - Storage: removes one item.
       * ----------------------------------
       * - DB Weight:
       * - Read: Multisig Storage, [Caller Account], Refund Account, Calls
       * - Write: Multisig Storage, [Caller Account], Refund Account, Calls
       * # </weight>
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId> | (AccountId | string | Uint8Array)[], timepoint: Timepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId>, Timepoint, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nomineeElection: {
      /**
       * Set selected validators
       * 
       * If the validators passed are empty, return an error
       **/
      setValidators: AugmentedSubmittable<(validators: Vec<ValidatorInfo> | (ValidatorInfo | { name?: any; address?: any; stakes?: any; score?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<ValidatorInfo>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    oracle: {
      /**
       * Feed the external value.
       * 
       * Require authorized operator.
       **/
      feedValues: AugmentedSubmittable<(values: Vec<ITuple<[OracleKey, OracleValue]>> | ([OracleKey | AnyNumber | Uint8Array, OracleValue | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[OracleKey, OracleValue]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ormlXcm: {
      /**
       * Send an XCM message as parachain sovereign.
       **/
      sendAsSovereign: AugmentedSubmittable<(dest: MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, message: Xcm | { WithdrawAsset: any } | { ReserveAssetDeposit: any } | { ReceiveTeleportedAsset: any } | { QueryResponse: any } | { TransferAsset: any } | { TransferReserveAsset: any } | { Transact: any } | { HrmpNewChannelOpenRequest: any } | { HrmpChannelAccepted: any } | { HrmpChannelClosing: any } | { RelayedFrom: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiLocation, Xcm]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    polkadotXcm: {
      /**
       * Execute an XCM message from a local, signed, origin.
       * 
       * An event is deposited indicating whether `msg` could be executed completely or only
       * partially.
       * 
       * No more than `max_weight` will be used in its attempted execution. If this is less than the
       * maximum amount of weight that the message could take to be executed, then no execution
       * attempt will be made.
       * 
       * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
       * to completion; only that *some* of it was executed.
       **/
      execute: AugmentedSubmittable<(message: VersionedXcm | { V0: any } | { V1: any } | { V2: any } | string | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [VersionedXcm, Weight]>;
      /**
       * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
       * a notification XCM.
       * 
       * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
       * `dest` side.
       * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
       * `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: VersionedMultiLocation | { V0: any } | { V1: any } | { V2: any } | string | Uint8Array, beneficiary: VersionedMultiLocation | { V0: any } | { V1: any } | { V2: any } | string | Uint8Array, assets: VersionedMultiAssets | { V0: any } | { V1: any } | { V2: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, destWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [VersionedMultiLocation, VersionedMultiLocation, VersionedMultiAssets, u32, Weight]>;
      send: AugmentedSubmittable<(dest: VersionedMultiLocation | { V0: any } | { V1: any } | { V2: any } | string | Uint8Array, message: VersionedXcm | { V0: any } | { V1: any } | { V2: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [VersionedMultiLocation, VersionedXcm]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       * 
       * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
       * `dest` side. May not be empty.
       * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
       * `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
       **/
      teleportAssets: AugmentedSubmittable<(dest: VersionedMultiLocation | { V0: any } | { V1: any } | { V2: any } | string | Uint8Array, beneficiary: VersionedMultiLocation | { V0: any } | { V1: any } | { V2: any } | string | Uint8Array, assets: VersionedMultiAssets | { V0: any } | { V1: any } | { V2: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, destWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [VersionedMultiLocation, VersionedMultiLocation, VersionedMultiAssets, u32, Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    prices: {
      /**
       * Reset emergency price
       **/
      resetPrice: AugmentedSubmittable<(assetId: CurrencyId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId]>;
      /**
       * Set emergency price
       **/
      setPrice: AugmentedSubmittable<(assetId: CurrencyId | AnyNumber | Uint8Array, price: Price | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Price]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      setKey: AugmentedSubmittable<(updated: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudo: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudoAs: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - The weight of this call is defined by the caller.
       * # </weight>
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | { callIndex?: any; args?: any } | string | Uint8Array, weight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * A dispatch that will fill the block weight up to the given ratio.
       **/
      fillBlock: AugmentedSubmittable<(ratio: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       * 
       * # <weight>
       * - `O(P)` where `P` amount of keys with prefix `prefix`
       * - `P` storage deletions.
       * - Base Weight: 0.834 * P µs
       * - Writes: Number of subkeys + 1
       * # </weight>
       **/
      killPrefix: AugmentedSubmittable<(prefix: Key | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Key, u32]>;
      /**
       * Kill some items from storage.
       * 
       * # <weight>
       * - `O(IK)` where `I` length of `keys` and `K` length of one key
       * - `I` storage deletions.
       * - Base Weight: .378 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Key> | (Key | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Key>]>;
      /**
       * Make some on-chain remark.
       * 
       * # <weight>
       * - `O(1)`
       * # </weight>
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       * 
       * # <weight>
       * - `O(b)` where b is the length of the remark.
       * - 1 event.
       * # </weight>
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new changes trie configuration.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write or delete (codec `O(1)`).
       * - 1 call to `deposit_log`: Uses `append` API, so O(1)
       * - Base Weight: 7.218 µs
       * - DB Weight:
       * - Writes: Changes Trie, System Digest
       * # </weight>
       **/
      setChangesTrieConfig: AugmentedSubmittable<(changesTrieConfig: Option<ChangesTrieConfiguration> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<ChangesTrieConfiguration>]>;
      /**
       * Set the new runtime code.
       * 
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 storage write (codec `O(C)`).
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
       * - 1 event.
       * The weight of this function is dependent on the runtime, but generally this is very expensive.
       * We will treat this as a full block.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 event.
       * The weight of this function is dependent on the runtime. We will treat this as a full block.
       * # </weight>
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       * 
       * # <weight>
       * - `O(1)`
       * - 1 storage write.
       * - Base Weight: 1.405 µs
       * - 1 write to HEAP_PAGES
       * # </weight>
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       * 
       * # <weight>
       * - `O(I)` where `I` length of `items`
       * - `I` storage writes (`O(1)`).
       * - Base Weight: 0.568 * i µs
       * - Writes: Number of items
       * # </weight>
       **/
      setStorage: AugmentedSubmittable<(items: Vec<KeyValue> | (KeyValue)[]) => SubmittableExtrinsic<ApiType>, [Vec<KeyValue>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    technicalCommittee: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       * 
       * May be called by any signed account in order to finish voting and close the proposal.
       * 
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       * 
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       * 
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       * 
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       * - DB:
       * - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
       * - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
       * - any mutations done while executing `proposal` (`P1`)
       * - up to 3 events
       * # </weight>
       **/
      close: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, proposalWeightBound: Compact<Weight> | AnyNumber | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, Compact<Weight>, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current state.
       * 
       * Must be called by the Root origin.
       * 
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       * 
       * # <weight>
       * Complexity: O(P) where P is the number of max proposals
       * DB Weight:
       * * Reads: Proposals
       * * Writes: Voting, Proposals, ProposalOf
       * # </weight>
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * # <weight>
       * ## Weight
       * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
       * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
       * - 1 event
       * # </weight>
       **/
      execute: AugmentedSubmittable<(proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Proposal, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       * 
       * Requires the sender to be member.
       * 
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       * 
       * # <weight>
       * ## Weight
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       * - DB:
       * - 1 storage read `is_member` (codec `O(M)`)
       * - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
       * - DB accesses influenced by `threshold`:
       * - EITHER storage accesses done by `proposal` (`threshold < 2`)
       * - OR proposal insertion (`threshold <= 2`)
       * - 1 storage mutation `Proposals` (codec `O(P2)`)
       * - 1 storage mutation `ProposalCount` (codec `O(1)`)
       * - 1 storage write `ProposalOf` (codec `O(B)`)
       * - 1 storage write `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      propose: AugmentedSubmittable<(threshold: Compact<MemberCount> | AnyNumber | Uint8Array, proposal: Proposal | { callIndex?: any; args?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<MemberCount>, Proposal, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage.
       * Used for weight estimation.
       * 
       * Requires root origin.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # <weight>
       * ## Weight
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       * - DB:
       * - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
       * - 1 storage read (codec `O(P)`) for reading the proposals
       * - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
       * - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
       * # </weight>
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId> | (AccountId | string | Uint8Array)[], prime: Option<AccountId> | null | object | string | Uint8Array, oldCount: MemberCount | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>, Option<AccountId>, MemberCount]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a fee.
       * # <weight>
       * ## Weight
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       * - DB:
       * - 1 storage read `Members` (codec `O(M)`)
       * - 1 storage mutation `Voting` (codec `O(M)`)
       * - 1 event
       * # </weight>
       **/
      vote: AugmentedSubmittable<(proposal: Hash | string | Uint8Array, index: Compact<ProposalIndex> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<ProposalIndex>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * Send a call through an indexed pseudonym of the sender.
       * 
       * Filter from origin are passed along. The call will be dispatched with an origin which
       * use the same filter as the origin of this call.
       * 
       * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
       * because you expect `proxy` to have been used prior in the call stack and you do not want
       * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
       * in the Multisig pallet instead.
       * 
       * NOTE: Prior to version *12, this was called `as_limited_sub`.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       * 
       * May be called from any origin.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then call are dispatch without checking origin filter. (This includes
       * bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       * 
       * This will return `Ok` in all circumstances. To determine the success of the batch, an
       * event is deposited. If a call failed and the batch was interrupted, then the
       * `BatchInterrupted` event is deposited, along with the number of successful calls made
       * and the error of the failed call. If all were successful, then the `BatchCompleted`
       * event is deposited.
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       * 
       * May be called from any origin.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then call are dispatch without checking origin filter. (This includes
       * bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * # <weight>
       * - Complexity: O(C) where C is the number of calls to be batched.
       * # </weight>
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | { callIndex?: any; args?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xTokens: {
      /**
       * Transfer native currencies.
       * 
       * `dest_weight` is the weight for XCM execution on the dest chain, and
       * it would be charged from the transferred assets. If set below
       * requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transfer: AugmentedSubmittable<(currencyId: CurrencyId | AnyNumber | Uint8Array, amount: Balance | AnyNumber | Uint8Array, dest: MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, destWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Balance, MultiLocation, Weight]>;
      /**
       * Transfer `MultiAsset`.
       * 
       * `dest_weight` is the weight for XCM execution on the dest chain, and
       * it would be charged from the transferred assets. If set below
       * requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMultiasset: AugmentedSubmittable<(asset: MultiAsset | { id?: any; fungibility?: any } | string | Uint8Array, dest: MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, destWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAsset, MultiLocation, Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
    [key: string]: SubmittableModuleExtrinsics<ApiType>;
  }
}
