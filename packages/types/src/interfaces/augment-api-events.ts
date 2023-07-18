// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, H256, Permill } from '@polkadot/types/interfaces/runtime';
import { PalletTraitsXcmAssetType, FrameSupportTokensMiscBalanceStatus, PalletBridgeBridgeType, PalletCrowdloansBonusConfig, XcmV3Response, XcmV3MultiLocation, XcmV3TraitsError, PalletCrowdloansChildStorageKind, PalletCrowdloansVaultPhase, PalletCrowdloansContributionStrategy, XcmV3TraitsOutcome, PalletDemocracyVoteThreshold, PalletDemocracyVoteAccountVote, XcmV3Xcm, SpWeightsWeightV2Weight, EvmCoreErrorExitReason, EthereumLog, SpRuntimeDispatchError, PalletTraitsUmpRewardDestination, PalletLiquidStakingStakingLedger, PalletLoansMarket, PalletMultisigTimepoint, XcmV2Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmV2Response, VanillaRuntimeProxyType, FrameSupportDispatchDispatchInfo, OrmlVestingVestingSchedule, PalletTraitsUmpXcmWeightFeeMisc, XcmV3MultiassetMultiAssets, XcmV3MultiAsset } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    amm: {
      /**
       * Add liquidity into pool
       * [sender, base_currency_id, quote_currency_id, base_amount_added, quote_amount_added, lp_token_id, new_base_amount, new_quote_amount]
       **/
      LiquidityAdded: AugmentedEvent<ApiType, [AccountId32, u32, u32, u128, u128, u32, u128, u128]>;
      /**
       * Remove liquidity from pool
       * [sender, base_currency_id, quote_currency_id, liquidity, base_amount_removed, quote_amount_removed, lp_token_id, new_base_amount, new_quote_amount]
       **/
      LiquidityRemoved: AugmentedEvent<ApiType, [AccountId32, u32, u32, u128, u128, u128, u32, u128, u128]>;
      /**
       * A Pool has been created
       * [trader, currency_id_in, currency_id_out, lp_token_id]
       **/
      PoolCreated: AugmentedEvent<ApiType, [AccountId32, u32, u32, u32]>;
      /**
       * Protocol fee receiver updated
       **/
      ProtocolFeeReceiverUpdated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Protocol fee proportion of LP fee updated.
       **/
      ProtocolFeeUpdated: AugmentedEvent<ApiType, [Permill]>;
      /**
       * Trade using liquidity
       * [trader, currency_id_in, currency_id_out, amount_in, amount_out, lp_token_id, new_quote_amount, new_base_amount]
       **/
      Traded: AugmentedEvent<ApiType, [AccountId32, u32, u32, u128, u128, u32, u128, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ammRoute: {
      /**
       * Event emitted when swap is successful
       * [sender, amount_in, route, amount_out]
       **/
      Traded: AugmentedEvent<ApiType, [AccountId32, u128, Vec<u32>, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assetRegistry: {
      /**
       * Removed all information related to an assetId
       **/
      AssetDeregisteredd: AugmentedEvent<ApiType, [assetId: u32, assetType: PalletTraitsXcmAssetType], { assetId: u32, assetType: PalletTraitsXcmAssetType }>;
      /**
       * New asset with the asset manager is registered
       **/
      AssetRegistered: AugmentedEvent<ApiType, [assetId: u32, assetType: PalletTraitsXcmAssetType], { assetId: u32, assetType: PalletTraitsXcmAssetType }>;
      /**
       * Changed the xcm type mapping for a given asset id
       **/
      AssetTypeUpdated: AugmentedEvent<ApiType, [assetId: u32, newAssetType: PalletTraitsXcmAssetType], { assetId: u32, newAssetType: PalletTraitsXcmAssetType }>;
      /**
       * Supported asset type for fee payment removed
       **/
      FeePaymentAssetRemoved: AugmentedEvent<ApiType, [assetType: PalletTraitsXcmAssetType], { assetType: PalletTraitsXcmAssetType }>;
      /**
       * Changed the amount of units we are charging per execution second for a given asset
       **/
      UnitsPerSecondUpdated: AugmentedEvent<ApiType, [assetType: PalletTraitsXcmAssetType, unitsPerSecond: u128], { assetType: PalletTraitsXcmAssetType, unitsPerSecond: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assets: {
      /**
       * Accounts were destroyed for given asset.
       **/
      AccountsDestroyed: AugmentedEvent<ApiType, [assetId: u32, accountsDestroyed: u32, accountsRemaining: u32], { assetId: u32, accountsDestroyed: u32, accountsRemaining: u32 }>;
      /**
       * An approval for account `delegate` was cancelled by `owner`.
       **/
      ApprovalCancelled: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, delegate: AccountId32], { assetId: u32, owner: AccountId32, delegate: AccountId32 }>;
      /**
       * Approvals were destroyed for given asset.
       **/
      ApprovalsDestroyed: AugmentedEvent<ApiType, [assetId: u32, approvalsDestroyed: u32, approvalsRemaining: u32], { assetId: u32, approvalsDestroyed: u32, approvalsRemaining: u32 }>;
      /**
       * (Additional) funds have been approved for transfer to a destination account.
       **/
      ApprovedTransfer: AugmentedEvent<ApiType, [assetId: u32, source: AccountId32, delegate: AccountId32, amount: u128], { assetId: u32, source: AccountId32, delegate: AccountId32, amount: u128 }>;
      /**
       * Some asset `asset_id` was frozen.
       **/
      AssetFrozen: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * An asset has had its attributes changed by the `Force` origin.
       **/
      AssetStatusChanged: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some asset `asset_id` was thawed.
       **/
      AssetThawed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some assets were destroyed.
       **/
      Burned: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, balance: u128], { assetId: u32, owner: AccountId32, balance: u128 }>;
      /**
       * Some asset class was created.
       **/
      Created: AugmentedEvent<ApiType, [assetId: u32, creator: AccountId32, owner: AccountId32], { assetId: u32, creator: AccountId32, owner: AccountId32 }>;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * An asset class is in the process of being destroyed.
       **/
      DestructionStarted: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some asset class was force-created.
       **/
      ForceCreated: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32], { assetId: u32, owner: AccountId32 }>;
      /**
       * Some account `who` was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some assets were issued.
       **/
      Issued: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, amount: u128], { assetId: u32, owner: AccountId32, amount: u128 }>;
      /**
       * Metadata has been cleared for an asset.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * New metadata has been set for an asset.
       **/
      MetadataSet: AugmentedEvent<ApiType, [assetId: u32, name: Bytes, symbol_: Bytes, decimals: u8, isFrozen: bool], { assetId: u32, name: Bytes, symbol: Bytes, decimals: u8, isFrozen: bool }>;
      /**
       * The owner changed.
       **/
      OwnerChanged: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32], { assetId: u32, owner: AccountId32 }>;
      /**
       * The management team changed.
       **/
      TeamChanged: AugmentedEvent<ApiType, [assetId: u32, issuer: AccountId32, admin: AccountId32, freezer: AccountId32], { assetId: u32, issuer: AccountId32, admin: AccountId32, freezer: AccountId32 }>;
      /**
       * Some account `who` was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some assets were transferred.
       **/
      Transferred: AugmentedEvent<ApiType, [assetId: u32, from: AccountId32, to: AccountId32, amount: u128], { assetId: u32, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * An `amount` was transferred in its entirety from `owner` to `destination` by
       * the approved `delegate`.
       **/
      TransferredApproved: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128], { assetId: u32, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128, reserved: u128], { who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    baseFee: {
      BaseFeeOverflow: AugmentedEvent<ApiType, []>;
      NewBaseFeePerGas: AugmentedEvent<ApiType, [fee: U256], { fee: U256 }>;
      NewElasticity: AugmentedEvent<ApiType, [elasticity: Permill], { elasticity: Permill }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bridge: {
      /**
       * The accumulated cap value cleaned
       * [bridge_token_id, bridge_type]
       **/
      BridgeTokenAccumulatedValueCleaned: AugmentedEvent<ApiType, [u32, PalletBridgeBridgeType]>;
      /**
       * The status of the bridge token cap has updated
       * [bridge_token_id, bridge_type, new_cap]
       **/
      BridgeTokenCapUpdated: AugmentedEvent<ApiType, [u32, PalletBridgeBridgeType, u128]>;
      /**
       * Bridge token fee has updated
       * [bridge_token_id, fee]
       **/
      BridgeTokenFeeUpdated: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * New bridge_token_id has been registered
       * [asset_id, bridge_token_id, external, fee, enable, out_cap, out_amount, in_cap, in_amount]
       **/
      BridgeTokenRegistered: AugmentedEvent<ApiType, [u32, u32, bool, u128, bool, u128, u128, u128, u128]>;
      /**
       * The bridge_token_id has been unregistered
       * [asset_id, bridge_token_id]
       **/
      BridgeTokenRemoved: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * The status of the bridge token has updated
       * [bridge_token_id, enabled]
       **/
      BridgeTokenStatusUpdated: AugmentedEvent<ApiType, [u32, bool]>;
      /**
       * New chain_id has been registered
       * [chain_id]
       **/
      ChainRegistered: AugmentedEvent<ApiType, [u32]>;
      /**
       * The chain_id has been unregistered
       * [chain_id]
       **/
      ChainRemoved: AugmentedEvent<ApiType, [u32]>;
      /**
       * Event emitted when a proposal is initialized by materialization
       * [voter, src_id, src_nonce, bridge_token_id, dst_address, amount]
       **/
      MaterializeInitialized: AugmentedEvent<ApiType, [AccountId32, u32, u64, u32, AccountId32, u128]>;
      /**
       * Event emitted when bridge token is issued by materialization
       * [src_id, chain_nonce, bridge_token_id, dst_address, amount]
       **/
      MaterializeMinted: AugmentedEvent<ApiType, [u32, u64, u32, AccountId32, u128]>;
      /**
       * Vote against a proposal
       * [src_id, src_nonce, voter, bridge_token_id, dst_address, amount]
       **/
      MaterializeVoteAgainst: AugmentedEvent<ApiType, [u32, u64, AccountId32, u32, AccountId32, u128]>;
      /**
       * Vote for a proposal
       * [src_id, src_nonce, voter, bridge_token_id, dst_address, amount]
       **/
      MaterializeVoteFor: AugmentedEvent<ApiType, [u32, u64, AccountId32, u32, AccountId32, u128]>;
      /**
       * Proposal was approved successfully
       * [src_id, src_nonce]
       **/
      ProposalApproved: AugmentedEvent<ApiType, [u32, u64]>;
      /**
       * Proposal was rejected
       * [src_id, src_nonce]
       **/
      ProposalRejected: AugmentedEvent<ApiType, [u32, u64]>;
      /**
       * Event emitted when bridge token is destroyed by teleportation
       * [ori_address, dest_id, chain_nonce, bridge_token_id, dst_address, amount, fee]
       **/
      TeleportBurned: AugmentedEvent<ApiType, [AccountId32, u32, u64, u32, Bytes, u128, u128]>;
      /**
       * Vote threshold has updated
       * [vote_threshold]
       **/
      VoteThresholdUpdated: AugmentedEvent<ApiType, [u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bridgeMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    collatorSelection: {
      CandidateAdded: AugmentedEvent<ApiType, [accountId: AccountId32, deposit: u128], { accountId: AccountId32, deposit: u128 }>;
      CandidateRemoved: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>;
      NewCandidacyBond: AugmentedEvent<ApiType, [bondAmount: u128], { bondAmount: u128 }>;
      NewDesiredCandidates: AugmentedEvent<ApiType, [desiredCandidates: u32], { desiredCandidates: u32 }>;
      NewInvulnerables: AugmentedEvent<ApiType, [invulnerables: Vec<AccountId32>], { invulnerables: Vec<AccountId32> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    crowdloans: {
      /**
       * All contributions migrated
       * [para_id, vault_id]
       **/
      AllMigrated: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>]>;
      /**
       * Partially Refunded
       * [para_id, vault_id]
       **/
      AllRefunded: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>]>;
      /**
       * Update leases bonus
       **/
      LeasesBonusUpdated: AugmentedEvent<ApiType, [ITuple<[u32, u32]>, PalletCrowdloansBonusConfig]>;
      /**
       * Notification received
       * [multi_location, query_id, res]
       **/
      NotificationReceived: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, Option<ITuple<[u32, XcmV3TraitsError]>>]>;
      /**
       * Partially contributions migrated
       * [para_id, vault_id]
       **/
      PartiallyMigrated: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>]>;
      /**
       * Partially Refunded
       * [para_id, vault_id]
       **/
      PartiallyRefunded: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>]>;
      /**
       * Update proxy address
       * [account]
       **/
      ProxyUpdated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Refunded
       * [para_id, vault_id, account, child_storage_kind, amount]
       **/
      UserRefunded: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>, AccountId32, PalletCrowdloansChildStorageKind, u128]>;
      /**
       * A user claimed CToken from vault
       * [para_id, vault_id, ctoken_id, account, amount, phase]
       **/
      VaultClaimed: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>, u32, AccountId32, u128, PalletCrowdloansVaultPhase]>;
      /**
       * Vault successfully contributed
       * [para_id, vault_id, contributor, amount, referral_code]
       **/
      VaultContributed: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>, AccountId32, u128, Bytes]>;
      /**
       * New vault was created
       * [para_id, vault_id, ctoken_id, phase, contribution_strategy, cap, end_block, trie_index]
       **/
      VaultCreated: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>, u32, PalletCrowdloansVaultPhase, PalletCrowdloansContributionStrategy, u128, u32, u32]>;
      /**
       * Vault has been dissolved
       * [para_id, vault_id]
       **/
      VaultDissolved: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>]>;
      /**
       * Vault is trying to do contributing
       * [para_id, vault_id, contributor, amount, referral_code]
       **/
      VaultDoContributing: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>, AccountId32, u128, Bytes]>;
      /**
       * Vault is trying to do withdrawing
       * [para_id, vault_id, amount, target_phase]
       **/
      VaultDoWithdrawing: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>, u128, PalletCrowdloansVaultPhase]>;
      /**
       * Vault was opened
       * [para_id, vault_id, pre_phase, now_phase]
       **/
      VaultPhaseUpdated: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>, PalletCrowdloansVaultPhase, PalletCrowdloansVaultPhase]>;
      /**
       * A user redeemed contributed assets using CToken
       * [para_id, vault_id, ctoken_id, account, amount, phase]
       **/
      VaultRedeemed: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>, u32, AccountId32, u128, PalletCrowdloansVaultPhase]>;
      /**
       * Existing vault was updated
       * [para_id, vault_id, contribution_strategy, cap, end_block]
       **/
      VaultUpdated: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>, PalletCrowdloansContributionStrategy, u128, u32]>;
      /**
       * A user withdrew contributed assets from vault
       * [para_id, vault_id, account, amount, phase]
       **/
      VaultWithdrew: AugmentedEvent<ApiType, [u32, ITuple<[u32, u32]>, AccountId32, u128, PalletCrowdloansVaultPhase]>;
      /**
       * Vrfs updated
       * [vrf_flag]
       **/
      VrfUpdated: AugmentedEvent<ApiType, [bool]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    crowdloansAutomatorsMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV3TraitsOutcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      /**
       * A proposal_hash has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * An account has delegated their vote to another account.
       **/
      Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32, target: AccountId32 }>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * A proposal has been rejected by referendum.
       **/
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal has been approved by referendum.
       **/
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal got canceled.
       **/
      ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], { propIndex: u32 }>;
      /**
       * A motion has been proposed by a public account.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has secconded a proposal
       **/
      Seconded: AugmentedEvent<ApiType, [seconder: AccountId32, propIndex: u32], { seconder: AccountId32, propIndex: u32 }>;
      /**
       * A referendum has begun.
       **/
      Started: AugmentedEvent<ApiType, [refIndex: u32, threshold: PalletDemocracyVoteThreshold], { refIndex: u32, threshold: PalletDemocracyVoteThreshold }>;
      /**
       * A public proposal has been tabled for referendum vote.
       **/
      Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * An external proposal has been vetoed.
       **/
      Vetoed: AugmentedEvent<ApiType, [who: AccountId32, proposalHash: H256, until: u32], { who: AccountId32, proposalHash: H256, until: u32 }>;
      /**
       * An account has voted in a referendum
       **/
      Voted: AugmentedEvent<ApiType, [voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote], { voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dmpQueue: {
      /**
       * Downward message executed with the given outcome.
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [messageId: U8aFixed, outcome: XcmV3TraitsOutcome], { messageId: U8aFixed, outcome: XcmV3TraitsOutcome }>;
      /**
       * Downward message is invalid XCM.
       **/
      InvalidFormat: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * The maximum number of downward messages was.
       **/
      MaxMessagesExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * Downward message is overweight and was placed in the overweight queue.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [messageId: U8aFixed, overweightIndex: u64, requiredWeight: SpWeightsWeightV2Weight], { messageId: U8aFixed, overweightIndex: u64, requiredWeight: SpWeightsWeightV2Weight }>;
      /**
       * Downward message from the overweight queue was executed.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [overweightIndex: u64, weightUsed: SpWeightsWeightV2Weight], { overweightIndex: u64, weightUsed: SpWeightsWeightV2Weight }>;
      /**
       * Downward message is unsupported version of XCM.
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * The weight limit for handling downward messages was reached.
       **/
      WeightExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed, remainingWeight: SpWeightsWeightV2Weight, requiredWeight: SpWeightsWeightV2Weight], { messageId: U8aFixed, remainingWeight: SpWeightsWeightV2Weight, requiredWeight: SpWeightsWeightV2Weight }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    emergencyShutdown: {
      /**
       * Toggled Call
       * [flag]
       **/
      ToggledCall: AugmentedEvent<ApiType, [bool]>;
      /**
       * Toggled Pallet
       * [flag]
       **/
      ToggledPallet: AugmentedEvent<ApiType, [bool]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ethereum: {
      /**
       * An ethereum transaction was successfully executed.
       **/
      Executed: AugmentedEvent<ApiType, [from: H160, to: H160, transactionHash: H256, exitReason: EvmCoreErrorExitReason], { from: H160, to: H160, transactionHash: H256, exitReason: EvmCoreErrorExitReason }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    evm: {
      /**
       * A contract has been created at given address.
       **/
      Created: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * A contract was attempted to be created, but the execution failed.
       **/
      CreatedFailed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * A contract has been executed successfully with states applied.
       **/
      Executed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * A contract has been executed with errors. States are reverted with only gas fees applied.
       **/
      ExecutedFailed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * Ethereum events from contracts.
       **/
      Log: AugmentedEvent<ApiType, [log: EthereumLog], { log: EthereumLog }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    evmSignatureCall: {
      /**
       * A call just executed. \[result\]
       **/
      Executed: AugmentedEvent<ApiType, [AccountId32, Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    farming: {
      /**
       * Deposited Assets in pool
       **/
      AssetsDeposited: AugmentedEvent<ApiType, [AccountId32, u32, u32, u32, u128]>;
      /**
       * Redeem Assets from lock pool
       **/
      AssetsRedeem: AugmentedEvent<ApiType, [AccountId32, u32, u32, u32, u128]>;
      /**
       * Withdrew Assets from pool
       **/
      AssetsWithdrew: AugmentedEvent<ApiType, [AccountId32, u32, u32, u32, u128]>;
      /**
       * Add new pool
       **/
      PoolAdded: AugmentedEvent<ApiType, [u32, u32, u32]>;
      /**
       * Pool new cool down duration was set.
       **/
      PoolCoolDownDurationChanged: AugmentedEvent<ApiType, [u32, u32, u32, u32]>;
      /**
       * Pool new status was set.
       **/
      PoolStatusChanged: AugmentedEvent<ApiType, [u32, u32, u32, bool]>;
      /**
       * Pool unlock height was reset.
       **/
      PoolUnlockHeightReset: AugmentedEvent<ApiType, [u32, u32, u32, u32]>;
      /**
       * Reward added
       **/
      RewardAdded: AugmentedEvent<ApiType, [u32, u32, u32, u128]>;
      /**
       * Reward Paid for user
       **/
      RewardPaid: AugmentedEvent<ApiType, [AccountId32, u32, u32, u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    generalCouncil: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    generalCouncilMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    liquidStaking: {
      /**
       * Sent staking.bond call to relaychain
       **/
      Bonding: AugmentedEvent<ApiType, [u16, AccountId32, u128, PalletTraitsUmpRewardDestination]>;
      /**
       * Sent staking.bond_extra call to relaychain
       **/
      BondingExtra: AugmentedEvent<ApiType, [u16, u128]>;
      /**
       * Claim user's unbonded staking assets
       * [account_id, amount]
       **/
      ClaimedFor: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Commission rate was updated
       **/
      CommissionRateUpdated: AugmentedEvent<ApiType, [u128]>;
      /**
       * Exchange rate was updated
       **/
      ExchangeRateUpdated: AugmentedEvent<ApiType, [u128]>;
      /**
       * Fast Unstake Matched
       * [unstaker, received_staking_amount, matched_liquid_amount, fee_in_liquid_currency]
       **/
      FastUnstakeMatched: AugmentedEvent<ApiType, [AccountId32, u128, u128, u128]>;
      /**
       * Incentive amount was updated
       **/
      IncentiveUpdated: AugmentedEvent<ApiType, [u128]>;
      /**
       * Matching stakes & unstakes for optimizing operations to be done
       * on relay chain
       * [bond_amount, rebond_amount, unbond_amount]
       **/
      Matching: AugmentedEvent<ApiType, [u128, u128, u128]>;
      /**
       * New era
       * [era_index]
       **/
      NewEra: AugmentedEvent<ApiType, [u32]>;
      /**
       * Sent staking.nominate call to relaychain
       **/
      Nominating: AugmentedEvent<ApiType, [u16, Vec<AccountId32>]>;
      /**
       * Notification received
       * [multi_location, query_id, res]
       **/
      NotificationReceived: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, Option<ITuple<[u32, XcmV3TraitsError]>>]>;
      /**
       * Sent staking.rebond call to relaychain
       **/
      Rebonding: AugmentedEvent<ApiType, [u16, u128]>;
      /**
       * Reserve_factor was updated
       **/
      ReserveFactorUpdated: AugmentedEvent<ApiType, [Permill]>;
      /**
       * Event emitted when the reserves are reduced
       * [receiver, reduced_amount]
       **/
      ReservesReduced: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * The assets get staked successfully
       **/
      Staked: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Staking ledger's cap was updated
       **/
      StakingLedgerCapUpdated: AugmentedEvent<ApiType, [u128]>;
      /**
       * Staking ledger updated
       **/
      StakingLedgerUpdated: AugmentedEvent<ApiType, [u16, PalletLiquidStakingStakingLedger]>;
      /**
       * Sent staking.unbond call to relaychain
       **/
      Unbonding: AugmentedEvent<ApiType, [u16, u128]>;
      /**
       * Unstake cancelled
       * [account_id, amount, liquid_amount]
       **/
      UnstakeCancelled: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * The derivative get unstaked successfully
       **/
      Unstaked: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Sent staking.withdraw_unbonded call to relaychain
       **/
      WithdrawingUnbonded: AugmentedEvent<ApiType, [u16, u32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    liquidStakingAgentsMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    loans: {
      /**
       * Event emitted when a market is activated
       * [admin, asset_id]
       **/
      ActivatedMarket: AugmentedEvent<ApiType, [u32]>;
      /**
       * Event emitted when cash is borrowed
       * [sender, asset_id, amount]
       **/
      Borrowed: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Enable collateral for certain asset
       * [sender, asset_id]
       **/
      CollateralAssetAdded: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * Disable collateral for certain asset
       * [sender, asset_id]
       **/
      CollateralAssetRemoved: AugmentedEvent<ApiType, [AccountId32, u32]>;
      /**
       * Event emitted when assets are deposited
       * [sender, asset_id, amount]
       **/
      Deposited: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Deposited when Reward is distributed to a borrower
       **/
      DistributedBorrowerReward: AugmentedEvent<ApiType, [u32, AccountId32, u128, u128]>;
      /**
       * Deposited when Reward is distributed to a supplier
       **/
      DistributedSupplierReward: AugmentedEvent<ApiType, [u32, AccountId32, u128, u128]>;
      /**
       * Event emitted when the incentive reserves are redeemed and transfer to receiver's account
       * [receive_account_id, asset_id, reduced_amount]
       **/
      IncentiveReservesReduced: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Event emitted when a borrow is liquidated
       * [liquidator, borrower, liquidation_asset_id, collateral_asset_id, repay_amount, collateral_amount]
       **/
      LiquidatedBorrow: AugmentedEvent<ApiType, [AccountId32, AccountId32, u32, u32, u128, u128]>;
      /**
       * Liquidation free collaterals has been updated
       **/
      LiquidationFreeCollateralsUpdated: AugmentedEvent<ApiType, [Vec<u32>]>;
      /**
       * Event emitted when market reward speed updated.
       **/
      MarketRewardSpeedUpdated: AugmentedEvent<ApiType, [u32, u128, u128]>;
      /**
       * New market is set
       * [new_interest_rate_model]
       **/
      NewMarket: AugmentedEvent<ApiType, [u32, PalletLoansMarket]>;
      /**
       * Event emitted when assets are redeemed
       * [sender, asset_id, amount]
       **/
      Redeemed: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Event emitted when a borrow is repaid
       * [sender, asset_id, amount]
       **/
      RepaidBorrow: AugmentedEvent<ApiType, [AccountId32, u32, u128]>;
      /**
       * Event emitted when the reserves are added
       * [admin, asset_id, added_amount, total_reserves]
       **/
      ReservesAdded: AugmentedEvent<ApiType, [AccountId32, u32, u128, u128]>;
      /**
       * Event emitted when the reserves are reduced
       * [admin, asset_id, reduced_amount, total_reserves]
       **/
      ReservesReduced: AugmentedEvent<ApiType, [AccountId32, u32, u128, u128]>;
      /**
       * Reward added
       **/
      RewardAdded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Reward Paid for user
       **/
      RewardPaid: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Reward withdrawed
       **/
      RewardWithdrawn: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * New market parameters is updated
       * [admin, asset_id]
       **/
      UpdatedMarket: AugmentedEvent<ApiType, [u32, PalletLoansMarket]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    oracle: {
      /**
       * New feed data is submitted.
       **/
      NewFeedData: AugmentedEvent<ApiType, [sender: AccountId32, values: Vec<ITuple<[u32, u128]>>], { sender: AccountId32, values: Vec<ITuple<[u32, u128]>> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    oracleMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ormlXcm: {
      /**
       * XCM message sent. \[to, message\]
       **/
      Sent: AugmentedEvent<ApiType, [to: XcmV3MultiLocation, message: XcmV3Xcm], { to: XcmV3MultiLocation, message: XcmV3Xcm }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256], { weightUsed: SpWeightsWeightV2Weight, dmqHead: H256 }>;
      /**
       * Some downward messages have been received and will be processed.
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>;
      /**
       * An upgrade has been authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>;
      /**
       * The relay-chain aborted the upgrade process.
       **/
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      /**
       * The validation function has been scheduled to apply.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      /**
       * Some assets have been claimed from an asset trap
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsClaimed: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Some assets have been placed in an asset trap.
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Execution of an XCM message was attempted.
       * 
       * \[ outcome \]
       **/
      Attempted: AugmentedEvent<ApiType, [XcmV3TraitsOutcome]>;
      /**
       * Fees were paid from a location for an operation (often for using `SendXcm`).
       * 
       * \[ paying location, fees \]
       **/
      FeesPaid: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * Expected query response has been received but the querier location of the response does
       * not match the expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected querier, maybe actual querier \]
       **/
      InvalidQuerier: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
      /**
       * Expected query response has been received but the expected querier location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidQuerierVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * Expected query response has been received but the origin location of the response does
       * not match that expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected location \]
       **/
      InvalidResponder: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
      /**
       * Expected query response has been received but the expected origin location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * Query response has been received and query is removed. The registered notification has
       * been dispatched and executed successfully.
       * 
       * \[ id, pallet index, call index \]
       **/
      Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The dispatch was unable to be
       * decoded into a `Call`; this might be due to dispatch function having a signature which
       * is not `(origin, QueryId, Response)`.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. There was a general error with
       * dispatching the notification call.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The registered notification could
       * not be dispatched because the dispatch weight is greater than the maximum weight
       * originally budgeted by this runtime for the query result.
       * 
       * \[ id, pallet index, call index, actual weight, max budgeted weight \]
       **/
      NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * migrating the location to our new XCM format.
       * 
       * \[ location, query ID \]
       **/
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * sending the notification to it.
       * 
       * \[ location, query ID, error \]
       **/
      NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3TraitsError]>;
      /**
       * Query response has been received and is ready for taking with `take_response`. There is
       * no registered notification call.
       * 
       * \[ id, response \]
       **/
      ResponseReady: AugmentedEvent<ApiType, [u64, XcmV3Response]>;
      /**
       * Received query response has been read and removed.
       * 
       * \[ id \]
       **/
      ResponseTaken: AugmentedEvent<ApiType, [u64]>;
      /**
       * A XCM message was sent.
       * 
       * \[ origin, destination, message \]
       **/
      Sent: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
      /**
       * The supported version of a location has been changed. This might be through an
       * automatic notification or a manual intervention.
       * 
       * \[ location, XCM version \]
       **/
      SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32]>;
      /**
       * Query response received which does not match a registered query. This may be because a
       * matching query was never registered, it may be because it is a duplicate response, or
       * because the query timed out.
       * 
       * \[ origin location, id \]
       **/
      UnexpectedResponse: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       * 
       * The cost of sending it (borne by the chain) is included.
       * 
       * \[ destination, result, cost \]
       **/
      VersionChangeNotified: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
      /**
       * We have requested that a remote chain sends us XCM version change notifications.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyRequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * A remote has requested XCM version change notification from us and we have honored it.
       * A version information message is sent to them and its cost is included.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyStarted: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * We have requested that a remote chain stops sending us XCM version change notifications.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyUnrequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    prices: {
      /**
       * Reset emergency price. \[asset_id\]
       **/
      ResetPrice: AugmentedEvent<ApiType, [u32]>;
      /**
       * Set emergency price. \[asset_id, price_detail\]
       **/
      SetPrice: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: VanillaRuntimeProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: VanillaRuntimeProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: VanillaRuntimeProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: VanillaRuntimeProxyType, delay: u32 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: VanillaRuntimeProxyType, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: VanillaRuntimeProxyType, disambiguationIndex: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallUnavailable: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The given task was unable to be renewed since the agenda is full at that block.
       **/
      PeriodicFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task can never be executed since it is overweight.
       **/
      PermanentlyOverweight: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    stableSwap: {
      /**
       * Delta Calculated
       **/
      DeltaCalculated: AugmentedEvent<ApiType, [u32, u32, u128]>;
      /**
       * Add liquidity into pool
       * [sender, base_currency_id, quote_currency_id, base_amount_added, quote_amount_added, lp_token_id, new_base_amount, new_quote_amount]
       **/
      LiquidityAdded: AugmentedEvent<ApiType, [AccountId32, u32, u32, u128, u128, u32, u128, u128]>;
      /**
       * Remove liquidity from pool
       * [sender, base_currency_id, quote_currency_id, liquidity, base_amount_removed, quote_amount_removed, lp_token_id, new_base_amount, new_quote_amount]
       **/
      LiquidityRemoved: AugmentedEvent<ApiType, [AccountId32, u32, u32, u128, u128, u128, u32, u128, u128]>;
      PoolCreated: AugmentedEvent<ApiType, [AccountId32, u32, u32, u32]>;
      Traded: AugmentedEvent<ApiType, [AccountId32, u32, u32, u128, u128, u32, u128, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    streaming: {
      /**
       * Set minimum deposit for creating a stream
       * \[asset_id, minimum_deposit\]
       **/
      MinimumDepositSet: AugmentedEvent<ApiType, [u32, u128]>;
      /**
       * Cancel an existing stream.
       * \[stream_id, sender, recipient, asset_id, sender_balance, recipient_balance]
       **/
      StreamCancelled: AugmentedEvent<ApiType, [u128, AccountId32, AccountId32, u32, u128, u128]>;
      /**
       * Creates a payment stream.
       * \[stream_id, sender, recipient, deposit, asset_id, start_time, end_time, cancellable\]
       **/
      StreamCreated: AugmentedEvent<ApiType, [u128, AccountId32, AccountId32, u128, u32, u64, u64, bool]>;
      /**
       * Withdraw payment from stream.
       * \[stream_id, recipient, asset_id, amount\]
       **/
      StreamWithdrawn: AugmentedEvent<ApiType, [u128, AccountId32, u32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], { oldSudoer: Option<AccountId32> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommitteeMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * New proposal.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>;
      /**
       * A proposal was rejected; funds were slashed.
       **/
      Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32, slashed: u128 }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      /**
       * The inactive funds of the pallet have been updated.
       **/
      UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], { reactivated: u128, deactivated: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /**
       * Claimed vesting.
       **/
      Claimed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Added new vesting schedule.
       **/
      VestingScheduleAdded: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, vestingSchedule: OrmlVestingVestingSchedule], { from: AccountId32, to: AccountId32, vestingSchedule: OrmlVestingVestingSchedule }>;
      /**
       * Updated vesting schedules.
       **/
      VestingSchedulesUpdated: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmHelper: {
      /**
       * Xcm fee and weight updated
       **/
      XcmWeightFeeUpdated: AugmentedEvent<ApiType, [PalletTraitsUmpXcmWeightFeeMisc]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmpQueue: {
      /**
       * Bad XCM format used.
       **/
      BadFormat: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * Bad XCM version used.
       **/
      BadVersion: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * Some XCM failed.
       **/
      Fail: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>, error: XcmV3TraitsError, weight: SpWeightsWeightV2Weight], { messageHash: Option<U8aFixed>, error: XcmV3TraitsError, weight: SpWeightsWeightV2Weight }>;
      /**
       * An XCM exceeded the individual message weight budget.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [sender: u32, sentAt: u32, index: u64, required: SpWeightsWeightV2Weight], { sender: u32, sentAt: u32, index: u64, required: SpWeightsWeightV2Weight }>;
      /**
       * An XCM from the overweight queue was executed with the given actual weight used.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [index: u64, used: SpWeightsWeightV2Weight], { index: u64, used: SpWeightsWeightV2Weight }>;
      /**
       * Some XCM was executed ok.
       **/
      Success: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>, weight: SpWeightsWeightV2Weight], { messageHash: Option<U8aFixed>, weight: SpWeightsWeightV2Weight }>;
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xTokens: {
      /**
       * Transferred `MultiAsset` with fee.
       **/
      TransferredMultiAssets: AugmentedEvent<ApiType, [sender: AccountId32, assets: XcmV3MultiassetMultiAssets, fee: XcmV3MultiAsset, dest: XcmV3MultiLocation], { sender: AccountId32, assets: XcmV3MultiassetMultiAssets, fee: XcmV3MultiAsset, dest: XcmV3MultiLocation }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
