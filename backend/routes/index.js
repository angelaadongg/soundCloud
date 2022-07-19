// backend/routes/index.js
const express = require('express');
const router = express.Router();
const sessionRouter = require('./users.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");

router.use('/api', apiRouter);

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
