const { ethers } = require("ethers");

const AvaxMainet= new ethers.providers.JsonRpcProvider("https://api.avax.network/ext/bc/C/rpc");
const ArbitrumMainet= new ethers.providers.JsonRpcProvider("https://arb1.arbitrum.io/rpc");

module.exports = {
    AvaxMainet,
    ArbitrumMainet,
    };