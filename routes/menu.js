const express = require('express');
const router = express.Router();

// Models
const Menu = require('../models/Menu');

// Get: List all menu.
router.get('/list/all', (req, res) => {
  const promise = Menu.find({});

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

// Delete: Delete a menu
router.delete('/delete/:menu_id', (req, res, next) => {
  const promise = Menu.findByIdAndDelete(req.params.menu_id);

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

// Put: Update a menu with new info.
router.put('/update/:menu_id', (req, res, next) => {
  const promise = Menu.findByIdAndUpdate(
    req.params.menu_id,
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

// Post: Create a new menu.
router.post('/create', function (req, res, next) {
  const menu = new Menu(req.body);
  const promise = menu.save();

  promise.then(() => {
    res.json({ status: 1, message: 'İşlem başarıyla kaydedildi.' });
  }).catch(err => {
    err.json(err);
  });
});

module.exports = router;
