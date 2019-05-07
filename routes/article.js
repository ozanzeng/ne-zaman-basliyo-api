const express = require('express');
const router = express.Router();

// Models
const Article = require('../models/Article');

// List all article
router.get('/all', (req, res, next) => {
  const promise = Article.find({});

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

// Update a article with new info.
router.put('/update/:article_id', (req, res, next) => {
  const promise = Article.findByIdAndUpdate(
    req.params.article_id,
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

// Delete a article
router.delete('/delete/:article_id', (req, res, next) => {
  const promise = Article.findByIdAndRemove(req.params.article_id);

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