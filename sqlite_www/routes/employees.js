var express = require('express');
var sqlite3 = require('sqlite3').verbose();

var router = express.Router();

router.get('/', function (req, res, next) {
    var db = new sqlite3.Database('Chinook_Sqlite.sqlite');

    const query = 'SELECT FirstName, LastName FROM Employee';

    db.all(query, [], (err, rows) => {
        if (err) {
            throw err;
        }

        // console.log(rows);

        res.render('employees', { employees_data: rows});
    });


});

module.exports = router;
