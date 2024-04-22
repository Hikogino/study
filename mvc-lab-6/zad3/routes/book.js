const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/:id', bookController.getBookDetails);
router.post('/borrow/:id', bookController.postBookBorrow);
router.post('/return/:id', bookController.postBookReturn);
router.get('/borrow/success', bookController.getBookBorrowSuccess);
router.get('/return/success', bookController.getBookReturnSuccess);

module.exports = router;

