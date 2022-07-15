const express = require('express');
const path = require('path');

const router = express.Router();

const publicDir = path.resolve(
  path.join(__dirname, '../../../frontend/build'),
);

router.use(express.static(publicDir));

router.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

module.exports = router;
