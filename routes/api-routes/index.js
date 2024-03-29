const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/user', userRoutes);
router.user('/thought', thoughtRoutes);

module.exports = router;