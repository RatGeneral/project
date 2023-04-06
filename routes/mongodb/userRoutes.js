const express = require('express');
const router = express.Router();
const userController = require('../../controllers/mongodb/userController');

router.post('/register', userController.registerUser);
router.get('/', userController.getUsers);
// router.get('/', (req, res) => {
//     res.send('This is the home page');
//   });

// ...другие роуты

module.exports = router;