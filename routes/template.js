const express = require('express');
const router = express.Router();

// Models
const Template = require('../models/Template');

// List all template
router.get('/all', (req, res, next) => {
  const promise = Template.find({});

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

// Update a template with new info.
router.put('/update/:template_id', (req, res, next) => {
  const promise = Template.findByIdAndUpdate(
    req.params.template_id,
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

// Delete a template
router.delete('/delete/:template_id', (req, res, next) => {
  const promise = Template.findByIdAndRemove(req.params.template_id);

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