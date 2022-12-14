var express = require('express');
var sqlite3 = require('sqlite3').verbose();

var router = express.Router();

// GET /albums/search
router.get('/search', function (req, res, next) {
    res.render('albums_search', {});

});

router.post('/list', (req, res) => {
    var artist_name = req.body.artist;
    const query = `SELECT Title FROM Album WHERE ArtistId=
    (SELECT ArtistId FROM Artist WHERE Artist.Name="${artist_name}");`;

    var db = new sqlite3.Database('Chinook_Sqlite.sqlite');

    db.all(query, [], (err, rows) => {
        if (err) {
            throw err;
        }

        res.render('albums_list', { albums_data: rows, artist: artist_name });
    });
});


module.exports = router;
