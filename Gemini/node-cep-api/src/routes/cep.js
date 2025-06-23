const express = require('express');
const router = express.Router();
const viacepService = require('../services/viacepService');

// Route to get address by CEP
router.get('/:cep', async (req, res) => {
    const cep = req.params.cep;

    try {
        const address = await viacepService.getAddressByCep(cep);
        if (address) {
            res.json(address);
        } else {
            res.status(404).json({ message: 'CEP not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching address', error: error.message });
    }
});

module.exports = router;