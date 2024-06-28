const express = require('express');
const router = express.Router();
const { Aave_PoolDeets, Aave_GetPool_tokens, Aave_GetreserveExists } = require('../Contract_Scripts/Aave_PoolDeets'); // Assuming aaveFunctions.js is the file with your Aave functions

// Route to get pool details
router.get('/pool-details/:asset/:poolAddress', async (req, res) => {
    const { asset, poolAddress } = req.params;
    try {
        const poolDetails = await Aave_PoolDeets(asset, poolAddress);
        res.json(poolDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to get the list of reserve tokens
router.get('/reserves/:poolAddress', async (req, res) => {
    const { poolAddress } = req.params;
    try {
        const tokens = await Aave_GetPool_tokens(poolAddress);
        res.json(tokens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to check if a specific asset exists in the reserves list
router.get('/reserve-exists/:asset/:poolAddress', async (req, res) => {
    const { asset, poolAddress } = req.params;
    try {
        const exists = await Aave_GetreserveExists(poolAddress, asset);
        res.json({ exists });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
 