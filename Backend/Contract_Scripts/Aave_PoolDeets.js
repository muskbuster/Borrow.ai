const ethers = require('ethers');
const { AvaxMainet } = require('../Configs/NetworkConfig');
const { AAVE_V3, AAVE_DATAPROV_ABI_AVAX } = require('../Configs/ABI');

// Function to get pool details for a specific asset
const Aave_PoolDeets = async (asset, poolAddress) => {
    const contract = new ethers.Contract(poolAddress, AAVE_V3, AvaxMainet);
    let poolDetails = await contract.getReserveData(asset);
    console.log(poolDetails);
    return poolDetails;
}

// Function to get the list of reserve tokens
const Aave_GetPool_tokens = async (poolAddress) => {
    const contract = new ethers.Contract(poolAddress, AAVE_V3, AvaxMainet);
    let tokens = await contract.getReservesList();

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

//need route to return all assets along with reserve data
//liquidityIndex,currentLiquidityRate,currentStableBorrowRate,accruedToTreasury
//pool address 0x794a61358D6845594F94dc1DB02A252b5b4814aD
module.exports = {
    Aave_PoolDeets,
    Aave_GetPool_tokens,
    Aave_GetreserveExists
}
