const express = require("express");
const router = express.Router();
const {
  Aave_PoolDeets,
  Aave_GetPool_tokens,
  Aave_GetreserveExists,
} = require("../Contract_Scripts/Aave_PoolDeets"); // Assuming aaveFunctions.js is the file with your Aave functions
const { fetchTokenDetails } = require("../TokenDetails");
const { callExecuteBorrow, callExecuteDeposit } = require("../Contract_Scripts/ContractCall");

// Route to get pool details
router.get('/pool-details/:asset/:poolAddress', async (req, res) => {
    const { asset, poolAddress } = req.params;
    console.log(asset, poolAddress);
    try {
        const poolDetails = await Aave_PoolDeets(asset, poolAddress);
        console.log(poolDetails);
        res.json({poolDetails});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to get the list of reserve tokens
router.get("/reserves/:poolAddress", async (req, res) => {
  const { poolAddress } = req.params;
  try {
    const tokens = await Aave_GetPool_tokens(poolAddress);

    const tokenDetailsPromises = tokens.map(async (tokenAddress) => {
      const tokenDetails = await fetchTokenDetails(tokenAddress);
      return { [tokenDetails.tokenName]: tokenAddress };
    });

    const tokenDetailsArray = await Promise.all(tokenDetailsPromises);
    const tokenDetailsObject = Object.assign({}, ...tokenDetailsArray);

    res.json(tokenDetailsObject);
  } catch (error) {
    console.error("Error fetching token details:", error);
    res.status(500).json({ error: error.message });
  }
});
// Route to check if a specific asset exists in the reserves list
router.get("/reserve-exists/:asset/:poolAddress", async (req, res) => {
  const { asset, poolAddress } = req.params;
  try {
    const exists = await Aave_GetreserveExists(poolAddress, asset);
    res.json({ exists });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to call executeBorrow
router.post('/execute-borrow', async (req, res) => {
  const { asset, amount, interestRateMode, referralCode, onBehalfOf } = req.body;
  try {
    const receipt = await callExecuteBorrow(asset, amount, interestRateMode, referralCode, onBehalfOf);
    res.json({ receipt });
  } catch (error) {
    console.error("Error executing borrow:", error);
    res.status(500).json({ error: error.message });
  }
});

// Route to call executeDeposit
router.post('/execute-deposit', async (req, res) => {
  const { asset, amount, onBehalfOf, referralCode } = req.body;
  try {
    const receipt = await callExecuteDeposit(asset, amount, onBehalfOf, referralCode);
    res.json({ receipt });
  } catch (error) {
    console.error("Error executing deposit:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/get-pool-details/:asset/:poolAddress", async (req, res) => {
  try {
    const { asset, poolAddress } = req.params;

    console.log(asset, poolAddress);
    const tokens = await Aave_GetPool_tokens(poolAddress);

    const poolDetails = await Aave_PoolDeets(asset, poolAddress);

    const getTokenDetials = await fetchTokenDetails(asset);

    const tokenDetailsPromises = tokens.map(async (tokenAddress) => {
      const tokenDetails = await fetchTokenDetails(tokenAddress);
      return { [tokenDetails.tokenName]: tokenAddress };
    });

    const tokenDetailsArray = await Promise.all(tokenDetailsPromises);
    const tokenDetailsObject = Object.assign({}, ...tokenDetailsArray);

    const formattedResponse = {
      asset: getTokenDetials.tokenName,
      tokens: tokenDetailsObject,
      liquidityIndex: getTokenDetials.convertToActual(poolDetails[1]),
      currentLiquidityRate: getTokenDetials.convertToActual(poolDetails[2]),
      currentStableBorrowRate: getTokenDetials.convertToActual(poolDetails[5]),
      accruedToTreasury: getTokenDetials.convertToActual(poolDetails[12]),
    };

    console.log({
      liquidityIndex: getTokenDetials.convertToActual(poolDetails[1]),
      currentLiquidityRate: getTokenDetials.convertToActual(poolDetails[2]),
      currentStableBorrowRate: getTokenDetials.convertToActual(poolDetails[5]),
      accruedToTreasury: getTokenDetials.convertToActual(poolDetails[12]),
    });

    res.status(200).json(formattedResponse);
  } catch (error) {
    console.error("Error fetching pool details:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching pool details." });
  }
});

module.exports = router;


/** URL: http://localhost:3000/api/get-pool-details/
 * Body : {
    "poolAddress" : "0x794a61358D6845594F94dc1DB02A252b5b4814aD",
    "asset" : "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70"
}
 * Response : {
    "tokens": [
        "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
        "0x5947BB275c521040051D82396192181b413227A3",
        "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
        "0x50b7545627a5162F82A992c33b87aDc75187B218",
        "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
        "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
        "0x63a72806098Bd3D9520cC43356dD78afe5D386D9",
        "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
        "0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE",
        "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
        "0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b",
        "0x152b9d0FdC40C096757F570A51E494bd4b943E50"
    ],
    "liquidityIndex": "1090979290.296268413862856818",
    "currentLiquidityRate": "59883465.655669980657547071",
    "currentStableBorrowRate": "104964965.211418744005783944",
    "accruedToTreasury": "1371.173455786437740108"
}
 */

/**
 * URL: http://localhost:3000/api/reserves/0x794a61358D6845594F94dc1DB02A252b5b4814aD
 * Response : {
    "Dai Stablecoin": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    "Chainlink Token": "0x5947BB275c521040051D82396192181b413227A3",
    "USD Coin": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    "Wrapped BTC": "0x50b7545627a5162F82A992c33b87aDc75187B218",
    "Wrapped Ether": "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
    "TetherToken": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
    "Aave Token": "0x63a72806098Bd3D9520cC43356dD78afe5D386D9",
    "Wrapped AVAX": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    "Staked AVAX": "0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE",
    "Frax": "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
    "Mai Stablecoin": "0x5c49b268c9841AFF1Cc3B0a418ff5c3442eE3F3b",
    "Bitcoin": "0x152b9d0FdC40C096757F570A51E494bd4b943E50"
}
 */