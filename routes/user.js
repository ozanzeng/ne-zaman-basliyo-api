const express = require('express');
const router = express.Router();

// Models
const User = require('../models/User');

// Get: List all user.
router.get('/list/all', (req, res) => {
  const promise = User.find({});

  promise.then(data => {
    if (!data) {
      next({
        message: 'Üzgünüz içerik bulunamadı.',
        code: 4000
      });
    }
    res.json({ status: 1, data});
  }).catch(err => {
    res.json(err);
  });
});

// Delete: Delete a user
router.delete('/delete/:user_id', (req, res, next) => {
  const promise = User.findByIdAndDelete(req.params.user_id);

  promise.then(data => {
    if (!data) {
      next({
        message: 'Üzgünüz içerik bulunamadı.',
        code: 4000
      });
    }
    res.json({ status: 1});
  }).catch(err => {
    res.json(err);
  });
});

// Put: Update a user with new info.
router.put('/update/:user_id', (req, res, next) => {
  const promise = User.findByIdAndUpdate(
    req.params.user_id,
    req.body,
    {new: true}
  );

  promise.then(data => {
    if (!data) {
      next({
        message: 'Üzgünüz içerik bulunamadı.',
        code: 4001
      });
    }
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});

// Post: Create a new user.
router.post('/create', function (req, res, next) {
  const User = new User(req.body);
  const promise = user.save();

  promise.then(() => {
    res.json({ status: 1, message: 'İşlem başarıyla kaydedildi.' });
  }).catch(err => {
    err.json(err);
  });
});

module.exports = router;
