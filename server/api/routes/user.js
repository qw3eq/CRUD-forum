const express = require('express');
const router = express.Router();
const db = require('../../db');


router.get('/', async (req, res) => {
    try {
        const users = await db.getUsers(req.query);
        res.json(users)
    } catch(err) {
        res.json({error: { message: err.message, stack: err.stack }})
    }
})

router.post('/', async (req, res) => {
    try {
        res.json(await db.createNewUser(req.body));
    } catch(err) {
        res.json({error: { message: err.message, stack: err.stack }})
    }
})

module.exports = router;