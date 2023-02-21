// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Option, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec } from '@polkadot/types-codec/types';
import type { AccountId32, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, XcmV0JunctionNetworkId, XcmV1MultiLocation } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    amm: {
      getNativeCurrencyId: u32 & AugmentedConst<ApiType>;
      lockAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Defines the fees taken out of each trade and sent back to the AMM pool,
       * typically 0.3%.
       **/
      lpFee: Permill & AugmentedConst<ApiType>;
      /**
       * How many routes we support at most
       **/
      maxLengthRoute: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum amount of liquidty needed to init a new pool
       * this amount is burned when the pool is created.
       * 
       * It's important that we include this value in order to
       * prevent attacks where a bad actor will create and
       * remove pools with malious intentions. By requiring
       * a `MinimumLiquidity`, a pool cannot be removed since
       * a small amount of tokens are locked forever when liquidity
       * is first added.
       **/
      minimumLiquidity: u128 & AugmentedConst<ApiType>;
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    ammRoute: {
      /**
       * The asset id for native currency.
       **/
      getNativeCurrencyId: u32 & AugmentedConst<ApiType>;
      /**
       * How many routes we support at most
       **/
      maxLengthRoute: u32 & AugmentedConst<ApiType>;
      /**
       * Router pallet id
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    assets: {
      /**
       * The amount of funds that must be reserved when creating a new approval.
       **/
      approvalDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of funds that must be reserved for a non-provider asset account to be
       * maintained.
       **/
      assetAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an asset.
       **/
      assetDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your asset.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes you store in your
       * metadata.
       **/
      metadataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a name or symbol stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    authorship: {
      /**
       * The number of blocks back we should accept uncles.
       * This means that we will deal with uncle-parents that are
       * `UncleGenerations + 1` before `now`.
       **/
      uncleGenerations: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open.
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bridge: {
      /**
       * The identifier for this chain.
       * This must be unique and must not collide with existing IDs within a set of bridged chains.
       **/
      chainId: u32 & AugmentedConst<ApiType>;
      /**
       * The essential balance for an existed account
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * An account to pay the bonus
       **/
      giftAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Currency id of the native token
       **/
      nativeCurrencyId: u32 & AugmentedConst<ApiType>;
      /**
       * The bridge's pallet id, keep all teleported assets.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Each proposal can live up to [ProposalLifetime] blocks
       **/
      proposalLifetime: u32 & AugmentedConst<ApiType>;
      /**
       * The root operator account id
       **/
      rootOperatorAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * The threshold percentage of relayers required to approve a proposal
       **/
      thresholdPercentage: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    crowdloans: {
      /**
       * The asset id for native currency.
       **/
      getNativeCurrencyId: u32 & AugmentedConst<ApiType>;
      /**
       * LeaseOffset from relaychain
       **/
      leaseOffset: u32 & AugmentedConst<ApiType>;
      /**
       * LeasePeriod from relaychain
       **/
      leasePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * LeaseOffset from relaychain
       **/
      leasePerYear: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum keys to be migrated in one extrinsic
       **/
      migrateKeysLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum contribute amount
       **/
      minContribution: u128 & AugmentedConst<ApiType>;
      /**
       * Pallet account for collecting contributions
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Relay currency
       **/
      relayCurrency: u32 & AugmentedConst<ApiType>;
      removeKeysLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Returns the parachain ID we are running with.
       **/
      selfParaId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    currencyAdapter: {
      getNativeCurrencyId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    democracy: {
      /**
       * Period in blocks where an external proposal may not be re-submitted after being vetoed.
       **/
      cooloffPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The period between a proposal being approved and enacted.
       * 
       * It should generally be a little more than the unstake period to ensure that
       * voting stakers have an opportunity to remove themselves from the system in the case
       * where they are on the losing side of a vote.
       **/
      enactmentPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum voting period allowed for a fast-track referendum.
       **/
      fastTrackVotingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Indicator for whether an emergency origin is even allowed to happen. Some chains may
       * want to set this permanently to `false`, others may want to condition it on things such
       * as an upgrade having happened recently.
       **/
      instantAllowed: bool & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) new public referenda are launched.
       **/
      launchPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of items which can be blacklisted.
       **/
      maxBlacklisted: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of deposits a public proposal may have at any time.
       **/
      maxDeposits: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of public proposals that can exist at any time.
       **/
      maxProposals: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of votes for an account.
       * 
       * Also used to compute weight, an overly big value can
       * lead to extrinsic with very big weight: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      minimumDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * How often (in blocks) to check for new votes.
       **/
      votingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    evmSignatureCall: {
      /**
       * The call processing fee amount.
       **/
      callFee: u128 & AugmentedConst<ApiType>;
      /**
       * The call magic number.
       **/
      callMagicNumber: u16 & AugmentedConst<ApiType>;
      getNativeCurrencyId: u32 & AugmentedConst<ApiType>;
      /**
       * Enable signature verify or not
       **/
      verifySignature: bool & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    farming: {
      /**
       * Specifies upper limit of cool down duration for pool
       **/
      coolDownMaxDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Specifies upper limit of lock duration for lock pool
       **/
      lockPoolMaxDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Specifies max amount lock item for a user
       **/
      maxUserLockItemsCount: u32 & AugmentedConst<ApiType>;
      /**
       * Defines the pallet's pallet id from which we can define each pool's account id
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    identity: {
      /**
       * The amount held on deposit for a registered identity
       **/
      basicDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per additional field for a registered identity.
       **/
      fieldDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
       * required to access an identity, but can be pretty high.
       **/
      maxAdditionalFields: u32 & AugmentedConst<ApiType>;
      /**
       * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
       * of, e.g., updating judgements.
       **/
      maxRegistrars: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of sub-accounts allowed per identified account.
       **/
      maxSubAccounts: u32 & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit for a registered subaccount. This should account for the fact
       * that one storage item's value will increase by the size of an account ID, and there will
       * be another trie item whose value is the size of an account ID plus 32 bytes.
       **/
      subAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    liquidStaking: {
      /**
       * Number of unbond indexes for unlocking.
       **/
      bondingDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Collateral currency
       **/
      collateralCurrency: u32 & AugmentedConst<ApiType>;
      /**
       * Derivative index list
       **/
      derivativeIndexList: Vec<u16> & AugmentedConst<ApiType>;
      /**
       * Number of blocknumbers that do_matching after each era updated.
       * Need to do_bond before relaychain store npos solution
       **/
      electionSolutionStoredOffset: u32 & AugmentedConst<ApiType>;
      /**
       * Number of blocknumbers that each period contains.
       * SessionsPerEra * EpochDuration / MILLISECS_PER_BLOCK
       **/
      eraLength: u32 & AugmentedConst<ApiType>;
      /**
       * Liquid currency
       **/
      liquidCurrency: u32 & AugmentedConst<ApiType>;
      /**
       * Loans instant unstake fee
       **/
      loansInstantUnstakeFee: u128 & AugmentedConst<ApiType>;
      /**
       * The pallet id of loans used for fast unstake
       **/
      loansPalletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * MatchingPool fast unstake fee
       **/
      matchingPoolFastUnstakeFee: u128 & AugmentedConst<ApiType>;
      /**
       * The minimum active bond to become and maintain the role of a nominator.
       **/
      minNominatorBond: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum stake amount
       **/
      minStake: u128 & AugmentedConst<ApiType>;
      /**
       * Minimum unstake amount
       **/
      minUnstake: u128 & AugmentedConst<ApiType>;
      /**
       * The asset id for native currency.
       **/
      nativeCurrency: u32 & AugmentedConst<ApiType>;
      numSlashingSpans: u32 & AugmentedConst<ApiType>;
      /**
       * The pallet id of liquid staking, keeps all the staking assets
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Who/where to send the protocol fees
       **/
      protocolFeeReceiver: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Returns the parachain ID we are running with.
       **/
      selfParaId: u32 & AugmentedConst<ApiType>;
      /**
       * Staking currency
       **/
      stakingCurrency: u32 & AugmentedConst<ApiType>;
      /**
       * Xcm fees
       **/
      xcmFees: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    loans: {
      liquidationFreeAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * The loan's module id, keep all collaterals of CDPs.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Reward asset id.
       **/
      rewardAssetId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       * 
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       * 
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u16 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    oracle: {
      /**
       * Maximum size of HasDispatched
       **/
      maxHasDispatchedSize: u32 & AugmentedConst<ApiType>;
      /**
       * The root operator account id, record all sudo feeds on this account.
       **/
      rootOperatorAccountId: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    prices: {
      /**
       * Relay currency
       **/
      relayCurrency: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    streaming: {
      /**
       * The max count of streams that has been cancelled or completed for an account
       **/
      maxFinishedStreamsCount: u32 & AugmentedConst<ApiType>;
      /**
       * The max count of streams for an account
       **/
      maxStreamsCount: u32 & AugmentedConst<ApiType>;
      /**
       * Currency id of the native token
       **/
      nativeCurrencyId: u32 & AugmentedConst<ApiType>;
      /**
       * The essential balance for an existed account
       **/
      nativeExistentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The streaming module id, keep all collaterals of CDPs.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's current version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks. Beware that this is different to the *expected*
       * period that the block production apparatus provides. Your chosen consensus system will
       * generally work with this to determine a sensible block time. e.g. For Aura, it will be
       * double this period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Fraction of a proposal's value that should be bonded in order to place the proposal.
       * An accepted proposal gets these back. A rejected proposal does not.
       **/
      proposalBond: Permill & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMaximum: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      proposalBondMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vesting: {
      /**
       * The minimum amount transferred to call `vested_transfer`.
       **/
      minVestedTransfer: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xcmHelper: {
      /**
       * Notify call timeout
       **/
      notifyTimeout: u32 & AugmentedConst<ApiType>;
      /**
       * Pallet account for collecting xcm fees
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Account on relaychain for receiving refunded fees
       **/
      refundLocation: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Relay currency
       **/
      relayCurrency: u32 & AugmentedConst<ApiType>;
      /**
       * Relay network
       **/
      relayNetwork: XcmV0JunctionNetworkId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xTokens: {
      /**
       * Base XCM weight.
       * 
       * The actually weight for an XCM message is `T::BaseXcmWeight +
       * T::Weigher::weight(&msg)`.
       **/
      baseXcmWeight: u64 & AugmentedConst<ApiType>;
      /**
       * Self chain location.
       **/
      selfLocation: XcmV1MultiLocation & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module
