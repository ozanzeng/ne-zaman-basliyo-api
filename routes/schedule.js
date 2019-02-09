const express = require('express');
const router = express.Router();

// Models
const Schedule = require('../models/Schedule');

// List all schedule
router.get('/all', (req, res, next) => {
  const promise = Schedule.find({});

  promise.then(data => {
    if (!data) {
      next({
        message: 'Üzgünüz içerik bulunamadı.',
        code: 4000,
      });
    }
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});

// Top x list
router.get('/top/:top_number', (req, res) => {
  const promise = Schedule.find({}).limit(req.params.schedule_id).sort({ viewCount: -1 });

  promise.then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});

// Update a category with new info.
router.put('/update/:schedule_id', (req, res, next) => {
  const promise = Schedule.findByIdAndUpdate(
    req.params.schedule_id,
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

// Delete a category
router.delete('/delete/:category_id', (req, res, next) => {
  const promise = Schedule.findByIdAndDelete(req.params.category_id);

  promise.then(data => {
    if (!data) {
      next({
        message: 'Üzgünüz içerik bulunamadı.',
        code: 4003
      });
    }
    res.json({ status: 1});
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;