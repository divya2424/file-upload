var express = require('express'); // Making Object Of Express
var router = express.Router(); // Using Routing Function of Express
var userController = require('../controllers/file'); //Making Object of Controllers


router 
  .post('/postFile',userController.postFile)
  .get('/getFiles',userController.getFiles)
  .post('/removeFile',userController.removeFile);


module.exports = router; // Exporting router