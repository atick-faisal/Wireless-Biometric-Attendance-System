///////////////////////////////////////////////////////
//---------------Atick Faisal, 2019------------------//
///////////////////////////////////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const attendance = require('./routes/api/v1.0/attendance');

const db = mysql.createConnection({
    user: 'root',
    password: 'Epsilon314',
    database: 'attendance'
});

db.connect(function(err) {
    if(err) {
        throw err;
    } else {
        console.log('Database Connected...');
    }
})

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use('/api/v1.0/attendance', attendance);
app.listen(port, function() {
    console.log(`Server started at ${port}`);
});

module.exports = db;