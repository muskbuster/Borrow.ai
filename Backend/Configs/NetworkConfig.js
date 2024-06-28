const { ethers } = require("ethers");

const AvaxMainet = new ethers.JsonRpcProvider(
  "https://api.avax.network/ext/bc/C/rpc"
);
const ArbitrumMainet = new ethers.JsonRpcProvider(
  "https://arb1.arbitrum.io/rpc"
);
const AvaxTestnet = new ethers.JsonRpcProvider(
  "wss://avalanche-fuji-c-chain-rpc.publicnode.com"
);

module.exports = {
  AvaxMainet,
  ArbitrumMainet,
};
