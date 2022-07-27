const express = require('express');
const router = express.Router();

const controller= require('../controllers/bank_transaction');

/* GET users listing.  /users/ */
router.get('/', controller.list);

router.get('/:id', controller.index);

router.post('/', controller.create);

router.delete('/:id', controller.destroy);

module.exports = router;