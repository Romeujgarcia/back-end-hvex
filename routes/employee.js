const { Router} = require('express');
const router = Router();

const {getUsers, createUser, getUserById, UpdateUser, deleteUser  } = require('../controllers/indexcontrollers');

router.get('/users', getUsers);
router.post('/users', getUserById);
router.post('/users', createUser);
router.post('/users/update', UpdateUser);
router.post('/users/delete', deleteUser);


module.exports = router;
