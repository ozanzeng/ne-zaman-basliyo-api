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
        message: 'Üzgünüz içerik eklenemedi.',
        code: 9999,
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
    if (!data) {
      next({
        message: 'Üzgünüz içerik bulunamadı.',
        code: 9999,
      });
    }
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});

// Update a schedule with new info.
router.put('/update/:schedule_id', (req, res, next) => {
  const promise = Schedule.findByIdAndUpdate(
    req.params.schedule_id,
    req.body,
    {new: true}
  );

  promise.then(data => {
    if (!data) {
      next({
        message: 'Üzgünüz içerik güncellenemedi.',
        code: 9999,
      });
    } else {
      response = { id: result._id, message: "İçerik başarıyla güncellendi.", code: 2000 };
    }
    res.json(response);
  }).catch(err => {
    res.json(err);
  });
});

// Delete a schedule
router.delete('/delete/:schedule_id', (req, res, next) => {
  const promise = Schedule.findByIdAndRemove(req.params.schedule_id);

  promise.then(data => {
    if (!data) {
      next({
        message: 'Üzgünüz içerik silinemedi.',
        code: 9999,
      });
    } else {
      response = { message: "İçerik başarıyla silindi.", code: 2000 };
    }
    res.json(response);
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;