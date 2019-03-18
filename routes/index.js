var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res, next) => {
  const { username, password } = req.body;
  const user = new User({
    username,
    password
  });

  const promise = user.save();
  promise.then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;
