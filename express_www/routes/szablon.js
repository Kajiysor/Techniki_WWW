var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('szablon', { tytul: 'Przykład użycia silnika szablonów PUG', pozdrowienie: 'Hello!' });
});

module.exports = router;
