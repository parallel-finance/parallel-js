// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmCall, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, EthbloomBloom, EthereumBlock, EthereumHeader, EthereumLog, EthereumReceiptEip658ReceiptData, EthereumReceiptReceiptV3, EthereumTransactionAccessListItem, EthereumTransactionEip1559Transaction, EthereumTransactionEip2930Transaction, EthereumTransactionLegacyTransaction, EthereumTransactionTransactionAction, EthereumTransactionTransactionSignature, EthereumTransactionTransactionV2, EthereumTypesHashH64, EvmCoreErrorExitError, EvmCoreErrorExitFatal, EvmCoreErrorExitReason, EvmCoreErrorExitRevert, EvmCoreErrorExitSucceed, FpRpcTransactionStatus, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchRawOrigin, FrameSupportPalletId, FrameSupportPreimagesBounded, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, KerriaRuntimeOpaqueSessionKeys, KerriaRuntimeOriginCaller, KerriaRuntimeProxyType, KerriaRuntimeRuntime, OrmlOracleModuleCall, OrmlOracleModuleError, OrmlOracleModuleEvent, OrmlOracleModuleTimestampedValue, OrmlUtilitiesOrderedSet, OrmlVestingModuleCall, OrmlVestingModuleError, OrmlVestingModuleEvent, OrmlVestingVestingSchedule, OrmlXcmModuleCall, OrmlXcmModuleError, OrmlXcmModuleEvent, OrmlXtokensModuleCall, OrmlXtokensModuleError, OrmlXtokensModuleEvent, PalletAmmCall, PalletAmmError, PalletAmmEvent, PalletAssetRegistryCall, PalletAssetRegistryError, PalletAssetRegistryEvent, PalletAssetsApproval, PalletAssetsAssetAccount, PalletAssetsAssetDetails, PalletAssetsAssetMetadata, PalletAssetsAssetStatus, PalletAssetsCall, PalletAssetsError, PalletAssetsEvent, PalletAssetsExistenceReason, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReserveData, PalletBaseFeeCall, PalletBaseFeeEvent, PalletBridgeBridgeToken, PalletBridgeBridgeType, PalletBridgeCall, PalletBridgeError, PalletBridgeEvent, PalletBridgeMaterializeCall, PalletBridgeProposal, PalletBridgeProposalStatus, PalletCollatorSelectionCall, PalletCollatorSelectionCandidateInfo, PalletCollatorSelectionError, PalletCollatorSelectionEvent, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletCrowdloansBonusConfig, PalletCrowdloansCall, PalletCrowdloansChildStorageKind, PalletCrowdloansContributionStrategy, PalletCrowdloansError, PalletCrowdloansEvent, PalletCrowdloansReleases, PalletCrowdloansVault, PalletCrowdloansVaultPhase, PalletCrowdloansXcmRequest, PalletCurrencyAdapterCall, PalletCurrencyAdapterError, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletEmergencyShutdownCall, PalletEmergencyShutdownEvent, PalletEthereumCall, PalletEthereumError, PalletEthereumEvent, PalletEthereumRawOrigin, PalletEvmCall, PalletEvmError, PalletEvmEvent, PalletEvmSignaturesCall, PalletEvmSignaturesError, PalletEvmSignaturesEvent, PalletFarmingCall, PalletFarmingError, PalletFarmingEvent, PalletFarmingPoolInfo, PalletFarmingUserPosition, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletLiquidStakingCall, PalletLiquidStakingError, PalletLiquidStakingEvent, PalletLiquidStakingMatchingLedger, PalletLiquidStakingReservableAmount, PalletLiquidStakingStakingLedger, PalletLiquidStakingUnlockChunk, PalletLiquidStakingUnstakeProvider, PalletLiquidStakingVersions, PalletLiquidStakingXcmRequest, PalletLoansBorrowSnapshot, PalletLoansCall, PalletLoansDeposits, PalletLoansEarnedSnapshot, PalletLoansError, PalletLoansEvent, PalletLoansMarket, PalletLoansMarketState, PalletLoansRateModelCurveModel, PalletLoansRateModelInterestRateModel, PalletLoansRateModelJumpModel, PalletLoansRewardMarketState, PalletLoansVersions, PalletMembershipCall, PalletMembershipError, PalletMembershipEvent, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletPreimageCall, PalletPreimageError, PalletPreimageEvent, PalletPreimageRequestStatus, PalletPricesCall, PalletPricesEvent, PalletProxyAnnouncement, PalletProxyCall, PalletProxyError, PalletProxyEvent, PalletProxyProxyDefinition, PalletRouterCall, PalletRouterError, PalletRouterEvent, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerScheduled, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletStreamingCall, PalletStreamingError, PalletStreamingEvent, PalletStreamingStream, PalletStreamingStreamKind, PalletStreamingStreamStatus, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTimestampCall, PalletTraitsPool, PalletTraitsUmpRewardDestination, PalletTraitsUmpXcmCall, PalletTraitsUmpXcmWeightFeeMisc, PalletTraitsXcmAssetType, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmHelperCall, PalletXcmHelperError, PalletXcmHelperEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2AbridgedHrmpChannel, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, SpArithmeticArithmeticError, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, XcmDoubleEncoded, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiLocation, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3VecPalletInfo, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedAssetId, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedResponse, XcmVersionedXcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    CumulusPalletDmpQueueCall: CumulusPalletDmpQueueCall;
    CumulusPalletDmpQueueConfigData: CumulusPalletDmpQueueConfigData;
    CumulusPalletDmpQueueError: CumulusPalletDmpQueueError;
    CumulusPalletDmpQueueEvent: CumulusPalletDmpQueueEvent;
    CumulusPalletDmpQueuePageIndexData: CumulusPalletDmpQueuePageIndexData;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletXcmCall: CumulusPalletXcmCall;
    CumulusPalletXcmError: CumulusPalletXcmError;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
    CumulusPalletXcmpQueueCall: CumulusPalletXcmpQueueCall;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueInboundChannelDetails: CumulusPalletXcmpQueueInboundChannelDetails;
    CumulusPalletXcmpQueueInboundState: CumulusPalletXcmpQueueInboundState;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    EthbloomBloom: EthbloomBloom;
    EthereumBlock: EthereumBlock;
    EthereumHeader: EthereumHeader;
    EthereumLog: EthereumLog;
    EthereumReceiptEip658ReceiptData: EthereumReceiptEip658ReceiptData;
    EthereumReceiptReceiptV3: EthereumReceiptReceiptV3;
    EthereumTransactionAccessListItem: EthereumTransactionAccessListItem;
    EthereumTransactionEip1559Transaction: EthereumTransactionEip1559Transaction;
    EthereumTransactionEip2930Transaction: EthereumTransactionEip2930Transaction;
    EthereumTransactionLegacyTransaction: EthereumTransactionLegacyTransaction;
    EthereumTransactionTransactionAction: EthereumTransactionTransactionAction;
    EthereumTransactionTransactionSignature: EthereumTransactionTransactionSignature;
    EthereumTransactionTransactionV2: EthereumTransactionTransactionV2;
    EthereumTypesHashH64: EthereumTypesHashH64;
    EvmCoreErrorExitError: EvmCoreErrorExitError;
    EvmCoreErrorExitFatal: EvmCoreErrorExitFatal;
    EvmCoreErrorExitReason: EvmCoreErrorExitReason;
    EvmCoreErrorExitRevert: EvmCoreErrorExitRevert;
    EvmCoreErrorExitSucceed: EvmCoreErrorExitSucceed;
    FpRpcTransactionStatus: FpRpcTransactionStatus;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    KerriaRuntimeOpaqueSessionKeys: KerriaRuntimeOpaqueSessionKeys;
    KerriaRuntimeOriginCaller: KerriaRuntimeOriginCaller;
    KerriaRuntimeProxyType: KerriaRuntimeProxyType;
    KerriaRuntimeRuntime: KerriaRuntimeRuntime;
    OrmlOracleModuleCall: OrmlOracleModuleCall;
    OrmlOracleModuleError: OrmlOracleModuleError;
    OrmlOracleModuleEvent: OrmlOracleModuleEvent;
    OrmlOracleModuleTimestampedValue: OrmlOracleModuleTimestampedValue;
    OrmlUtilitiesOrderedSet: OrmlUtilitiesOrderedSet;
    OrmlVestingModuleCall: OrmlVestingModuleCall;
    OrmlVestingModuleError: OrmlVestingModuleError;
    OrmlVestingModuleEvent: OrmlVestingModuleEvent;
    OrmlVestingVestingSchedule: OrmlVestingVestingSchedule;
    OrmlXcmModuleCall: OrmlXcmModuleCall;
    OrmlXcmModuleError: OrmlXcmModuleError;
    OrmlXcmModuleEvent: OrmlXcmModuleEvent;
    OrmlXtokensModuleCall: OrmlXtokensModuleCall;
    OrmlXtokensModuleError: OrmlXtokensModuleError;
    OrmlXtokensModuleEvent: OrmlXtokensModuleEvent;
    PalletAmmCall: PalletAmmCall;
    PalletAmmError: PalletAmmError;
    PalletAmmEvent: PalletAmmEvent;
    PalletAssetRegistryCall: PalletAssetRegistryCall;
    PalletAssetRegistryError: PalletAssetRegistryError;
    PalletAssetRegistryEvent: PalletAssetRegistryEvent;
    PalletAssetsApproval: PalletAssetsApproval;
    PalletAssetsAssetAccount: PalletAssetsAssetAccount;
    PalletAssetsAssetDetails: PalletAssetsAssetDetails;
    PalletAssetsAssetMetadata: PalletAssetsAssetMetadata;
    PalletAssetsAssetStatus: PalletAssetsAssetStatus;
    PalletAssetsCall: PalletAssetsCall;
    PalletAssetsError: PalletAssetsError;
    PalletAssetsEvent: PalletAssetsEvent;
    PalletAssetsExistenceReason: PalletAssetsExistenceReason;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletBaseFeeCall: PalletBaseFeeCall;
    PalletBaseFeeEvent: PalletBaseFeeEvent;
    PalletBridgeBridgeToken: PalletBridgeBridgeToken;
    PalletBridgeBridgeType: PalletBridgeBridgeType;
    PalletBridgeCall: PalletBridgeCall;
    PalletBridgeError: PalletBridgeError;
    PalletBridgeEvent: PalletBridgeEvent;
    PalletBridgeMaterializeCall: PalletBridgeMaterializeCall;
    PalletBridgeProposal: PalletBridgeProposal;
    PalletBridgeProposalStatus: PalletBridgeProposalStatus;
    PalletCollatorSelectionCall: PalletCollatorSelectionCall;
    PalletCollatorSelectionCandidateInfo: PalletCollatorSelectionCandidateInfo;
    PalletCollatorSelectionError: PalletCollatorSelectionError;
    PalletCollatorSelectionEvent: PalletCollatorSelectionEvent;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletCrowdloansBonusConfig: PalletCrowdloansBonusConfig;
    PalletCrowdloansCall: PalletCrowdloansCall;
    PalletCrowdloansChildStorageKind: PalletCrowdloansChildStorageKind;
    PalletCrowdloansContributionStrategy: PalletCrowdloansContributionStrategy;
    PalletCrowdloansError: PalletCrowdloansError;
    PalletCrowdloansEvent: PalletCrowdloansEvent;
    PalletCrowdloansReleases: PalletCrowdloansReleases;
    PalletCrowdloansVault: PalletCrowdloansVault;
    PalletCrowdloansVaultPhase: PalletCrowdloansVaultPhase;
    PalletCrowdloansXcmRequest: PalletCrowdloansXcmRequest;
    PalletCurrencyAdapterCall: PalletCurrencyAdapterCall;
    PalletCurrencyAdapterError: PalletCurrencyAdapterError;
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
    PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
    PalletDemocracyTally: PalletDemocracyTally;
    PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
    PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
    PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
    PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
    PalletEmergencyShutdownCall: PalletEmergencyShutdownCall;
    PalletEmergencyShutdownEvent: PalletEmergencyShutdownEvent;
    PalletEthereumCall: PalletEthereumCall;
    PalletEthereumError: PalletEthereumError;
    PalletEthereumEvent: PalletEthereumEvent;
    PalletEthereumRawOrigin: PalletEthereumRawOrigin;
    PalletEvmCall: PalletEvmCall;
    PalletEvmError: PalletEvmError;
    PalletEvmEvent: PalletEvmEvent;
    PalletEvmSignaturesCall: PalletEvmSignaturesCall;
    PalletEvmSignaturesError: PalletEvmSignaturesError;
    PalletEvmSignaturesEvent: PalletEvmSignaturesEvent;
    PalletFarmingCall: PalletFarmingCall;
    PalletFarmingError: PalletFarmingError;
    PalletFarmingEvent: PalletFarmingEvent;
    PalletFarmingPoolInfo: PalletFarmingPoolInfo;
    PalletFarmingUserPosition: PalletFarmingUserPosition;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletLiquidStakingCall: PalletLiquidStakingCall;
    PalletLiquidStakingError: PalletLiquidStakingError;
    PalletLiquidStakingEvent: PalletLiquidStakingEvent;
    PalletLiquidStakingMatchingLedger: PalletLiquidStakingMatchingLedger;
    PalletLiquidStakingReservableAmount: PalletLiquidStakingReservableAmount;
    PalletLiquidStakingStakingLedger: PalletLiquidStakingStakingLedger;
    PalletLiquidStakingUnlockChunk: PalletLiquidStakingUnlockChunk;
    PalletLiquidStakingUnstakeProvider: PalletLiquidStakingUnstakeProvider;
    PalletLiquidStakingVersions: PalletLiquidStakingVersions;
    PalletLiquidStakingXcmRequest: PalletLiquidStakingXcmRequest;
    PalletLoansBorrowSnapshot: PalletLoansBorrowSnapshot;
    PalletLoansCall: PalletLoansCall;
    PalletLoansDeposits: PalletLoansDeposits;
    PalletLoansEarnedSnapshot: PalletLoansEarnedSnapshot;
    PalletLoansError: PalletLoansError;
    PalletLoansEvent: PalletLoansEvent;
    PalletLoansMarket: PalletLoansMarket;
    PalletLoansMarketState: PalletLoansMarketState;
    PalletLoansRateModelCurveModel: PalletLoansRateModelCurveModel;
    PalletLoansRateModelInterestRateModel: PalletLoansRateModelInterestRateModel;
    PalletLoansRateModelJumpModel: PalletLoansRateModelJumpModel;
    PalletLoansRewardMarketState: PalletLoansRewardMarketState;
    PalletLoansVersions: PalletLoansVersions;
    PalletMembershipCall: PalletMembershipCall;
    PalletMembershipError: PalletMembershipError;
    PalletMembershipEvent: PalletMembershipEvent;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletPreimageCall: PalletPreimageCall;
    PalletPreimageError: PalletPreimageError;
    PalletPreimageEvent: PalletPreimageEvent;
    PalletPreimageRequestStatus: PalletPreimageRequestStatus;
    PalletPricesCall: PalletPricesCall;
    PalletPricesEvent: PalletPricesEvent;
    PalletProxyAnnouncement: PalletProxyAnnouncement;
    PalletProxyCall: PalletProxyCall;
    PalletProxyError: PalletProxyError;
    PalletProxyEvent: PalletProxyEvent;
    PalletProxyProxyDefinition: PalletProxyProxyDefinition;
    PalletRouterCall: PalletRouterCall;
    PalletRouterError: PalletRouterError;
    PalletRouterEvent: PalletRouterEvent;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerScheduled: PalletSchedulerScheduled;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletStreamingCall: PalletStreamingCall;
    PalletStreamingError: PalletStreamingError;
    PalletStreamingEvent: PalletStreamingEvent;
    PalletStreamingStream: PalletStreamingStream;
    PalletStreamingStreamKind: PalletStreamingStreamKind;
    PalletStreamingStreamStatus: PalletStreamingStreamStatus;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTraitsPool: PalletTraitsPool;
    PalletTraitsUmpRewardDestination: PalletTraitsUmpRewardDestination;
    PalletTraitsUmpXcmCall: PalletTraitsUmpXcmCall;
    PalletTraitsUmpXcmWeightFeeMisc: PalletTraitsUmpXcmWeightFeeMisc;
    PalletTraitsXcmAssetType: PalletTraitsXcmAssetType;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmHelperCall: PalletXcmHelperCall;
    PalletXcmHelperError: PalletXcmHelperError;
    PalletXcmHelperEvent: PalletXcmHelperEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    PalletXcmQueryStatus: PalletXcmQueryStatus;
    PalletXcmRemoteLockedFungibleRecord: PalletXcmRemoteLockedFungibleRecord;
    PalletXcmVersionMigrationStage: PalletXcmVersionMigrationStage;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesXcmpMessageFormat: PolkadotParachainPrimitivesXcmpMessageFormat;
    PolkadotPrimitivesV2AbridgedHostConfiguration: PolkadotPrimitivesV2AbridgedHostConfiguration;
    PolkadotPrimitivesV2AbridgedHrmpChannel: PolkadotPrimitivesV2AbridgedHrmpChannel;
    PolkadotPrimitivesV2PersistedValidationData: PolkadotPrimitivesV2PersistedValidationData;
    PolkadotPrimitivesV2UpgradeRestriction: PolkadotPrimitivesV2UpgradeRestriction;
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmV3Instruction: XcmV3Instruction;
    XcmV3Junction: XcmV3Junction;
    XcmV3JunctionBodyId: XcmV3JunctionBodyId;
    XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
    XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
    XcmV3Junctions: XcmV3Junctions;
    XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
    XcmV3MultiAsset: XcmV3MultiAsset;
    XcmV3MultiLocation: XcmV3MultiLocation;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3TraitsOutcome: XcmV3TraitsOutcome;
    XcmV3VecPalletInfo: XcmV3VecPalletInfo;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedMultiAsset: XcmVersionedMultiAsset;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
