const ethers = require('ethers');
const { AvaxMainet, ArbitrumMainet } = require('../Configs/NetworkConfig');
const {AAVE_POOL_ABI_AVAX,AAVE_UI_POOL_AVAX,AAVE_DATAPROV_ABI_AVAX}= require('../Configs/ABI');

const Aave_PoolDeets = async (asset, poolAddress) => {
   const contract= new ethers.Contract(poolAddress, AAVE_DATAPROV_ABI_AVAX, AvaxMainet);
    let poolDetails = await contract.getReserveData(asset);
   const APY=poolDetails.liquidityIndex;
   const Interest=poolDetails.liquidityIndex;
    return poolDetails;
}
const Aave_GetPool_tokens = async () => {
    const contract = new ethers.Contract((poolAddress,AAVE_DATAPROV_ABI_AVAX,AvaxMainet));
    let tokens = await contract.getReservesList();
    return tokens;
}
const Aave_GetreserveExists = async (asset) => {
    const contract = new ethers.Contract((poolAddress,AAVE_DATAPROV_ABI_AVAX,AvaxMainet));
    let tokens = await contract.getReservesList();
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === asset) {
            return true;
        }
    }
}

module.exports = {
    Aave_PoolDeets,
    Aave_GetPool_tokens,
    Aave_GetreserveExists
}