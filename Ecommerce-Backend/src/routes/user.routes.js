import { Router } from "express";
import { getUserProfile, getAllUsersProfile } from "../controller/user.controller.js";

const router = Router();

router.post('/profile', getUserProfile);
router.get('/', getAllUsersProfile);

export default router;