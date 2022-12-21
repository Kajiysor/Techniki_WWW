var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/logout', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie cleared');
});

router.get('/login', (req, res) => {

  var date = new Date();
  date.setTime(Date.now() + 1000 * 120);

  res.cookie('username', 'admin', { secure: true, httpOnly: true, sameSite: 'strict', expires: date });
  res.send('Cookie set');
});

router.get('/unauthorized', (req, res) => {
  res.render('unauthorized', {});
});

module.exports = router;
