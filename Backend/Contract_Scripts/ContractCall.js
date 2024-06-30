const { ethers } = require("ethers");
const { AAVE_V3, CallerContract } = require('../Configs/ABI');
const{AvaxTestnet}=require('../Configs/NetworkConfig');
require('dotenv').config();

const contract= new ethers.Contract("0x64d00062F6786273bD5dDFB8168bC3Da386e13FD",CallerContract,AvaxTestnet);
const signer= ethers.Wallet(process.env.PRIVATE_KEY,AvaxTestnet);
console.log(signer.toString());
async function callExecuteBorrow(asset, amount, interestRateMode, referralCode, onBehalfOf) {
    const tx = await contract.executeBorrow(asset, amount, interestRateMode, referralCode, onBehalfOf);
    console.log("Transaction hash:", tx.hash);
    const receipt = await tx.wait();
    console.log("Transaction was mined in block:", receipt.blockNumber);
}

// Function to call executeDeposit
async function callExecuteDeposit(asset, amount, onBehalfOf, referralCode) {
    const tx = await contract.executeDeposit(asset, amount, onBehalfOf, referralCode);
    console.log("Transaction hash:", tx.hash);
    const receipt = await tx.wait();
    console.log("Transaction was mined in block:", receipt.blockNumber);
}

modules.export =
{
    callExecuteBorrow,
    callExecuteDeposit
}