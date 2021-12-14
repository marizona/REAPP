const express = require ('express');
const router = express.Router();
const {signinValidator, validatorResult, signupValidator} = require ('../middleware/validator');
const{signinController, signupController}= require ('../controllers/auth.js');


router.post('/signin', signinValidator, validatorResult, signinController);
router.post('/signup', signupValidator, validatorResult, signupController);


module.exports= router;