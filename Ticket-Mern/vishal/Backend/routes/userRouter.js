import express from 'express';
const router = express.Router();
import { signUp, signIn} from '../controller/signUp.js'
import { validateSignIn, validateSignUp } from '../middleware/validations.js';

router.post('/signUp',validateSignUp,signUp)
router.post('/signIn',validateSignIn,signIn)

export default router;
