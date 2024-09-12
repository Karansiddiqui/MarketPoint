import {Router} from 'express';
import {register, login } from '../controller/auth.controller.js';

const router = Router();


router.post('/signup', register);
router.post('/signin', login);


export default router;