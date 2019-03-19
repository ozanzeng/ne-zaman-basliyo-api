const express = require('express');
const router = express.Router();

// Models
const Schedule = require('../models/Schedule');
const ScheduleDetail = require('../models/ScheduleDetail');

// List all schedule-detail
router.get('/all', (req, res, next) => {
  const promise = ScheduleDetail.find({});

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


// Get schedule detail
router.get('/schedule-detail/:schedule_id', (req, res) => {
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


// Create a new schedule & schedule detail.
router.post('/create', function (req, res, next) {
  const scheuleDetail = new ScheduleDetail(req.body);
  // Collection yoksa oluştur, kontrolü yapılmalı.
  scheuleDetail.save((err, result) => {
    const scheduleTableResultData = {
      category_id: req.body.category_id,
      schedule_detail_id: result._id
    }
    if (err) {
      next({
        message: 'Üzgünüz içerik eklenemedi.',
        code: 9999,
      });
    } else {
      saveSchedue(scheduleTableResultData);
    }
  });

  function saveSchedue(data) {
    const schedule = new Schedule(data);
    
    schedule.save((err, result) => {
      if (err) {
        next({
          message: 'Üzgünüz içerik eklenemedi. 2',
          code: 9999,
        });
      } else {
        response = {
          id: result._id,
          message: "İçerik başarıyla eklendi.",
          code: 2000
        };
      }
      res.json(response);
    });
  }
});

module.exports = router;
