const express = require('express');
const router = express.Router();

// Models
const Category = require('../models/Category');

// Get: List all category.
router.get('/', (req, res) => {
  const promise = Category.find({});

  promise.then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});

// Post: Create a new category.
router.post('/', function (req, res, next) {
  const category = new Category(req.body);
  const promise = category.save();

  promise.then(() => {
    res.json({ status: 1 });
  }).catch(err => {
    err.json(err);
  });
});

// Delete: Delete a category
router.delete(':/category_id', (req, res, next) => {
  const promise = Category.findByIdAndDelete(req.params.category_id);

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

// Put: Update a category with new info.
router.put('/:category_id', (req, res, next) => {
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

module.exports = router;