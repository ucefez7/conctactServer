const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactsController');
const userAuthMiddleware = require('../middlewares/userAuthMiddleware');



router.post('/sync-contacts',userAuthMiddleware, contactController.syncContacts);

router.get('/search', userAuthMiddleware, contactController.searchByNameOrPhoneNumber)

module.exports = router;
