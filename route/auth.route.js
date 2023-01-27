const router = require('express').Router();
const authController = require('../controller/auth.controller');

router.post('/', authController.signUpUser);
router.post('/verify', authController.verifyEmail);

module.exports = router;


// const router = require('express').Router(); 
// router.post('/', async (req, res) => { 
//   res.send('Success');
// });
// module.exports = router;