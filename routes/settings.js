const express = require('express');
const router = express.Router();

// Models
const Settings = require('../models/Settings');

// Put: Update a xxxXxxx with new info.
router.put('/update/:xxxXxxx_id', (req, res, next) => {
  const promise = Settings.findByIdAndUpdate(
    req.params.xxxXxxx_id,
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

module.exports = router;
