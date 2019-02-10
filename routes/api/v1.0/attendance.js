const express = require('express');
const server = require('../../../server');
const router = express.Router();

const db = server.db;

router.get('/', function(req, res) {
    res.json({
        "request": "successful"
    });
});

router.post('/', function(req, res) {
    var roll = req.body.Roll;
    var time = req.body.Time;
    res.json({
        "Roll": roll,
        "Time": time,
        "Present": true
    })
})

module.exports = router;