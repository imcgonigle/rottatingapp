var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/1', function(req, res, next) {
  res.render('index', { pictureid: 1, src: '/images/boxing.jpg', caption: 'Float like a butterfly sting like a bee!' });
});

router.get('/2', function(req, res, next) {
  res.render('index', { pictureid: 2, src: '/images/hockey-fight.jpg', caption: 'You don\'t have to be crazy to play goal, but it helps.' })
})

router.get('/3', function(req, res, next) {
  res.render('index', { pictureid: 3, src: '/images/007-punch.png', caption: 'WHAPOWWW!!!!' });
});

router.get('/4', function(req, res, next) {
  res.render('index', { pictureid: 4, src: '/images/ufc-punch.jpg', caption: 'I fear no man. If you breathe oxygen, I do not fear you.' })
})

module.exports = router;
