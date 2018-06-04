var express = require('express');
var router = express.Router();

/* GET users listing. */
router.use((request, response, next) => {
    console.log(request.headers)
    next()
})
router.get('/', function(req, res, next) {
  res.json([
      {id: 1, name: 'somebody'},
      {id: 2, name: 'somebody_else'}
  ]);
});

module.exports = router;
