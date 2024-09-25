import express from 'express';
import {signUp,login} from '../Controllers/authControllers.js';
const router = express.Router();

router.post('/register',signUp )                                                  
router.post('/login',login )


export default router;