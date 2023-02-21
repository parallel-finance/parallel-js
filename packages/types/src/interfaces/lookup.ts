// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup8: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup15: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup18: frame_system::EventRecord<heiko_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup20: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup21: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup23: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup24: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null'
    }
  },
  /**
   * Lookup25: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup26: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup27: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup28: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup29: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup32: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup33: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup34: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup35: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup36: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup37: pallet_assets::pallet::Event<T, I>
   **/
  PalletAssetsEvent: {
    _enum: {
      Created: {
        assetId: 'u32',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      Issued: {
        assetId: 'u32',
        owner: 'AccountId32',
        totalSupply: 'u128',
      },
      Transferred: {
        assetId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        assetId: 'u32',
        owner: 'AccountId32',
        balance: 'u128',
      },
      TeamChanged: {
        assetId: 'u32',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      OwnerChanged: {
        assetId: 'u32',
        owner: 'AccountId32',
      },
      Frozen: {
        assetId: 'u32',
        who: 'AccountId32',
      },
      Thawed: {
        assetId: 'u32',
        who: 'AccountId32',
      },
      AssetFrozen: {
        assetId: 'u32',
      },
      AssetThawed: {
        assetId: 'u32',
      },
      Destroyed: {
        assetId: 'u32',
      },
      ForceCreated: {
        assetId: 'u32',
        owner: 'AccountId32',
      },
      MetadataSet: {
        assetId: 'u32',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        assetId: 'u32',
      },
      ApprovedTransfer: {
        assetId: 'u32',
        source: 'AccountId32',
        delegate: 'AccountId32',
        amount: 'u128',
      },
      ApprovalCancelled: {
        assetId: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      TransferredApproved: {
        assetId: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128',
      },
      AssetStatusChanged: {
        assetId: 'u32'
      }
    }
  },
  /**
   * Lookup39: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'HeikoRuntimeProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'HeikoRuntimeProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'HeikoRuntimeProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup40: heiko_runtime::ProxyType
   **/
  HeikoRuntimeProxyType: {
    _enum: ['Any', 'Loans', 'Staking', 'Crowdloans', 'Farming', 'Streaming', 'Governance', 'AMM', 'EVM']
  },
  /**
   * Lookup42: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup43: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32'
      }
    }
  },
  /**
   * Lookup44: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup45: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup47: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32'
      }
    }
  },
  /**
   * Lookup49: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32'
      }
    }
  },
  /**
   * Lookup50: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup53: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup54: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: 'Option<H256>',
        weight: 'SpWeightsWeightV2Weight',
      },
      Fail: {
        messageHash: 'Option<H256>',
        error: 'XcmV2TraitsError',
        weight: 'SpWeightsWeightV2Weight',
      },
      BadVersion: {
        messageHash: 'Option<H256>',
      },
      BadFormat: {
        messageHash: 'Option<H256>',
      },
      UpwardMessageSent: {
        messageHash: 'Option<H256>',
      },
      XcmpMessageSent: {
        messageHash: 'Option<H256>',
      },
      OverweightEnqueued: {
        sender: 'u32',
        sentAt: 'u32',
        index: 'u64',
        required: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        index: 'u64',
        used: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup56: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup58: cumulus_pallet_dmp_queue::pallet::Event<T>
   **/
  CumulusPalletDmpQueueEvent: {
    _enum: {
      InvalidFormat: {
        messageId: '[u8;32]',
      },
      UnsupportedVersion: {
        messageId: '[u8;32]',
      },
      ExecutedDownward: {
        messageId: '[u8;32]',
        outcome: 'XcmV2TraitsOutcome',
      },
      WeightExhausted: {
        messageId: '[u8;32]',
        remainingWeight: 'SpWeightsWeightV2Weight',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightEnqueued: {
        messageId: '[u8;32]',
        overweightIndex: 'u64',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        overweightIndex: 'u64',
        weightUsed: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup59: xcm::v2::traits::Outcome
   **/
  XcmV2TraitsOutcome: {
    _enum: {
      Complete: 'u64',
      Incomplete: '(u64,XcmV2TraitsError)',
      Error: 'XcmV2TraitsError'
    }
  },
  /**
   * Lookup60: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: 'XcmV2TraitsOutcome',
      Sent: '(XcmV1MultiLocation,XcmV1MultiLocation,XcmV2Xcm)',
      UnexpectedResponse: '(XcmV1MultiLocation,u64)',
      ResponseReady: '(u64,XcmV2Response)',
      Notified: '(u64,u8,u8)',
      NotifyOverweight: '(u64,u8,u8,SpWeightsWeightV2Weight,SpWeightsWeightV2Weight)',
      NotifyDispatchError: '(u64,u8,u8)',
      NotifyDecodeFailed: '(u64,u8,u8)',
      InvalidResponder: '(XcmV1MultiLocation,u64,Option<XcmV1MultiLocation>)',
      InvalidResponderVersion: '(XcmV1MultiLocation,u64)',
      ResponseTaken: 'u64',
      AssetsTrapped: '(H256,XcmV1MultiLocation,XcmVersionedMultiAssets)',
      VersionChangeNotified: '(XcmV1MultiLocation,u32)',
      SupportedVersionChanged: '(XcmV1MultiLocation,u32)',
      NotifyTargetSendFail: '(XcmV1MultiLocation,u64,XcmV2TraitsError)',
      NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)',
      AssetsClaimed: '(H256,XcmV1MultiLocation,XcmVersionedMultiAssets)'
    }
  },
  /**
   * Lookup61: xcm::v1::multilocation::MultiLocation
   **/
  XcmV1MultiLocation: {
    parents: 'u8',
    interior: 'XcmV1MultilocationJunctions'
  },
  /**
   * Lookup62: xcm::v1::multilocation::Junctions
   **/
  XcmV1MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV1Junction',
      X2: '(XcmV1Junction,XcmV1Junction)',
      X3: '(XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X4: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X5: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X6: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X7: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X8: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)'
    }
  },
  /**
   * Lookup63: xcm::v1::junction::Junction
   **/
  XcmV1Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart'
      }
    }
  },
  /**
   * Lookup65: xcm::v0::junction::NetworkId
   **/
  XcmV0JunctionNetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup69: xcm::v0::junction::BodyId
   **/
  XcmV0JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null'
    }
  },
  /**
   * Lookup70: xcm::v0::junction::BodyPart
   **/
  XcmV0JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup71: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup73: xcm::v2::Instruction<RuntimeCall>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV1MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV1MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV1MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        beneficiary: 'XcmV1MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV1MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV1MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV1MultiassetMultiAssetFilter',
        receive: 'XcmV1MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        reserve: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'XcmV1MultiAsset',
        weightLimit: 'XcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        ticket: 'XcmV1MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup74: xcm::v1::multiasset::MultiAssets
   **/
  XcmV1MultiassetMultiAssets: 'Vec<XcmV1MultiAsset>',
  /**
   * Lookup76: xcm::v1::multiasset::MultiAsset
   **/
  XcmV1MultiAsset: {
    id: 'XcmV1MultiassetAssetId',
    fun: 'XcmV1MultiassetFungibility'
  },
  /**
   * Lookup77: xcm::v1::multiasset::AssetId
   **/
  XcmV1MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV1MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup78: xcm::v1::multiasset::Fungibility
   **/
  XcmV1MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV1MultiassetAssetInstance'
    }
  },
  /**
   * Lookup79: xcm::v1::multiasset::AssetInstance
   **/
  XcmV1MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup82: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV1MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup85: xcm::v0::OriginKind
   **/
  XcmV0OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup86: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup87: xcm::v1::multiasset::MultiAssetFilter
   **/
  XcmV1MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV1MultiassetMultiAssets',
      Wild: 'XcmV1MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup88: xcm::v1::multiasset::WildMultiAsset
   **/
  XcmV1MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV1MultiassetAssetId',
        fun: 'XcmV1MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup89: xcm::v1::multiasset::WildFungibility
   **/
  XcmV1MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup90: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup92: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      V0: 'Vec<XcmV0MultiAsset>',
      V1: 'XcmV1MultiassetMultiAssets'
    }
  },
  /**
   * Lookup94: xcm::v0::multi_asset::MultiAsset
   **/
  XcmV0MultiAsset: {
    _enum: {
      None: 'Null',
      All: 'Null',
      AllFungible: 'Null',
      AllNonFungible: 'Null',
      AllAbstractFungible: {
        id: 'Bytes',
      },
      AllAbstractNonFungible: {
        class: 'Bytes',
      },
      AllConcreteFungible: {
        id: 'XcmV0MultiLocation',
      },
      AllConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
      },
      AbstractFungible: {
        id: 'Bytes',
        amount: 'Compact<u128>',
      },
      AbstractNonFungible: {
        class: 'Bytes',
        instance: 'XcmV1MultiassetAssetInstance',
      },
      ConcreteFungible: {
        id: 'XcmV0MultiLocation',
        amount: 'Compact<u128>',
      },
      ConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
        instance: 'XcmV1MultiassetAssetInstance'
      }
    }
  },
  /**
   * Lookup95: xcm::v0::multi_location::MultiLocation
   **/
  XcmV0MultiLocation: {
    _enum: {
      Null: 'Null',
      X1: 'XcmV0Junction',
      X2: '(XcmV0Junction,XcmV0Junction)',
      X3: '(XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X4: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X5: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X6: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X7: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X8: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)'
    }
  },
  /**
   * Lookup96: xcm::v0::junction::Junction
   **/
  XcmV0Junction: {
    _enum: {
      Parent: 'Null',
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart'
      }
    }
  },
  /**
   * Lookup97: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      V0: 'XcmV0MultiLocation',
      V1: 'XcmV1MultiLocation'
    }
  },
  /**
   * Lookup98: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;8]',
      UnsupportedVersion: '[u8;8]',
      ExecutedDownward: '([u8;8],XcmV2TraitsOutcome)'
    }
  },
  /**
   * Lookup99: pallet_collator_selection::pallet::Event<T>
   **/
  PalletCollatorSelectionEvent: {
    _enum: {
      NewInvulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      NewDesiredCandidates: {
        desiredCandidates: 'u32',
      },
      NewCandidacyBond: {
        bondAmount: 'u128',
      },
      CandidateAdded: {
        accountId: 'AccountId32',
        deposit: 'u128',
      },
      CandidateRemoved: {
        accountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup101: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup102: orml_oracle::module::Event<T, I>
   **/
  OrmlOracleModuleEvent: {
    _enum: {
      NewFeedData: {
        sender: 'AccountId32',
        values: 'Vec<(u32,u128)>'
      }
    }
  },
  /**
   * Lookup106: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: 'AccountId32',
        assets: 'XcmV1MultiassetMultiAssets',
        fee: 'XcmV1MultiAsset',
        dest: 'XcmV1MultiLocation'
      }
    }
  },
  /**
   * Lookup107: orml_xcm::module::Event<T>
   **/
  OrmlXcmModuleEvent: {
    _enum: {
      Sent: {
        to: 'XcmV1MultiLocation',
        message: 'XcmV2Xcm'
      }
    }
  },
  /**
   * Lookup108: orml_vesting::module::Event<T>
   **/
  OrmlVestingModuleEvent: {
    _enum: {
      VestingScheduleAdded: {
        from: 'AccountId32',
        to: 'AccountId32',
        vestingSchedule: 'OrmlVestingVestingSchedule',
      },
      Claimed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      VestingSchedulesUpdated: {
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup109: orml_vesting::VestingSchedule<BlockNumber, Balance>
   **/
  OrmlVestingVestingSchedule: {
    start: 'u32',
    period: 'u32',
    periodCount: 'u32',
    perPeriod: 'Compact<u128>'
  },
  /**
   * Lookup110: pallet_loans::pallet::Event<T>
   **/
  PalletLoansEvent: {
    _enum: {
      CollateralAssetAdded: '(AccountId32,u32)',
      CollateralAssetRemoved: '(AccountId32,u32)',
      Deposited: '(AccountId32,u32,u128)',
      Redeemed: '(AccountId32,u32,u128)',
      Borrowed: '(AccountId32,u32,u128)',
      RepaidBorrow: '(AccountId32,u32,u128)',
      LiquidatedBorrow: '(AccountId32,AccountId32,u32,u32,u128,u128)',
      ReservesReduced: '(AccountId32,u32,u128,u128)',
      ReservesAdded: '(AccountId32,u32,u128,u128)',
      NewMarket: '(u32,PalletLoansMarket)',
      ActivatedMarket: 'u32',
      UpdatedMarket: '(u32,PalletLoansMarket)',
      RewardAdded: '(AccountId32,u128)',
      RewardWithdrawn: '(AccountId32,u128)',
      MarketRewardSpeedUpdated: '(u32,u128,u128)',
      DistributedSupplierReward: '(u32,AccountId32,u128,u128)',
      DistributedBorrowerReward: '(u32,AccountId32,u128,u128)',
      RewardPaid: '(AccountId32,u128)',
      IncentiveReservesReduced: '(AccountId32,u32,u128)',
      LiquidationFreeCollateralsUpdated: 'Vec<u32>'
    }
  },
  /**
   * Lookup111: pallet_loans::types::Market<Balance>
   **/
  PalletLoansMarket: {
    collateralFactor: 'Permill',
    liquidationThreshold: 'Permill',
    reserveFactor: 'Permill',
    closeFactor: 'Permill',
    liquidateIncentive: 'u128',
    liquidateIncentiveReservedFactor: 'Permill',
    rateModel: 'PalletLoansRateModelInterestRateModel',
    state: 'PalletLoansMarketState',
    supplyCap: 'u128',
    borrowCap: 'u128',
    ptokenId: 'u32'
  },
  /**
   * Lookup113: pallet_loans::rate_model::InterestRateModel
   **/
  PalletLoansRateModelInterestRateModel: {
    _enum: {
      Jump: 'PalletLoansRateModelJumpModel',
      Curve: 'PalletLoansRateModelCurveModel'
    }
  },
  /**
   * Lookup114: pallet_loans::rate_model::JumpModel
   **/
  PalletLoansRateModelJumpModel: {
    baseRate: 'u128',
    jumpRate: 'u128',
    fullRate: 'u128',
    jumpUtilization: 'Permill'
  },
  /**
   * Lookup115: pallet_loans::rate_model::CurveModel
   **/
  PalletLoansRateModelCurveModel: {
    baseRate: 'u128'
  },
  /**
   * Lookup116: pallet_loans::types::MarketState
   **/
  PalletLoansMarketState: {
    _enum: ['Active', 'Pending', 'Supervision']
  },
  /**
   * Lookup118: pallet_prices::pallet::Event<T>
   **/
  PalletPricesEvent: {
    _enum: {
      SetPrice: '(u32,u128)',
      ResetPrice: 'u32'
    }
  },
  /**
   * Lookup119: pallet_crowdloans::pallet::Event<T>
   **/
  PalletCrowdloansEvent: {
    _enum: {
      VaultCreated: '(u32,(u32,u32),u32,PalletCrowdloansVaultPhase,PalletCrowdloansContributionStrategy,u128,u32,u32)',
      VaultUpdated: '(u32,(u32,u32),PalletCrowdloansContributionStrategy,u128,u32)',
      VaultPhaseUpdated: '(u32,(u32,u32),PalletCrowdloansVaultPhase,PalletCrowdloansVaultPhase)',
      VaultDoContributing: '(u32,(u32,u32),AccountId32,u128,Bytes)',
      VaultDoWithdrawing: '(u32,(u32,u32),u128,PalletCrowdloansVaultPhase)',
      VaultContributed: '(u32,(u32,u32),AccountId32,u128,Bytes)',
      VaultClaimed: '(u32,(u32,u32),u32,AccountId32,u128,PalletCrowdloansVaultPhase)',
      VaultWithdrew: '(u32,(u32,u32),AccountId32,u128,PalletCrowdloansVaultPhase)',
      VaultRedeemed: '(u32,(u32,u32),u32,AccountId32,u128,PalletCrowdloansVaultPhase)',
      VrfUpdated: 'bool',
      NotificationReceived: '(XcmV1MultiLocation,u64,Option<(u32,XcmV2TraitsError)>)',
      AllMigrated: '(u32,(u32,u32))',
      PartiallyMigrated: '(u32,(u32,u32))',
      VaultDissolved: '(u32,(u32,u32))',
      AllRefunded: '(u32,(u32,u32))',
      PartiallyRefunded: '(u32,(u32,u32))',
      UserRefunded: '(u32,(u32,u32),AccountId32,PalletCrowdloansChildStorageKind,u128)',
      ProxyUpdated: 'AccountId32',
      LeasesBonusUpdated: '((u32,u32),PalletCrowdloansBonusConfig)'
    }
  },
  /**
   * Lookup120: pallet_crowdloans::types::VaultPhase
   **/
  PalletCrowdloansVaultPhase: {
    _enum: ['Pending', 'Contributing', 'Closed', 'Failed', 'Succeeded', 'Expired']
  },
  /**
   * Lookup121: pallet_crowdloans::types::ContributionStrategy
   **/
  PalletCrowdloansContributionStrategy: {
    _enum: ['XCM', 'XCMPROXY']
  },
  /**
   * Lookup122: pallet_crowdloans::types::ChildStorageKind
   **/
  PalletCrowdloansChildStorageKind: {
    _enum: ['Pending', 'Flying', 'Contributed']
  },
  /**
   * Lookup123: pallet_crowdloans::types::BonusConfig<Balance>
   **/
  PalletCrowdloansBonusConfig: {
    bonusPerToken: 'u128',
    startTime: 'u64',
    endTime: 'u64'
  },
  /**
   * Lookup124: pallet_liquid_staking::pallet::Event<T>
   **/
  PalletLiquidStakingEvent: {
    _enum: {
      Staked: '(AccountId32,u128)',
      Unstaked: '(AccountId32,u128,u128)',
      StakingLedgerUpdated: '(u16,PalletLiquidStakingStakingLedger)',
      Bonding: '(u16,AccountId32,u128,PalletTraitsUmpRewardDestination)',
      BondingExtra: '(u16,u128)',
      Unbonding: '(u16,u128)',
      Rebonding: '(u16,u128)',
      WithdrawingUnbonded: '(u16,u32)',
      Nominating: '(u16,Vec<AccountId32>)',
      StakingLedgerCapUpdated: 'u128',
      ReserveFactorUpdated: 'Permill',
      ExchangeRateUpdated: 'u128',
      NotificationReceived: '(XcmV1MultiLocation,u64,Option<(u32,XcmV2TraitsError)>)',
      ClaimedFor: '(AccountId32,u128)',
      NewEra: 'u32',
      Matching: '(u128,u128,u128)',
      ReservesReduced: '(AccountId32,u128)',
      UnstakeCancelled: '(AccountId32,u128,u128)',
      CommissionRateUpdated: 'u128',
      FastUnstakeMatched: '(AccountId32,u128,u128,u128)',
      IncentiveUpdated: 'u128'
    }
  },
  /**
   * Lookup125: pallet_liquid_staking::types::StakingLedger<sp_core::crypto::AccountId32, Balance>
   **/
  PalletLiquidStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletLiquidStakingUnlockChunk>',
    claimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup127: pallet_liquid_staking::types::UnlockChunk<Balance>
   **/
  PalletLiquidStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup128: pallet_traits::ump::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletTraitsUmpRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup129: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup135: pallet_amm::pallet::Event<T, I>
   **/
  PalletAmmEvent: {
    _enum: {
      LiquidityAdded: '(AccountId32,u32,u32,u128,u128,u32,u128,u128)',
      LiquidityRemoved: '(AccountId32,u32,u32,u128,u128,u128,u32,u128,u128)',
      PoolCreated: '(AccountId32,u32,u32,u32)',
      Traded: '(AccountId32,u32,u32,u128,u128,u32,u128,u128)',
      ProtocolFeeUpdated: 'Permill',
      ProtocolFeeReceiverUpdated: 'AccountId32'
    }
  },
  /**
   * Lookup136: pallet_router::pallet::Event<T, I>
   **/
  PalletRouterEvent: {
    _enum: {
      Traded: '(AccountId32,u128,Vec<u32>,u128)'
    }
  },
  /**
   * Lookup137: pallet_bridge::pallet::Event<T>
   **/
  PalletBridgeEvent: {
    _enum: {
      VoteThresholdUpdated: 'u32',
      ChainRegistered: 'u32',
      ChainRemoved: 'u32',
      BridgeTokenRegistered: '(u32,u32,bool,u128,bool,u128,u128,u128,u128)',
      BridgeTokenRemoved: '(u32,u32)',
      BridgeTokenFeeUpdated: '(u32,u128)',
      BridgeTokenStatusUpdated: '(u32,bool)',
      BridgeTokenCapUpdated: '(u32,PalletBridgeBridgeType,u128)',
      BridgeTokenAccumulatedValueCleaned: '(u32,PalletBridgeBridgeType)',
      TeleportBurned: '(AccountId32,u32,u64,u32,Bytes,u128,u128)',
      MaterializeInitialized: '(AccountId32,u32,u64,u32,AccountId32,u128)',
      MaterializeMinted: '(u32,u64,u32,AccountId32,u128)',
      MaterializeVoteFor: '(u32,u64,AccountId32,u32,AccountId32,u128)',
      MaterializeVoteAgainst: '(u32,u64,AccountId32,u32,AccountId32,u128)',
      ProposalApproved: '(u32,u64)',
      ProposalRejected: '(u32,u64)'
    }
  },
  /**
   * Lookup138: pallet_bridge::types::BridgeType
   **/
  PalletBridgeBridgeType: {
    _enum: ['BridgeOut', 'BridgeIn']
  },
  /**
   * Lookup139: pallet_emergency_shutdown::pallet::Event<T>
   **/
  PalletEmergencyShutdownEvent: {
    _enum: {
      ToggledPallet: 'bool',
      ToggledCall: 'bool'
    }
  },
  /**
   * Lookup140: pallet_farming::pallet::Event<T>
   **/
  PalletFarmingEvent: {
    _enum: {
      PoolAdded: '(u32,u32,u32)',
      PoolStatusChanged: '(u32,u32,u32,bool)',
      PoolCoolDownDurationChanged: '(u32,u32,u32,u32)',
      PoolUnlockHeightReset: '(u32,u32,u32,u32)',
      AssetsDeposited: '(AccountId32,u32,u32,u32,u128)',
      AssetsWithdrew: '(AccountId32,u32,u32,u32,u128)',
      AssetsRedeem: '(AccountId32,u32,u32,u32,u128)',
      RewardPaid: '(AccountId32,u32,u32,u32,u128)',
      RewardAdded: '(u32,u32,u32,u128)'
    }
  },
  /**
   * Lookup141: pallet_xcm_helper::pallet::Event<T>
   **/
  PalletXcmHelperEvent: {
    _enum: {
      XcmWeightFeeUpdated: 'PalletTraitsUmpXcmWeightFeeMisc'
    }
  },
  /**
   * Lookup142: pallet_traits::ump::XcmWeightFeeMisc<sp_weights::weight_v2::Weight, Balance>
   **/
  PalletTraitsUmpXcmWeightFeeMisc: {
    weight: 'SpWeightsWeightV2Weight',
    fee: 'u128'
  },
  /**
   * Lookup143: pallet_streaming::pallet::Event<T>
   **/
  PalletStreamingEvent: {
    _enum: {
      StreamCreated: '(u128,AccountId32,AccountId32,u128,u32,u64,u64,bool)',
      StreamWithdrawn: '(u128,AccountId32,u32,u128)',
      StreamCancelled: '(u128,AccountId32,AccountId32,u32,u128,u128)',
      MinimumDepositSet: '(u32,u128)'
    }
  },
  /**
   * Lookup144: pallet_asset_registry::pallet::Event<T>
   **/
  PalletAssetRegistryEvent: {
    _enum: {
      AssetRegistered: {
        assetId: 'u32',
        assetType: 'PalletTraitsXcmAssetType',
      },
      UnitsPerSecondUpdated: {
        assetType: 'PalletTraitsXcmAssetType',
        unitsPerSecond: 'u128',
      },
      AssetTypeUpdated: {
        assetId: 'u32',
        newAssetType: 'PalletTraitsXcmAssetType',
      },
      AssetDeregisteredd: {
        assetId: 'u32',
        assetType: 'PalletTraitsXcmAssetType',
      },
      FeePaymentAssetRemoved: {
        assetType: 'PalletTraitsXcmAssetType'
      }
    }
  },
  /**
   * Lookup145: pallet_traits::xcm::AssetType
   **/
  PalletTraitsXcmAssetType: {
    _enum: {
      Xcm: 'XcmV1MultiLocation'
    }
  },
  /**
   * Lookup146: pallet_evm::pallet::Event<T>
   **/
  PalletEvmEvent: {
    _enum: {
      Log: {
        log: 'EthereumLog',
      },
      Created: {
        address: 'H160',
      },
      CreatedFailed: {
        address: 'H160',
      },
      Executed: {
        address: 'H160',
      },
      ExecutedFailed: {
        address: 'H160'
      }
    }
  },
  /**
   * Lookup147: ethereum::log::Log
   **/
  EthereumLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes'
  },
  /**
   * Lookup150: pallet_ethereum::pallet::Event
   **/
  PalletEthereumEvent: {
    _enum: {
      Executed: {
        from: 'H160',
        to: 'H160',
        transactionHash: 'H256',
        exitReason: 'EvmCoreErrorExitReason'
      }
    }
  },
  /**
   * Lookup151: evm_core::error::ExitReason
   **/
  EvmCoreErrorExitReason: {
    _enum: {
      Succeed: 'EvmCoreErrorExitSucceed',
      Error: 'EvmCoreErrorExitError',
      Revert: 'EvmCoreErrorExitRevert',
      Fatal: 'EvmCoreErrorExitFatal'
    }
  },
  /**
   * Lookup152: evm_core::error::ExitSucceed
   **/
  EvmCoreErrorExitSucceed: {
    _enum: ['Stopped', 'Returned', 'Suicided']
  },
  /**
   * Lookup153: evm_core::error::ExitError
   **/
  EvmCoreErrorExitError: {
    _enum: {
      StackUnderflow: 'Null',
      StackOverflow: 'Null',
      InvalidJump: 'Null',
      InvalidRange: 'Null',
      DesignatedInvalid: 'Null',
      CallTooDeep: 'Null',
      CreateCollision: 'Null',
      CreateContractLimit: 'Null',
      OutOfOffset: 'Null',
      OutOfGas: 'Null',
      OutOfFund: 'Null',
      PCUnderflow: 'Null',
      CreateEmpty: 'Null',
      Other: 'Text',
      __Unused14: 'Null',
      InvalidCode: 'u8'
    }
  },
  /**
   * Lookup157: evm_core::error::ExitRevert
   **/
  EvmCoreErrorExitRevert: {
    _enum: ['Reverted']
  },
  /**
   * Lookup158: evm_core::error::ExitFatal
   **/
  EvmCoreErrorExitFatal: {
    _enum: {
      NotSupported: 'Null',
      UnhandledInterrupt: 'Null',
      CallErrorAsFatal: 'EvmCoreErrorExitError',
      Other: 'Text'
    }
  },
  /**
   * Lookup159: pallet_base_fee::pallet::Event
   **/
  PalletBaseFeeEvent: {
    _enum: {
      NewBaseFeePerGas: {
        fee: 'U256',
      },
      BaseFeeOverflow: 'Null',
      NewElasticity: {
        elasticity: 'Permill'
      }
    }
  },
  /**
   * Lookup162: pallet_evm_signatures::pallet::Event<T>
   **/
  PalletEvmSignaturesEvent: {
    _enum: {
      Executed: '(AccountId32,Result<Null, SpRuntimeDispatchError>)'
    }
  },
  /**
   * Lookup163: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      UpgradeAuthorized: {
        codeHash: 'H256',
      },
      DownwardMessagesReceived: {
        count: 'u32',
      },
      DownwardMessagesProcessed: {
        weightUsed: 'SpWeightsWeightV2Weight',
        dmqHead: 'H256'
      }
    }
  },
  /**
   * Lookup164: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup166: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup167: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup172: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup173: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup174: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup176: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup177: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup178: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup179: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup183: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup184: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup185: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'HeikoRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>'
      }
    }
  },
  /**
   * Lookup188: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup190: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup193: pallet_assets::pallet::Call<T, I>
   **/
  PalletAssetsCall: {
    _enum: {
      create: {
        id: 'Compact<u32>',
        admin: 'MultiAddress',
        minBalance: 'u128',
      },
      force_create: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        isSufficient: 'bool',
        minBalance: 'Compact<u128>',
      },
      destroy: {
        id: 'Compact<u32>',
        witness: 'PalletAssetsDestroyWitness',
      },
      mint: {
        id: 'Compact<u32>',
        beneficiary: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      burn: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer: {
        id: 'Compact<u32>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer_keep_alive: {
        id: 'Compact<u32>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        id: 'Compact<u32>',
        source: 'MultiAddress',
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      freeze: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      thaw: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      freeze_asset: {
        id: 'Compact<u32>',
      },
      thaw_asset: {
        id: 'Compact<u32>',
      },
      transfer_ownership: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
      },
      set_team: {
        id: 'Compact<u32>',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
      },
      set_metadata: {
        id: 'Compact<u32>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      clear_metadata: {
        id: 'Compact<u32>',
      },
      force_set_metadata: {
        id: 'Compact<u32>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      force_clear_metadata: {
        id: 'Compact<u32>',
      },
      force_asset_status: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
        minBalance: 'Compact<u128>',
        isSufficient: 'bool',
        isFrozen: 'bool',
      },
      approve_transfer: {
        id: 'Compact<u32>',
        delegate: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      cancel_approval: {
        id: 'Compact<u32>',
        delegate: 'MultiAddress',
      },
      force_cancel_approval: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        delegate: 'MultiAddress',
      },
      transfer_approved: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        destination: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      touch: {
        id: 'Compact<u32>',
      },
      refund: {
        id: 'Compact<u32>',
        allowBurn: 'bool'
      }
    }
  },
  /**
   * Lookup194: pallet_assets::types::DestroyWitness
   **/
  PalletAssetsDestroyWitness: {
    accounts: 'Compact<u32>',
    sufficients: 'Compact<u32>',
    approvals: 'Compact<u32>'
  },
  /**
   * Lookup195: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<HeikoRuntimeProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'HeikoRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'HeikoRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'HeikoRuntimeProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'HeikoRuntimeProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<HeikoRuntimeProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup197: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup198: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup234: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup235: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup236: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup237: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: 'FrameSupportPreimagesBounded',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_majority: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_default: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      delegate: {
        to: 'MultiAddress',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      unlock: {
        target: 'MultiAddress',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup238: frame_support::traits::preimages::Bounded<heiko_runtime::RuntimeCall>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup240: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup242: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      close_old_weight: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'Compact<u64>',
        lengthBound: 'Compact<u32>',
      },
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup247: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup248: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup250: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup251: cumulus_pallet_xcmp_queue::pallet::Call<T>
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'u64',
      },
      suspend_xcm_execution: 'Null',
      resume_xcm_execution: 'Null',
      update_suspend_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_drop_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_resume_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_threshold_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64',
      },
      update_weight_restrict_decay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64',
      },
      update_xcmp_max_individual_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64'
      }
    }
  },
  /**
   * Lookup252: cumulus_pallet_dmp_queue::pallet::Call<T>
   **/
  CumulusPalletDmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'u64'
      }
    }
  },
  /**
   * Lookup253: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'u64',
      },
      force_xcm_version: {
        location: 'XcmV1MultiLocation',
        xcmVersion: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV2WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV2WeightLimit'
      }
    }
  },
  /**
   * Lookup254: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      V0: 'XcmV0Xcm',
      V1: 'XcmV1Xcm',
      V2: 'XcmV2Xcm'
    }
  },
  /**
   * Lookup255: xcm::v0::Xcm<RuntimeCall>
   **/
  XcmV0Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      ReserveAssetDeposit: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      TeleportAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV0Response',
      },
      TransferAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      RelayedFrom: {
        who: 'XcmV0MultiLocation',
        message: 'XcmV0Xcm'
      }
    }
  },
  /**
   * Lookup257: xcm::v0::order::Order<RuntimeCall>
   **/
  XcmV0Order: {
    _enum: {
      Null: 'Null',
      DepositAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      ExchangeAsset: {
        give: 'Vec<XcmV0MultiAsset>',
        receive: 'Vec<XcmV0MultiAsset>',
      },
      InitiateReserveWithdraw: {
        assets: 'Vec<XcmV0MultiAsset>',
        reserve: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      InitiateTeleport: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV0MultiLocation',
        assets: 'Vec<XcmV0MultiAsset>',
      },
      BuyExecution: {
        fees: 'XcmV0MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        xcm: 'Vec<XcmV0Xcm>'
      }
    }
  },
  /**
   * Lookup259: xcm::v0::Response
   **/
  XcmV0Response: {
    _enum: {
      Assets: 'Vec<XcmV0MultiAsset>'
    }
  },
  /**
   * Lookup260: xcm::v1::Xcm<RuntimeCall>
   **/
  XcmV1Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      ReserveAssetDeposited: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      ReceiveTeleportedAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV1Response',
      },
      TransferAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        beneficiary: 'XcmV1MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      RelayedFrom: {
        who: 'XcmV1MultilocationJunctions',
        message: 'XcmV1Xcm',
      },
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup262: xcm::v1::order::Order<RuntimeCall>
   **/
  XcmV1Order: {
    _enum: {
      Noop: 'Null',
      DepositAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'u32',
        beneficiary: 'XcmV1MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'u32',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      ExchangeAsset: {
        give: 'XcmV1MultiassetMultiAssetFilter',
        receive: 'XcmV1MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        reserve: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      InitiateTeleport: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        assets: 'XcmV1MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV1MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        instructions: 'Vec<XcmV1Xcm>'
      }
    }
  },
  /**
   * Lookup264: xcm::v1::Response
   **/
  XcmV1Response: {
    _enum: {
      Assets: 'XcmV1MultiassetMultiAssets',
      Version: 'u32'
    }
  },
  /**
   * Lookup278: cumulus_pallet_xcm::pallet::Call<T>
   **/
  CumulusPalletXcmCall: 'Null',
  /**
   * Lookup279: pallet_authorship::pallet::Call<T>
   **/
  PalletAuthorshipCall: {
    _enum: {
      set_uncles: {
        newUncles: 'Vec<SpRuntimeHeader>'
      }
    }
  },
  /**
   * Lookup281: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup282: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup283: pallet_collator_selection::pallet::Call<T>
   **/
  PalletCollatorSelectionCall: {
    _enum: {
      set_invulnerables: {
        _alias: {
          new_: 'new',
        },
        new_: 'Vec<AccountId32>',
      },
      set_desired_candidates: {
        max: 'u32',
      },
      set_candidacy_bond: {
        bond: 'u128',
      },
      register_as_candidate: 'Null',
      leave_intent: 'Null'
    }
  },
  /**
   * Lookup284: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'HeikoRuntimeOpaqueSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup285: heiko_runtime::opaque::SessionKeys
   **/
  HeikoRuntimeOpaqueSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public'
  },
  /**
   * Lookup286: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup287: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup288: orml_oracle::module::Call<T, I>
   **/
  OrmlOracleModuleCall: {
    _enum: {
      feed_values: {
        values: 'Vec<(u32,u128)>'
      }
    }
  },
  /**
   * Lookup289: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'u32',
        amount: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiasset: {
        asset: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'u32',
        amount: 'u128',
        fee: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'XcmVersionedMultiAsset',
        fee: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(u32,u128)>',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiassets: {
        assets: 'XcmVersionedMultiAssets',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit'
      }
    }
  },
  /**
   * Lookup290: xcm::VersionedMultiAsset
   **/
  XcmVersionedMultiAsset: {
    _enum: {
      V0: 'XcmV0MultiAsset',
      V1: 'XcmV1MultiAsset'
    }
  },
  /**
   * Lookup293: orml_xcm::module::Call<T>
   **/
  OrmlXcmModuleCall: {
    _enum: {
      send_as_sovereign: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm'
      }
    }
  },
  /**
   * Lookup294: orml_vesting::module::Call<T>
   **/
  OrmlVestingModuleCall: {
    _enum: {
      claim: 'Null',
      vested_transfer: {
        dest: 'MultiAddress',
        schedule: 'OrmlVestingVestingSchedule',
      },
      update_vesting_schedules: {
        who: 'MultiAddress',
        vestingSchedules: 'Vec<OrmlVestingVestingSchedule>',
      },
      claim_for: {
        dest: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup296: pallet_loans::pallet::Call<T>
   **/
  PalletLoansCall: {
    _enum: {
      add_market: {
        assetId: 'u32',
        market: 'PalletLoansMarket',
      },
      activate_market: {
        assetId: 'u32',
      },
      update_rate_model: {
        assetId: 'u32',
        rateModel: 'PalletLoansRateModelInterestRateModel',
      },
      update_market: {
        assetId: 'u32',
        collateralFactor: 'Option<Permill>',
        liquidationThreshold: 'Option<Permill>',
        reserveFactor: 'Option<Permill>',
        closeFactor: 'Option<Permill>',
        liquidateIncentiveReservedFactor: 'Option<Permill>',
        liquidateIncentive: 'Option<u128>',
        supplyCap: 'Option<u128>',
        borrowCap: 'Option<u128>',
      },
      force_update_market: {
        assetId: 'u32',
        market: 'PalletLoansMarket',
      },
      add_reward: {
        amount: 'u128',
      },
      withdraw_missing_reward: {
        targetAccount: 'MultiAddress',
        amount: 'u128',
      },
      update_market_reward_speed: {
        assetId: 'u32',
        supplyRewardPerBlock: 'Option<u128>',
        borrowRewardPerBlock: 'Option<u128>',
      },
      claim_reward: 'Null',
      claim_reward_for_market: {
        assetId: 'u32',
      },
      mint: {
        assetId: 'u32',
        mintAmount: 'Compact<u128>',
      },
      redeem: {
        assetId: 'u32',
        redeemAmount: 'Compact<u128>',
      },
      redeem_all: {
        assetId: 'u32',
      },
      borrow: {
        assetId: 'u32',
        borrowAmount: 'Compact<u128>',
      },
      repay_borrow: {
        assetId: 'u32',
        repayAmount: 'Compact<u128>',
      },
      repay_borrow_all: {
        assetId: 'u32',
      },
      collateral_asset: {
        assetId: 'u32',
        enable: 'bool',
      },
      liquidate_borrow: {
        borrower: 'AccountId32',
        liquidationAssetId: 'u32',
        repayAmount: 'Compact<u128>',
        collateralAssetId: 'u32',
      },
      add_reserves: {
        payer: 'MultiAddress',
        assetId: 'u32',
        addAmount: 'Compact<u128>',
      },
      reduce_reserves: {
        receiver: 'MultiAddress',
        assetId: 'u32',
        reduceAmount: 'Compact<u128>',
      },
      reduce_incentive_reserves: {
        receiver: 'MultiAddress',
        assetId: 'u32',
        redeemAmount: 'Compact<u128>',
      },
      update_liquidation_free_collateral: {
        collaterals: 'Vec<u32>'
      }
    }
  },
  /**
   * Lookup300: pallet_prices::pallet::Call<T>
   **/
  PalletPricesCall: {
    _enum: {
      set_price: {
        assetId: 'u32',
        price: 'u128',
      },
      reset_price: {
        assetId: 'u32',
      },
      set_foreign_asset: {
        foreignAssetId: 'u32',
        assetId: 'u32'
      }
    }
  },
  /**
   * Lookup301: pallet_crowdloans::pallet::Call<T>
   **/
  PalletCrowdloansCall: {
    _enum: {
      create_vault: {
        crowdloan: 'u32',
        ctoken: 'u32',
        leaseStart: 'u32',
        leaseEnd: 'u32',
        contributionStrategy: 'PalletCrowdloansContributionStrategy',
        cap: 'Compact<u128>',
        endBlock: 'u32',
      },
      update_vault: {
        crowdloan: 'u32',
        cap: 'Option<u128>',
        endBlock: 'Option<u32>',
        contributionStrategy: 'Option<PalletCrowdloansContributionStrategy>',
      },
      open: {
        crowdloan: 'u32',
      },
      contribute: {
        crowdloan: 'u32',
        amount: 'Compact<u128>',
        referralCode: 'Bytes',
      },
      set_vrf: {
        flag: 'bool',
      },
      close: {
        crowdloan: 'u32',
      },
      reopen: {
        crowdloan: 'u32',
      },
      auction_succeeded: {
        crowdloan: 'u32',
      },
      auction_failed: {
        crowdloan: 'u32',
      },
      claim: {
        crowdloan: 'u32',
        leaseStart: 'u32',
        leaseEnd: 'u32',
      },
      claim_for: {
        dest: 'MultiAddress',
        crowdloan: 'u32',
        leaseStart: 'u32',
        leaseEnd: 'u32',
      },
      withdraw: {
        crowdloan: 'u32',
        leaseStart: 'u32',
        leaseEnd: 'u32',
      },
      withdraw_for: {
        dest: 'MultiAddress',
        crowdloan: 'u32',
        leaseStart: 'u32',
        leaseEnd: 'u32',
      },
      redeem: {
        crowdloan: 'u32',
        leaseStart: 'u32',
        leaseEnd: 'u32',
        amount: 'Compact<u128>',
      },
      slot_expired: {
        crowdloan: 'u32',
      },
      migrate_pending: {
        crowdloan: 'u32',
      },
      notification_received: {
        queryId: 'u64',
        response: 'XcmV2Response',
      },
      refund: {
        crowdloan: 'u32',
        leaseStart: 'u32',
        leaseEnd: 'u32',
      },
      dissolve_vault: {
        crowdloan: 'u32',
        leaseStart: 'u32',
        leaseEnd: 'u32',
      },
      refund_for: {
        dest: 'MultiAddress',
        crowdloan: 'u32',
        kind: 'PalletCrowdloansChildStorageKind',
        amount: 'Compact<u128>',
        leaseStart: 'u32',
        leaseEnd: 'u32',
      },
      update_proxy: {
        proxyAddress: 'AccountId32',
      },
      update_leases_bonus: {
        leaseStart: 'u32',
        leaseEnd: 'u32',
        bonusConfig: 'PalletCrowdloansBonusConfig'
      }
    }
  },
  /**
   * Lookup303: pallet_liquid_staking::pallet::Call<T>
   **/
  PalletLiquidStakingCall: {
    _enum: {
      stake: {
        amount: 'Compact<u128>',
      },
      unstake: {
        liquidAmount: 'Compact<u128>',
        unstakeProvider: 'PalletLiquidStakingUnstakeProvider',
      },
      update_reserve_factor: {
        reserveFactor: 'Permill',
      },
      update_staking_ledger_cap: {
        cap: 'Compact<u128>',
      },
      bond: {
        derivativeIndex: 'u16',
        amount: 'Compact<u128>',
        payee: 'PalletTraitsUmpRewardDestination',
      },
      bond_extra: {
        derivativeIndex: 'u16',
        amount: 'Compact<u128>',
      },
      unbond: {
        derivativeIndex: 'u16',
        amount: 'Compact<u128>',
      },
      rebond: {
        derivativeIndex: 'u16',
        amount: 'Compact<u128>',
      },
      withdraw_unbonded: {
        derivativeIndex: 'u16',
        numSlashingSpans: 'u32',
      },
      nominate: {
        derivativeIndex: 'u16',
        targets: 'Vec<AccountId32>',
      },
      notification_received: {
        queryId: 'u64',
        response: 'XcmV2Response',
      },
      claim_for: {
        dest: 'MultiAddress',
      },
      force_set_era_start_block: {
        blockNumber: 'u32',
      },
      force_set_current_era: {
        era: 'u32',
      },
      force_advance_era: {
        offset: 'u32',
      },
      force_matching: 'Null',
      force_set_staking_ledger: {
        derivativeIndex: 'u16',
        stakingLedger: 'PalletLiquidStakingStakingLedger',
      },
      set_current_era: {
        era: 'u32',
        proof: 'Vec<Bytes>',
      },
      set_staking_ledger: {
        derivativeIndex: 'u16',
        stakingLedger: 'PalletLiquidStakingStakingLedger',
        proof: 'Vec<Bytes>',
      },
      reduce_reserves: {
        receiver: 'MultiAddress',
        reduceAmount: 'Compact<u128>',
      },
      cancel_unstake: {
        amount: 'Compact<u128>',
      },
      update_commission_rate: {
        commissionRate: 'u128',
      },
      fast_match_unstake: {
        unstakerList: 'Vec<AccountId32>',
      },
      update_incentive: {
        amount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup304: pallet_liquid_staking::types::UnstakeProvider
   **/
  PalletLiquidStakingUnstakeProvider: {
    _enum: ['RelayChain', 'Loans', 'MatchingPool']
  },
  /**
   * Lookup305: pallet_membership::pallet::Call<T, I>
   **/
  PalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'MultiAddress',
      },
      remove_member: {
        who: 'MultiAddress',
      },
      swap_member: {
        remove: 'MultiAddress',
        add: 'MultiAddress',
      },
      reset_members: {
        members: 'Vec<AccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      set_prime: {
        who: 'MultiAddress',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup311: pallet_amm::pallet::Call<T, I>
   **/
  PalletAmmCall: {
    _enum: {
      add_liquidity: {
        pair: '(u32,u32)',
        desiredAmounts: '(u128,u128)',
        minimumAmounts: '(u128,u128)',
      },
      remove_liquidity: {
        pair: '(u32,u32)',
        liquidity: 'Compact<u128>',
      },
      create_pool: {
        pair: '(u32,u32)',
        liquidityAmounts: '(u128,u128)',
        lptokenReceiver: 'AccountId32',
        lpTokenId: 'u32',
      },
      update_protocol_fee: {
        protocolFee: 'Permill',
      },
      update_protocol_fee_receiver: {
        protocolFeeReceiver: 'AccountId32'
      }
    }
  },
  /**
   * Lookup313: pallet_router::pallet::Call<T, I>
   **/
  PalletRouterCall: {
    _enum: {
      swap_exact_tokens_for_tokens: {
        route: 'Vec<u32>',
        amountIn: 'Compact<u128>',
        minAmountOut: 'Compact<u128>',
      },
      swap_tokens_for_exact_tokens: {
        route: 'Vec<u32>',
        amountOut: 'Compact<u128>',
        maxAmountIn: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup314: pallet_currency_adapter::pallet::Call<T>
   **/
  PalletCurrencyAdapterCall: {
    _enum: {
      force_set_lock: {
        asset: 'u32',
        who: 'AccountId32',
        amount: 'Compact<u128>',
      },
      force_remove_lock: {
        asset: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup315: pallet_bridge::pallet::Call<T>
   **/
  PalletBridgeCall: {
    _enum: {
      register_chain: {
        chainId: 'u32',
      },
      unregister_chain: {
        chainId: 'u32',
      },
      register_bridge_token: {
        assetId: 'u32',
        bridgeToken: 'PalletBridgeBridgeToken',
      },
      unregister_bridge_token: {
        bridgeTokenId: 'u32',
      },
      set_bridge_token_fee: {
        bridgeTokenId: 'u32',
        newFee: 'u128',
      },
      set_bridge_token_status: {
        bridgeTokenId: 'u32',
        enable: 'bool',
      },
      set_bridge_token_cap: {
        bridgeTokenId: 'u32',
        bridgeType: 'PalletBridgeBridgeType',
        newCap: 'u128',
      },
      clean_cap_accumulated_value: {
        bridgeTokenId: 'u32',
        bridgeType: 'PalletBridgeBridgeType',
      },
      teleport: {
        destId: 'u32',
        bridgeTokenId: 'u32',
        to: 'Bytes',
        amount: 'u128',
      },
      materialize: {
        srcId: 'u32',
        srcNonce: 'u64',
        bridgeTokenId: 'u32',
        to: 'AccountId32',
        amount: 'u128',
        favour: 'bool'
      }
    }
  },
  /**
   * Lookup316: pallet_bridge::types::BridgeToken
   **/
  PalletBridgeBridgeToken: {
    id: 'u32',
    external: 'bool',
    fee: 'u128',
    enable: 'bool',
    outCap: 'u128',
    outAmount: 'u128',
    inCap: 'u128',
    inAmount: 'u128'
  },
  /**
   * Lookup317: pallet_emergency_shutdown::pallet::Call<T>
   **/
  PalletEmergencyShutdownCall: {
    _enum: {
      toggle_pallet: {
        palletIdx: 'u8',
      },
      toggle_call: {
        palletIdx: 'u8',
        callIdx: 'u8'
      }
    }
  },
  /**
   * Lookup318: pallet_farming::pallet::Call<T>
   **/
  PalletFarmingCall: {
    _enum: {
      create: {
        asset: 'u32',
        rewardAsset: 'u32',
        lockDuration: 'u32',
        coolDownDuration: 'u32',
      },
      set_pool_status: {
        asset: 'u32',
        rewardAsset: 'u32',
        lockDuration: 'u32',
        isActive: 'bool',
      },
      set_pool_cool_down_duration: {
        asset: 'u32',
        rewardAsset: 'u32',
        lockDuration: 'u32',
        coolDownDuration: 'u32',
      },
      reset_pool_unlock_height: {
        asset: 'u32',
        rewardAsset: 'u32',
        lockDuration: 'u32',
      },
      deposit: {
        asset: 'u32',
        rewardAsset: 'u32',
        lockDuration: 'u32',
        amount: 'u128',
      },
      withdraw: {
        asset: 'u32',
        rewardAsset: 'u32',
        lockDuration: 'u32',
        amount: 'u128',
      },
      redeem: {
        asset: 'u32',
        rewardAsset: 'u32',
        lockDuration: 'u32',
      },
      claim: {
        asset: 'u32',
        rewardAsset: 'u32',
        lockDuration: 'u32',
      },
      dispatch_reward: {
        asset: 'u32',
        rewardAsset: 'u32',
        lockDuration: 'u32',
        payer: 'MultiAddress',
        amount: 'u128',
        rewardDuration: 'u32'
      }
    }
  },
  /**
   * Lookup319: pallet_xcm_helper::pallet::Call<T>
   **/
  PalletXcmHelperCall: {
    _enum: {
      update_xcm_weight_fee: {
        xcmCall: 'PalletTraitsUmpXcmCall',
        xcmWeightFeeMisc: 'PalletTraitsUmpXcmWeightFeeMisc'
      }
    }
  },
  /**
   * Lookup320: pallet_traits::ump::XcmCall
   **/
  PalletTraitsUmpXcmCall: {
    _enum: {
      Bond: 'Null',
      BondExtra: 'Null',
      Unbond: 'Null',
      Rebond: 'Null',
      WithdrawUnbonded: 'Null',
      Nominate: 'Null',
      Contribute: 'Null',
      Withdraw: 'Null',
      AddMemo: 'Null',
      TransferToSiblingchain: 'XcmV1MultiLocation',
      Proxy: 'Null',
      AddProxy: 'Null',
      RemoveProxy: 'Null'
    }
  },
  /**
   * Lookup321: pallet_streaming::pallet::Call<T>
   **/
  PalletStreamingCall: {
    _enum: {
      create: {
        recipient: 'AccountId32',
        deposit: 'u128',
        assetId: 'u32',
        startTime: 'u64',
        endTime: 'u64',
        cancellable: 'bool',
      },
      cancel: {
        streamId: 'u128',
      },
      withdraw: {
        streamId: 'u128',
        amount: 'u128',
      },
      set_minimum_deposit: {
        assetId: 'u32',
        minimumDeposit: 'u128'
      }
    }
  },
  /**
   * Lookup322: pallet_asset_registry::pallet::Call<T>
   **/
  PalletAssetRegistryCall: {
    _enum: {
      register_asset: {
        assetId: 'u32',
        assetType: 'PalletTraitsXcmAssetType',
      },
      update_asset_units_per_second: {
        assetType: 'PalletTraitsXcmAssetType',
        unitsPerSecond: 'u128',
      },
      update_asset_type: {
        assetId: 'u32',
        newAssetType: 'PalletTraitsXcmAssetType',
      },
      remove_fee_payment_asset: {
        assetType: 'PalletTraitsXcmAssetType',
      },
      deregister_asset: {
        assetId: 'u32'
      }
    }
  },
  /**
   * Lookup323: pallet_evm::pallet::Call<T>
   **/
  PalletEvmCall: {
    _enum: {
      withdraw: {
        address: 'H160',
        value: 'u128',
      },
      call: {
        source: 'H160',
        target: 'H160',
        input: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create: {
        source: 'H160',
        init: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create2: {
        source: 'H160',
        init: 'Bytes',
        salt: 'H256',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>'
      }
    }
  },
  /**
   * Lookup327: pallet_ethereum::pallet::Call<T>
   **/
  PalletEthereumCall: {
    _enum: {
      transact: {
        transaction: 'EthereumTransactionTransactionV2'
      }
    }
  },
  /**
   * Lookup328: ethereum::transaction::TransactionV2
   **/
  EthereumTransactionTransactionV2: {
    _enum: {
      Legacy: 'EthereumTransactionLegacyTransaction',
      EIP2930: 'EthereumTransactionEip2930Transaction',
      EIP1559: 'EthereumTransactionEip1559Transaction'
    }
  },
  /**
   * Lookup329: ethereum::transaction::LegacyTransaction
   **/
  EthereumTransactionLegacyTransaction: {
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    signature: 'EthereumTransactionTransactionSignature'
  },
  /**
   * Lookup330: ethereum::transaction::TransactionAction
   **/
  EthereumTransactionTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  /**
   * Lookup331: ethereum::transaction::TransactionSignature
   **/
  EthereumTransactionTransactionSignature: {
    v: 'u64',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup333: ethereum::transaction::EIP2930Transaction
   **/
  EthereumTransactionEip2930Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup335: ethereum::transaction::AccessListItem
   **/
  EthereumTransactionAccessListItem: {
    address: 'H160',
    storageKeys: 'Vec<H256>'
  },
  /**
   * Lookup336: ethereum::transaction::EIP1559Transaction
   **/
  EthereumTransactionEip1559Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    maxPriorityFeePerGas: 'U256',
    maxFeePerGas: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup337: pallet_base_fee::pallet::Call<T>
   **/
  PalletBaseFeeCall: {
    _enum: {
      set_base_fee_per_gas: {
        fee: 'U256',
      },
      set_elasticity: {
        elasticity: 'Permill'
      }
    }
  },
  /**
   * Lookup338: pallet_evm_signatures::pallet::Call<T>
   **/
  PalletEvmSignaturesCall: {
    _enum: {
      call: {
        call: 'Call',
        signer: 'AccountId32',
        signature: 'Bytes',
        nonce: 'Compact<u32>',
      },
      withdraw: {
        asset: 'u32',
        address: 'H160',
        value: 'u128'
      }
    }
  },
  /**
   * Lookup339: cumulus_pallet_parachain_system::pallet::Call<T>
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPrimitivesParachainInherentParachainInherentData',
      },
      sudo_send_upward_message: {
        message: 'Bytes',
      },
      authorize_upgrade: {
        codeHash: 'H256',
      },
      enact_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup340: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV2PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
   * Lookup341: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV2PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup343: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup346: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup349: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup352: heiko_runtime::OriginCaller
   **/
  HeikoRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      Void: 'SpCoreVoid',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      GeneralCouncil: 'PalletCollectiveRawOrigin',
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      PolkadotXcm: 'PalletXcmOrigin',
      CumulusXcm: 'CumulusPalletXcmOrigin',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      __Unused99: 'Null',
      __Unused100: 'Null',
      __Unused101: 'Null',
      __Unused102: 'Null',
      __Unused103: 'Null',
      __Unused104: 'Null',
      __Unused105: 'Null',
      __Unused106: 'Null',
      __Unused107: 'Null',
      __Unused108: 'Null',
      __Unused109: 'Null',
      __Unused110: 'Null',
      Ethereum: 'PalletEthereumRawOrigin'
    }
  },
  /**
   * Lookup353: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup354: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup356: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV1MultiLocation',
      Response: 'XcmV1MultiLocation'
    }
  },
  /**
   * Lookup357: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup358: pallet_ethereum::RawOrigin
   **/
  PalletEthereumRawOrigin: {
    _enum: {
      EthereumTransaction: 'H160'
    }
  },
  /**
   * Lookup359: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup360: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup362: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup363: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup365: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup366: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup369: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup371: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup372: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup373: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup374: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletAssetsAssetDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    freezer: 'AccountId32',
    supply: 'u128',
    deposit: 'u128',
    minBalance: 'u128',
    isSufficient: 'bool',
    accounts: 'u32',
    sufficients: 'u32',
    approvals: 'u32',
    isFrozen: 'bool'
  },
  /**
   * Lookup376: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra>
   **/
  PalletAssetsAssetAccount: {
    balance: 'u128',
    isFrozen: 'bool',
    reason: 'PalletAssetsExistenceReason',
    extra: 'Null'
  },
  /**
   * Lookup377: pallet_assets::types::ExistenceReason<Balance>
   **/
  PalletAssetsExistenceReason: {
    _enum: {
      Consumer: 'Null',
      Sufficient: 'Null',
      DepositHeld: 'u128',
      DepositRefunded: 'Null'
    }
  },
  /**
   * Lookup379: pallet_assets::types::Approval<Balance, DepositBalance>
   **/
  PalletAssetsApproval: {
    amount: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup380: pallet_assets::types::AssetMetadata<DepositBalance, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetsAssetMetadata: {
    deposit: 'u128',
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    isFrozen: 'bool'
  },
  /**
   * Lookup382: pallet_assets::pallet::Error<T, I>
   **/
  PalletAssetsError: {
    _enum: ['BalanceLow', 'NoAccount', 'NoPermission', 'Unknown', 'Frozen', 'InUse', 'BadWitness', 'MinBalanceZero', 'NoProvider', 'BadMetadata', 'Unapproved', 'WouldDie', 'AlreadyExists', 'NoDeposit', 'WouldBurn']
  },
  /**
   * Lookup385: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, heiko_runtime::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'HeikoRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup389: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup391: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup392: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup400: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup402: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity']
  },
  /**
   * Lookup408: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<heiko_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup409: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<heiko_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup410: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup411: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup415: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup416: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup419: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow']
  },
  /**
   * Lookup421: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup422: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup425: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup427: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup428: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup431: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<heiko_runtime::RuntimeCall>, BlockNumber, heiko_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'HeikoRuntimeOriginCaller'
  },
  /**
   * Lookup433: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup434: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup439: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup441: cumulus_pallet_xcmp_queue::InboundChannelDetails
   **/
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: 'u32',
    state: 'CumulusPalletXcmpQueueInboundState',
    messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>'
  },
  /**
   * Lookup442: cumulus_pallet_xcmp_queue::InboundState
   **/
  CumulusPalletXcmpQueueInboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup445: polkadot_parachain::primitives::XcmpMessageFormat
   **/
  PolkadotParachainPrimitivesXcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  /**
   * Lookup448: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup449: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup451: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32',
    thresholdWeight: 'SpWeightsWeightV2Weight',
    weightRestrictDecay: 'SpWeightsWeightV2Weight',
    xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup453: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
  },
  /**
   * Lookup454: cumulus_pallet_dmp_queue::ConfigData
   **/
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup455: cumulus_pallet_dmp_queue::PageIndexData
   **/
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: 'u32',
    endUsed: 'u32',
    overweightCount: 'u64'
  },
  /**
   * Lookup458: cumulus_pallet_dmp_queue::pallet::Error<T>
   **/
  CumulusPalletDmpQueueError: {
    _enum: ['Unknown', 'OverLimit']
  },
  /**
   * Lookup459: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedMultiLocation',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'XcmVersionedMultiLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup462: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      V0: 'XcmV0Response',
      V1: 'XcmV1Response',
      V2: 'XcmV2Response'
    }
  },
  /**
   * Lookup468: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup470: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed']
  },
  /**
   * Lookup471: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup473: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
   **/
  PalletAuthorshipUncleEntryItem: {
    _enum: {
      InclusionHeight: 'u32',
      Uncle: '(H256,Option<AccountId32>)'
    }
  },
  /**
   * Lookup475: pallet_authorship::pallet::Error<T>
   **/
  PalletAuthorshipError: {
    _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
  },
  /**
   * Lookup478: pallet_collator_selection::pallet::CandidateInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PalletCollatorSelectionCandidateInfo: {
    who: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup480: pallet_collator_selection::pallet::Error<T>
   **/
  PalletCollatorSelectionError: {
    _enum: ['TooManyCandidates', 'TooFewCandidates', 'Unknown', 'Permission', 'AlreadyCandidate', 'NotCandidate', 'TooManyInvulnerables', 'AlreadyInvulnerable', 'NoAssociatedValidatorId', 'ValidatorNotRegistered']
  },
  /**
   * Lookup484: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup485: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup490: orml_oracle::module::TimestampedValue<sp_arithmetic::fixed_point::FixedU128, Moment>
   **/
  OrmlOracleModuleTimestampedValue: {
    value: 'u128',
    timestamp: 'u64'
  },
  /**
   * Lookup491: orml_utilities::ordered_set::OrderedSet<sp_core::crypto::AccountId32, S>
   **/
  OrmlUtilitiesOrderedSet: 'Vec<AccountId32>',
  /**
   * Lookup493: orml_oracle::module::Error<T, I>
   **/
  OrmlOracleModuleError: {
    _enum: ['NoPermission', 'AlreadyFeeded']
  },
  /**
   * Lookup494: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
  },
  /**
   * Lookup495: orml_xcm::module::Error<T>
   **/
  OrmlXcmModuleError: {
    _enum: ['Unreachable', 'SendFailure', 'BadVersion']
  },
  /**
   * Lookup497: orml_vesting::module::Error<T>
   **/
  OrmlVestingModuleError: {
    _enum: ['ZeroVestingPeriod', 'ZeroVestingPeriodCount', 'InsufficientBalanceToLock', 'TooManyVestingSchedules', 'AmountLow', 'MaxVestingSchedulesExceeded']
  },
  /**
   * Lookup498: pallet_loans::types::BorrowSnapshot<Balance>
   **/
  PalletLoansBorrowSnapshot: {
    principal: 'u128',
    borrowIndex: 'u128'
  },
  /**
   * Lookup499: pallet_loans::types::Deposits<Balance>
   **/
  PalletLoansDeposits: {
    voucherBalance: 'u128',
    isCollateral: 'bool'
  },
  /**
   * Lookup500: pallet_loans::types::EarnedSnapshot<Balance>
   **/
  PalletLoansEarnedSnapshot: {
    totalEarnedPrior: 'u128',
    exchangeRatePrior: 'u128'
  },
  /**
   * Lookup501: pallet_loans::types::RewardMarketState<BlockNumber, Balance>
   **/
  PalletLoansRewardMarketState: {
    index: 'u128',
    block: 'u32'
  },
  /**
   * Lookup502: pallet_loans::Versions
   **/
  PalletLoansVersions: {
    _enum: ['V1', 'V2', 'V3', 'V4', 'V5', 'V6']
  },
  /**
   * Lookup503: pallet_loans::pallet::Error<T>
   **/
  PalletLoansError: {
    _enum: ['InsufficientLiquidity', 'InsufficientDeposit', 'TooMuchRepay', 'DuplicateOperation', 'NoDeposit', 'InsufficientCollateral', 'LiquidatorIsBorrower', 'DepositsAreNotCollateral', 'InsufficientShortfall', 'InsufficientReserves', 'InvalidRateModelParam', 'MarketNotActivated', 'PriceOracleNotReady', 'PriceIsZero', 'InvalidCurrencyId', 'InvalidPtokenId', 'MarketDoesNotExist', 'MarketAlreadyExists', 'NewMarketMustHavePendingState', 'SupplyCapacityExceeded', 'BorrowCapacityExceeded', 'InsufficientCash', 'InvalidFactor', 'InvalidSupplyCap', 'InvalidExchangeRate', 'InvalidAmount', 'PayerIsSigner', 'CodecError', 'CollateralReserved']
  },
  /**
   * Lookup505: pallet_crowdloans::types::Vault<T>
   **/
  PalletCrowdloansVault: {
    ctoken: 'u32',
    phase: 'PalletCrowdloansVaultPhase',
    contributed: 'u128',
    pending: 'u128',
    flying: 'u128',
    contributionStrategy: 'PalletCrowdloansContributionStrategy',
    cap: 'u128',
    endBlock: 'u32',
    trieIndex: 'u32',
    leaseStart: 'u32',
    leaseEnd: 'u32'
  },
  /**
   * Lookup506: pallet_crowdloans::types::XcmRequest<T>
   **/
  PalletCrowdloansXcmRequest: {
    _enum: {
      Contribute: {
        crowdloan: 'u32',
        vaultId: '(u32,u32)',
        who: 'AccountId32',
        amount: 'u128',
        referralCode: 'Bytes',
      },
      Withdraw: {
        crowdloan: 'u32',
        vaultId: '(u32,u32)',
        amount: 'u128',
        targetPhase: 'PalletCrowdloansVaultPhase'
      }
    }
  },
  /**
   * Lookup507: pallet_crowdloans::types::Releases
   **/
  PalletCrowdloansReleases: {
    _enum: ['V0_0_0', 'V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup508: pallet_crowdloans::pallet::Error<T>
   **/
  PalletCrowdloansError: {
    _enum: ['IncorrectVaultPhase', 'CrowdloanAlreadyExists', 'InsufficientContribution', 'NoContributions', 'InsufficientBalance', 'LastPeriodBeforeFirstPeriod', 'CTokenDoesNotExist', 'VaultAlreadyExists', 'VaultDoesNotExist', 'InvalidCToken', 'VaultNotEnded', 'VrfDelayInProgress', 'CapExceeded', 'EndBlockExceeded', 'InvalidCap', 'InvalidParams', 'NotReadyToDissolve', 'EmptyProxyAddress', 'WrongBonusConfig']
  },
  /**
   * Lookup509: pallet_liquid_staking::types::MatchingLedger<Balance>
   **/
  PalletLiquidStakingMatchingLedger: {
    totalStakeAmount: 'PalletLiquidStakingReservableAmount',
    totalUnstakeAmount: 'PalletLiquidStakingReservableAmount'
  },
  /**
   * Lookup510: pallet_liquid_staking::types::ReservableAmount<Balance>
   **/
  PalletLiquidStakingReservableAmount: {
    total: 'u128',
    reserved: 'u128'
  },
  /**
   * Lookup511: pallet_liquid_staking::types::XcmRequest<T>
   **/
  PalletLiquidStakingXcmRequest: {
    _enum: {
      Bond: {
        index: 'u16',
        amount: 'u128',
      },
      BondExtra: {
        index: 'u16',
        amount: 'u128',
      },
      Unbond: {
        index: 'u16',
        amount: 'u128',
      },
      Rebond: {
        index: 'u16',
        amount: 'u128',
      },
      WithdrawUnbonded: {
        index: 'u16',
        numSlashingSpans: 'u32',
      },
      Nominate: {
        index: 'u16',
        targets: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup512: pallet_liquid_staking::pallet::Versions
   **/
  PalletLiquidStakingVersions: {
    _enum: ['V1', 'V2', 'V3']
  },
  /**
   * Lookup514: pallet_liquid_staking::pallet::Error<T>
   **/
  PalletLiquidStakingError: {
    _enum: ['InvalidExchangeRate', 'StakeTooSmall', 'UnstakeTooSmall', 'InvalidLiquidCurrency', 'InvalidStakingCurrency', 'InvalidDerivativeIndex', 'InvalidStakingLedger', 'CapExceeded', 'InvalidCap', 'InvalidFactor', 'NothingToClaim', 'NotBonded', 'AlreadyBonded', 'NoMoreChunks', 'StakingLedgerLocked', 'NotWithdrawn', 'InsufficientBond', 'InvalidProof', 'NoUnlockings', 'InvalidCommissionRate']
  },
  /**
   * Lookup516: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
  },
  /**
   * Lookup527: pallet_traits::Pool<CurrencyId, Balance, BlockNumber>
   **/
  PalletTraitsPool: {
    baseAmount: 'u128',
    quoteAmount: 'u128',
    baseAmountLast: 'u128',
    quoteAmountLast: 'u128',
    lpTokenId: 'u32',
    blockTimestampLast: 'u32',
    price0CumulativeLast: 'u128',
    price1CumulativeLast: 'u128'
  },
  /**
   * Lookup528: pallet_amm::pallet::Error<T, I>
   **/
  PalletAmmError: {
    _enum: ['PoolDoesNotExist', 'InsufficientLiquidity', 'NotAnIdealPrice', 'PoolAlreadyExists', 'InsufficientAmountOut', 'InsufficientAmountIn', 'InsufficientSupplyOut', 'IdenticalAssets', 'LpTokenAlreadyExists', 'ConversionToU128Failed', 'ProtocolFeeReceiverNotSet']
  },
  /**
   * Lookup529: pallet_router::pallet::Error<T, I>
   **/
  PalletRouterError: {
    _enum: ['ZeroBalance', 'EmptyRoute', 'InsufficientBalance', 'ExceedMaxLengthRoute', 'DuplicatedRoute', 'MaximumAmountInViolated', 'MinimumAmountOutViolated', 'TokenDoesNotExists', 'NoPossibleRoute']
  },
  /**
   * Lookup530: pallet_currency_adapter::pallet::Error<T>
   **/
  PalletCurrencyAdapterError: {
    _enum: ['NotANativeToken']
  },
  /**
   * Lookup535: pallet_bridge::types::MaterializeCall<T, sp_core::crypto::AccountId32, R>
   **/
  PalletBridgeMaterializeCall: {
    bridgeTokenId: 'u32',
    to: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup536: pallet_bridge::types::Proposal<sp_core::crypto::AccountId32, E>
   **/
  PalletBridgeProposal: {
    votesFor: 'Vec<AccountId32>',
    votesAgainst: 'Vec<AccountId32>',
    status: 'PalletBridgeProposalStatus',
    expiry: 'u32'
  },
  /**
   * Lookup537: pallet_bridge::types::ProposalStatus
   **/
  PalletBridgeProposalStatus: {
    _enum: ['Initiated', 'Approved', 'Rejected']
  },
  /**
   * Lookup538: pallet_bridge::pallet::Error<T>
   **/
  PalletBridgeError: {
    _enum: ['InvalidVoteThreshold', 'OriginNoPermission', 'ChainIdAlreadyRegistered', 'ChainIdNotRegistered', 'BridgeTokenAlreadyRegistered', 'BridgeTokenNotRegistered', 'BridgeTokenDisabled', 'MemberAlreadyVoted', 'BridgingAmountTooLow', 'BridgeOutCapExceeded', 'BridgeInCapExceeded', 'ProposalDoesNotExist', 'ProposalAlreadyComplete', 'ProposalExpired']
  },
  /**
   * Lookup540: pallet_farming::types::PoolInfo<BlockNumber, BalanceOf>
   **/
  PalletFarmingPoolInfo: {
    isActive: 'bool',
    totalDeposited: 'u128',
    unlockHeight: 'u32',
    coolDownDuration: 'u32',
    rewardDuration: 'u32',
    periodFinish: 'u32',
    lastUpdateBlock: 'u32',
    rewardRate: 'u128',
    rewardPerShareStored: 'u128'
  },
  /**
   * Lookup542: pallet_farming::types::UserPosition<BalanceOf, sp_core::bounded::bounded_vec::BoundedVec<T, S>>
   **/
  PalletFarmingUserPosition: {
    depositBalance: 'u128',
    lockBalanceItems: 'Vec<(u128,u32)>',
    rewardAmount: 'u128',
    rewardPerSharePaid: 'u128'
  },
  /**
   * Lookup546: pallet_farming::pallet::Error<T>
   **/
  PalletFarmingError: {
    _enum: ['PoolDoesNotExist', 'PoolAlreadyExists', 'PoolIsNotActive', 'PoolInStatus', 'NotAValidDuration', 'PoolIsInTargetCoolDownDuration', 'NotAValidAmount', 'PoolUnderLock', 'DepositBalanceLow', 'CodecError', 'ExcessMaxLockDuration', 'ExcessMaxCoolDownDuration', 'ExcessMaxUserLockItemsCount', 'RewardNotFinish']
  },
  /**
   * Lookup547: pallet_xcm_helper::pallet::Error<T>
   **/
  PalletXcmHelperError: {
    _enum: ['MultiLocationNotInvertible', 'ZeroXcmWeightMisc', 'ZeroXcmFees', 'InsufficientXcmFees', 'SendFailure', 'ConvertAccountError']
  },
  /**
   * Lookup548: pallet_streaming::types::Stream<T>
   **/
  PalletStreamingStream: {
    remainingBalance: 'u128',
    deposit: 'u128',
    assetId: 'u32',
    ratePerSec: 'u128',
    sender: 'AccountId32',
    recipient: 'AccountId32',
    startTime: 'u64',
    endTime: 'u64',
    status: 'PalletStreamingStreamStatus',
    cancellable: 'bool'
  },
  /**
   * Lookup549: pallet_streaming::types::StreamStatus
   **/
  PalletStreamingStreamStatus: {
    _enum: {
      Ongoing: {
        asCollateral: 'bool',
      },
      Completed: {
        cancelled: 'bool'
      }
    }
  },
  /**
   * Lookup551: pallet_streaming::types::StreamKind
   **/
  PalletStreamingStreamKind: {
    _enum: ['Send', 'Receive', 'Finish']
  },
  /**
   * Lookup554: pallet_streaming::pallet::Error<T>
   **/
  PalletStreamingError: {
    _enum: ['RecipientIsAlsoSender', 'InvalidAssetId', 'DepositLowerThanMinimum', 'StartTimeBeforeCurrentTime', 'EndTimeBeforeStartTime', 'InvalidDuration', 'InvalidRatePerSecond', 'InvalidStreamId', 'NotTheSender', 'NotTheRecipient', 'CannotBeCancelled', 'InsufficientStreamBalance', 'ExcessMaxStreamsCount', 'NotStarted', 'HasFinished']
  },
  /**
   * Lookup556: pallet_asset_registry::pallet::Error<T>
   **/
  PalletAssetRegistryError: {
    _enum: ['AssetAlreadyExists', 'AssetDoesNotExist']
  },
  /**
   * Lookup558: pallet_evm::pallet::Error<T>
   **/
  PalletEvmError: {
    _enum: ['BalanceLow', 'FeeOverflow', 'PaymentOverflow', 'WithdrawFailed', 'GasPriceTooLow', 'InvalidNonce', 'GasLimitTooLow', 'GasLimitTooHigh', 'Undefined', 'Reentrancy']
  },
  /**
   * Lookup561: fp_rpc::TransactionStatus
   **/
  FpRpcTransactionStatus: {
    transactionHash: 'H256',
    transactionIndex: 'u32',
    from: 'H160',
    to: 'Option<H160>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthereumLog>',
    logsBloom: 'EthbloomBloom'
  },
  /**
   * Lookup564: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup566: ethereum::receipt::ReceiptV3
   **/
  EthereumReceiptReceiptV3: {
    _enum: {
      Legacy: 'EthereumReceiptEip658ReceiptData',
      EIP2930: 'EthereumReceiptEip658ReceiptData',
      EIP1559: 'EthereumReceiptEip658ReceiptData'
    }
  },
  /**
   * Lookup567: ethereum::receipt::EIP658ReceiptData
   **/
  EthereumReceiptEip658ReceiptData: {
    statusCode: 'u8',
    usedGas: 'U256',
    logsBloom: 'EthbloomBloom',
    logs: 'Vec<EthereumLog>'
  },
  /**
   * Lookup568: ethereum::block::Block<ethereum::transaction::TransactionV2>
   **/
  EthereumBlock: {
    header: 'EthereumHeader',
    transactions: 'Vec<EthereumTransactionTransactionV2>',
    ommers: 'Vec<EthereumHeader>'
  },
  /**
   * Lookup569: ethereum::header::Header
   **/
  EthereumHeader: {
    parentHash: 'H256',
    ommersHash: 'H256',
    beneficiary: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    logsBloom: 'EthbloomBloom',
    difficulty: 'U256',
    number: 'U256',
    gasLimit: 'U256',
    gasUsed: 'U256',
    timestamp: 'u64',
    extraData: 'Bytes',
    mixHash: 'H256',
    nonce: 'EthereumTypesHashH64'
  },
  /**
   * Lookup570: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup575: pallet_ethereum::pallet::Error<T>
   **/
  PalletEthereumError: {
    _enum: ['InvalidSignature', 'PreLogExists']
  },
  /**
   * Lookup576: pallet_evm_signatures::pallet::Error<T>
   **/
  PalletEvmSignaturesError: {
    _enum: ['DecodeFailure', 'InvalidSignature', 'BadNonce']
  },
  /**
   * Lookup578: polkadot_primitives::v2::UpgradeRestriction
   **/
  PolkadotPrimitivesV2UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup579: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueSize: '(u32,u32)',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>'
  },
  /**
   * Lookup582: polkadot_primitives::v2::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV2AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup583: polkadot_primitives::v2::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV2AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32'
  },
  /**
   * Lookup589: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup590: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup592: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup593: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup595: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup596: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup599: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup600: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup601: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup602: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup605: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup606: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup607: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup609: heiko_runtime::Runtime
   **/
  HeikoRuntimeRuntime: 'Null'
};
