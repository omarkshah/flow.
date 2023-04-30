import express from "express";
import { getTasks } from "../controllers/tasks";
import { verifyToken } from "../middleware/auth.js";

const router = express();


//GET POSTS route
router.post("/", verifyToken, getTasks);

export default router