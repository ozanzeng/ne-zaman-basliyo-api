const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Models
const User = require('../models/User');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* POST register form. */
router.post('/register', (req, res, next) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10).then(function(hash) {
    const user = new User({
      username,
      password: hash
    });
  
    const promise = user.save();
    promise.then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    });
  });
});

/* GET Authentication */
router.post('/', (req, res) => {
  const { username, password } = req.body;

  User.findOne({
    username
  }, (err, user) => {
      if (err)
        throw err;
      
      if (!user) {
        res.json({
          status: false,
          message: 'Giriş hatalı, kullanıcı bulunamadı.'
        });
      } else {
        bcrypt.compare(password, user.password).then(result => {
          if (!result) {
            res.json({
              status: false,
              message: 'Giriş hatalı, şifre hatalı.'
            });
          } else {
            const payload = {
              username
            };
            const token = jwn.sign(payload, req.app.get('api_secret_key'), {
              expiresIn: 720 // 12 saat
            });

            res.json({
              status: true,
              token
            })
          }
        });
      }
  });
});

module.exports = router;
