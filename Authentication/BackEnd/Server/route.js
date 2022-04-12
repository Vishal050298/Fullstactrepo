import express from 'express';
import { signUp } from '../Controller/usercontroller.js';
import { signIn } from '../Controller/usercontroller.js';
import { show } from '../Controller/usercontroller.js';

const router = express.Router();

router.post('/api/auth/signup',signUp);
router.post('/api/auth/signin',signIn);
router.get('/show',show);


export default router;