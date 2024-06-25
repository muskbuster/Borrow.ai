const ethers = require("ethers");

// ABI
const AAVE_DATAPROV_ABI_AVAX = [
    {
      "inputs": [
        {
          "internalType": "contract IPoolAddressesProvider",
          "name": "addressesProvider",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ADDRESSES_PROVIDER",
      "outputs": [
        {
          "internalType": "contract IPoolAddressesProvider",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getATokenTotalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllATokens",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "internalType": "struct IPoolDataProvider.TokenData[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllReservesTokens",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            }
          ],
          "internalType": "struct IPoolDataProvider.TokenData[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getDebtCeiling",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDebtCeilingDecimals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getFlashLoanEnabled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getInterestRateStrategyAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "irStrategyAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getLiquidationProtocolFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getPaused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isPaused",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getReserveCaps",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "borrowCap",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "supplyCap",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getReserveConfigurationData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "decimals",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "ltv",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidationThreshold",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidationBonus",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reserveFactor",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "usageAsCollateralEnabled",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "borrowingEnabled",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "stableBorrowRateEnabled",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isActive",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "isFrozen",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getReserveData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "unbacked",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "accruedToTreasuryScaled",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalAToken",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalStableDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalVariableDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidityRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "variableBorrowRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stableBorrowRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "averageStableBorrowRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidityIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "variableBorrowIndex",
          "type": "uint256"
        },
        {
          "internalType": "uint40",
          "name": "lastUpdateTimestamp",
          "type": "uint40"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getReserveEModeCategory",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getReserveTokensAddresses",
      "outputs": [
        {
          "internalType": "address",
          "name": "aTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "stableDebtTokenAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "variableDebtTokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getSiloedBorrowing",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getTotalDebt",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "getUnbackedMintCap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserReserveData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "currentATokenBalance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "currentStableDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "currentVariableDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "principalStableDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "scaledVariableDebt",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stableBorrowRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidityRate",
          "type": "uint256"
        },
        {
          "internalType": "uint40",
          "name": "stableRateLastUpdated",
          "type": "uint40"
        },
        {
          "internalType": "bool",
          "name": "usageAsCollateralEnabled",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
const AAVE_POOL_ABI_AVAX = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "admin",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "implementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_logic",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "upgradeTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newImplementation",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "upgradeToAndCall",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ];
const AAVE_UI_POOL_AVAX=[
    {
      "inputs": [
        {
          "internalType": "contract IEACAggregatorProxy",
          "name": "_networkBaseTokenPriceInUsdProxyAggregator",
          "type": "address"
        },
        {
          "internalType": "contract IEACAggregatorProxy",
          "name": "_marketReferenceCurrencyPriceInUsdProxyAggregator",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ETH_CURRENCY_UNIT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MKR_ADDRESS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_bytes32",
          "type": "bytes32"
        }
      ],
      "name": "bytes32ToString",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IPoolAddressesProvider",
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "getReservesData",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "underlyingAsset",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "symbol",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "decimals",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "baseLTVasCollateral",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveLiquidationThreshold",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveLiquidationBonus",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "reserveFactor",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "usageAsCollateralEnabled",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "borrowingEnabled",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "stableBorrowRateEnabled",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isActive",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isFrozen",
              "type": "bool"
            },
            {
              "internalType": "uint128",
              "name": "liquidityIndex",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "variableBorrowIndex",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "liquidityRate",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "variableBorrowRate",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "stableBorrowRate",
              "type": "uint128"
            },
            {
              "internalType": "uint40",
              "name": "lastUpdateTimestamp",
              "type": "uint40"
            },
            {
              "internalType": "address",
              "name": "aTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "stableDebtTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "variableDebtTokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "interestRateStrategyAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "availableLiquidity",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalPrincipalStableDebt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "averageStableRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stableDebtLastUpdateTimestamp",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalScaledVariableDebt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "priceInMarketReferenceCurrency",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "priceOracle",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "variableRateSlope1",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "variableRateSlope2",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stableRateSlope1",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stableRateSlope2",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "baseStableBorrowRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "baseVariableBorrowRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "optimalUsageRatio",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isSiloedBorrowing",
              "type": "bool"
            },
            {
              "internalType": "uint128",
              "name": "accruedToTreasury",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "unbacked",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "isolationModeTotalDebt",
              "type": "uint128"
            },
            {
              "internalType": "bool",
              "name": "flashLoanEnabled",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "debtCeiling",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "debtCeilingDecimals",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "eModeCategoryId",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "borrowCap",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "supplyCap",
              "type": "uint256"
            },
            {
              "internalType": "uint16",
              "name": "eModeLtv",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "eModeLiquidationThreshold",
              "type": "uint16"
            },
            {
              "internalType": "uint16",
              "name": "eModeLiquidationBonus",
              "type": "uint16"
            },
            {
              "internalType": "address",
              "name": "eModePriceSource",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "eModeLabel",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "borrowableInIsolation",
              "type": "bool"
            }
          ],
          "internalType": "struct IUiPoolDataProviderV3.AggregatedReserveData[]",
          "name": "",
          "type": "tuple[]"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "marketReferenceCurrencyUnit",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "marketReferenceCurrencyPriceInUsd",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "networkBaseTokenPriceInUsd",
              "type": "int256"
            },
            {
              "internalType": "uint8",
              "name": "networkBaseTokenPriceDecimals",
              "type": "uint8"
            }
          ],
          "internalType": "struct IUiPoolDataProviderV3.BaseCurrencyInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IPoolAddressesProvider",
          "name": "provider",
          "type": "address"
        }
      ],
      "name": "getReservesList",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IPoolAddressesProvider",
          "name": "provider",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserReservesData",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "underlyingAsset",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "scaledATokenBalance",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "usageAsCollateralEnabledOnUser",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "stableBorrowRate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "scaledVariableDebt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "principalStableDebt",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "stableBorrowLastUpdateTimestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct IUiPoolDataProviderV3.UserReserveData[]",
          "name": "",
          "type": "tuple[]"
        },
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "marketReferenceCurrencyPriceInUsdProxyAggregator",
      "outputs": [
        {
          "internalType": "contract IEACAggregatorProxy",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "networkBaseTokenPriceInUsdProxyAggregator",
      "outputs": [
        {
          "internalType": "contract IEACAggregatorProxy",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
const MORE_MONEY_AVAX = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_roles",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "param",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "ParameterUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "param",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "subject",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "SubjectParameterUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "param",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "subject",
          "type": "address"
        }
      ],
      "name": "SubjectUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_charactersPlayed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_dependsOnCharacters",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_dependsOnRoles",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "_disabledTokenCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_rolesPlayed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "_tokenCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "allEnabledStrategies",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "charactersPlayed",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dependsOnCharacters",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dependsOnRoles",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "destination",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "depositMigrationTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "strat",
          "type": "address"
        }
      ],
      "name": "disableStrategy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "strat",
          "type": "address"
        }
      ],
      "name": "enableStrategy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "strat",
          "type": "address"
        }
      ],
      "name": "enabledStrategy",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "strat",
          "type": "address"
        }
      ],
      "name": "getCurrentStrategy",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "mainCharacterCache",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "legacyStrat",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "replacementStrat",
          "type": "address"
        }
      ],
      "name": "replaceStrategy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "replacementStrategy",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "roleCache",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "roles",
      "outputs": [
        {
          "internalType": "contract Roles",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rolesPlayed",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalDisabledTokenStratRows",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalTokenStratRows",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "role",
          "type": "uint256"
        }
      ],
      "name": "updateMainCharacterCache",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "role",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "contr",
          "type": "address"
        }
      ],
      "name": "updateRoleCache",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "strat",
          "type": "address"
        }
      ],
      "name": "updateTokenCount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "viewAllDisabledTokenStrategyMetadata",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "strategy",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "APF",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalCollateral",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "borrowablePer10k",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "valuePer1e18",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "strategyName",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "tvl",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "harvestBalance2Tally",
              "type": "uint256"
            },
            {
              "internalType": "enum IStrategy.YieldType",
              "name": "yieldType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "stabilityFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "underlyingStrategy",
              "type": "address"
            }
          ],
          "internalType": "struct IStrategy.StrategyMetadata[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "viewAllEnabledStrategyMetadata",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "strategy",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "APF",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalCollateral",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "borrowablePer10k",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "valuePer1e18",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "strategyName",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "tvl",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "harvestBalance2Tally",
              "type": "uint256"
            },
            {
              "internalType": "enum IStrategy.YieldType",
              "name": "yieldType",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "stabilityFee",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "underlyingStrategy",
              "type": "address"
            }
          ],
          "internalType": "struct IStrategy.StrategyMetadata[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

module.exports = {
    AAVE_DATAPROV_ABI_AVAX,
    AAVE_POOL_ABI_AVAX,
    AAVE_UI_POOL_AVAX,
    MORE_MONEY_AVAX
}

