const express = require('express');
const router = express.Router();
const db = require('../../db');


router.get('/', async (req, res) => {
    try {
        res.json(await db.getPosts(req.query))
    } catch(err) {
        res.json({error: { message: err.message, stack: err.stack }})
    }
})

router.post('/', async (req, res) => {
    try {
        res.json(await db.createNewPost(req.body));
    } catch(err) {
        res.json({error: { message: err.message, stack: err.stack }})
    }
})

router.get('/search', async (req, res) => {
    try {
        if(req.query.title) {
            req.query.title = new RegExp(req.query.title, 'i')
        }
        res.json(await db.getPosts(req.query));
    } catch(err) {
        res.json({error: { message: err.message, stack: err.stack }})
    }
})

module.exports = router;