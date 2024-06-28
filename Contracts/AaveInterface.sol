// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ILendingPool {
    function borrow(
        address asset,
        uint256 amount,
        uint256 interestRateMode,
        uint16 referralCode,
        address onBehalfOf
    ) external;

    function deposit(
        address asset,
        uint256 amount,
        address onBehalfOf,
        uint16 referralCode
    ) external;
}

contract BorrowerDepositor {
    address lendingPoolAddress;
    
    constructor(address _lendingPoolAddress) {
        lendingPoolAddress = _lendingPoolAddress;
    }

    function executeBorrow(
        address asset,
        uint256 amount,
        uint256 interestRateMode,
        uint16 referralCode,
        address onBehalfOf
    ) external {
        ILendingPool(lendingPoolAddress).borrow(asset, amount, interestRateMode, referralCode, onBehalfOf);
    }

    function executeDeposit(
        address asset,
        uint256 amount,
        address onBehalfOf,
        uint16 referralCode
    ) external {
        ILendingPool(lendingPoolAddress).deposit(asset, amount, onBehalfOf, referralCode);
    }
}
