const express = require('express');
const router = express.Router();

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
        "Present": true
    })
})

module.exports = router;