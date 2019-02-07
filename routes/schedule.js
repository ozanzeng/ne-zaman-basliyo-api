const express = require('express');
const router = express.Router();

// Models
const Schedule = require('../models/Schedule');


// List all schedule
router.get('/', (req, res) => {
  const promise = Schedule.find({});

  promise.then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});

// Get the top10 schedules.
router.get('/top10', (req, res) => {
  const promise = Schedule.find({}).limit(10).sort({viewCount: -1});

  promise.then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});


// Get a schedule 
router.get('/:schedule_id', (req, res, next) => {
  const promise = Schedule.findById(req.params.schedule_id);

  promise.then(data => {
    if (!data) {
      next({
        message: 'Üzgünüz, içerik bulunamadı.',
        code: 4000
      });
    }
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});

// Delete a schedule
router.delete('/:schedule_id', (req, res, next) => {
  const promise = Schedule.findByIdAndDelete(req.params.schedule_id);

  promise.then(data => {
    if (!data) {
      next({
        message: 'Üzgünüz, içerik bulunamadı.',
        code: 4000
      });
    }
    res.json({ status: 1});
  }).catch(err => {
    res.json(err);
  });
});


// Update a schedule with new info.
router.put('/:schedule_id', (req, res, next) => {
  const promise = Schedule.findByIdAndUpdate(
    req.params.schedule_id,
    req.body,
    {new: true}
  );

  promise.then(data => {
    if (!data) {
      next({
        message: 'Üzgünüz, içerik bulunamadı.',
        code: 4001
      });
    }
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});


// Cerate a new schedule.
router.post('/', function (req, res, next) {
  const { title, description, image, startDate, createAt, pageUrl, updateAt, viewCount, isActive } = req.body;
  const schedule = new Schedule(req.body);
  const promise = schedule.save();

  promise.then(() => {
    res.json({ status: 1 });
  }).catch(err => {
    res.json(err);
  });
});

// Get the top10 schedules.
router.get('/between/:start_count/:end_count', (req, res) => {
  const { start_count, end_count } = req.params;
  const promise = Movie.find( 
    {
      year: { '$gte': parseInt(start_count), '$lte': parseInt(end_count) }
    }
  )

  promise.then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;
