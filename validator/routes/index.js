var express = require('express');
var router = express.Router();
router.get('/status', function (req, res, next) {
  res.send("Server is up");
});
module.exports = router;
