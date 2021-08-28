const { Router} = require('express');
const router = Router();

const {getUsers, createUser, getUserById, deleteUser, UpdateUser, Buscar, ConsultarBanco} = require('../controllers/indexcontrollers');

router.get('/users', getUsers);
router.post('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', UpdateUser);

module.exports = router;
