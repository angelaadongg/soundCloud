const router = require('express').Router();
const { restoreUser } = require("../../utils/auth.js");

const sessionRouter = require('./api/users.js');
const usersRouter = require('./api/users.js');


router.use('/api', apiRouter);

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

module.exports = router;
