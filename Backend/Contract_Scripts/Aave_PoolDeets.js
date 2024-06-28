const ethers = require('ethers');
const { AvaxMainet } = require('../Configs/NetworkConfig');
const { AAVE_V3, AAVE_DATAPROV_ABI_AVAX } = require('../Configs/ABI');

// Function to get pool details for a specific asset
const Aave_PoolDeets = async (asset, poolAddress) => {
    const contract = new ethers.Contract(poolAddress, AAVE_V3, AvaxMainet);
    let poolDetails = await contract.getReserveData(asset);
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

module.exports = {
    Aave_PoolDeets,
    Aave_GetPool_tokens,
    Aave_GetreserveExists
}
