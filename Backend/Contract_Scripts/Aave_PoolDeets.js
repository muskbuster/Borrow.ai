const ethers = require('ethers');
const { AvaxMainet,BaseMainet,ModeMainet} = require('../Configs/NetworkConfig');
const { AAVE_V3, AAVE_DATAPROV_ABI_AVAX,BaseABI, ModeABI } = require('../Configs/ABI');

// Function to get pool details for a specific asset
const Aave_PoolDeets = async (asset, poolAddress) => {
    const contract = new ethers.Contract(poolAddress, BaseABI, BaseMainet);
    let poolDetails = await contract.getReserveData(asset);

    const reserveData = {
        liquidityIndex: poolDetails[0].toString(),
        currentLiquidityRate: poolDetails[1].toString(),
        variableBorrowIndex: poolDetails[2].toString(),
        currentVariableBorrowRate: poolDetails[3].toString(),
        currentStableBorrowRate: poolDetails[4].toString(),
        lastUpdateTimestamp: poolDetails[5].toString(),
        accruedToTreasuryScaled: poolDetails[6].toString(),
        unbacked: poolDetails[7].toString(),
        totalAToken: poolDetails[8].toString(),
        totalStableDebt: poolDetails[9].toString(),
        totalVariableDebt: poolDetails[10].toString(),
        averageStableBorrowRate: poolDetails[11].toString(),
    };

    console.log(reserveData);
    return reserveData;
}
const Aave_PoolDeets_Mode = async (asset, poolAddress) => {
    const contract = new ethers.Contract(poolAddress, ModeABI, ModeMainet);
    let poolDetails = await contract.getReserveData(asset);

    const reserveData = {
        liquidityIndex: poolDetails[0].toString(),
        currentLiquidityRate: poolDetails[1].toString(),
        variableBorrowIndex: poolDetails[2].toString(),
        currentVariableBorrowRate: poolDetails[3].toString(),
        currentStableBorrowRate: poolDetails[4].toString(),
        lastUpdateTimestamp: poolDetails[5].toString(),
        accruedToTreasuryScaled: poolDetails[6].toString(),
        unbacked: poolDetails[7].toString(),
        totalAToken: poolDetails[8].toString(),
        totalStableDebt: poolDetails[9].toString(),
        totalVariableDebt: poolDetails[10].toString(),
        averageStableBorrowRate: poolDetails[11].toString(),
    };

    console.log(reserveData);
    return reserveData;
}



// Function to get the list of reserve tokens
const Aave_GetPool_tokens = async (poolAddress) => {
    const contract = new ethers.Contract(poolAddress, BaseABI, BaseMainet);
    let tokens = await contract.getAllReservesTokens();

    return tokens;
}
const Aave_GetPool_tokens_Mode = async (poolAddress) => {
    const contract = new ethers.Contract(poolAddress, ModeABI, ModeMainet);
    let tokens = await contract.getAllReservesTokens();

    return tokens;
}


// Function to check if a specific asset exists in the reserves list
const Aave_GetreserveExists = async (poolAddress, asset) => {
    const tokens = await Aave_GetPool_tokens(poolAddress);
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === asset) {
            return true;
        }
    }
    return false;
}
const Aave_GetreserveExists_Mode = async (poolAddress, asset) => {
    const tokens = await Aave_GetPool_tokens_Mode(poolAddress);
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === asset) {
            return true;
        }
    }
    return false;
}

//need route to return all assets along with reserve data
//liquidityIndex,currentLiquidityRate,currentStableBorrowRate,accruedToTreasury
//Avax pool address 0x794a61358D6845594F94dc1DB02A252b5b4814aD
//mode pool 0x5eB352D89b248E2E572115634c9d4A4B6d629f5a
// Base pool 0x793177a6Cf520C7fE5B2E45660EBB48132184BBC
module.exports = {
    Aave_PoolDeets,
    Aave_GetPool_tokens,
    Aave_GetreserveExists,
    Aave_PoolDeets_Mode,
    Aave_GetPool_tokens_Mode,
    Aave_GetreserveExists_Mode,

}
