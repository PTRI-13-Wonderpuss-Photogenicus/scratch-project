const express = require('express');

const router = express.Router();

const authController = require ('../Controllers/authController.js');
const userController = require ('../Controllers/User.js');


router.get('/', 
// authController.verifyToken, 
// userController.findUser, 
(req, res) => {
  //should contain resulting data from the document matching the token.
  // console.log(req.headers, ' in dashboardRoute');
  console.log(req.cookies);
  return res.status(200).json(res.locals);
});

module.exports = router;