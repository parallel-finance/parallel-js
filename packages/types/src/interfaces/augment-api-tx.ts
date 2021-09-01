// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Option, U8aFixed, Vec, bool, u16, u32, u64 } from '@polkadot/types';
import type { AnyNumber, ITuple } from '@polkadot/types/types';
import type { VestingScheduleOf } from '@open-web3/orml-types/interfaces/vesting';
import type { Market, ValidatorInfo } from '@parallel-finance/types/interfaces/loans';
import type { AmountOf, CurrencyId, CurrencyIdOf, PriceWithDecimal } from '@parallel-finance/types/interfaces/primitives';
import type { AccountId, Balance, BalanceOf, BlockNumber, Call, ChangesTrieConfiguration, Hash, Header, KeyValue, LookupSource, Moment, OpaqueCall, OracleKey, OracleValue, Perbill, Weight } from '@parallel-finance/types/interfaces/runtime';
import type { MemberCount, ProposalIndex } from '@polkadot/types/interfaces/collective';
import type { OverweightIndex } from '@polkadot/types/interfaces/cumulus';
import type { AccountVote, Conviction, PropIndex, Proposal, ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { ParachainInherentData, RelayChainBlockNumber, UpwardMessage } from '@polkadot/types/interfaces/parachains';
import type { Period, Priority } from '@polkadot/types/interfaces/scheduler';
import type { Keys } from '@polkadot/types/interfaces/session';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { Key } from '@polkadot/types/interfaces/system';
import type { Timepoint } from '@polkadot/types/interfaces/utility';
import type { MultiAsset, MultiLocation, Xcm } from '@polkadot/types/interfaces/xcm';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    amm: {
      /**
       * Allow users to add liquidity to a given pool
       * 
       * - `pool`: Currency pool, in which liquidity will be added
       * - `liquidity_amounts`: Liquidity amounts to be added in pool
       **/
      addLiquidity: AugmentedSubmittable<(pool: ITuple<[CurrencyId, CurrencyId]> | [CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array], liquidityAmounts: ITuple<[Balance, Balance]> | [Balance | AnyNumber | Uint8Array, Balance | AnyNumber | Uint8Array], minimumAmounts: ITuple<[Balance, Balance]> | [Balance | AnyNumber | Uint8Array, Balance | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [ITuple<[CurrencyId, CurrencyId]>, ITuple<[Balance, Balance]>, ITuple<[Balance, Balance]>]>;
      /**
       * Allow users to remove liquidity from a given pool
       * 
       * - `pool`: Currency pool, in which liquidity will be removed
       * - `liquidity_amounts`: Liquidity amounts to be removed from pool
       **/
      removeLiquidity: AugmentedSubmittable<(pool: ITuple<[CurrencyId, CurrencyId]> | [CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array], ownershipToRemove: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ITuple<[CurrencyId, CurrencyId]>, Balance]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    authorship: {
      /**
       * Provide a set of uncles.
       **/
      setUncles: AugmentedSubmittable<(newUncles: Vec<Header> | (Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Header>]>;
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
    collatorSelection: {
      leaveIntent: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      registerAsCandidate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      setCandidacyBond: AugmentedSubmittable<(bond: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BalanceOf]>;
      setDesiredCandidates: AugmentedSubmittable<(max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      setInvulnerables: AugmentedSubmittable<(updated: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    currencies: {
      /**
       * Transfer some balance to another account under `currency_id`.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Transfer some native currency to another account.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<BalanceOf>]>;
      /**
       * update amount of account `who` under `currency_id`.
       * 
       * The dispatch origin of this call must be _Root_.
       **/
      updateBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, amount: AmountOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, AmountOf]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    democracy: {
      /**
       * Permanently place a proposal into the blacklist. This prevents it from ever being
       * proposed again.
       * 
       * If called on a queued public or external proposal, then this will result in it being
       * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
       * then it will be cancelled.
       * 
       * The dispatch origin of this call must be `BlacklistOrigin`.
       * 
       * - `proposal_hash`: The proposal hash to blacklist permanently.
       * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
       * cancelled.
       * 
       * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
       * reasonable value).
       **/
      blacklist: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, maybeRefIndex: Option<ReferendumIndex> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Option<ReferendumIndex>]>;
      /**
       * Remove a proposal.
       * 
       * The dispatch origin of this call must be `CancelProposalOrigin`.
       * 
       * - `prop_index`: The index of the proposal to cancel.
       * 
       * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
       **/
      cancelProposal: AugmentedSubmittable<(propIndex: Compact<PropIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<PropIndex>]>;
      /**
       * Cancel a proposal queued for enactment.
       * 
       * The dispatch origin of this call must be _Root_.
       * 
       * - `which`: The index of the referendum to cancel.
       * 
       * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
       **/
      cancelQueued: AugmentedSubmittable<(which: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ReferendumIndex]>;
      /**
       * Remove a referendum.
       * 
       * The dispatch origin of this call must be _Root_.
       * 
       * - `ref_index`: The index of the referendum to cancel.
       * 
       * # Weight: `O(1)`.
       **/
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ReferendumIndex>]>;
      /**
       * Clears all public proposals.
       * 
       * The dispatch origin of this call must be _Root_.
       * 
       * Weight: `O(1)`.
       **/
      clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Delegate the voting power (with some given conviction) of the sending account.
       * 
       * The balance delegated is locked for as long as it's delegated, and thereafter for the
       * time appropriate for the conviction's lock period.
       * 
       * The dispatch origin of this call must be _Signed_, and the signing account must either:
       * - be delegating already; or
       * - have no voting activity (if there is, then it will need to be removed/consolidated
       * through `reap_vote` or `unvote`).
       * 
       * - `to`: The account whose voting the `target` account's voting power will follow.
       * - `conviction`: The conviction that will be attached to the delegated votes. When the
       * account is undelegated, the funds will be locked for the corresponding period.
       * - `balance`: The amount of the account's balance to be used in delegating. This must
       * not be more than the account's current balance.
       * 
       * Emits `Delegated`.
       * 
       * Weight: `O(R)` where R is the number of referendums the voter delegating to has
       * voted on. Weight is charged as if maximum votes.
       **/
      delegate: AugmentedSubmittable<(to: AccountId | string | Uint8Array, conviction: Conviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: BalanceOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Conviction, BalanceOf]>;
      /**
       * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
       * referendum.
       * 
       * The dispatch origin of this call must be `CancellationOrigin`.
       * 
       * -`ref_index`: The index of the referendum to cancel.
       * 
       * Weight: `O(1)`.
       **/
      emergencyCancel: AugmentedSubmittable<(refIndex: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ReferendumIndex]>;
      /**
       * Enact a proposal from a referendum. For now we just make the weight be the maximum.
       **/
      enactProposal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, ReferendumIndex]>;
      /**
       * Schedule a referendum to be tabled once it is legal to schedule an external
       * referendum.
       * 
       * The dispatch origin of this call must be `ExternalOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal.
       * 
       * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
       * Decoding vec of length V. Charged as maximum
       **/
      externalPropose: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
       * schedule an external referendum.
       * 
       * The dispatch of this call must be `ExternalDefaultOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal.
       * 
       * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
       * pre-scheduled `external_propose` call.
       * 
       * Weight: `O(1)`
       **/
      externalProposeDefault: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
       * an external referendum.
       * 
       * The dispatch of this call must be `ExternalMajorityOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal.
       * 
       * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
       * pre-scheduled `external_propose` call.
       * 
       * Weight: `O(1)`
       **/
      externalProposeMajority: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Schedule the currently externally-proposed majority-carries referendum to be tabled
       * immediately. If there is no externally-proposed referendum currently, or if there is one
       * but it is not a majority-carries referendum then it fails.
       * 
       * The dispatch of this call must be `FastTrackOrigin`.
       * 
       * - `proposal_hash`: The hash of the current external proposal.
       * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
       * `FastTrackVotingPeriod` if too low.
       * - `delay`: The number of block after voting has ended in approval and this should be
       * enacted. This doesn't have a minimum amount.
       * 
       * Emits `Started`.
       * 
       * Weight: `O(1)`
       **/
      fastTrack: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, votingPeriod: BlockNumber | AnyNumber | Uint8Array, delay: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, BlockNumber, BlockNumber]>;
      /**
       * Register the preimage for an upcoming proposal. This requires the proposal to be
       * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
       * the preimage has not been uploaded before and matches some imminent proposal,
       * no fee is paid.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `encoded_proposal`: The preimage of a proposal.
       * 
       * Emits `PreimageNoted`.
       * 
       * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
       **/
      noteImminentPreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
       **/
      noteImminentPreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
       * in the dispatch queue but does require a deposit, returned once enacted.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `encoded_proposal`: The preimage of a proposal.
       * 
       * Emits `PreimageNoted`.
       * 
       * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
       **/
      notePreimage: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
       **/
      notePreimageOperational: AugmentedSubmittable<(encodedProposal: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Propose a sensitive action to be taken.
       * 
       * The dispatch origin of this call must be _Signed_ and the sender must
       * have funds to cover the deposit.
       * 
       * - `proposal_hash`: The hash of the proposal preimage.
       * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
       * 
       * Emits `Proposed`.
       * 
       * Weight: `O(p)`
       **/
      propose: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, value: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<BalanceOf>]>;
      /**
       * Remove an expired proposal preimage and collect the deposit.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `proposal_hash`: The preimage hash of a proposal.
       * - `proposal_length_upper_bound`: an upper bound on length of the proposal.
       * Extrinsic is weighted according to this value with no refund.
       * 
       * This will only work after `VotingPeriod` blocks from the time that the preimage was
       * noted, if it's the same account doing it. If it's a different account, then it'll only
       * work an additional `EnactmentPeriod` later.
       * 
       * Emits `PreimageReaped`.
       * 
       * Weight: `O(D)` where D is length of proposal.
       **/
      reapPreimage: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array, proposalLenUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash, Compact<u32>]>;
      /**
       * Remove a vote for a referendum.
       * 
       * If the `target` is equal to the signer, then this function is exactly equivalent to
       * `remove_vote`. If not equal to the signer, then the vote must have expired,
       * either because the referendum was cancelled, because the voter lost the referendum or
       * because the conviction period is over.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account of the vote to be removed; this account must have voted for
       * referendum `index`.
       * - `index`: The index of referendum of the vote to be removed.
       * 
       * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeOtherVote: AugmentedSubmittable<(target: AccountId | string | Uint8Array, index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, ReferendumIndex]>;
      /**
       * Remove a vote for a referendum.
       * 
       * If:
       * - the referendum was cancelled, or
       * - the referendum is ongoing, or
       * - the referendum has ended such that
       * - the vote of the account was in opposition to the result; or
       * - there was no conviction to the account's vote; or
       * - the account made a split vote
       * ...then the vote is removed cleanly and a following call to `unlock` may result in more
       * funds being available.
       * 
       * If, however, the referendum has ended and:
       * - it finished corresponding to the vote of the account, and
       * - the account made a standard vote with conviction, and
       * - the lock period of the conviction is not over
       * ...then the lock will be aggregated into the overall account's lock, which may involve
       * *overlocking* (where the two locks are combined into a single lock that is the maximum
       * of both the amount locked and the time is it locked for).
       * 
       * The dispatch origin of this call must be _Signed_, and the signer must have a vote
       * registered for referendum `index`.
       * 
       * - `index`: The index of referendum of the vote to be removed.
       * 
       * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeVote: AugmentedSubmittable<(index: ReferendumIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ReferendumIndex]>;
      /**
       * Signals agreement with a particular proposal.
       * 
       * The dispatch origin of this call must be _Signed_ and the sender
       * must have funds to cover the deposit, equal to the original deposit.
       * 
       * - `proposal`: The index of the proposal to second.
       * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
       * proposal. Extrinsic is weighted according to this value with no refund.
       * 
       * Weight: `O(S)` where S is the number of seconds a proposal already has.
       **/
      second: AugmentedSubmittable<(proposal: Compact<PropIndex> | AnyNumber | Uint8Array, secondsUpperBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<PropIndex>, Compact<u32>]>;
      /**
       * Undelegate the voting power of the sending account.
       * 
       * Tokens may be unlocked following once an amount of time consistent with the lock period
       * of the conviction with which the delegation was issued.
       * 
       * The dispatch origin of this call must be _Signed_ and the signing account must be
       * currently delegating.
       * 
       * Emits `Undelegated`.
       * 
       * Weight: `O(R)` where R is the number of referendums the voter delegating to has
       * voted on. Weight is charged as if maximum votes.
       **/
      undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unlock tokens that have an expired lock.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account to remove the lock on.
       * 
       * Weight: `O(R)` with R number of vote of target.
       **/
      unlock: AugmentedSubmittable<(target: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Veto and blacklist the external proposal hash.
       * 
       * The dispatch origin of this call must be `VetoOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
       * 
       * Emits `Vetoed`.
       * 
       * Weight: `O(V + log(V))` where V is number of `existing vetoers`
       **/
      vetoExternal: AugmentedSubmittable<(proposalHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      /**
       * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
       * otherwise it is a vote to keep the status quo.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `ref_index`: The index of the referendum to vote for.
       * - `vote`: The vote configuration.
       * 
       * Weight: `O(R)` where R is the number of referendums the voter has voted on.
       **/
      vote: AugmentedSubmittable<(refIndex: Compact<ReferendumIndex> | AnyNumber | Uint8Array, vote: AccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ReferendumIndex>, AccountVote]>;
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
    generalCouncilMembership: {
      /**
       * Add a member `who` to the set.
       * 
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out the sending member for some other key `new`.
       * 
       * May only be called from `Signed` origin of a current member.
       * 
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Remove the prime member if it exists.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a member `who` from the set.
       * 
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       * 
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
      /**
       * Set the prime member. Must be a current member.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out one member `remove` for another `add`.
       * 
       * May only be called from `T::SwapOrigin`.
       * 
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    liquidStaking: {
      /**
       * The unbond waiting period is finished, relay chain accounts transfer the free assets
       * to Parallel, and finish the owner's unstake operation by transfer assets back to owner.
       * 
       * May only be called from `T::WithdrawOrigin`.
       * 
       * - `agent`: the multisig account of relay chain.
       * - `owner`: the account which performs `unstake` operation
       * - `amount`: the assets already unbond for the owner's unstaking request.
       **/
      finishProcessedUnstake: AugmentedSubmittable<(agent: AccountId | string | Uint8Array, owner: AccountId | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId, Balance]>;
      /**
       * Relay chain accounts process the pending unstake by unbonding assets.
       * 
       * May only be called from `T::WithdrawOrigin`.
       * 
       * - `agent`: the multisig account of relay chain.
       * - `owner`: the account which performs `unstake` operation
       * - `amount`: the assets can be unbond for the owner's unstaking request.
       **/
      processPendingUnstake: AugmentedSubmittable<(agent: AccountId | string | Uint8Array, owner: AccountId | string | Uint8Array, eraIndex: EraIndex | AnyNumber | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId, EraIndex, Balance]>;
      /**
       * Record the staking rewards, no real transfer.
       * TODO restrict the times an account can report in one day and max rewards.
       * 
       * May only be called from `T::WithdrawOrigin`.
       * 
       * - `agent`: the multisig account of relay chain.
       * - `amount`: the rewarded assets.
       **/
      recordRewards: AugmentedSubmittable<(agent: AccountId | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Balance]>;
      /**
       * Record the staking slash event, no real transfer happened.
       * TODO restrict the times an account can report in one day and max slash.
       * 
       * May only be called from `T::WithdrawOrigin`.
       * 
       * - `agent`: the multisig account of relay chain.
       * - `amount`: the rewarded assets.
       **/
      recordSlash: AugmentedSubmittable<(agent: AccountId | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Balance]>;
      /**
       * Put assets under staking, the native assets will be transferred to the account
       * owned by the pallet, user receive voucher in return, such vocher can be further
       * used as collateral for lending.
       * 
       * - `amount`: the amount of staking assets
       **/
      stake: AugmentedSubmittable<(amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance]>;
      /**
       * Unstake by exchange voucher for assets, the assets will not be avaliable immediately.
       * Instead, the request is recorded and pending for the nomination accounts in relay
       * chain to do the `unbond` operation.
       * 
       * - `amount`: the amount of unstaking voucher
       **/
      unstake: AugmentedSubmittable<(amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance]>;
      /**
       * Withdraw assets from liquid staking pool for offchain relay chain nomination.
       * 
       * May only be called from `T::WithdrawOrigin`.
       * 
       * - `agent`: the multisig account of relay chain.
       * - `amount`: the requested assets.
       **/
      withdraw: AugmentedSubmittable<(agent: AccountId | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, Balance]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    liquidStakingAgentMembership: {
      /**
       * Add a member `who` to the set.
       * 
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out the sending member for some other key `new`.
       * 
       * May only be called from `Signed` origin of a current member.
       * 
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Remove the prime member if it exists.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a member `who` from the set.
       * 
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       * 
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
      /**
       * Set the prime member. Must be a current member.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out one member `remove` for another `add`.
       * 
       * May only be called from `T::SwapOrigin`.
       * 
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId]>;
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
       * - `currency_id`: Market related currency
       **/
      activeMarket: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId]>;
      /**
       * Stores a new market and its related currency. Returns `Err` if a currency
       * is not attached to an existent market.
       * 
       * All provided market states must be `Pending`, otherwise an error will be returned.
       * 
       * If a currency is already attached to a market, then the market will be replaced
       * by the new provided value.
       * 
       * - `currency_id`: Market related currency
       * - `market`: The market that is going to be stored
       **/
      addMarket: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, market: Market | { collateralFactor?: any; reserveFactor?: any; closeFactor?: any; liquidateIncentive?: any; rateModel?: any; state?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Market]>;
      /**
       * Add reserves by transferring from payer.
       * 
       * May only be called from `T::ReserveOrigin`.
       * 
       * - `payer`: the payer account.
       * - `currency_id`: the assets to be added.
       * - `add_amount`: the amount to be added.
       **/
      addReserves: AugmentedSubmittable<(payer: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, addAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyId, Balance]>;
      /**
       * Sender borrows assets from the protocol to their own address.
       * 
       * - `currency_id`: the asset to be borrowed.
       * - `borrow_amount`: the amount to be borrowed.
       **/
      borrow: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, borrowAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Balance]>;
      /**
       * Set the collateral asset.
       * 
       * - `currency_id`: the asset to be set.
       * - `enable`: turn on/off the collateral option.
       **/
      collateralAsset: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, enable: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, bool]>;
      /**
       * The sender liquidates the borrower's collateral.
       * 
       * - `borrower`: the borrower to be liquidated.
       * - `liquidate_token`: the assert to be liquidated.
       * - `repay_amount`: the amount to be repaid borrow.
       * - `collateral_token`: The collateral to seize from the borrower.
       **/
      liquidateBorrow: AugmentedSubmittable<(borrower: AccountId | string | Uint8Array, liquidateToken: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, repayAmount: Balance | AnyNumber | Uint8Array, collateralToken: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, CurrencyId, Balance, CurrencyId]>;
      /**
       * Sender supplies assets into the market and receives internal supplies in exchange.
       * 
       * - `currency_id`: the asset to be deposited.
       * - `mint_amount`: the amount to be deposited.
       **/
      mint: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, mintAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Balance]>;
      /**
       * Sender redeems some of internal supplies in exchange for the underlying asset.
       * 
       * - `currency_id`: the asset to be redeemed.
       * - `redeem_amount`: the amount to be redeemed.
       **/
      redeem: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, redeemAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Balance]>;
      /**
       * Sender redeems all of internal supplies in exchange for the underlying asset.
       * 
       * - `currency_id`: the asset to be redeemed.
       **/
      redeemAll: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId]>;
      /**
       * Reduces reserves by transferring to receiver.
       * 
       * May only be called from `T::ReserveOrigin`.
       * 
       * - `receiver`: the receiver account.
       * - `currency_id`: the assets to be reduced.
       * - `reduce_amount`: the amount to be reduced.
       **/
      reduceReserves: AugmentedSubmittable<(receiver: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, reduceAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyId, Balance]>;
      /**
       * Sender repays some of their debts.
       * 
       * - `currency_id`: the asset to be repaid.
       * - `repay_amount`: the amount to be repaid.
       **/
      repayBorrow: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, repayAmount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Balance]>;
      /**
       * Sender repays all of their debts.
       * 
       * - `currency_id`: the asset to be repaid.
       **/
      repayBorrowAll: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId]>;
      /**
       * Using for development
       **/
      transferToken: AugmentedSubmittable<(to: AccountId | string | Uint8Array, currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, CurrencyId, Balance]>;
      /**
       * Updates a stored market. Returns `Err` if the market currency does not exist.
       * 
       * Market state won't be modified, regardless of the provided value.
       * 
       * - `currency_id`: Market related currency
       * - `market`: The new market parameters
       **/
      updateMarket: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, market: Market | { collateralFactor?: any; reserveFactor?: any; closeFactor?: any; liquidateIncentive?: any; rateModel?: any; state?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Market]>;
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
      feedValues: AugmentedSubmittable<(values: Vec<ITuple<[OracleKey, OracleValue]>> | ([OracleKey | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, OracleValue | { price?: any; decimal?: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[OracleKey, OracleValue]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    oracleMembership: {
      /**
       * Add a member `who` to the set.
       * 
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out the sending member for some other key `new`.
       * 
       * May only be called from `Signed` origin of a current member.
       * 
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Remove the prime member if it exists.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a member `who` from the set.
       * 
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       * 
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
      /**
       * Set the prime member. Must be a current member.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out one member `remove` for another `add`.
       * 
       * May only be called from `T::SwapOrigin`.
       * 
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ormlVesting: {
      claim: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      claimFor: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource]>;
      updateVestingSchedules: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, vestingSchedules: Vec<VestingScheduleOf> | (VestingScheduleOf | { start?: any; period?: any; periodCount?: any; perPeriod?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [LookupSource, Vec<VestingScheduleOf>]>;
      vestedTransfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: VestingScheduleOf | { start?: any; period?: any; periodCount?: any; perPeriod?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, VestingScheduleOf]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ormlXcm: {
      /**
       * Send an XCM message as parachain sovereign.
       **/
      sendAsSovereign: AugmentedSubmittable<(dest: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, message: Xcm | { WithdrawAsset: any } | { ReserveAssetDeposit: any } | { ReceiveTeleportedAsset: any } | { QueryResponse: any } | { TransferAsset: any } | { TransferReserveAsset: any } | { Transact: any } | { HrmpNewChannelOpenRequest: any } | { HrmpChannelAccepted: any } | { HrmpChannelClosing: any } | { RelayedFrom: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiLocation, Xcm]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainSystem: {
      authorizeUpgrade: AugmentedSubmittable<(codeHash: Hash | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Hash]>;
      enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Force an already scheduled validation function upgrade to happen on a particular block.
       * 
       * Note that coordinating this block for the upgrade has to happen independently on the
       * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
       * and this bypasses all checks and and normal protocols. Very easy to brick your chain
       * if done wrong.
       **/
      setUpgradeBlock: AugmentedSubmittable<(relayChainBlock: RelayChainBlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [RelayChainBlockNumber]>;
      /**
       * Set the current validation data.
       * 
       * This should be invoked exactly once per block. It will panic at the finalization
       * phase if the call was not invoked.
       * 
       * The dispatch origin for this call must be `Inherent`
       * 
       * As a side effect, this function upgrades the current validation function
       * if the appropriate time has come.
       **/
      setValidationData: AugmentedSubmittable<(data: ParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ParachainInherentData]>;
      sudoSendUpwardMessage: AugmentedSubmittable<(message: UpwardMessage | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [UpwardMessage]>;
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
      execute: AugmentedSubmittable<(message: Xcm | { WithdrawAsset: any } | { ReserveAssetDeposit: any } | { ReceiveTeleportedAsset: any } | { QueryResponse: any } | { TransferAsset: any } | { TransferReserveAsset: any } | { Transact: any } | { HrmpNewChannelOpenRequest: any } | { HrmpChannelAccepted: any } | { HrmpChannelClosing: any } | { RelayedFrom: any } | string | Uint8Array, maxWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Xcm, Weight]>;
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
       * `ReserveAssetDeposit { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, beneficiary: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, assets: Vec<MultiAsset> | (MultiAsset | { id?: any; fungibility?: any } | string | Uint8Array)[], destWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiLocation, MultiLocation, Vec<MultiAsset>, Weight]>;
      send: AugmentedSubmittable<(dest: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, message: Xcm | { WithdrawAsset: any } | { ReserveAssetDeposit: any } | { ReceiveTeleportedAsset: any } | { QueryResponse: any } | { TransferAsset: any } | { TransferReserveAsset: any } | { Transact: any } | { HrmpNewChannelOpenRequest: any } | { HrmpChannelAccepted: any } | { HrmpChannelClosing: any } | { RelayedFrom: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiLocation, Xcm]>;
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
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
       * `dest` side.
       * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
       * `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
       **/
      teleportAssets: AugmentedSubmittable<(dest: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, beneficiary: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, assets: Vec<MultiAsset> | (MultiAsset | { id?: any; fungibility?: any } | string | Uint8Array)[], destWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiLocation, MultiLocation, Vec<MultiAsset>, Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    prices: {
      /**
       * Reset emergency price
       **/
      resetPrice: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId]>;
      /**
       * Set emergency price
       **/
      setPrice: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, price: PriceWithDecimal | { price?: any; decimal?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, PriceWithDecimal]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      /**
       * Cancel an anonymously scheduled task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 22.15 + 2.869 * S µs
       * - DB Weight:
       * - Read: Agenda
       * - Write: Agenda, Lookup
       * - Will use base weight of 100 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      cancel: AugmentedSubmittable<(when: BlockNumber | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, u32]>;
      /**
       * Cancel a named scheduled task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 24.91 + 2.907 * S µs
       * - DB Weight:
       * - Read: Agenda, Lookup
       * - Write: Agenda, Lookup
       * - Will use base weight of 100 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      cancelNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Anonymously schedule a task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 22.29 + .126 * S µs
       * - DB Weight:
       * - Read: Agenda
       * - Write: Agenda
       * - Will use base weight of 25 which should be good for up to 30 scheduled calls
       * # </weight>
       **/
      schedule: AugmentedSubmittable<(when: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Anonymously schedule a task after a delay.
       * 
       * # <weight>
       * Same as [`schedule`].
       * # </weight>
       **/
      scheduleAfter: AugmentedSubmittable<(after: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Schedule a named task.
       * 
       * # <weight>
       * - S = Number of already scheduled calls
       * - Base Weight: 29.6 + .159 * S µs
       * - DB Weight:
       * - Read: Agenda, Lookup
       * - Write: Agenda, Lookup
       * - Will use base weight of 35 which should be good for more than 30 scheduled calls
       * # </weight>
       **/
      scheduleNamed: AugmentedSubmittable<(id: Bytes | string | Uint8Array, when: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Schedule a named task after a delay.
       * 
       * # <weight>
       * Same as [`schedule_named`](Self::schedule_named).
       * # </weight>
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: Bytes | string | Uint8Array, after: BlockNumber | AnyNumber | Uint8Array, maybePeriodic: Option<Period> | null | object | string | Uint8Array, priority: Priority | AnyNumber | Uint8Array, call: Call | { callIndex?: any; args?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, BlockNumber, Option<Period>, Priority, Call]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)` in number of key types.
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
       * - DbWrites: `NextKeys`, `origin account`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * # <weight>
       * - Complexity: `O(1)`
       * Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
       * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
       * - DbWrites: `origin account`, `NextKeys`
       * - DbReads per key id: `KeyOwner`
       * - DbWrites per key id: `KeyOwner`
       * # </weight>
       **/
      setKeys: AugmentedSubmittable<(keys: Keys | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Keys, Bytes]>;
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
    technicalCommitteeMembership: {
      /**
       * Add a member `who` to the set.
       * 
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out the sending member for some other key `new`.
       * 
       * May only be called from `Signed` origin of a current member.
       * 
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Remove the prime member if it exists.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a member `who` from the set.
       * 
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       * 
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
      /**
       * Set the prime member. Must be a current member.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out one member `remove` for another `add`.
       * 
       * May only be called from `T::SwapOrigin`.
       * 
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       * 
       * The dispatch origin for this call must be `Inherent`.
       * 
       * # <weight>
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<Moment> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Moment>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
       * and the original deposit will be returned.
       * 
       * May only be called from `T::ApproveOrigin`.
       * 
       * # <weight>
       * - Complexity: O(1).
       * - DbReads: `Proposals`, `Approvals`
       * - DbWrite: `Approvals`
       * # </weight>
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ProposalIndex>]>;
      /**
       * Put forward a suggestion for spending. A deposit proportional to the value
       * is reserved and slashed if the proposal is rejected. It is returned once the
       * proposal is awarded.
       * 
       * # <weight>
       * - Complexity: O(1)
       * - DbReads: `ProposalCount`, `origin account`
       * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
       * # </weight>
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<BalanceOf> | AnyNumber | Uint8Array, beneficiary: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<BalanceOf>, LookupSource]>;
      /**
       * Reject a proposed spend. The original deposit will be slashed.
       * 
       * May only be called from `T::RejectOrigin`.
       * 
       * # <weight>
       * - Complexity: O(1)
       * - DbReads: `Proposals`, `rejected proposer account`
       * - DbWrites: `Proposals`, `rejected proposer account`
       * # </weight>
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<ProposalIndex> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<ProposalIndex>]>;
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
    validatorFeedersMembership: {
      /**
       * Add a member `who` to the set.
       * 
       * May only be called from `T::AddOrigin`.
       **/
      addMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out the sending member for some other key `new`.
       * 
       * May only be called from `Signed` origin of a current member.
       * 
       * Prime membership is passed from the origin account to `new`, if extant.
       **/
      changeKey: AugmentedSubmittable<(updated: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Remove the prime member if it exists.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a member `who` from the set.
       * 
       * May only be called from `T::RemoveOrigin`.
       **/
      removeMember: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Change the membership to a new set, disregarding the existing membership. Be nice and
       * pass `members` pre-sorted.
       * 
       * May only be called from `T::ResetOrigin`.
       **/
      resetMembers: AugmentedSubmittable<(members: Vec<AccountId> | (AccountId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId>]>;
      /**
       * Set the prime member. Must be a current member.
       * 
       * May only be called from `T::PrimeOrigin`.
       **/
      setPrime: AugmentedSubmittable<(who: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId]>;
      /**
       * Swap out one member `remove` for another `add`.
       * 
       * May only be called from `T::SwapOrigin`.
       * 
       * Prime membership is *not* passed from `remove` to `add`, if extant.
       **/
      swapMember: AugmentedSubmittable<(remove: AccountId | string | Uint8Array, add: AccountId | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId, AccountId]>;
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
      transfer: AugmentedSubmittable<(currencyId: CurrencyId | 'DOT' | 'KSM' | 'USDT' | 'xDOT' | 'xKSM' | 'HKO' | 'PARA' | number | Uint8Array, amount: Balance | AnyNumber | Uint8Array, dest: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, destWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Balance, MultiLocation, Weight]>;
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
      transferMultiasset: AugmentedSubmittable<(asset: MultiAsset | { id?: any; fungibility?: any } | string | Uint8Array, dest: MultiLocation | { Here: any } | { X1: any } | { X2: any } | { X3: any } | { X4: any } | { X5: any } | { X6: any } | { X7: any } | { X8: any } | string | Uint8Array, destWeight: Weight | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAsset, MultiLocation, Weight]>;
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
