const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Definir rutas CRUD para usuarios
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.get('/:username/:password', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
