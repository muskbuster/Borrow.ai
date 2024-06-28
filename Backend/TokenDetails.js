const { ethers } = require("ethers");
const { AvaxMainet } = require("./Configs/NetworkConfig");

class TokenDetails {
  contract;
  tokenName;
  symbol;
  total_supply;
  decimals;

  getUnits = (unit) => {
    const units = {
      0: "wei",
      3: "kwei",
      6: "mwei",
      9: "gwei",
      12: "szabo",
      15: "finney",
      18: "ether",
    };
    return units[unit];
  };

  constructor(contract, tokenName, decimals) {
    this.contract = contract;
    this.tokenName = tokenName;
    // this.symbol = symbol;
    // this.total_supply = total_supply;
    this.decimals = decimals;
  }

  getAddress = () => {
    return this.contract.address;
  };

  convertToDecimals = (amount) => {
    return amount / 10 ** this.decimals;
  };

  convertToRaw = (amount) => {
    return ethers.parseUnits(amount.toString(), this.getUnits(this.decimals));
  };

  fetchBalanceOf = async (address) => {
    var raw_amount = await this.contract.methods.balanceOf(address).call();
    return this.convertToDecimals(raw_amount);
  };

  convertToActual = (amount) => {
    return ethers.formatUnits(amount, this.decimals);
  }
}

// /**
//  *
//  * @param {WEB3} web3 web3 instance
//  * @param {Address} address token address
//  * @returns {TokenDetails} token details
//  */

const fetchTokenDetails = async (address) => {
  // Constructing the ERC contract of a token
  const erc20 = new ethers.Contract(
    address,
    require("./abi/erc20.json"),
    AvaxMainet
  );

  const tokenName = await erc20.name();

  const symbol = await erc20.symbol();

  const decimals = Number(await erc20.decimals());

  const supply = await erc20.totalSupply();

  console.log(
    tokenName,
    symbol,
    decimals,
    supply,
    "--------------------------------"
  );

  return new TokenDetails(erc20, tokenName, decimals);
};

module.exports = { fetchTokenDetails, TokenDetails };
