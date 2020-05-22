const express = require('express');
const router = express.Router();
const db = require('../../db');


router.get('/', async (req, res) => {
    try {
        res.json(await db.getHubs())
    } catch(err) {
        res.json({error: { message: err.message, stack: err.stack }})
    }
})

router.post('/', async (req, res) => {
    try {
        res.json();
    } catch(err) {
        res.json({error: { message: err.message, stack: err.stack }})
    }
})

module.exports = router;