const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const menuController = require('../controller/menuController');

router.get('/menu', menuController.getAllMenu);
router.get('/order', orderController.getAllOrder);
router.get('/order/:id', orderController.getOrderById);
router.post('/order', orderController.addOrder);
router.delete('/order/:id', orderController.deleteOrder);

module.exports = router;