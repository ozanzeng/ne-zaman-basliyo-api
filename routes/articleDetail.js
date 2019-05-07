const express = require('express');
const router = express.Router();

// Models
const ArticleDetail = require('../models/ArticleDetail');

// List all article
router.get('/all', (req, res, next) => {
  const promise = ArticleDetail.find({});

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
router.put('/update/:articleDetail_id', (req, res, next) => {
  const promise = ArticleDetail.findByIdAndUpdate(
    req.params.articleDetail_id,
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
router.delete('/delete/:articleDetail_id', (req, res, next) => {
  const promise = ArticleDetail.findByIdAndRemove(req.params.articleDetail_id);

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