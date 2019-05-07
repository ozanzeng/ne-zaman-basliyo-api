const express = require('express');
const router = express.Router();

// Models
const MenuPosition = require('../models/MenuPosition');

// Get: List all menu position.
router.get('/list/all', (req, res) => {
  const promise = MenuPosition.find({});

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

// Delete: Delete a menu position
router.delete('/delete/:menuPosition_id', (req, res, next) => {
  const promise = MenuPosition.findByIdAndDelete(req.params.menuPosition_id);

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

// Put: Update a menu position with new info.
router.put('/update/:menuPosition_id', (req, res, next) => {
  const promise = MenuPosition.findByIdAndUpdate(
    req.params.menuPosition_id,
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

// Post: Create a new menu position.
router.post('/create', function (req, res, next) {
  const menuPosition = new MenuPosition(req.body);
  const promise = menuPosition.save();

  promise.then(() => {
    res.json({ status: 1, message: 'İşlem başarıyla kaydedildi.' });
  }).catch(err => {
    err.json(err);
  });
});

module.exports = router;
