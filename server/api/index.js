const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/mentees', require('./mentees'));
router.use('/questions', require('./questions'));
router.use('/answers', require('./answers'));
router.use('/reviews', require('./reviews'));
router.use('/cohorts', require('./cohorts'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
