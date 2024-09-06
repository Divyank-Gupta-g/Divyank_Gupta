const express = require('express');
const { sendEmailController } = require('../Controllers/PortfolioController');

// Router object
const router = express.Router();

//routes
router.post('/sendEmail', sendEmailController)

// export
module.exports = router;