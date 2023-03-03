const express = require('express');
const router = express.Router();

 const userImage = require('../controllers/imgController')
router.post('/img',userImage )



module.exports = router ;