const router = require('express').Router();
const users = require('./usersController')


router.get('/get/all',users.getAllUsers);
router.delete('/delete/:id',users.deleteUser);
router.put('/put/:id',users.updateUser);
 router.get('/get/one/:id',users.getUserById);
  

module.exports = router;
 

