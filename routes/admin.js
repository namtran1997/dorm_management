const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/index', { page: 'login' });
});

module.exports = router;
